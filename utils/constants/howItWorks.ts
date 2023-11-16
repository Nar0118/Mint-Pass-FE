import { imagesSvg } from './imagesSrc';

export const ReferralCards: Array<Cards> = [
  {
    icon: imagesSvg.message,
    iconDark: imagesSvg.messageDark,
    text: 'Invite your referral to the website',
  },
  {
    icon: imagesSvg.referralsPeople,
    iconDark: imagesSvg.referralsPeople,
    text: 'Referral should sign up on website',
  },
  {
    icon: imagesSvg.card,
    iconDark: imagesSvg.cardDark,
    text: 'Referral makes a purchase',
  },
  {
    icon: imagesSvg.money,
    iconDark: imagesSvg.moneyDark,
    text: 'You get the benefit from it',
  },
];

export interface Cards {
  icon: string;
  iconDark: string;
  text: string;
}
