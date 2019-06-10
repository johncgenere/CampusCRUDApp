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

const getStudent = (student, action) => {
  if(action.type === 'GET_STUDENT')
    return action.payload;
  return student;
}

const getCampus = (campus, action) => {
  if(action.type === 'GET_CAMPUS')
    return action.payload;
  return campus;
}

export default combineReducers({
  allStudents: getStudents,
  allCampuses: getCampuses,
  student: getStudent,
  campus: getCampus
});
