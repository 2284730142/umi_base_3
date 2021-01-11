import { Loading } from 'umi';
import { GlobalModelState } from './global';

export interface ConnectState {
  loading?: Loading;
  global?: GlobalModelState;
}
