import React, {Component} from 'react';
import '../styles/App.css';

class NewStudentForm extends Component{
  render(){
    return(
      <div className="App">
        <div className="App-header">
          <h1> Add New Student </h1>
          <form className="ui large form" style={{width: '30%'}}>
            <div className="ui stacked segment">
              <div className="field">

                  <input
                    type="text"
                    name="firstname"
                    placeholder="First Name"
                  />

              </div>
              <div className="field">
                  <input
                    type="text"
                    name="lastname"
                    placeholder="Last Name"
                  />
              </div>
              <div className="field">

                  <input
                    type="text"
                    name="campus"
                    placeholder="Campus"
                  />

              </div>
              <div className="ui fluid large black submit button"><i className="plus icon" /> Add Student </div>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default NewStudentForm;
