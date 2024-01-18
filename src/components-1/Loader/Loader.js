import React from 'react';
import PropagateLoader from 'react-spinners/PropagateLoader';
import { WrapSpinner } from './Loader.styled';

const Loader = () => {
  return (
    <WrapSpinner>
      <PropagateLoader
        color={'rgb(205, 92, 92)'}
        size={15}
        speedMultiplier={0.4}
        aria-label="Loading Spinner"
        data-testid="loader"
      />
    </WrapSpinner>
  );
};

export default Loader;
