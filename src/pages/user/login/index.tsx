import useAuthModel from '@/models/useAuthModel';
import React from 'react';
import { Button } from 'antd';
import LoginLayout from '@/layouts/login/index';
import { history, request } from 'umi';

export default () => {

  const { signIn } = useAuthModel();

  return (
    <LoginLayout>
      <div>
        <Button onClick={async () => {
          const response = await request(
            `http://crystalshield.wugucloud.com/api-crystal/auth/mobile/login`, {
              method: 'POST',
              data: {
                code: '8888',
                mobile: '15838350779',
                type: 'mobile',
              },
              headers: {
                ClientType: 'admin',
                token: 'null',
              },
            });
          if (response.code === 200) {
            signIn(response.data);
            history.push('/');
          }
        }}>
          登录
        </Button>
      </div>
    </LoginLayout>
  );
}
