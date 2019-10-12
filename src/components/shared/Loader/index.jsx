import React from 'react';
import LoadingOverlay from 'react-loading-overlay';
import Spinner from 'react-bootstrap/Spinner';
import logo from '../../../images/logo.png';
import { randomTextGenerator } from '../../../helper';

const Loader = ({ children, isLoading }) => {
  return (
    <LoadingOverlay
      active={isLoading}
      spinner={<img alt="loader" className="loader-img" src={logo} />}
      fadeSpeed={200}
      text={
        <h4 className="loader-text">
          <Spinner animation="border" size="sm" />
          {randomTextGenerator()}
        </h4>
      }
    >
      {children}
    </LoadingOverlay>
  );
};

export default Loader;
