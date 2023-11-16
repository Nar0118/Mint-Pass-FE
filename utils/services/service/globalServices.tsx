import { AuthService } from './authService';
import { UserService } from './userService';
import { GlobalLoaderService } from './loaderService';

export const GlobalServices = ({
  children,
}: {
  children: React.ReactNode;
}): JSX.Element => {
  return (
    <GlobalLoaderService>
      <AuthService>
        <UserService>{children}</UserService>
      </AuthService>
    </GlobalLoaderService>
  );
};
