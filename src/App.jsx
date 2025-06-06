import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';  
import Login from './components/Login';
import Signup from './components/Signup';  
import Home from './components/Home'; 
import Header from './components/Header';
import Activites from './components/Activities';
import Events from './components/Events';
import LiveShows from './components/LiveShows';
import Movies from './components/Movies';
import Plays from './components/Plays';
import Streams from './components/Streams'; 
import Sports from './components/Sports';
import './App.css'; 


const AppContent = () => {
  const location = useLocation();
  const hideHeader = location.pathname === '/login' || location.pathname === '/signup';

  return (
    <>
      {!hideHeader && <Header />}
      <Routes>
        <Route path="/login" element={<Login />} /> 
        <Route path="/signup" element={<Signup />} /> 
        <Route path="/" element={<Home />} /> 
        <Route path="/activities" element={<Activites />} />
        <Route path="/events" element={<Events />} />
        <Route path="/live-shows" element={<LiveShows />} />
        <Route path="/movies" element={<Movies />} />
        <Route path="/plays" element={<Plays />} />
        <Route path="/streams" element={<Streams />} />
        <Route path="/sports" element={<Sports />} />     
      </Routes>
    </>
  );
};

const App = () => {
  return (
    <Router>
      <AppContent />
    </Router>
  );
};

export default App;
