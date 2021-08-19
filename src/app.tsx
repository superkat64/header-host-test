import React from 'react';
import './styles/index.scss';

// @ts-ignore
const RemoteHeader = React.lazy(() => import('ci_modular_header/Header'));

export default () => (
  <div className="App">
    <React.Suspense fallback="Loading header...">
      <RemoteHeader />
    </React.Suspense>
  </div>
);
