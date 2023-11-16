import { imagesSvg } from 'utils/constants/imagesSrc';

export interface SidebarMenuNavItem {
  icon: string;
  name: string;
  link: string;
}

export enum Sides {
  LEFT = 'left',
  TOP = 'top',
}

export const sidebarMenuLinks = {
  profileDashboard: '/dashboard',
  profileSubscription: '/subscription',
  profileBenefits: '/benefits',
  profileReferrals: '/referrals',
  profile: '/profile',
};

export const sidebarMenu: Array<SidebarMenuNavItem> = [
  {
    icon: imagesSvg.dashboard,
    name: 'Dashboard',
    link: sidebarMenuLinks.profileDashboard,
  },
  {
    icon: imagesSvg.referrals,
    name: 'Referrals',
    link: `${sidebarMenuLinks.profileDashboard}${sidebarMenuLinks.profileReferrals}`,
  },
  {
    icon: imagesSvg.profileIcon,
    name: 'Profile',
    link: `${sidebarMenuLinks.profileDashboard}${sidebarMenuLinks.profile}`,
  },
];
