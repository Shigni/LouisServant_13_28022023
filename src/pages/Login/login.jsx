import styled from 'styled-components';

import { LoginForm } from '../../components';

export function Login() {
  return (
    <LoginMain>
      <LoginFormContainer>
        <i className="fa fa-user-circle"></i>

        <h2>Sign In</h2>

        <LoginForm />
      </LoginFormContainer>
    </LoginMain>
  );
}

const LoginMain = styled.main`
  padding: 3rem;
  background: #12002b;
`;

const LoginFormContainer = styled.section`
  width: 20rem;
  margin: 0 auto;
  padding: 2rem;
  border-radius: 0.25rem;
  background: white;
  i {
    color: #222;
    font-size: 5rem;
  }
`;
