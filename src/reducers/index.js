// export const getStudents = (allStudents = [], action) => {
//   if(action.type === 'ALL_STUDENTS')
//     return action.payload;
//   return allStudents;
// }

export const getStudents = (allStudents = [], action) => {
  switch(action.type) {
    case 'ALL_STUDENTS':
      return action.payload;
    default:
      return allStudents;
  }
}

export const getCampuses = (allCampuses = [], action) => {
  switch(action.type){
    case 'ALL_CAMPUSES':
      return action.payload;
    default:
      return allCampuses;
  }
}

export const getSingleStudent = (student = null, action) => {
  switch(action.type){
    case 'GET_STUDENT':
      return action.payload;
    default:
      return student;
  }
}

export const getSingleCampus = (campus = null, action) => {
  switch(action.type){
    case 'GET_CAMPUS':
      return action.payload;
    default:
      return campus;
  }
}

export const getCurrentEditCampus = (id = 0, action) => {
  switch (action.type) {
    case 'GET_EDIT_ID':
      return action.payload;
    default:
      return id;
  }
}

export const getCurrentEditStudent = (id = 0, action) => {
  switch (action.type) {
    case 'GET_EDIT_STUDENT':
      return action.payload;
    default:
      return id;

  }
}

// export default combineReducers({
//   allStudents: getStudents,
//   allCampuses: getCampuses,
//   student: getSingleStudent,
//   campus: getSingleCampus,
//   editCampusID: getCurrentEditCampus,
//   editStudentID: getCurrentEditStudent
// });
