// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "./Fundraising.sol";

contract FundraisingFactory {
    mapping (address => address[]) fundraisings;
    mapping (address => bool) private isFundraiser;
    address[] private fundraisers;

    // 1% x 100 F.E. 300 = 3%
    uint256 public fee;
    address public feeWallet;
    address public token;
    address public owner;

   struct fundraiserStruct {
        address fundraiser;
        address[] fundraising;
    }

    modifier onlyOwner {
        require(msg.sender == owner, "You are not the owner");
        _;
    }

    /// @notice Emitted when a new fundraiser contract is created
    /// @param fundraiser - New fundraiser contract
    event LogCreatedFundraiser(address fundraiser);

    /// @notice Emitted when a owner changes fee wallet
    /// @param feeWallet - New fee wallet
    event LogSetFeeWallet(address feeWallet);

    /// @notice Emitted when a owner changes fee coefficient
    /// @param fee - New fee coefficient
    event LogSetFee(uint256 fee);

    /// @notice Emitted when a owner changes token address
    /// @param token - New token address
    event LogSetToken(address token);



    constructor(
        uint256 _fee,
        address _feeWallet,
        address _token
    ) {
        require(fee < 10000, "Fee should be less than 100%");
        require(_feeWallet != address(0), "User(feeWllet) doesn't exists");
        require(_token != address(0), "Token doesn't exists");

        fee = _fee;
        feeWallet = _feeWallet;
        token = _token;
        owner = msg.sender;
    }

    function createFundraiser (
        bytes32 _name,
        bytes32 _roundId,
        uint256 _minAmount,
        uint256 _maxAmount,
        uint256 _capacity,
        uint256 _referrerFee,
        address _receiverWallet
    ) public onlyOwner returns(address){
        require(_name != "", "Name can not be empty");
        require(_roundId != "", "Round ID can not be empty");
        require(_minAmount < _maxAmount, "Minimal amount can't be greater than maximal");
        require(_capacity > 0, "Capacity amount should be a positive number");
        require(_referrerFee < 10000, "Fee should be less than 100%");

        if(_receiverWallet == address(0)) {
            _receiverWallet = msg.sender;
        }

        Fundraising fund = new Fundraising(
            _name,
            _roundId,
            _minAmount,
            _maxAmount,
            _capacity,
            fee,
            _referrerFee,
            _receiverWallet,
            feeWallet,
            token,
            msg.sender
        );

        if(!isFundraiser[msg.sender]){
            fundraisers.push(msg.sender);
            isFundraiser[msg.sender] = true;
        }

        address fundAddres = address(fund);
        fundraisings[msg.sender].push(fundAddres);

        emit LogCreatedFundraiser(fundAddres);

        return fundAddres;
    }

    function _getRevertMsg(bytes memory _returnData) internal pure returns (string memory) {
      // If the _res length is less than 68, then the transaction failed silently (without a revert message)
      if (_returnData.length < 68) return 'Transaction reverted silently';

      assembly {
      // Slice the sighash.
        _returnData := add(_returnData, 0x04)
      }
      return abi.decode(_returnData, (string)); // All that remains is the revert string
    }

    /// @notice get's all fundraisers with their fundraiser contracts
    function getFundraisers() external view returns(fundraiserStruct[] memory){
        fundraiserStruct[] memory _fundraisers = new fundraiserStruct[](fundraisers.length);
        for(uint256 i = 0; i < fundraisers.length; ++i){
            _fundraisers[i] = fundraiserStruct(fundraisers[i], fundraisings[fundraisers[i]]);
        }
        return _fundraisers;
    }

    /// @notice sets fee wallet
    /// @param _feeWallet - new fee wallet
    function setFeeWallet(address _feeWallet) external onlyOwner {
        require(_feeWallet != address(0), "User doesn't exists");
        feeWallet = _feeWallet;

        emit LogSetFeeWallet(feeWallet);
    }

    /// @notice sets fee coefficient
    /// @param _fee - new fee coefficient
    function setFee(uint256 _fee) external onlyOwner {
        require(fee < 10000, "Fee should be less than 100%");
        fee = _fee;

        emit LogSetFee(fee);
    }

    /// @notice sets token address
    /// @param _token - new token address
    function setToken(address _token) external onlyOwner {
        require(_token != address(0), "Token doesn't exists");
        token = _token;

        emit LogSetToken(token);
    }

}
