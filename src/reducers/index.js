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

const getSingleStudent = (student = null, action) => {
  if(action.type === 'GET_STUDENT')
    return action.payload;
  return student;
}

const getSingleCampus = (campus = null, action) => {
  if(action.type === 'GET_CAMPUS')
    return action.payload;
  return campus;
}

const testReducer = () => {
  return [
    {
      firstname: 'John',
      lastname: 'Genere'
    },
    {
      firstname: 'John',
      lastname: 'Smith'
    },
    {
      firstname: 'Dan',
      lastname: 'Gilbert'
    },
    {
      firstname: '2',
      lastname: 'Chains'
    }
  ];
};

export default combineReducers({
  allStudents: getStudents,
  allCampuses: getCampuses,
  student: getSingleStudent,
  campus: getSingleCampus,
  test: testReducer
});
