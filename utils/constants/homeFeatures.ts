import { imagesSvg } from './imagesSrc';

export default interface HomeFeatureType {
  icon: string;
  title: string;
  description: string;
}

export const homeFeatures: Array<HomeFeatureType> = [
  {
    icon: imagesSvg.allInOnePlatform,
    title: 'All In One Platform',
    description:
      'Connect your wallet, sign your SAFT, send your funds, and get your tokens. Easy, secured and convenient !',
  },
  {
    icon: imagesSvg.guaranteedAllocation,
    title: ' Guaranteed Allocation',
    description:
      'Our system is based on FCFS and guarantees the same chance to all our users to participate in all deals !',
  },
  {
    icon: imagesSvg.usersProtection,
    title: 'Users Protection',
    description:
      'Our Audited smart contracts, KYC/AML processes and contract signature authentication ensure the protection of our users',
  },
  {
    icon: imagesSvg.transparentFees,
    title: 'Transparent Fees ',
    description:
      "Flat rate at registration and 15% fee on participation per deal, that's it !",
  },
  {
    icon: imagesSvg.fullyCompliant,
    title: 'Fully Compliant',
    description:
      'Our company is based in Switzerland and meets all the administrative and legal requirements to ensure the security of your investments !',
  },
  {
    icon: imagesSvg.affiliateProgram,
    title: 'Affiliate Program',
    description:
      ' Refer your friends and earn 2.5% in stablecoin for every dollar spent on Passphrase !',
  },
];
