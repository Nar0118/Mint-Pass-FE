import { imagesSvg } from './imagesSrc';

export interface CompanyFeature {
  title: string;
  descr: string;
  icon: keyof typeof imagesSvg;
}

export const companyFeatures: Array<CompanyFeature> = [
  {
    title: 'Advanced Blockchain Technology',
    descr:
      'Utilizing cutting-edge blockchain technology, Cryptotech Solutions ensures secure and transparent digital transactions.',
    icon: 'blockchainTech',
  },
  {
    title: 'Secure Digital Asset Management',
    descr:
      'With multi-layered encryption and cold storage solutions, we provide a highly secure environment for managing cryptocurrencies.',
    icon: 'referralsPeople',
  },
  {
    title: 'Seamless Transactions',
    descr:
      'Our user-friendly interfaces enable effortless sending, receiving, and exchanging of digital assets.',
    icon: 'card',
  },
];
