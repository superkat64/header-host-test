import * as React from 'react';
import * as ReactDOM from 'react-dom';
import {Logo, Button} from '@customink/pigment-react';
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
        <Button
          onClick={() => {
            window.location.href = 'https://reactjs.org';
          }}
          variant={'link'}>
          Learn React
        </Button>
      </header>
    </div>
  );
};
const mountNode = document.querySelector('#root');
ReactDOM.render(<App />, mountNode);
