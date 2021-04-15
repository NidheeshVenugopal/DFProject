
import Toast from 'react-native-simple-toast';
import React from 'react';
import {
 
  SkypeIndicator,
  
} from 'react-native-indicators';
export const Default = {
 SP_color_Top:'rgb 32 75 89',
 SP_color_Btm:'rgb 17 55 67',
 btn_red_active:'rgb 197 0 26',
 Fill_progress_inactive:'rgb 205 219 224',//create acc
 input_bg:'rgba 16 54 66, 0.05',
 tab_active:'rgb 17 55 67',

  showToast(msg) {
    Toast.show(msg)
  },
  Loader: <>
    <SkypeIndicator size={40} color={'#2B5D85'} />

  </>,
};