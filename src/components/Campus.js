import React, {Component} from 'react';
import { connect } from 'react-redux';
import { returnCurrentEditCampus } from '../actions';
import { Link } from 'react-router-dom';
import axios from 'axios';


class Campus extends Component {
  constructor(props){
    super(props);

    this.onEdit = this.onEdit.bind(this);
    this.onDelete = this.onDelete.bind(this);
  }

  onEdit = (event) => {
    this.props.returnCurrentEditCampus(this.props.id);
  }

  onDelete = (event) => {
    axios.delete('http://localhost:7000/college/'+this.props.id)
      .then(response => {
        console.log(response);
      })
      .catch(err => {
        console.log(err);
      })
    window.location.replace('/CampusListing')
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
              <div className="header">{this.props.campus}</div>
              <div className="meta">
                {this.props.numOfStudents} Students
              </div>
            </div>
            <div className="extra content">
              <div className="ui two buttons">
                <button className="ui basic grey button" onClick={this.onEdit}>
                  <Link to='/editcampus'>
                    Edit
                  </Link>
                </button>
                <div className="ui basic red button" onClick={this.onDelete}>Delete</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    editCampusID: state.editCampusID
  };
}

export default connect(mapStateToProps, { returnCurrentEditCampus })(Campus);
