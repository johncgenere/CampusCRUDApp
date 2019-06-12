import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import axios from 'axios';

class SingleViewCampus extends Component {
  constructor(props){
    super(props);

    this.state = {
      campus: {},
      students: {}
    }

    axios.get('http://localhost:7000/college/'+this.props.campus)
      .then(response => {
        let campus = response.data;
        let students = response.data.students;
        this.setState({campus, students});
      })
      .catch(err => {
        console.log(err);
      })
  }

  render(){
    let view = this.state.campus;
    let students = this.state.students;
    console.log(view, students);
    return (
      <div className="App">
        <div className="App-header">
          <div style={{flexDirection: 'row', margin: '2%'}}>
            <Link to='/'>
              <button className="ui button">
                Home
              </button>
            </Link>
            <Link to='/campuslisting'>
              <button className="ui button">
                Campuses
              </button>
            </Link>
            <Link to='/studentlisting'>
              <button className="ui button">
                Students
              </button>
            </Link>
          </div>
          <h1>{view.name}</h1>
          <div style={{flexDirection: 'row'}}>
            <img src={view.image_path} alt={view.name}/>
            <div>
              <p>Address: {view.address}</p>
              <p>{view.description}</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    campus: state.campus
  };
}

export default connect(mapStateToProps)(SingleViewCampus);
