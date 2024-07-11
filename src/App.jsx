
import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './Components/Navbar/Navbar';
import Login from './View/Login/Login';

const App = () => {
  const location = useLocation();
  const shouldShowNavbar = location.pathname !== '/';

  return (
    <div className="App">
      {shouldShowNavbar && <Navbar />}
      <Routes>
        <Route path="/" element={<Login />} />
        {/* <Route path="/admissions" element={<Admissions />} />
        <Route path="/passouts" element={<Passouts />} />
        <Route path="/filter" element={<Filter />} /> */}
      </Routes>
    </div>
  );
};

const AppWrapper = () => (
  <Router>
    <App />
  </Router>
);

export default AppWrapper;
