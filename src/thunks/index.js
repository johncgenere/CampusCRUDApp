import url from '../apis/BackEnd';
import { returnStudents,
         returnCampuses,
         returnSingleStudent,
         returnSingleCampus
       } from '../actions';

export const allStudentsThunk = () => dispatch => {
  return url.get('/getAllStudents')
          .then(res => res.data)
          .then(students => dispatch(returnStudents(students)))
          .catch(err => console.log(err));
}

export const allCampusesThunk = () => dispatch => {
  return url.get('/getAllColleges')
          .then(res => res.data)
          .then(colleges => dispatch(returnCampuses(colleges)))
          .catch(err => console.log(err));
}

export const singleStudentThunk = id => dispatch => {
  return url.get('/students/'+id)
          .then(res => res.data)
          .then(student => dispatch(returnSingleStudent(student)))
          .catch(err => console.log(err));
}

export const singleCampusThunk = id => dispatch => {
  return url.get('/college/'+id)
          .then(res => res.data)
          .then(college => dispatch(returnSingleStudent(college)))
          .catch(err => console.log(err));
}
