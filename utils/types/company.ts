export interface CompanyDetailType {
  detail: string;
  description: string;
}

export interface SocialMediaType {
  media: string;
  url: string;
}

export interface FundingTeam {
  linkedinLink?: string;
  memberImg: string;
  name: string;
  position: string;
  surname: string;
  _id: string;
}

export interface CompanyData {
  _id?: string;
  iconUrl: string;
  name: string;
  description: string;
  fundingTeam: Array<FundingTeam>;
  category: string;
  websiteUrl: string;
  socialMedia: Array<SocialMediaType> | [];
  details?: Array<CompanyDetailType> | [];
  walletAddress?: string;
}

export interface CompanyResponse {
  success: boolean;
  data?: CompanyData | Array<CompanyData>;
  error?: string;
}

export interface TotalInvestType {
  amount: number;
  success: boolean;
  error: string;
}
