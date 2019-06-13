import React, {Component} from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { allCampusesThunk } from '../thunks';
import { returnCurrentEditStudent } from '../actions';
import axios from 'axios';
import Campus from './Campus';

class SingleViewStudent extends Component{
  constructor(props){
    super(props);

    this.state = {
      selectedNewCampus: ''
    }

    this.onEdit = this.onEdit.bind(this);
    this.onDelete = this.onDelete.bind(this);
    this.handleCampusChange = this.handleCampusChange.bind(this);
    this.onSubmitCampusChange = this.onSubmitCampusChange.bind(this);
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
    console.log('change');
    // api call here to update student
  }

  render(){
    console.log(this.state.selectedNewCampus);
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
          <select className="ui dropdown"
                  value={this.state.selectedNewCampusValue}
                  onChange={this.handleCampusChange}
                  style={{fontSize: '20px', width: '30%', height: '20%', borderRadius: '5px'}}>
            <option value="" style= {{color: 'grey'}}>Select campus...</option>
            <option value="y">Y</option>
            <option value="g">G</option>
            <option value="pg">PG</option>
            <option value="pg13">PG-13</option>
            <option value="r">R</option>
          </select>
          <button className="ui red button">
            Change Campus
          </button>
        </div>
      </div>
    );
  }
}

export default SingleViewStudent;
