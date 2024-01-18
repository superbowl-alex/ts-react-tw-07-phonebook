import { FC } from 'react';
import PropagateLoader from 'react-spinners/PropagateLoader';

const Loader: FC = () => {
  return (
    <div className='flex justify-center items-center mb-6'>
      <PropagateLoader
        color={'rgb(205, 92, 92)'}
        size={15}
        speedMultiplier={0.4}
        aria-label="Loading Spinner"
        data-testid="loader"
      />
    </div>
  );
};

export default Loader;
