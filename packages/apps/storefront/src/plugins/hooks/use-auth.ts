import { useCallback, useContext } from 'react';
import { useSelector } from '@oracle-cx-commerce/react-components/provider';
import { StoreContext } from '@oracle-cx-commerce/react-ui/contexts';
import { getUserAuthStatus } from '@plugins/selectors';
import { StoreInterface } from '@plugins/types';

export function useAuth() {
  const { action } = useContext<StoreInterface>(StoreContext);
  const isLoggedIn: boolean = useSelector(getUserAuthStatus);

  const login = useCallback(
    data => {
      return action('login', data);
    },
    [action]
  );

  const logout = useCallback(() => {
    return action('logout');
  }, [action]);

  return {
    login,
    logout,
    isLoggedIn
  };
}
