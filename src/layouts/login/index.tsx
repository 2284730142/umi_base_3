import React from 'react';
import { Helmet } from 'umi';
import logo from '@/assets/images/logo/logo.png';

export default ({ children }: any) => {
  return (<>
    <Helmet>
      <title>登录</title>
      <link rel="icon" sizes="any" href={logo}/>
    </Helmet>
    <div>{children}</div>
  </>);
}
