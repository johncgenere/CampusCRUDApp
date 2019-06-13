import React, {Component} from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { allStudentsThunk } from '../thunks';
import Student from './Student';

class StudentListing extends Component {
  componentDidMount(){
    this.props.getAllStudents();
  }

  render(){
    let table = [];
    let allStudents = this.props.allStudents;

    for(let i = 0; i < allStudents.length; i++){
      let name = allStudents[i].firstname + ' ' + allStudents[i].lastname;
      table.push(
                  <Student
                    image={allStudents[i].image_path}
                    student={name}
                    campus={allStudents[i].campus}
                    id={allStudents[i].id}
                  />
                );
    }

    if(allStudents.length === undefined || allStudents.length === 0){
      return(
        <div className="App">
          <div className="App-header">
            <h1> Student Listing </h1>
            <div style={{flexDirection: 'row'}}>
              <Link to='/'><button className="ui button">Home</button></Link>
              <Link to='/campuslisting'><button className="ui button">Campuses</button></Link>
            </div>
            <div style={{flexDirection: 'row'}}>
              <h1> All Students </h1>
            </div>
            <p style={{marginTop: '1.5%'}}> There are no students registered in the database.</p>
            <Link to='/newstudent'>
              <button className="ui button">
                <i className="plus icon" />
                Add Student
              </button>
            </Link>
          </div>
        </div>
      );
    }

    return(
      <div className="App">
        <div className="App-header">
          <h1> Student Listing </h1>
          <div style={{flexDirection: 'row'}}>
            <Link to='/'><button className="ui button">Home</button></Link>
            <Link to='/campuslisting'><button className="ui button">Campuses</button></Link>
          </div>
          <div style={{flexDirection: 'row'}}>
            <h1> All Students </h1>
            <Link to='/newstudent'>
              <button className="ui button">
                <i className="plus icon" />
                Add Student
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
}

const mapStateToProps = (state) => {
  return {
    allStudents: state.getStudents
  };
}

const mapDispatchToProps = (dispatch) => {
  return {
    getAllStudents: () => dispatch(allStudentsThunk())
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(StudentListing);
