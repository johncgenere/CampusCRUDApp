import React, {Component} from 'react';

class NewCampusForm extends Component{
  render(){
    return(
      <form className="ui large form" onKeyPress={this.onKeyPress}>
        <div className="ui stacked segment">
          <div className="field">
            <div className="ui left icon input">
              <i className="user icon"></i>
              <input
                type="text"
                name="username"
                placeholder="Username"
                onChange={this.handleUsernameInput}
              />
            </div>
          </div>
          <div className="field">
            <div className="ui left icon input">
              <i className="lock icon"></i>
              <input
                type="password"
                name="password"
                placeholder="Password"
                onChange={this.handlePasswordInput}
              />
            </div>
          </div>
          <div className="ui fluid large black submit button" onClick={this.handleLogin}>Login</div>
        </div>
        <div className="ui error message"></div>
      </form>
    );
  }
}

export default NewCampusForm;
