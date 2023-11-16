import { Symbol } from 'utils/constants/symbol';
import { imagesSvg } from 'utils/constants/imagesSrc';
import { FundingPoolModel } from './fundingPool';

export const getNecessaryTokenIcon = (tokenSymbol: string): string => {
  switch (tokenSymbol) {
    case Symbol.BUSD:
      return imagesSvg.busd;
    case Symbol.GLD:
      return '';
  }
};

export interface Investment {
  _id: string;
  userId: string;
  companyName: string;
  companyId: string;
  companyImgUrl: string;
  amountInvested: number;
  investmentDate: Date | string;
  claimingPortals: string;
  status: string;
  verified: boolean;
  user: string;
  saftId: string;
  successfullyCompleted: boolean;
  fundingPoolId: string | FundingPoolModel;
  paymentDate: Date | string;
  transactionHash: string;
  gas?: number;
}
