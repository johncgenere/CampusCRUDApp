import React, {Component} from 'react';
import StudentListing from './StudentListing';

class Home extends Component {
  render(){
    return(
      <div className="App">
        <div className="App-header">
          <h1> Home </h1>
          <StudentListing />
        </div>
      </div>
    );
  }
}

export default Home;
