import { useState } from 'react';
import LoginButton from './LoginBtn';
import RegisterButton from './RegisterBtn';
import { Link } from 'react-router-dom';

export default function ToggleButton() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const login = "/login";
  const register = "/register";

  return (
    <>
      <div>
        {isLoggedIn ?
          <Link to={login}>
            <LoginButton changeState={() => setIsLoggedIn(false)} />
          </Link> :
          <Link to={register}>
            <RegisterButton changeState={() => setIsLoggedIn(true)} />
          </Link>
        }
      </div>
    </>
  );
}