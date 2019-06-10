import React, {Component} from 'react';

class Campus extends Component {
  constructor(props){
    super(props);

    this.onEdit = this.onEdit.bind(this);
    this.onDelete = this.onDelete.bind(this);
  }

  onEdit = (event) => {
    console.log('edit');
  }

  onDelete = (event) => {
    console.log('edit');
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

export default Campus;
