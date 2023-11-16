import { createSlice } from '@reduxjs/toolkit';
import { userState } from './types';

const initialState: userState = {
  user: {
    _id: '',
    name: '',
    surname: '',
    twitterLink: '',
    instagramLink: '',
    discordLink: '',
    bio: '',
    country: '',
    nationality: '',
    email: '',
    role: '',
    walletAddress: '',
    authenticatedByGoogle: false,
    authenticatedByTwitter: false,
    emailVerificationToken: '',
    referralCode: '',
    twitterId: '',
    kycPassed: false,
    phoneNumber: '',
    enable2FA: false,
    imageUrl: '',
  },
  userReferrals: [],
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUser: (state, { payload }): void => {
      state.user = payload;
    },
    clearUser: (state): void => {
      state.user = initialState.user;
    },
    setReferrals: (state, { payload }): void => {
      state.userReferrals = payload;
    },
    clearReferrals: (state): void => {
      state.userReferrals = initialState.userReferrals;
    },
  },
});

export const { setUser, clearUser, setReferrals, clearReferrals } =
  userSlice.actions;
export default userSlice.reducer;
