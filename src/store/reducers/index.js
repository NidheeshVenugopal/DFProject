import loginReducer from './loginreducer';
import DashboardReducer from './dashboardReducer';
import { combineReducers } from 'redux';

export default combineReducers({
  SignIn: loginReducer,
  Dashboard: DashboardReducer,

});
