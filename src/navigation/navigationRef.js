// // import {NavigationActions} from '@react-navigation/native';
// import { NavigationActions } from '@react-navigation/compat';
// //clever function to get access to navigator
// let navigator;

// export const setNavigator=(nav)=>{
// navigator=nav;
// };


// // navigate function for everyone else to use

// export const navigate = (routeName,params)=>{

// navigator.dispatch(
//     NavigationActions.navigate({
//         routeName:routeName,
//         params:params
//      })
//    );

// };

import * as React from 'react';

export const navigationRef = React.createRef();
import { DrawerActions } from '@react-navigation/native';
export function navigate(name, params) {

  console.log('name\t',name)
  console.log('name\t',params)
  if(name=='Home'){
   navigationRef.current?.navigate('Dashboard', params);

  }else{
    navigationRef.current?.navigate(name, params);
  }
 
}