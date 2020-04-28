import formVisibleReducer from './form-visible-reducer';
import beanBowlListReducer from './bean-bowl-list-reducer';
import { combineReducers } from 'redux';

const rootReducer = combineReducers({
  formVisibleOnPage: formVisibleReducer,
  masterBeanBowlList: beanBowlListReducer 
});

export default rootReducer;