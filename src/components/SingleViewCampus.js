import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { returnCurrentEditCampus } from '../actions';
import Student from './Student';
import NewStudentForm from './NewStudentForm';

class SingleViewCampus extends Component {
  constructor(props){
    super(props);

    this.state = {
      campus: {},
      students: this.props.students
    }

    this.onEdit = this.onEdit.bind(this);
    this.onDelete = this.onDelete.bind(this);

    axios.get('http://localhost:7000/college/'+this.props.campus)
      .then(response => {
        let campus = response.data;
        this.setState({campus});
      })
      .catch(err => {
        console.log(err);
      })
  }

  onEdit = (event) => {
    this.props.returnCurrentEditCampus(this.state.campus.id);
  }

  onDelete = (event) => {
    axios.delete('http://localhost:7000/college/'+this.state.campus.id)
      .then(response => {
        console.log(response);
      })
      .catch(err => {
        console.log(err);
      })
    window.location.replace('/campuslisting')
  }

  render(){
    let view = this.state.campus;
    let students = this.state.students;

    let table = [];
    console.log(view);

    // After thunks are introduced, I can do this by getting the student key length
    if (students.length === 0 || students.length === undefined) {
      table.push(<h1>There are no students currently registered to this campus.</h1>);
    } else {
        console.log(view);
        for(let i = 0; i < students.length; i++){
          if(students[i].collegeId === view.id){
            let name = students[i].firstname + ' ' + students[i].lastname;
            table.push(
                        <Student
                          image={students[i].image_path}
                          student={name}
                          campus={students[i].campus}
                          id={students[i].id}
                        />
                      );
          }
        }
    }

    return (
      <div className="App">
        <div className="App-header">
          <div style={{flexDirection: 'row', margin: '2%'}}>
            <Link to='/'>
              <button className="ui button">
                Home
              </button>
            </Link>
            <Link to='/campuslisting'>
              <button className="ui button">
                Campuses
              </button>
            </Link>
            <Link to='/studentlisting'>
              <button className="ui button">
                Students
              </button>
            </Link>
          </div>
          <h1>{view.name}</h1>
          <div style={{flexDirection: 'row'}}>
            <img src={view.image_path} alt={view.name}/>
            <div>
              <p>Address: {view.address}</p>
              <p>{view.description}</p>
            </div>
          </div>
          <Link to='/editcampus'>
            <button className="ui button" onClick={this.onEdit}>
              Edit
            </button>
          </Link>
          <button className="ui button" onClick={this.onDelete}>
            Delete
          </button>
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
    campus: state.campus,
    students: state.allStudents
  };
}

export default connect(mapStateToProps, {returnCurrentEditCampus})(SingleViewCampus);
