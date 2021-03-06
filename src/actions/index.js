export const returnStudents = (allStudents) => {
  return {
    type: 'ALL_STUDENTS',
    payload: allStudents
  }
}

export const returnCampuses = (allCampuses) => {
  return {
    type: 'ALL_CAMPUSES',
    payload: allCampuses
  }
}

export const returnSingleStudent = (student) => {
  return {
    type: 'GET_STUDENT',
    payload: student
  }
}

export const returnSingleCampus = (campus) => {
  return {
    type: 'GET_CAMPUS',
    payload: campus
  }
}

export const returnCurrentEditCampus = (campusID) => {
  return {
    type: 'GET_EDIT_ID',
    payload: campusID
  }
}

export const returnCurrentEditStudent = (studentID) => {
  return {
    type: 'GET_EDIT_STUDENT',
    payload: studentID
  }
}
