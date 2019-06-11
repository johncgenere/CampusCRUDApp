import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return(
    <div className="App">
      <div className="App-header">
        <h1> View Campuses or Students </h1>
        <button className="ui button" style={{margin: '3%'}}><Link to="/campuslisting">View Campuses</Link></button>
        <button className="ui button"><Link to="/studentlisting"> View Students </Link></button>
      </div>
    </div>
  );
}

export default Home
