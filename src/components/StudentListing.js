import React from 'react';
import { connect } from 'react-redux';

const StudentListing = ({test}) => {
  return <div> Student Listing </div>
}

const mapStateToProps = (state) => {
  return { test: state.test };
}

export default connect(mapStateToProps)(StudentListing);
