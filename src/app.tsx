import React from 'react';
import {Button} from '@customink/pigment-react';

import './styles/index.scss';

// @ts-ignore
const RemoteHeader = React.lazy(() => import('ci_modular_header/Header'));

export default () => (
  <div className="App">
    <React.Suspense fallback="Loading header...">
      <RemoteHeader />
    </React.Suspense>
    <div>
      <Button
        onClick={() => {
          window.location.href = 'https://reactjs.org';
        }}
        variant="primary">
        Learn React
      </Button>
    </div>
  </div>
);
