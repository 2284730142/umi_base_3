import useAuthModel from '@/models/useAuthModel';
import React from 'react';
import { Card, Form, Input, Row, Col } from 'antd';
import Button from '@/components/Button/index';
import LoginLayout from '@/layouts/login/index';
import { history, request } from 'umi';
import styles from '@/pages/user/login/index.less';

export default () => {

  const { signIn } = useAuthModel();
  const [form] = Form.useForm();

  const handleLogin = async () => {
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
  };

  return (
    <LoginLayout>
      <Card bordered={false} hoverable className={styles.loginWrapper}>
        <Form form={form}>
          <Row gutter={[12, 0]}>
            <Col span={8}>
              <Form.Item label="账户" noStyle>
                <Input placeholder="账户" autoComplete="off"/>
              </Form.Item>
            </Col>
            <Col span={8}>
              <Form.Item label="密码" noStyle>
                <Input type="password" placeholder="密码" autoComplete="off"/>
              </Form.Item>
            </Col>
            <Col span={8}>
              <Button onClick={() => handleLogin()} block type="primary">
                登录
              </Button>
            </Col>
          </Row>
        </Form>
      </Card>
    </LoginLayout>
  );
}
