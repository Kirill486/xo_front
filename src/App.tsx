import * as React from 'react';
import {Provider} from 'react-redux';
import './index.css';
import { applicationModel } from './models';
import { ApplicationRouter } from './router';

class App extends React.Component {
  public render() {
    return (
      <Provider
        store={applicationModel}
      >
        <ApplicationRouter />
      </Provider>
      
    );
  }
}

export default App;
