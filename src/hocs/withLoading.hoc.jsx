import React, { Suspense } from 'react';
import { AppLoading } from '../components/common/loadinges/AppLoading';

export const withLoading = (Component) => {
  return (props) => (
    <Suspense fallback={<AppLoading />}>
      <Component {...props} />
    </Suspense>
  );
};
