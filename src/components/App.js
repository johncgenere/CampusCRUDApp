import React, {Component} from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Home from './Home';
import CampusListing from './CampusListing';
import NewCampusForm from './NewCampusForm';
import EditCampusForm from './EditCampusForm';
import SingleViewCampus from './SingleViewCampus';
import StudentListing from './StudentListing';
import NewStudentForm from './NewStudentForm';
import EditStudentForm from './EditStudentForm';
import SingleViewStudent from './SingleViewStudent';
import '../styles/App.css';

class App extends Component {
  render(){
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
          <Route path ="/newstudent" exact render = {
            () => {
              return (<NewStudentForm />);
            }
          }/>
          <Route path ="/editcampus" exact render = {
            () => {
              return (<EditCampusForm />);
            }
          }/>
          <Route path ="/editstudent" exact render = {
            () => {
              return (<EditStudentForm />);
            }
          }/>
          <Route path ="/singlecampus" exact render = {
            () => {
              return (<SingleViewCampus />);
            }
          }/>
        </div>
      </Router>
    );
  }
}

export default App;
