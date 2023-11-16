import { createContext } from 'react';

interface AuthContext {
  path: string;
  authorized: boolean;
  kycPassed: boolean;
}

export const AuthContext = createContext<AuthContext>({} as AuthContext);
