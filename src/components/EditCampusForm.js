import React, {Component} from 'react';

class EditCampusForm extends Component{
  render(){
    return(
      <div>
        <form className="ui large form" style={{width: '30%'}}>
          <div className="ui stacked segment">
          <h1> Edit Campus Information </h1>
            <div className="field">
                <input
                  type="text"
                  name="campus"
                  placeholder="Campus"
                />
            </div>
            <div className="ui fluid large black submit button"><i className="cogs icon" /> Edit Campus </div>
          </div>
        </form>
      </div>
    );
  }
}

export default EditCampusForm;
