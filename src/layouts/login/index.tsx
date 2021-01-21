import React from 'react';
import { Helmet } from 'umi';
import logo from '@/assets/images/logo/logo.png';
import { Row, Col } from 'antd';

export default ({ children }: any) => {
  return (<>
    <Helmet>
      <title>登录</title>
      <link rel="icon" sizes="any" href={logo}/>
    </Helmet>
    <Row gutter={[0, 0]} style={{ height: '100vh' }}>
      <Col span={24} style={{ background: '#FFF' }}>
        {
          children
        }
      </Col>
    </Row>
  </>);
}
