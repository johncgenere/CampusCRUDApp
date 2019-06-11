import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { returnStudents } from '../actions';
import Student from './Student';

const StudentListing = ({allStudents}) => {
  let table = [];
  console.log(allStudents);
  for(let i = 0; i < allStudents.length; i++){
    let name = allStudents[i].firstname + ' ' + allStudents[i].lastname;
    table.push(
                <Student
                  image={allStudents[i].image_path}
                  student={name}
                  campus={allStudents[i].campus}
                />
              );
  }

  return(
    <div className="App">
      <div className="App-header">
        <h1> Student Listing </h1>
        <div style={{flexDirection: 'row'}}>
          <button className="ui button"><Link to='/'>Home</Link></button>
          <button className="ui button"><Link to='/campuslisting'>Campuses</Link></button>
        </div>
        <div style={{flexDirection: 'row'}}>
          <h1> All Students </h1>
          <button className="ui button">
            <Link to='/newstudent'>
              <i className="plus icon" />
              Add Student
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
    allStudents: state.allStudents
  };
}

export default connect(mapStateToProps, { returnStudents })(StudentListing);
