import React from 'react';
import ReactDOM from 'react-dom';
import {Logo, Button} from '@customink/pigment-react';

import './styles/index.scss';

const App = () => {
  return (
    <div className="App">
      <header className="App-header">
        <Logo
          variant={'inky'}
          height={'100px'}
          onClick={() => {}}
          className="App-logo"
        />
      </header>
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
};
const mountNode = document.querySelector('#root');
ReactDOM.render(<App />, mountNode);
