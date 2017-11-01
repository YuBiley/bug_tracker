import * as React from 'react';
import Menu from 'semantic-ui-react/dist/commonjs/collections/Menu/Menu';
import Icon from 'semantic-ui-react/dist/commonjs/elements/Icon/Icon';
import Image from 'semantic-ui-react/dist/commonjs/elements/Image/Image';
import Grid from 'semantic-ui-react/dist/commonjs/collections/Grid/Grid';
import Segment from 'semantic-ui-react/dist/commonjs/elements/Segment/Segment';
import { SignInForm } from '../users/SignInForm';

export class SignInLayout extends React.Component {
  render() {
    return (
      <div>
        <Menu size="massive" color={'blue'} inverted borderless style={{borderRadius: 0}}>
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
        <Grid container>
          <Grid.Row >
            <Grid.Column width={4}/>
            <Grid.Column width={8}>
              <Segment>
                <SignInForm/>
              </Segment>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </div>
    );
  }
}