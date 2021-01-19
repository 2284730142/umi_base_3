import { ConnectState } from '@/models/connect';
import { getBrands } from '@/services/test.service';
import { useAccess } from '@@/plugin-access/access';
import React from 'react';
import { connect, useDispatch, useRequest } from 'umi';
import { Button } from 'antd';
import styles from './index.less';

export default connect(({ global }: ConnectState) => ({ global }))(({ global }) => {

  console.log(global);

  const dispatch = useDispatch();
  const access = useAccess();
  console.log(access);

  const getBrandsFn = useRequest(() => getBrands({ currentPage: 1, pageSize: 10 }), {
    manual: true,
    onSuccess: (res: any) => {
      console.log(res);
    },
    onError: (err: any) => {
      console.log(err);
    },
  });

  return (
    <div>
      <Button onClick={() => {
        dispatch({
          type: 'global/changeGlobalState',
          payload: {
            global: 'NICE',
          },
        });
      }}>
        修改全局状态
      </Button>
      <Button onClick={() => {
        getBrandsFn.run();
      }}>
        发起请求
      </Button>
      <Button onClick={() => {
        getBrandsFn.cancel();
      }}>
        停止请求
      </Button>
      <h1 className={styles.title}>{`Page index${JSON.stringify(global)}`}</h1>
    </div>
  );
});
