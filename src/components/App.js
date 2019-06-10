import React, {Component} from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import { returnStudents, returnCampuses } from '../actions';
import axios from 'axios';
import Home from './Home';
import CampusListing from './CampusListing';
import StudentListing from './StudentListing';
import NewCampusForm from './NewCampusForm';
import '../styles/App.css';

class App extends Component {
  constructor(props){
    super(props);

    this.state = {
      allStudents: {},
      allCampuses: {}
    }

    axios.get('http://localhost:7000/students/1')
      .then(response => {
        let allStudents = response.data;
        this.setState({allStudents})
      })
      .catch(err => {
        console.log(err);
      })

    axios.get('http://localhost:7000/getAllColleges')
      .then(response => {
        let allCampuses = response.data;
        this.setState({allCampuses});
      })
      .catch(err => {
        console.log(err);
      })
  }

  render(){
    this.props.returnStudents(this.state.allStudents);
    this.props.returnCampuses(this.state.allCampuses);

    return (
      <Router>
        <div className="App">
          <Route path ="/" exact render = {
            () => {
              return (<Home />);
            }
          }/>
          <Route path ="/campuslisting" exact render = {
            () => {
              return (<CampusListing />);
            }
          }/>
          <Route path ="/studentlisting" exact render = {
            () => {
              return (<StudentListing />);
            }
          }/>
          <Route path ="/newcampus" exact render = {
            () => {
              return (<NewCampusForm />);
            }
          }/>
        </div>
      </Router>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    allStudents: state.allStudents,
    allCampuses: state.allCampuses
  };
}

export default connect(mapStateToProps, { returnStudents, returnCampuses })(App);
