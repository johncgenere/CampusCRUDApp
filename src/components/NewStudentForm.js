import React, {Component} from 'react';

class NewStudentForm extends Component{
  render(){
    return(
      <div>
        <form className="ui large form" style={{width: '30%'}}>
          <div className="ui stacked segment">
          <h1> Add New Student </h1>
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
    );
  }
}

export default NewStudentForm;
