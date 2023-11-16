export interface UserInvestmentSearchQuery {
  companyName: string;
  limit: number;
  offset: number;
}

export interface UserInvestmentSearchForm {
  companyName?: string;
}
