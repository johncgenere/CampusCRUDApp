import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

class NewStudentForm extends Component{
  constructor(props){
      super(props);

      this.state = {
        firstName: '',
        lastName: '',
        gpa: '',
        email: '',
        url: '',
        collegeID: ''
      }

      this.handleFirstNameInput = this.handleFirstNameInput.bind(this);
      this.handleLastNameInput = this.handleLastNameInput.bind(this);
      this.handleGPAInput = this.handleGPAInput.bind(this);
      this.handleURLInput = this.handleURLInput.bind(this);
      this.handleEmailInput = this.handleEmailInput.bind(this);
      this.handleCollegeIDInput = this.handleCollegeIDInput.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleFirstNameInput = (e) => {
    this.setState({firstName: e.target.value});
  }

  handleLastNameInput = (e) => {
    this.setState({lastName: e.target.value});
  }

  handleGPAInput = (e) => {
    this.setState({gpa: e.target.value});
  }

  handleURLInput = (e) => {
    this.setState({url: e.target.value});
  }

  handleEmailInput = (e) => {
    this.setState({email: e.target.value})
  }

  handleCollegeIDInput = (e) => {
    this.setState({collegeID: e.target.value})
  }

  handleSubmit = (event) => {
    axios.post('http://localhost:7000/addStudents',{
      'firstName': this.state.firstName,
      'lastName': this.state.lastName,
      'url': this.state.url,
      'gpa': this.state.gpa,
      'email': this.state.email,
      'collegeID': this.state.collegeID
    }).then(response => {
      console.log(response);
    }).catch(err => {
      console.log(err);
    });

    window.location.replace('/StudentListing');
  }

  render(){
    return(
      <div className="App">
        <div className="App-header">
          <div style={{flexDirection: 'row', margin: '1%'}}>
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
          <form className="ui large form" style={{width: '30%'}}>
            <div className="ui stacked segment">
            <h1 style={{color: 'black'}}> Add New Student </h1>
              <div className="field">
                  <input
                    type="text"
                    name="firstname"
                    placeholder="Student First Name"
                    onChange={this.handleFirstNameInput}
                  />
              </div>
              <div className="field">
                  <input
                    type="text"
                    name="lastname"
                    placeholder="Student Last Name"
                    onChange={this.handleLastNameInput}
                  />
              </div>
              <div className="field">
                  <input
                    type="text"
                    name="email"
                    placeholder="Student Email"
                    onChange={this.handleEmailInput}
                  />
              </div>
              <div className="field">
                  <input
                    type="text"
                    name="gpa"
                    placeholder="Student GPA"
                    onChange={this.handleGPAInput}
                  />
              </div>
              <div className="field">
                  <input
                    type="text"
                    name="url"
                    placeholder="Student URL"
                    onChange={this.handleURLInput}
                  />
              </div>
              <div className="field">
                  <input
                    type="text"
                    name="collegeID"
                    placeholder="Campus ID (if possible)"
                    onChange={this.handleCollegeIDInput}
                  />
              </div>
              <Link to='/campuslisting'>
                <div className="ui fluid large black submit button" onClick={this.handleSubmit}>
                  <i className="plus icon" />
                  Add Student
                </div>
              </Link>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default NewStudentForm;
