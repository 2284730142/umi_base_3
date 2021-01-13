import React from 'react';
import { Button } from 'antd';
import _ from 'lodash';

export default ({ onClick, ...reset }: any) => {
  return <Button onClick={_.debounce(onClick, 400)} {...reset}/>;
}
