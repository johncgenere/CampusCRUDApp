import React, {Component} from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Home from './Home';
import CampusListing from './CampusListing';
import StudentListing from './StudentListing';
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
        </div>
      </Router>
    );
  }
}

export default App;
