import React from 'react';
import { connect } from 'react-redux';

const StudentListing = ({test}) => {
  console.log(test);
  return <div>Listing</div>
}

const mapStateToProps = (state) => {
  return { test: state.test };
}

export default connect(mapStateToProps)(StudentListing);
