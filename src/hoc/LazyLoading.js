import React from 'react';
import Preloader from '../components/content/common/preloader';

const LazyLoading = (Component, props) => {
  return (
    <React.Suspense fallback={Preloader}>
      <Component {...props} />
    </React.Suspense>
  );
};

export default LazyLoading;