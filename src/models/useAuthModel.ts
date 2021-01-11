import { useModel } from 'umi';
import { useState, useCallback } from 'react';

export default function useAuthModel() {
  const [user, setUser] = useState(null);
  const [isLogin, setIsLogin] = useState(false);
  const { initialState, setInitialState } = useModel('@@initialState');
  const signIn = useCallback((account) => {
    if (!initialState?.currentUser) {
      setInitialState({ ...initialState, currentUser: account });
    }
    sessionStorage.setItem('testUser', JSON.stringify(account));
    setUser(account);
    setIsLogin(true);
  }, []);
  const signOut = useCallback(() => {
    setInitialState({ ...initialState, currentUser: null });
    sessionStorage.setItem('testUser', '');
    setUser(null);
    setIsLogin(false);
  }, []);
  return {
    user,
    signIn,
    signOut,
    isLogin,
  };
}
