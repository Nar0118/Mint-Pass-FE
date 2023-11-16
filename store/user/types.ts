import { Invitation } from 'types/invitation';
import { User } from 'types/user';

export interface userState {
  user: User;
  userReferrals: Array<Invitation>;
}
