import React from 'react';
import { Link } from 'react-router-dom';

const HomePage = () => {
  return (
    <div className="HomePage">
      <h1 className="center-text">Please Choose Your Desired Option</h1>
      <div className="center-list">
        <h3>
          <Link className="center" to="/register">
            Register
          </Link>
        </h3>
      </div>
      <div className="center-list">
        <h3>
          <Link className="center" to="/admin">
            Admin
          </Link>
        </h3>
      </div>
    </div>
  );
};

export default HomePage;
