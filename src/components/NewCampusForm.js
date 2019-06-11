import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

class NewCampusForm extends Component{
  constructor(props){
      super(props);

      this.state = {
        campus: '',
        location: '',
        url: '',
        description: ''
      }

      this.handleCampusInput = this.handleCampusInput.bind(this);
      this.handleLocationInput = this.handleLocationInput.bind(this);
      this.handleURLInput = this.handleURLInput.bind(this);
      this.handleDescriptionInput = this.handleDescriptionInput.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleCampusInput = (e) => {
    this.setState({campus: e.target.value});
  }

  handleLocationInput = (e) => {
    this.setState({location: e.target.value});
  }

  handleURLInput = (e) => {
    this.setState({url: e.target.value});
  }

  handleDescriptionInput = (e) => {
    this.setState({description: e.target.value});
  }

  handleSubmit = (event) => {
    axios.post('http://localhost:7000/addCollege',{
      'name': this.state.campus,
      'url': this.state.url,
      'location': this.state.location,
      'description': this.state.description,
      'population': 0
    }).then(response => {
      console.log(response);
    }).catch(err => {
      console.log(err);
    });
    window.location.replace('/campuslisting');
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
            <h1 style={{color: 'black'}}> Add New Campus </h1>
              <div className="field">
                  <input
                    type="text"
                    name="campus"
                    placeholder="Campus Name"
                    onChange={this.handleCampusInput}
                  />
              </div>
              <div className="field">
                  <input
                    type="text"
                    name="location"
                    placeholder="Campus Location"
                    onChange={this.handleLocationInput}
                  />
              </div>
              <div className="field">
                  <input
                    type="text"
                    name="image"
                    placeholder="Image URL"
                    onChange={this.handleURLInput}
                  />
              </div>
              <div className="field">
                  <input
                    type="text"
                    name="description"
                    placeholder="Campus Description"
                    onChange={this.handleDescriptionInput}
                  />
              </div>
              <div className="ui fluid large black submit button" onClick={this.handleSubmit}>
                <i className="plus icon" />
                Add Campus
              </div>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default NewCampusForm;
