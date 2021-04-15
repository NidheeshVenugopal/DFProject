import React from 'react';
import {TouchableOpacity,Text} from 'react-native';
import {Default} from '../defaults/Default';
const CustomButton = ({title,onPress,textSize}) => {
  
  return (
   <TouchableOpacity style={{flex:1,alignItems:'center',justifyContent:'center',backgroundColor:Default.btn_red_active,overflow:'hidden',borderRadius:10}} onPress={onPress}>
<Text allowFontScaling={false} style={{fontSize:textSize?textSize:18,alignSelf:'center',color:'white',fontFamily:Default.font_HB}}>{title}</Text>
   </TouchableOpacity>
  );
};
export default CustomButton;