import React, {Component} from 'react';
import NewCampusForm from './NewCampusForm';
import NewStudentForm from './NewStudentForm';
import EditCampusForm from './EditCampusForm';
import EditStudentForm from './EditStudentForm';

class Home extends Component {
  render(){
    return(
      <div>
        <NewStudentForm />
        <NewCampusForm />
        <EditStudentForm />
        <EditCampusForm />
      </div>
    );
  }
}

export default Home;
