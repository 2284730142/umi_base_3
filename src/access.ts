import { InitialState } from '@/app';

export default (initialState: InitialState) => {
  console.log(initialState);
  const access: any = {
    // home: false,
    // test: false,
    // test1: false,
    // test2: false,
  };
  initialState?.permission?.forEach(im => {
    access[im] = true;
  });
  return access;
}
