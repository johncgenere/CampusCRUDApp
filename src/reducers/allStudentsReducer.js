export default (allStudents = [], action) => {
  switch(action.type) {
    case 'ALL_STUDENTS':
      return action.payload;
    default:
      return allStudents;
  }
}
