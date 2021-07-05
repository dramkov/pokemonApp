import React from 'react';
import PuffLoader from 'react-spinners/PuffLoader';

const Loader = () => {
  return (
    <div id='loader'>
      <PuffLoader color={'#208A77'} loading={true} size={80} />
    </div>
  );
};

export const MemoizedLoader = React.memo(Loader);
