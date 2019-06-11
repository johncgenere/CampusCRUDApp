import React, {Component} from 'react';
import axios from 'axios';

class Student extends Component {
  constructor(props){
    super(props);

    this.onEdit = this.onEdit.bind(this);
    this.onDelete = this.onDelete.bind(this);
  }

  onEdit = (event) => {
    console.log('edit');
  }

  onDelete = (event) => {
    axios.delete('http://localhost:7000/students/'+this.props.id)
      .then(response => {
        console.log(response);
      })
      .catch(err => {
        console.log(err);
      })
    window.location.replace('StudentListing');
  }

  render(){
    return(
      <div className="column four wide" style={{margin: '4%'}}>
        <div className="ui linked cards">
          <div className="card">
            <div className="image">
              <img src={this.props.image} alt="Campus" />
            </div>
            <div className="content">
              <div className="header">{this.props.student}</div>
              <div className="meta">
                {this.props.campus}
              </div>
            </div>
            <div className="extra content">
              <div className="ui two buttons">
                <div className="ui basic grey button" onClick={this.onEdit}>Edit</div>
                <div className="ui basic red button" onClick={this.onDelete}>Delete</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Student;
