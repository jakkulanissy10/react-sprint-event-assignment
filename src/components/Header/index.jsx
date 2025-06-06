import {Link} from 'react-router-dom';
import { GiHamburgerMenu } from "react-icons/gi";
import { LuSearch } from "react-icons/lu"; // adjust path if needed
import { MdFavoriteBorder } from "react-icons/md";
import { CiLocationOn } from "react-icons/ci"; 
import { useNavigate } from 'react-router-dom';
import { signOut } from 'firebase/auth';
import { auth } from '../../components/firebase';
import LiveShows from '../LiveShows';
import Streams from '../Streams';
import Movies from '../Movies';
import Plays from '../Plays';
import Events from '../Events';
import Sports from '../Sports';
import Activities from '../Activities';
import './style.css';

const Header = () => {
  const navigate = useNavigate(); // Hook for navigation

  const handleLogout = async () => {
    try {
      await signOut(auth); // Sign out the user
      navigate('/login');  // After logout, go to login page
    } catch (error) {
      console.error('Error signing out:', error);
    }
  };

  return (
    <div>
     <div className = "header-container">
            <p className = "logo-color">BookUsNow</p> 
            <div className = "hamburger-cont">
              <GiHamburgerMenu size = {15} />
              <h6>Categories</h6>
            </div>
              <div className = "search-wrapper">
              <input placeholder = "DJI Phanton" type = "search" className = "search-input"/>
              <LuSearch className = "search-icon"/>
              </div>
             
              <div className = "favorite-cont">
              <MdFavoriteBorder />
                <p>Favorites</p>
             
              </div>
            
            <button onClick={handleLogout} className = "sign-out">Sign In</button>
      </div>
      <div className = "navbar-container">
      <div className = "location-cont"> 
      <CiLocationOn />
      <h6>Mumbai, India  &gt;
      </h6> 
      </div>
    <nav className="header"> 
      
    <li>
        <Link to="/liveShows">Live shows</Link>
        <Link to="/streams">Streams</Link>
        <Link to="/movies">Movies</Link>    
        <Link to="/plays">Plays</Link>
        <Link to="/events">events</Link>
        <Link to="/sports">Sports</Link>
        <Link to="/activities">Activities</Link>
    </li>
        </nav>
        </div>
        </div>
  );
}

export default Header;