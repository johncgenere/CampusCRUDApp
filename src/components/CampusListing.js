import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { returnCampuses } from '../actions';
import Campus from './Campus'

// allCampuses === this.props.allCampuses
const CampusListing = ({allCampuses}) => {
  let table = [];

  for(let i = 0; i < allCampuses.length; i++){
    table.push(
                <Campus
                  image={allCampuses[i].image_path}
                  campus={allCampuses[i].name}
                  numOfStudents={allCampuses[i].population}
                  id={allCampuses[i].id}
                />
              );
  }



  if(allCampuses.length === undefined || allCampuses.length === 0){
    return(
      <div className="App">
        <div className="App-header">
          <h1> Campus Listing </h1>
          <div style={{flexDirection: 'row'}}>
            <Link to='/'><button className="ui button">Home</button></Link>
            <Link to='/studentlisting'><button className="ui button">Students</button></Link>
          </div>
          <div style={{flexDirection: 'row'}}>
            <h1> All Campuses </h1>
          </div>
          <p style={{marginTop: '1.5%'}}> There are no campuses registered in the database.</p>
          <Link to='/newcampus'>
            <button className="ui button">
              <i className="plus icon" />
              Add Campus
            </button>
          </Link>
        </div>
      </div>
    );
  }

  return(
    <div className="App">
      <div className="App-header">
        <h1> Campus Listing </h1>
        <div style={{flexDirection: 'row'}}>
          <Link to='/'><button className="ui button">Home</button></Link>
          <Link to='/studentlisting'><button className="ui button">Students</button></Link>
        </div>
        <div style={{flexDirection: 'row'}}>
          <h1> All Campuses </h1>
          <Link to='/newcampus'>
            <button className="ui button">
              <i className="plus icon" />
              Add Campus
            </button>
          </Link>
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
