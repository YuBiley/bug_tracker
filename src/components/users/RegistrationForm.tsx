import * as React from 'react';
import Header from 'semantic-ui-react/dist/commonjs/elements/Header/Header';
import Form from 'semantic-ui-react/dist/commonjs/collections/Form/Form';
import Button from 'semantic-ui-react/dist/commonjs/elements/Button/Button';

interface IRegistrationFormProps {
  defaultName?: string;
  defaultEmail?: string;
  defaultPassword?: string;
}

interface IRegistrationFormState extends IProfile {
  confirmPassword: string;
  valid: boolean;
}

export class RegistrationForm extends React.Component<IRegistrationFormProps, IRegistrationFormState> {

  state: IRegistrationFormState = {
    name: this.props.defaultName || '',
    email: this.props.defaultEmail || '',
    password: this.props.defaultPassword || '',
    confirmPassword: this.props.defaultPassword || '',
    valid: false,
  };

  render() {
    const {name, email, password, confirmPassword, valid} = this.state;
    return(
      <Form>
        <Header color={'blue'} textAlign={'center'} >Registration</Header>
        <Form.Input
          label={'Name'}
          name={'name'}
          value={name}
          onChange={this.handleChange}
          error={name.length === 0}
        />
        <Form.Input
          label={'email'}
          name={'email'}
          value={email}
          error={email.length === 0}
          onChange={this.handleChange}
        />
        <Form.Input
          label={'password'}
          type={'password'}
          name={'password'}
          value={password}
          error={password.length === 0}
          onChange={this.handleChange}
        />
        <Form.Input
          label={'Repeat password'}
          type={'password'}
          name={'confirmPassword'}
          value={confirmPassword}
          error={password !== confirmPassword}
          onChange={this.handleChange}
        />
        <Button
          basic
          content="Submit"
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
      state.valid = true;
      return state;
    });
  }

  handleSubmit = () => (alert(this.state));

}