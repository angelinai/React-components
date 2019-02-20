import { combineReducers } from 'redux';
import courses from './courseReducer';
 
/* 
 Root Reducer

  courses -  es6 short hand property name
             (access via) > this.statse.courses
*/
const rootReducer = combineReducers ({
   courses  
});

export default rootReducer;
 