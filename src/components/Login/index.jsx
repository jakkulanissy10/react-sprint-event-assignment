import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { MdOutlineEmail } from "react-icons/md";
import { TbLockPassword } from "react-icons/tb";
import { signInWithEmailAndPassword } from 'firebase/auth'; 
import { auth } from '../../components/firebase'; 
import './style.css';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [successMessage, setSuccessMessage] = useState('');
  const navigate = useNavigate();

  const handlemailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!email || !password) {
      setErrorMessage('Please fill in all fields.');
      return;
    }

    try {
      // Attempt to sign in the user
      await signInWithEmailAndPassword(auth, email, password);
      setSuccessMessage('User logged in successfully!');
      setErrorMessage('');
      // Wait for the auth state to be updated and then navigate
      navigate('/');  // Use `navigate` from react-router v6
    } catch (error) {
      setErrorMessage(error.message);
      setSuccessMessage('');
    }
  };

  return (
    <div className="Login-container">
      <h1 className="Login-heading">Login</h1>
      <form onSubmit={handleSubmit}>
        <div className="email-wrapper">
                  <MdOutlineEmail className="email-icon" />
                  <input
                    placeholder="email"
                    type="text"
                    className="email-input"
                    onChange={handlemailChange}
                    value={email}
                  />
        </div>
        <br />
        <div className="Login-wrapper">
          <TbLockPassword className="Login-icon" />
          <input
            placeholder="Password"
            type="password"
            className="Login-input"
            onChange={handlePasswordChange}
            value={password}
          />
        </div>
        <br />
        <button type="submit">Login</button>
      </form>

      {errorMessage && <div className="error-message">{errorMessage}</div>}
      {successMessage && <div className="success-message">{successMessage}</div>}

      <h6>
        Create new user?{' '}
        <Link to="/signup">
          <span className="Login-span">Signup</span>
        </Link>
      </h6>
    </div>
  );
};

export default Login;

