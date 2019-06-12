import { combineReducers } from 'redux';

const getStudents = (allStudents = [], action) => {
  if(action.type === 'ALL_STUDENTS')
    return action.payload;
  return allStudents;
}

const getCampuses = (allCampuses = [], action) => {
  if(action.type === 'ALL_CAMPUSES')
    return action.payload;
  return allCampuses;
}

const getSingleStudent = (student = 0, action) => {
  if(action.type === 'GET_STUDENT')
    return action.payload;
  return student;
}

const getSingleCampus = (campus = 0, action) => {
  if(action.type === 'GET_CAMPUS')
    return action.payload;
  return campus;
}

const getCurrentEditCampus = (id = 0, action) => {
  if(action.type === 'GET_EDIT_ID')
    return action.payload;
  return id;
}

const getCurrentEditStudent = (id = 0, action) => {
  if(action.type === 'GET_EDIT_STUDENT')
    return action.payload;
  return id;
}

export default combineReducers({
  allStudents: getStudents,
  allCampuses: getCampuses,
  student: getSingleStudent,
  campus: getSingleCampus,
  editCampusID: getCurrentEditCampus,
  editStudentID: getCurrentEditStudent
});
