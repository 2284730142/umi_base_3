import React from 'react';
import { Helmet } from 'umi';
import logo from '@/assets/images/logo/logo.png';

export default ({ children }: any) => {
  console.log(222);
  return (<>
    <Helmet>
      <link rel="icon" sizes="any" href={logo}/>
    </Helmet>
    {children}
  </>);
}
