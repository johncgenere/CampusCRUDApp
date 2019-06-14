import React, {Component} from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { returnCurrentEditStudent } from '../actions';
import Campus from './Campus';
import url from '../apis/BackEnd';

class SingleViewStudent extends Component{
  constructor(props){
    super(props);

    this.state = {
      selectedNewCampus: '',
      student: {},
      studentsCampus: {}
    }

    this.onEdit = this.onEdit.bind(this);
    this.onDelete = this.onDelete.bind(this);
    this.handleCampusChange = this.handleCampusChange.bind(this);
    this.onSubmitCampusChange = this.onSubmitCampusChange.bind(this);

    url.get('/students/'+this.props.student)
      .then(response => {
        let student = response.data;
        this.setState({student});
      })
      .catch(err => {
        console.log(err);
      })

    url.get('/colleges/'+this.student.campusId)
      .then(response => {
        console.log(response);
      })
      .catch(err => {
        console.log(err);
      })
  }

  onEdit = (event) => {
    console.log('Edit');
  }

  onDelete = (event) => {
    console.log('delete');
  }

  handleCampusChange = (e) => {
    this.setState({selectedNewCampus:e.target.value});
  }

  onSubmitCampusChange = (event, campus) => {
    if(this.state.selectedNewCampus !== ''){
      let student = this.state.student
      url.put('http://localhost:7000/students/'+student.id, {
        "firstname": student.firstName,
        "lastname": student.lastName,
        "image": student.url,
        "email": student.email,
        "gpa": student.gpa,
        "collegeID": this.state.selectedNewCampus
      }).then(response => {
        console.log(response);
      }).catch(err => {
        console.log(err);
      })
    } else {
      window.alert('Need to select a school from the dropdown to change campus!');
    }
  }

  render(){
    let table = [];
    let allCampuses = this.props.allCampuses;
    let student = this.state.student;
    let studentName = student.firstName + student.lastName;

    for(let i = 0; i < allCampuses.length; i++){
      let campus = allCampuses[i];
      table.push(
                  <option value={campus.id}>{campus.name}</option>
                );
    }

    return(
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
          <img src={student.image_path} alt={studentName} />
          <h1> {studentName} </h1>
          <h3> GPA: {student.gpa} </h3>
          <p> This student is registered to a campus. </p>
          <select className="ui dropdown"
                  value={this.state.selectedNewCampusValue}
                  onChange={this.handleCampusChange}
                  style={{fontSize: '20px', width: '30%', height: '20%', borderRadius: '5px'}}>
            <option value="" style= {{color: 'grey'}}>Select campus...</option>
            {table}
          </select>
          <button className="ui red button">
            Change Campus
          </button>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  console.log(state);
  return {
    student: state.getSingleStudent,
    allCampuses: state.getCampuses
  };
}

export default connect(mapStateToProps, {returnCurrentEditStudent})(SingleViewStudent);
