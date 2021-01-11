import { ConnectState } from '@/models/connect';
import { useAccess } from '@@/plugin-access/access';
import React from 'react';
import { connect, useDispatch } from 'umi';
import { Button } from 'antd';
import styles from './index.less';

export default connect(({ global }: ConnectState) => ({ global }))(({ global }) => {

  console.log(global);

  const dispatch = useDispatch();
  const access = useAccess();
  console.log(access);

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
      <h1 className={styles.title}>{`Page index${JSON.stringify(global)}`}</h1>
    </div>
  );
});
