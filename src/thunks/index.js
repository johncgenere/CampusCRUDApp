import url from '../apis/BackEnd';
import { returnStudents, returnCampuses } from '../actions';

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
