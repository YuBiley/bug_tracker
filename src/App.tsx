import * as React from 'react';
import { Route, Switch } from 'react-router';
import { BrowserRouter } from 'react-router-dom';
import { AppLayout, SignInLayout } from './components/layouts';

class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/sign_in" component={SignInLayout}/>
          <Route path="/"  component={AppLayout}/>
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
