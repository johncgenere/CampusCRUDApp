import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { returnCampuses } from '../actions';
import Campus from './Campus'

const CampusListing = ({allCampuses}) => {
  let table = [];

  for(let i = 0; i < allCampuses.length; i++){
    table.push(
                <Campus
                  image={allCampuses[i].image_path}
                  campus={allCampuses[i].name}
                  numOfStudents={allCampuses[i].id}  // id for now but later need num of students field from BE
                />
              );
  }

  return(
    <div className="App">
      <div className="App-header">
        <h1> Campus Listing </h1>
        <div style={{flexDirection: 'row'}}>
          <button className="ui button"><Link to='/'>Home</Link></button>
          <button className="ui button"><Link to='/studentlisting'>Students</Link></button>
        </div>
        <div style={{flexDirection: 'row'}}>
          <h1> All Campuses </h1>
          <button className="ui button">
            <Link to='/newcampus'>
              <i className="plus icon" />
              Add Campus
            </Link>
          </button>
        </div>
        <div className="ui container grid">
          <div className="ui row">
            {table}
          </div>
        </div>
      </div>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    allCampuses: state.allCampuses
  };
}

export default connect(mapStateToProps, { returnCampuses })(CampusListing);
