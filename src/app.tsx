import React from 'react';
import './styles/index.scss';

// @ts-ignore
import RemoteHeader from 'ci_modular_header/Header';

export default () => (
  <div className="App">
    <h1>Header Host Test</h1>
    <RemoteHeader />
  </div>
);
