import React from 'react';
import PuffLoader from 'react-spinners/PuffLoader';

import './Loader.css';

const Loader = () => {
  return (
    <div id="loader">
      <PuffLoader color={'#208A77'} loading={true} size={80} />
    </div>
  );
};

export default Loader;
