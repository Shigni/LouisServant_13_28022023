import { useState } from 'react';
import { Button } from '../Button/button';
import { useSelector } from 'react-redux';

export function EditNameForm(props) {
  const token = useSelector((state) => state.user.token);

  const [firstName, setFirstname] = useState('');
  const [lastName, setLastname] = useState('');

  const handleFirstnameChange = (event) => setFirstname(event.target.value);

  const handleLastnameChange = (event) => setLastname(event.target.value);

  const handleEditFormSubmit = (event) => {
    event.preventDefault();
    const url = 'http://localhost:3001/api/v1/user/profile';

    const editPayload = {
      firstName: firstName,
      lastName: lastName,
    };

    const requestOptions = {
      method: 'PUT',
      body: JSON.stringify(editPayload),
      headers: {
        'Content-Type': 'application/json',
        Authorization: 'Bearer ' + token,
      },
    };

    fetch(url, requestOptions)
      .then((response) => response.json())
      .then((json) => {
        console.log('/user/profile response to PUT:', json);
        const fullName = firstName + ' ' + lastName;
        props.updateFullName(fullName);
        props.toggleEditionMode();
      });
  };

  return (
    <div className="editFormContainer">
      <form onSubmit={handleEditFormSubmit}>
        <input
          type="text"
          id="first-name"
          value={firstName}
          placeholder="your first name"
          onChange={handleFirstnameChange}
        />

        <input
          type="text"
          id="last-name"
          value={lastName}
          placeholder="your last name"
          onChange={handleLastnameChange}
        />

        <div className="buttonsContainer">
          <Button type="submit" text="Save" handleClick={() => {}} />

          <Button
            type="button"
            text="Cancel"
            handleClick={props.toggleEditionMode}
          />
        </div>
      </form>
    </div>
  );
}
