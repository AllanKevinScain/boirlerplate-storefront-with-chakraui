import { isAuthenticated } from '@oracle-cx-commerce/commerce-utils/selector';

export const getUserAuthStatus = state => {
  const isLoggedIn = isAuthenticated(state);

  return isLoggedIn;
};

export const getUserAddress = state => {
  const data = Object.values(state.profileRepository.contactInfos);
  const formatedData = data[0];

  return formatedData;
};
