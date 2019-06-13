import { combineReducers, applyMiddleware, createStore } from 'redux';
import { createLogger } from 'redux-logger';
import thunkMiddleware from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import {
        getStudents,
        getCampuses,
        getSingleStudent,
        getSingleCampus,
        getCurrentEditStudent,
        getCurrentEditCampus
      } from '../reducers';

const rootReducer = combineReducers({ getStudents,
                                      getCampuses,
                                      getSingleStudent,
                                      getSingleCampus,
                                      getCurrentEditStudent,
                                      getCurrentEditCampus
                                    })

const logger = createLogger({collapsed: true});
const middleWare = composeWithDevTools(applyMiddleware(thunkMiddleware, logger));
const store = createStore(rootReducer, middleWare);

export default store;
