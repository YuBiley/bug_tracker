import * as React from 'react';
import Form from 'semantic-ui-react/dist/commonjs/collections/Form/Form';
import Header from 'semantic-ui-react/dist/commonjs/elements/Header/Header';
import Button from 'semantic-ui-react/dist/commonjs/elements/Button/Button';

interface ISignInProps {
  defaultLogin?: string;
  defaultPassword?: string;
  onSubmit?: void;
}

interface ISignInState extends ISignIn {
  valid: boolean;
}

export class SignInForm extends React.Component<ISignInProps, ISignInState> {

  state: ISignInState = {
    login: this.props.defaultLogin || '',
    password: this.props.defaultPassword || '',
    valid: false,
  };

  render() {
    const {login, password, valid} = this.state;
    return (
      <Form>
        <Header color={'blue'} textAlign={'center'} >Sign In</Header>
        <Form.Input
          label={'Name or email'}
          name={'login'}
          value={login}
          onChange={this.handleChange}
          error={login.length === 0}
        />
        <Form.Input
          label={'Password'}
          type={'password'}
          name={'password'}
          value={password}
          error={password.length === 0}
          onChange={this.handleChange}
        />
        <Button
          basic
          content="Sign In"
          color={'blue'}
          disabled={!valid}
          onClick={this.handleSubmit}
        />
      </Form>
    );
  }

  handleChange = ({currentTarget}: React.SyntheticEvent<HTMLInputElement>) => {
    this.setState((state) => {
      state[currentTarget.name] = currentTarget.value;
      state.valid = state.login.length !== 0 && state.password.length !== 0;
      return state;
    });
  }

  handleSubmit = () => {
    if (!!this.state.valid) {
      const { login, password } = this.state;
      if (this.props.onSubmit) { this.props.onSubmit(login, password); }
    } else {
      alert('invalid options!');
    }
  }
}