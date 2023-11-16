export interface CompanyData {
  backers: string;
  name: string;
  description: string;
  auctionStart: Date;
  auctionEnd: Date;
  title: string;
  totalRaise: number;
  pricePerToken: string;
  vesting: string;
  launchpads: string;
}

export enum filterRadio {
  All = 'All',
  LiveDeals = 'Live Deals',
  FinishedDeals = 'Finished Deals',
  UpcomingDeals = 'Upcoming Deals',
}

export enum CarouselResponse {
  MOBILE = 650,
  TABLET = 880,
  DESKTOP = 1257,
}

export enum ResponseSize {
  MOBILE = 425,
  TABLET = 710,
  TABLET_M = 850,
  TABLET_L = 1100,
  LAPTOP = 1440,
  DESKTOP = 1700,
}

export const fundingPoolsItemsPerPage = 9;
