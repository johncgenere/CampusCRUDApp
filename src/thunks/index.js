import url from '../apis/BackEnd';
import { returnStudents } from '../actions';

export const allStudentsThunk = () => dispatch => {
  return url.get('/getAllStudents')
          .then(res => res.data)
          .then(students => dispatch(returnStudents(students)))
          .catch(err => console.log(err));
}
