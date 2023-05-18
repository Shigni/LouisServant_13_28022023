import { useState } from 'react';
import { Navigate } from 'react-router';
import { useDispatch, useSelector } from 'react-redux';
import { setToken } from '../../redux/reducers';

import './userProfile.scss';

import { AccountCards, Button, EditNameForm } from '../../components';

import { USER_ACCOUNTS } from '../../data/userAccounts';

export function UserProfile() {
  const [fullName, setFullName] = useState('Tony Stark');

  const dispatch = useDispatch();
  const token = useSelector((state) => state.user.token);
  const localToken = localStorage.getItem('token');
  const [editionMode, setEditionMode] = useState(false);

  const toggleEditionMode = () => setEditionMode(!editionMode);
  if (localToken && !token) {
    dispatch(setToken(localToken));
  }
  if (!token) return <Navigate to="/" />;

  return (
    <div className="userProfileMain">
      <div className="userProfileContainer">
        <h2>Welcome back</h2>

        <div className="editionContainer">
          {editionMode ? '' : <h3 className="name">{fullName}!</h3>}

          {editionMode ? (
            <EditNameForm
              toggleEditionMode={toggleEditionMode}
              updateFullName={setFullName}
            />
          ) : (
            <Button
              className="btn--edit"
              type="button"
              text="Edit Name"
              center={true}
              handleClick={toggleEditionMode}
            />
          )}
        </div>

        <h2 className="sr-only">Accounts</h2>

        {USER_ACCOUNTS.map(({ accountName, amount, balanceType }, index) => (
          <AccountCards
            key={`account-card-${index}`}
            accountName={accountName}
            amount={amount}
            balanceType={balanceType}
          />
        ))}
      </div>
    </div>
  );
}
