import React, {Component} from 'react';
import Campus from './Campus'

class CampusListing extends Component {
  render(){
    return(
      <div className="App">
        <div className="App-header">
          <h1> Campus Listing </h1>
          <div style={{flexDirection: 'row'}}>
            <button className="ui button">Home</button>
            <button className="ui button">Campuses</button>
            <button className="ui button">Students</button>
          </div>
          <div style={{flexDirection: 'row'}}>
            <h1> All Campuses </h1>
            <button className="ui button"><i className="plus icon" /> Add Campus </button>
          </div>
          <Campus
            image="http://www.hunter.cuny.edu/admissions/repository/images/classic-hunter-nyc-cabs.jpg"
            campus="Hunter College"
            numOfStudents="10,000"
          />
        </div>
      </div>
    );
  }
}

export default CampusListing;
