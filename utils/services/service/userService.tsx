import { Context } from 'react';
import { Contextualizer } from '../contextualizer';
import { ProvidedServices } from '../providedServices';
import { UserInvestmentSearchQuery } from 'components/feature/dashboardChildren/types';
import { axiosInstance } from 'utils/services/service/axiosService';
import { Investment } from 'types/investment';
import { Invitation } from 'types/invitation';
import { ContextProps, User, UserKycDocument } from 'types/user';
import env from 'utils/constants/env';

const url = `/v${env.apiVersion}/users`;
const investmentsUrl = `/v${env.apiVersion}/investments`;

export interface IUserService {
  inviteFriends(email: string): Promise<{
    success: boolean;
    message?: string;
    error?: string;
  }>;
  getUserReferrals(
    limit: number,
    offset: number,
  ): Promise<{
    success: boolean;
    error?: string;
    data?: Invitation[];
    countForUser?: number;
  }>;
  getReferredUserWallet(): Promise<{
    success: boolean;
    error?: string;
    data?: string;
  }>;
  getUserInvestments(
    limit?: number,
    offset?: number,
  ): Promise<{
    success: boolean;
    error?: string;
    data?: Investment[];
    count?: number;
    totalInvestment?: number;
  }>;
  downloadUserSaft(fileId: string): Promise<{
    success: boolean;
    error?: string;
    data?: string;
    message?: string;
  }>;
  getCurrentUser(): Promise<{
    error?: string;
    success: boolean;
    data: User;
  }>;
  updateWallet(walletAddress: string): Promise<{
    success: boolean;
    error?: string;
  }>;
  uploadImg(file: FormData): Promise<string>;
  updateUser(
    firstName?: string,
    lastName?: string,
    bio?: string,
    twitterLink?: string,
    instagramLink?: string,
    discordLink?: string,
    imageUrl?: string,
  ): Promise<{
    success: boolean;
    error?: string;
    user?: User;
  }>;
  getUserWallet(): Promise<{
    success: boolean;
    walletAddresses: string[];
  }>;
  searchUserInvestments(reqQuery: UserInvestmentSearchQuery): Promise<{
    data: Array<Investment>;
    count: number;
  }>;
  startKyc(): Promise<{
    success: boolean;
    data?: {
      identificationId: string;
      redirectUrl: string;
    };
    message?: string;
  }>;
  getKycDocument(): Promise<{
    success: boolean;
    data?: UserKycDocument;
    message?: string;
  }>;
}

export const UserServiceContext: Context<IUserService> =
  Contextualizer.createContext(ProvidedServices.UserService);

export const useUserServices = (): IUserService =>
  Contextualizer.use<IUserService>(ProvidedServices.UserService);

export const UserService = ({ children }: ContextProps) => {
  const userService = {
    async inviteFriends(email: string): Promise<{
      success: boolean;
      message?: string;
      error?: string;
    }> {
      try {
        const response = await axiosInstance.post(`${url}/invite-friends`, {
          toEmail: email,
        });

        return response.data;
      } catch (err) {
        console.log(err);
      }
    },

    async searchUserInvestments(reqQuery: UserInvestmentSearchQuery): Promise<{
      data: Array<Investment>;
      count: number;
    }> {
      try {
        const response = await axiosInstance.get(
          `${investmentsUrl}/search?companyName=${reqQuery.companyName}&limit=${reqQuery.limit}&offset=${reqQuery.offset}`,
        );

        return response.data;
      } catch (err) {
        console.log(err);
      }
    },

    async getUserReferrals(
      limit: number,
      offset: number,
    ): Promise<{
      success: boolean;
      error?: string;
      data?: Invitation[];
      countForUser?: number;
    }> {
      const response = await axiosInstance.get(
        `${url}/referrals?limit=${limit}&offset=${offset}`,
      );

      return response.data;
    },

    async getReferredUserWallet(): Promise<{
      success: boolean;
      error?: string;
      data?: string;
    }> {
      try {
        const response = await axiosInstance.get(`${url}/referred-user-wallet`);
        return response.data;
      } catch (err) {
        console.log(err);
      }
    },

    async getUserInvestments(
      limit: number = 0,
      offset: number = 0,
    ): Promise<{
      success: boolean;
      error?: string;
      data?: Investment[];
      count?: number;
      totalInvestment?: number;
    }> {
      try {
        const response = await axiosInstance.get(
          `${url}/investments?limit=${limit}&offset=${offset}`,
        );

        return response.data;
      } catch (err) {
        console.log(err);
      }
    },

    async getCurrentUser(): Promise<{
      error?: string;
      success: boolean;
      data: User;
    }> {
      try {
        const response = await axiosInstance.get(`${url}/me`);

        return response.data;
      } catch (err) {
        console.log(err);
      }
    },

    async downloadUserSaft(fileId: string): Promise<{
      success: boolean;
      error?: string;
      data?: string;
      message?: string;
    }> {
      try {
        const response = await axiosInstance.post(`${url}/saft`, { fileId });
        return response.data;
      } catch (err) {
        console.log(err);
      }
    },

    async updateWallet(walletAddress: string): Promise<{
      success: boolean;
      error?: string;
    }> {
      try {
        const response = await axiosInstance.put(`${url}/update-wallet`, {
          walletAddress,
        });
        return response.data;
      } catch (err) {
        console.log(err);
      }
    },

    async uploadImg(formData: FormData): Promise<string> {
      try {
        const response = await axiosInstance.post(`${url}/file`, formData, {
          headers: {
            'content-type': 'multipart/form-data',
          },
        });

        return response.data;
      } catch (err) {
        console.log(err);
      }
    },

    async updateUser(
      firstName?: string,
      lastName?: string,
      bio?: string,
      twitterLink?: string,
      instagramLink?: string,
      discordLink?: string,
      imageUrl?: string,
    ): Promise<{
      success: boolean;
      error?: string;
      user?: User;
    }> {
      try {
        const response = await axiosInstance.put(`${url}`, {
          firstName,
          lastName,
          bio,
          twitterLink,
          instagramLink,
          discordLink,
          imageUrl,
        });

        return response.data;
      } catch (err) {
        console.log(err);
      }
    },

    async getUserWallet(): Promise<{
      success: boolean;
      walletAddresses: string[];
    }> {
      try {
        const response = await axiosInstance.get(`${url}/wallets`);
        return response.data;
      } catch (err) {
        console.log(err);
      }
    },

    async startKyc(): Promise<{
      success: boolean;
      data?: {
        identificationId: string;
        redirectUrl: string;
      };
      message?: string;
    }> {
      try {
        const response = await axiosInstance.post(`${url}/start-kyc`);

        return response.data;
      } catch (err) {
        console.log(err);
      }
    },

    async getKycDocument(): Promise<{
      success: boolean;
      data?: UserKycDocument;
      message?: string;
    }> {
      try {
        const response = await axiosInstance.get(`${url}/kyc-document`);

        return response.data;
      } catch (err) {
        console.log(err);
      }
    },
  };

  return (
    <UserServiceContext.Provider value={userService}>
      {children}
    </UserServiceContext.Provider>
  );
};
