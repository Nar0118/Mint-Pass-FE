// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "./interfaces/IERC20.sol";

contract Fundraising {
    bytes32 public name;
    bytes32 public roundId;
    uint256 public minAmount;
    uint256 public maxAmount;
    uint256 public capacity;
    // @dev reflects how many percent of total fee is deducted
    // 1% x 100 F.E. 300 = 3%
    uint256 public fee;
    // @dev reflects how many percent is sent to referral from total fee
    // 1% x 100 F.E. 300 = 3%
    uint256 public referrerFee;
    address public receiverWallet;
    address public feeWallet;
    address private token;

    address public owner;
    bool public claim = false;

    mapping(address => uint256) private userFundsData;
    mapping(address => bool) private isFunder;
    address[] private funders;

    struct funderStruct {
        address funder;
        uint256 amount;
    }

    /// @notice Emitted when a user deposited funds
    /// @param sender - Address of user(sender)
    /// @param amount - Amount that user deposited
    event LogDepositedFunds(address sender, uint256 amount);

    /// @notice Emitted when a owner triggers claim
    /// @param receiver - Address of receiver
    /// @param amount - Amount of withdraw
    event LogClaimFunds(address receiver, uint256 amount);

    /// @notice Emitted when a owner changes claim state
    /// @param claim - New claim state
    event LogSetClaim(bool claim);

    /// @notice Emitted when a owner changes fee wallet
    /// @param feeWallet - New fee wallet
    event LogSetFeeWallet(address feeWallet);

    /// @notice Emitted when a owner changes minimal deposit amount
    /// @param amount - New minimal deposit amount
    event LogSetMinimalAmount(uint256 amount);

    modifier onlyOwner {
        require(msg.sender == owner, "You are not the owner");
        _;
    }

    constructor(
        bytes32 _name,
        bytes32 _roundId,
        uint256 _minAmount,
        uint256 _maxAmount,
        uint256 _capacity,
        uint256 _fee,
        uint256 _referrerFee,
        address _receiverWallet,
        address _feeWallet,
        address _token,
        address _owner
    ) {
        require(_name != "", "Name can not be empty");
        require(_roundId != "", "Round ID can not be empty");
        require(_minAmount < _maxAmount, "Minimal amount can't be greater than maximal");
        require(_capacity > 0, "Capacity amount should be a positive number");
        require(_fee < 10000, "Fee should be less than 100%");
        require(_referrerFee < 10000, "Fee should be less than 100%");
        require(_receiverWallet != address(0), "User(receiverWallet) doesn't exists");
        require(_feeWallet != address(0), "User(feeWllet) doesn't exists");
        require(_token != address(0), "Token doesn't exists");

        name = _name;
        roundId = _roundId;
        minAmount = _minAmount;
        maxAmount = _maxAmount;
        capacity = _capacity;
        fee = _fee;
        referrerFee = _referrerFee;
        receiverWallet = _receiverWallet;
        feeWallet = _feeWallet;
        token = _token;
        owner = _owner;
    }

    function init(address _token) public {
      token = _token;
    }

    /// @notice Deposit funds for user
    /// @param _amount - Amount that user deposited
    function deposit(uint256 _amount, address _referrerWallet) external {
        uint256 totalFunds = IERC20(token).balanceOf(address(this));

        require(IERC20(token).balanceOf(msg.sender) >= _amount, "Insufficient balance");
        require(IERC20(token).allowance(msg.sender, address(this)) >= _amount, "Insufficient allowance");
        require(_amount + totalFunds <= capacity, "The capacity is full");
        require(
            _amount > minAmount,
            "Amount Should be greater than min deposit amount"
        );
        require(
            _amount < maxAmount,
            "Amount Should be less than max deposit amount"
        );

        /// @dev Getting total fee amount according to coefficient (100 fee is equal to 1 %)
        uint256 _totalFeeAmount = _amount * fee / 10000;

        if (_referrerWallet != address (0)) {
            /// @dev Getting fee amounts for feeWallet and referrerWallet
            uint256 _referrerFeeAmount = _totalFeeAmount * referrerFee / 10000;
            uint256 _feeAmount = _totalFeeAmount - _referrerFeeAmount;

            IERC20(token).transferFrom(msg.sender, feeWallet, _feeAmount);
            IERC20(token).transferFrom(msg.sender, _referrerWallet, _referrerFeeAmount);
        } else {
            IERC20(token).transferFrom(msg.sender, feeWallet, _totalFeeAmount);
        }

        if(claim) {
            /// @dev send amount directly to receiver wallet
            IERC20(token).transferFrom(msg.sender, receiverWallet, _amount - _totalFeeAmount);
        } else {
            IERC20(token).transferFrom(msg.sender, address(this), _amount - _totalFeeAmount);
        }

        if(!isFunder[msg.sender]){
            funders.push(msg.sender);
            isFunder[msg.sender] = true;
        }

        userFundsData[msg.sender] += _amount;

        emit LogDepositedFunds(msg.sender, _amount);
    }

    /// @notice transfers contract's whole balance to receiverWallet
    function claimFunds() external onlyOwner {
        uint256 _balance = IERC20(token).balanceOf(address(this));
        IERC20(token).transfer(receiverWallet, _balance - 1);

        emit LogClaimFunds(receiverWallet, _balance);
    }

    /// @notice sets auto claim value
    /// @param _claim - new claim value
    function setClaim(bool _claim) external onlyOwner {
        require(claim != _claim, "Claim is already in that state");
        claim = _claim;

        emit LogSetClaim(claim);
    }

    /// @notice sets minimal deposit amount
    /// @param _minAmount - new minimal deposit amount
    function setMin(uint256 _minAmount) external onlyOwner {
        require(_minAmount < maxAmount, "Minimal amount can't be greater than maximal amount");
        minAmount = _minAmount;

        emit LogSetMinimalAmount(minAmount);
    }

    /// @notice sets fee wallet
    /// @param _feeWallet - new fee wallet
    function setFeeWallet(address _feeWallet) external onlyOwner {
        require(_feeWallet != address(0), "User doesn't exists");
        feeWallet = _feeWallet;

        emit LogSetFeeWallet(feeWallet);
    }

    /// @notice get's all funders with their funding amount
    function getParticipants() external view returns(funderStruct[] memory){
        funderStruct[] memory _funders = new funderStruct[](funders.length);
        for(uint256 i = 0; i < funders.length; ++i){
            _funders[i] = funderStruct(funders[i], userFundsData[funders[i]]);
        }
        return _funders;
    }

    /// @notice get's funders fund amount
    function getUserFunds(address _user) external view returns (uint256) {
        require(isFunder[_user], "User is not a funder");
        return userFundsData[_user];
    }

    /// @notice get total funded amount
    function getTotalFunded() external view returns (uint256 totalFunded) {
      totalFunded = 0;
      for(uint256 i = 0; i < funders.length; ++i) {
        totalFunded += userFundsData[funders[i]];
      }
    }

    function getFundraisingToken() public view returns (address) {
      return token;
    }
}
