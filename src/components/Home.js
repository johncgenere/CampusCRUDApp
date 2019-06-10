import React, {Component} from 'react';
import StudentListing from './StudentListing';
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
          <h1> Home </h1>
          <StudentListing />
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return { allStudents: state.allStudents };
}

export default connect(mapStateToProps, { returnStudents })(Home);
