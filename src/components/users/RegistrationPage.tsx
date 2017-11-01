import * as React from 'react';
import Grid from 'semantic-ui-react/dist/commonjs/collections/Grid/Grid';
import Segment from 'semantic-ui-react/dist/commonjs/elements/Segment/Segment';
import { RegistrationForm } from './RegistrationForm';

export class RegistrationPage extends React.Component {
  render() {
    return(
      <Grid container>
        <Grid.Row >
          <Grid.Column width={4}/>
          <Grid.Column width={8}>
            <Segment>
              <RegistrationForm/>
            </Segment>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    );
  }
}