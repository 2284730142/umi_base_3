import React from 'react';
import { Button } from 'antd';
import _ from 'lodash';

export default ({ onClick, ...reset }: any) => {
  return onClick ? <Button onClick={_.debounce(onClick, 200)} {...reset}/> :
    <Button {...reset}/>;
}
