import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import { setEmail, setToken } from '../../redux/reducers';

import ArgentBankLogo from '../../assets/argentBankLogo.png';

export function Header() {
  const token = useSelector((state) => state.user.token);
  const dispatch = useDispatch();

  const logout = () => {
    dispatch(setEmail(''));
    dispatch(setToken(''));
  };

  return (
    <div className="header-container">
      <div className="main-nav">
        <Link to="/">
          <div className="LogoBox">
            <img src={ArgentBankLogo} alt="Argent Bank" />
          </div>
        </Link>

        <h1 className="sr-only">Argent Bank</h1>

        <ul className="main-navList">
          <li>
            <i className="fa fa-user-circle"></i>

            {token ? (
              <Link className="header-link" to="/profile">
                [ USER NAME ]
              </Link>
            ) : (
              <Link className="header-link" to="/login">
                Sign In
              </Link>
            )}
          </li>

          {token ? (
            <li>
              <i className="fas fa-sign-out-alt"></i>

              <Link className="header-link" to="/" onClick={logout}>
                Sign Out
              </Link>
            </li>
          ) : (
            ''
          )}
        </ul>
      </div>
    </div>
  );
}
