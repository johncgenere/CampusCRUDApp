import React, {Component} from 'react';
import { connect } from 'react-redux';
import { returnCurrentEditStudent, returnSingleStudent } from '../actions';
import { Link } from 'react-router-dom';
import axios from 'axios';

class Student extends Component {
  constructor(props){
    super(props);

    this.onEdit = this.onEdit.bind(this);
    this.onDelete = this.onDelete.bind(this);
    this.onViewStudent = this.onViewStudent.bind(this);
  }

  onViewStudent = (event) => {
    this.props.returnSingleStudent(this.props.id);
  }

  onEdit = (event) => {
    this.props.returnCurrentEditStudent(this.props.id);
  }

  onDelete = (event) => {
    axios.delete('http://localhost:7000/students/'+this.props.id)
      .then(response => {
        console.log(response);
      })
      .catch(err => {
        console.log(err);
      })
    window.location.replace('studentlisting');
  }

  render(){
    return(
      <div className="column four wide" style={{margin: '4%'}}>
        <div className="ui linked cards">
          <div className="card">
            <div className="image">
              <img className="ui small image" src={this.props.image} alt="Campus" />
            </div>
            <div className="content">
              <div className="header">{this.props.student}</div>
              <div className="meta">
                {this.props.campus}
              </div>

                <button className="ui button" onClick={this.onViewStudent}> View Student </button>

            </div>
            <div className="extra content">
              <div className="ui two buttons">
                <div className="ui basic grey button" onClick={this.onEdit}>
                  <Link to='/editstudent'>
                    Edit
                  </Link>
                </div>
                <div className="ui basic red button" onClick={this.onDelete}>Delete</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default connect(null, { returnCurrentEditStudent, returnSingleStudent })(Student);
