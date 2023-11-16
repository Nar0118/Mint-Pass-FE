import { Context } from 'react';
import { ContextProps } from 'types/user';
import { AuthResponse } from 'types/auth';
import * as localStorage from 'utils/services/localStorageService';
import { Contextualizer } from 'utils/services/contextualizer';
import { ProvidedServices } from 'utils/services/providedServices';
import localStorageKeys from 'utils/constants/localStorageKeys';
import { axiosInstance } from 'utils/services/service/axiosService';
import { DashboardPages } from 'utils/constants/dashboard';
import env from 'utils/constants/env';

const url = `/v${env.apiVersion}/users`;

export interface IAuthService {
  login(email: string, password: string): Promise<AuthResponse>;
  signup(
    email: string,
    password: string,
    firstName: string,
    lastName: string,
    referralCode?: string,
  ): Promise<AuthResponse>;
  changePassword(
    oldPassword: string,
    newPassword: string,
  ): Promise<AuthResponse>;
  logout(): Promise<{
    success: boolean;
    message?: string;
    error?: string;
  }>;
  signupByGoogle(googleToken: string): Promise<AuthResponse>;
  loginByGoogle(googleToken: string): Promise<AuthResponse>;
  loginByTwitter(socketId: string, signUp: boolean): Promise<Window>;
  sendRecoverPasswordEmail(email: string): Promise<{
    success: boolean;
    message?: string;
    error?: string;
  }>;
  updateForgottenPassword(
    password: string,
    emailVerificationToken: string,
  ): Promise<{
    success: boolean;
    message?: string;
    error?: string;
  }>;
  userValidationCheckingByEmail(email: string): Promise<{
    success: boolean;
    message: string;
  }>;
  pass2FA(phoneNumber: string, code: number): Promise<AuthResponse>;
  resend2FA(phoneNumber: string): Promise<{
    success: boolean;
    message?: string;
    error?: string;
  }>;
  sendPhoneVerificationCode(phoneNumber: string): Promise<{
    success: boolean;
    message?: string;
    error?: string;
  }>;
}

export const AuthServiceContext: Context<IAuthService | undefined> =
  Contextualizer.createContext(ProvidedServices.AuthService);

export const useAuthServices = (): IAuthService =>
  Contextualizer.use<IAuthService>(ProvidedServices.AuthService);

export const AuthService = ({ children }: ContextProps): JSX.Element => {
  const authService = {
    async login(email: string, password: string): Promise<AuthResponse> {
      try {
        const response = await axiosInstance.post(`${url}/login`, {
          email,
          password,
        });

        const data = response?.data;
        if (data?.userData?.token) {
          localStorage.setItemInLocalStorage(
            localStorageKeys.SOCIAL_MEDIA_AUTH,
            data.userData?.user?.authenticatedByGoogle ||
              data.userData?.user?.authenticatedByTwitter,
          );
          localStorage.setItemInLocalStorage(
            localStorageKeys.TOKEN_KEY,
            data.userData.token,
          );
          localStorage.setItemInLocalStorage(
            localStorageKeys.ACTIVE_TAB,
            DashboardPages.DASHBOARD,
          );
          localStorage.setItemInLocalStorage(
            localStorageKeys.REFERRAL_CODE,
            data?.userData?.user?.referralCode,
          );
        }

        return data;
      } catch (err) {
        console.log(err);
      }
    },

    async signupByGoogle(googleToken: string): Promise<AuthResponse> {
      try {
        const response = await axiosInstance.post(`${url}/signup/google`, {
          googleToken,
        });

        if (response.data.token) {
          localStorage.setItemInLocalStorage(
            localStorageKeys.SOCIAL_MEDIA_AUTH,
            response?.data?.user?.authenticatedByGoogle ||
              response?.data?.user?.authenticatedByTwitter,
          );
          localStorage.setItemInLocalStorage(
            localStorageKeys.TOKEN_KEY,
            response.data.token,
          );
          localStorage.setItemInLocalStorage(
            localStorageKeys.ACTIVE_TAB,
            DashboardPages.DASHBOARD,
          );
        }

        return response.data;
      } catch (err) {
        console.log(err);
      }
    },

    async loginByGoogle(googleToken: string): Promise<AuthResponse> {
      try {
        const response = await axiosInstance.post(`${url}/login/google`, {
          googleToken,
        });
        if (response.data.token) {
          localStorage.setItemInLocalStorage(
            localStorageKeys.SOCIAL_MEDIA_AUTH,
            response?.data?.existingUser?.authenticatedByGoogle ||
              response?.data?.existingUser?.authenticatedByTwitter,
          );
          localStorage.setItemInLocalStorage(
            localStorageKeys.TOKEN_KEY,
            response.data.token,
          );
          localStorage.setItemInLocalStorage(
            localStorageKeys.ACTIVE_TAB,
            DashboardPages.DASHBOARD,
          );
        }

        return response.data;
      } catch (err) {
        console.log(err);
      }
    },

    async signup(
      email: string,
      password: string,
      firstName: string,
      lastName: string,

      referralCode?: string,
    ): Promise<AuthResponse> {
      try {
        const response = await axiosInstance.post(`${url}/signup`, {
          email,
          password,
          firstName,
          lastName,
          ...(referralCode && { referralCode }),
        });

        const data = response?.data;
        if (data.token) {
          localStorage.setItemInLocalStorage(
            localStorageKeys.SOCIAL_MEDIA_AUTH,
            data?.user?.authenticatedByGoogle ||
              data?.user?.authenticatedByTwitter,
          );
          localStorage.setItemInLocalStorage(
            localStorageKeys.TOKEN_KEY,
            data.token,
          );
          localStorage.setItemInLocalStorage(
            localStorageKeys.ACTIVE_TAB,
            DashboardPages.DASHBOARD,
          );
          localStorage.setItemInLocalStorage(
            localStorageKeys.REFERRAL_CODE,
            data?.user?.referralCode,
          );
        }

        return data;
      } catch (err) {
        console.log(err);
      }
    },

    async changePassword(
      oldPassword: string,
      newPassword: string,
    ): Promise<AuthResponse> {
      try {
        const response = await axiosInstance.put(`${url}/change-password`, {
          oldPassword,
          newPassword,
        });

        return response.data;
      } catch (err) {
        console.log(err);
      }
    },

    async logout(): Promise<{
      success: boolean;
      message?: string;
      error?: string;
    }> {
      try {
        const response = await axiosInstance.post(`${url}/logout`);
        if (response.data) {
          localStorage.clearLocalStorage();
        }
        return response.data;
      } catch (err) {
        console.log(err);
      }
    },

    async loginByTwitter(socketId: string, signUp: boolean): Promise<Window> {
      const width = 600,
        height = 600;
      const left = window.innerWidth / 2 - width / 2;
      const top = window.innerHeight / 2 - height / 2;
      const params = new URLSearchParams();
      params.append('socketId', socketId);
      params.append('signUp', signUp.toString());
      params.toString();
      const TweeterUrl = `${env.nextPublicApiBaseUrl}${url}/login/twitter?${params}`;
      return window.open(
        TweeterUrl,
        '',
        `toolbar=no, location=no, directories=no, status=no, menubar=no, 
        scrollbars=no, resizable=no, copyhistory=no, width=${width}, 
        height=${height}, top=${top}, left=${left}`,
      );
    },

    async sendRecoverPasswordEmail(email: string): Promise<{
      success: boolean;
      message?: string;
      error?: string;
    }> {
      try {
        const response = await axiosInstance.post(`${url}/recover-password`, {
          email,
        });

        return response.data;
      } catch (err) {
        console.log(err);
      }
    },

    async updateForgottenPassword(
      password: string,
      emailVerificationToken: string,
    ): Promise<{
      success: boolean;
      message?: string;
      error?: string;
    }> {
      try {
        const response = await axiosInstance.put(
          `${url}/update-forgotten-password`,
          {
            newPassword: password,
            emailVerificationToken,
          },
        );

        return response.data;
      } catch (err) {
        console.log(err);
      }
    },

    async userValidationCheckingByEmail(email: string): Promise<{
      success: boolean;
      message: string;
    }> {
      try {
        const response = await axiosInstance.get(
          `${url}/validation-by-email/${email}`,
        );
        return response.data;
      } catch (err) {
        console.log(err);
      }
    },
    async pass2FA(phoneNumber: string, code: number): Promise<AuthResponse> {
      try {
        const response = await axiosInstance.post(`${url}/pass-2FA`, {
          phoneNumber,
          code,
        });

        const data = response?.data;
        if (data?.userData?.token) {
          localStorage.setItemInLocalStorage(
            localStorageKeys.SOCIAL_MEDIA_AUTH,
            data.userData?.user?.authenticatedByGoogle ||
              data.userData?.user?.authenticatedByTwitter,
          );
          localStorage.setItemInLocalStorage(
            localStorageKeys.TOKEN_KEY,
            data.userData.token,
          );
          localStorage.setItemInLocalStorage(
            localStorageKeys.ACTIVE_TAB,
            DashboardPages.DASHBOARD,
          );
          localStorage.setItemInLocalStorage(
            localStorageKeys.REFERRAL_CODE,
            data?.userData?.user?.referralCode,
          );
        }

        return data;
      } catch (err) {
        console.log(err);
      }
    },
    async resend2FA(phoneNumber: string): Promise<{
      success: boolean;
      message?: string;
      error?: string;
    }> {
      try {
        const response = await axiosInstance.post(`${url}/resend-2FA`, {
          phoneNumber,
        });
        return response.data;
      } catch (err) {
        console.log(err);
      }
    },
    async sendPhoneVerificationCode(phoneNumber: string): Promise<{
      success: boolean;
      message?: string;
      error?: string;
    }> {
      try {
        const response = await axiosInstance.post(`${url}/send-verify-code`, {
          phoneNumber,
        });
        return response.data;
      } catch (err) {
        console.log(err);
      }
    },
  };

  return (
    <AuthServiceContext.Provider value={authService}>
      {children}
    </AuthServiceContext.Provider>
  );
};
