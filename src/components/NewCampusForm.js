import React, {Component} from 'react';

class NewCampusForm extends Component{
  render(){
    return(
      <div>
        <form className="ui large form" style={{width: '30%'}}>
          <div className="ui stacked segment">
          <h1> Add New Campus </h1>
            <div className="field">
                <input
                  type="text"
                  name="campus"
                  placeholder="Campus"
                />
            </div>
            <div className="ui fluid large black submit button"><i className="plus icon" /> Add Campus </div>
          </div>
        </form>
      </div>
    );
  }
}

export default NewCampusForm;
