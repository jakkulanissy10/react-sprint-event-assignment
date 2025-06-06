import { useState } from 'react';  // useState hook for state management
import { Link, useNavigate } from 'react-router-dom';  // useNavigate hook
import { LuUserRound } from "react-icons/lu";
import { MdOutlineEmail } from "react-icons/md";
import { TbLockPassword } from "react-icons/tb";
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../../components/firebase';
import './style.css';

const Signup = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [successMessage, setSuccessMessage] = useState('');
  
  const navigate = useNavigate();  // useNavigate hook to handle navigation
  
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!email || !password || !username) {
      setErrorMessage('Please fill in all fields.');
      return;
    }

    try {
      // Create user with email and password
      await createUserWithEmailAndPassword(auth, email, password);
      setSuccessMessage('User signed up successfully!');
      setErrorMessage(''); // Clear any previous errors
      navigate('/login');  // Use navigate to redirect to login page
    } catch (error) {
      setErrorMessage(error.message);
      setSuccessMessage('');
    }
  };

  return (
    <div className="signup-container">
      <h1 className="signup-heading">Sign Up</h1>
      <form onSubmit={handleSubmit}>
        <div className="user-wrapper">
          <LuUserRound className="user-icon" />
          <input
            placeholder="username"
            type="text"
            className="user-input"
            onChange={(e) => setUsername(e.target.value)}
            value={username}
          />
        </div>
        <br />
        <div className="email-wrapper">
          <MdOutlineEmail className="email-icon" />
          <input
            placeholder="email"
            type="text"
            className="email-input"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
          />
        </div>
        <br />
        <div className="password-wrapper">
          <TbLockPassword className="password-icon" />
          <input
            placeholder="password"
            type="password"
            className="password-input"
            onChange={(e) => setPassword(e.target.value)}
            value={password}
          />
        </div>
        <br />
        <button type="submit">Signup</button>
      </form>

      {errorMessage && <div className="error-message">{errorMessage}</div>}
      {successMessage && <div className="success-message">{successMessage}</div>}

      <h6>
        Already a user?{' '}
        <Link to="/login">
          <span className="signup-span">Login</span>
        </Link>
      </h6>
    </div>
  );
};

export default Signup;

