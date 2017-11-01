import * as React from 'react';
import Menu from 'semantic-ui-react/dist/commonjs/collections/Menu/Menu';
import Icon from 'semantic-ui-react/dist/commonjs/elements/Icon/Icon';
import Image from 'semantic-ui-react/dist/commonjs/elements/Image/Image';
import { Route, Switch } from 'react-router';
import { BlankPage } from '../blank/BlankPage';
import { RegistrationPage } from '../users/RegistrationPage';

export class AppLayout extends React.Component {
  render() {
    return (
      <div>
        <Menu size="massive" color={'blue'} inverted  borderless style={{borderRadius: 0}}>
          <Menu.Item>
            <Icon name={'content'} size="large"/>
          </Menu.Item>
          <Menu.Item>
            Bug Tracker
          </Menu.Item>
          <Menu.Menu position="right">
            <Menu.Item>
              UserName
            </Menu.Item>
            <Menu.Item>
              <Image src="/assets/profile.jpg" avatar />
            </Menu.Item>
          </Menu.Menu>
        </Menu>
        <Switch>
          <Route exact path='/registration' component={RegistrationPage}  />
          <Route path="/" component={BlankPage}  />
        </Switch>
      </div>
    );
  }
}