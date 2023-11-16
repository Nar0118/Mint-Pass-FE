import { LoginForm } from 'components/feature/login';
import { Logo } from 'components/feature/logo';

import styles from './login.module.scss';

function Login() {
  return (
    <div className={styles.container}>
      <Logo />
      <LoginForm />
    </div>
  );
}

export default Login;
