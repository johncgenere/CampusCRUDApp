import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { returnStudents } from '../actions';
import axios from 'axios';

class Home extends Component {
  constructor(props){
    super(props);

    this.state = {
      allStudents: {}
    }

    axios.get('http://localhost:7000/students/1')
      .then(response => {
        let allStudents = response.data;
        this.setState({allStudents})
      })
      .catch(err => {
        console.log(err);
      })
  }

  render(){
    this.props.returnStudents(this.state.allStudents);

    return(
      <div className="App">
        <div className="App-header">
          <h1> View Campuses or Students </h1>
          <button className="ui button" style={{margin: '3%'}}><Link to="/campuslisting">View Campuses</Link></button>
          <button className="ui button"><Link to="/studentlisting"> View Students </Link></button>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return { allStudents: state.allStudents };
}

export default connect(mapStateToProps, { returnStudents })(Home);
