import Link from 'next/link';
import { Form } from 'antd';
import { InputColor, RestTypes } from 'components/shared/input/types';
import Button from 'components/shared/button';
import Input from 'components/shared/input';
import { BackgroundType, ButtonType, PaddingSize } from 'types/buttonType';

import styles from './loginForm.module.scss';

export const LoginForm = () => {
  const onFinish = (values: any) => {
    console.log('Success:', values);
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log('Failed:', errorInfo);
  };

  return (
    <div className={styles.container}>
      <div className={styles.title}>Sign in</div>
      <Form
        name="basic"
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
      >
        <Form.Item
          label=""
          name="email"
          rules={[{ required: true, message: 'Please enter a valid address' }]}
        >
          <Input
            placeholder="Enter your email"
            colorPlaceholder={InputColor.GrayPlaceholder}
            label="Email"
          />
        </Form.Item>
        <Form.Item
          label=""
          name="password"
          rules={[{ required: true, message: 'Password is required' }]}
        >
          <Input
            placeholder="Enter your password"
            type={RestTypes.Password}
            colorPlaceholder={InputColor.GrayPlaceholder}
            label="Password"
          />
        </Form.Item>
        <div className={styles.forgotPassword}>Forgot your Password ?</div>
        <Button
          htmlType="submit"
          text="Sign in"
          backgroundType={BackgroundType.Transparent}
          btnType={ButtonType.darkGreenColor}
          paddingSize={PaddingSize.big}
        />
      </Form>
      <div className={styles.alreadyHaveAccount}>
        <span>Already have an account ?</span>
        <Link href="#">Sign Up</Link>
      </div>
    </div>
  );
};
