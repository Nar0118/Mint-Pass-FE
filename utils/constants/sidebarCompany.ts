export interface SidebarCompanyProps {
  name: string;
  id: string;
}

export const sidebarCompany: Array<SidebarCompanyProps> = [
  {
    name: 'About',
    id: 'about',
  },
  {
    name: 'Features',
    id: 'features',
  },
  {
    name: 'Funding Team',
    id: 'fundingTeam',
  },
  {
    name: 'Investors',
    id: 'investors',
  },
  {
    name: 'Funding Pools',
    id: 'fundingPools',
  },
];
