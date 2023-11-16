import { CompanyData } from './company';
import { User } from './user';
import { Saft } from './saft';

export interface FundingPoolModel {
  _id: string;
  slug: string;
  description: string;
  auctionStart: Date;
  auctionEnd: Date;
  pricePerToken: string;
  vesting: string;
  launchpads: string;
  backers: Array<User>;
  amount: number;
  saleType: string;
  status: StatusType;
  icon: string;
  minAmount: number;
  maxAmount: number;
  company: CompanyData;
  templateId: string;
  capacity: number;
  walletAddress: string;
  contractAddress: string;
  title: string;
  saftFiles: Array<Saft>;
}

export interface FundingPoolMessage {
  fundingPool: string;
  company: string;
}

export interface FundingPoolResponse {
  success: boolean;
  data?: FundingPoolModel | Array<FundingPoolModel>;
  error?: string;
  count?: number;
}

export interface FeaturedPoolsResponse {
  upcoming: Array<FundingPoolModel>;
  ongoing: Array<FundingPoolModel>;
}
export interface PastDealsModel {
  _id: string;
  companies: Array<PastDealsCompanyData>;
}

export interface PastDealsCompanyData {
  iconUrl: string;
  name: string;
}

export enum StatusType {
  Live = 'LIVE',
  Coming_Soon = 'COMING SOON',
  Draft = 'DRAFT',
}
