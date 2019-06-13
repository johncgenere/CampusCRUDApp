import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return(
    <div className="App">
      <div className="App-header">
        <h1> View Campuses or Students </h1>
        <Link to="/campuslisting">
          <button className="ui button" style={{marginBottom: '10%'}}>
            View Campuses
          </button>
        </Link>
        <Link to="/studentlisting">
          <button className="ui button">
            View Students
          </button>
        </Link>
      </div>
    </div>
  );
}

export default Home
