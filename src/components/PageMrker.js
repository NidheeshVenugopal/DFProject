import React from 'react';
import {View} from 'react-native';
import {Default} from '../defaults/Default';
const PageMarker=({position})=>{
    return(
        <View style={{width:110,height:40,flexDirection:'row',}}>
        <View style={{flex:1,alignItems:'center',justifyContent:'center'}}>
         <View style={{width:position==1?25:20,height:position==1?25:20,borderRadius:position==1?12.5:10,backgroundColor:position==1?Default.btn_red_active:Default.input_bg,shadowColor: "#000",
shadowOffset: {
	width: 0,
	height: 4,
},
shadowOpacity: 0.32,
shadowRadius: 5.46,

elevation: 9,}}/>
        </View>
        <View style={{flex:1,alignItems:'center',justifyContent:'center'}}>
         <View style={{width:position==2?25:20,height:position==2?25:20,borderRadius:position==2?12.5:10,backgroundColor:position==2?Default.btn_red_active:Default.input_bg,shadowColor: "#000",
shadowOffset: {
	width: 0,
	height: 4,
},
shadowOpacity: 0.32,
shadowRadius: 5.46,

elevation: 9,}}/>
        </View>
        <View style={{flex:1,alignItems:'center',justifyContent:'center'}}>
         <View style={{width:position==3?25:20,height:position==3?25:20,borderRadius:position==3?12.5:10,backgroundColor:position==3?Default.btn_red_active:Default.input_bg,shadowColor: "#000",
shadowOffset: {
	width: 0,
	height: 4,
},
shadowOpacity: 0.32,
shadowRadius: 5.46,

elevation: 9,}}/>
        </View>
        </View>
    )
};

export default PageMarker;