import './login.scss';
import { LoginForm } from '../../components';

export function Login() {
  return (
    <div className="loginMain">
      <div className="loginFormContainer">
        <i className="fa fa-user-circle"></i>

        <h2>Sign In</h2>

        <LoginForm />
      </div>
    </div>
  );
}
