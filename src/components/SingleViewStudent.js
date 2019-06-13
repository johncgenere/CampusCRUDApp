import React, {Component} from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
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
    let table = [];
    let allCampuses = this.props.allCampuses;

    for(let i = 0; i < allCampuses.length; i++){
      let campus = allCampuses[i];
      console.log(campus);
      table.push(
                  <option value={campus.id}>{campus.name}</option>
                );
    }

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
