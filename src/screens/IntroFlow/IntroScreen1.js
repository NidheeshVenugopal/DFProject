import React from "react";
import { View, Text,Image, ImageStore,TouchableOpacity } from "react-native";
import AsyncStorage from '@react-native-async-storage/async-storage';
import { connect } from 'react-redux';
import * as actions from '../../store/action';
import PageMarker from "../../components/PageMrker";
import { IMAGES } from "../../defaults/images";
import { Default } from "../../defaults/Default";
import CustomButton from "../../components/CustomButton";
class IntroScreen2 extends React.Component {

   async  componentDidMount(){

    }
    render() {
        return (
            <View
                style={{
                    flex: 1,
                    alignItems: 'center',
                    justifyContent: 'center',
                    backgroundColor:'white'
                }}
            >
                 <View
                style={{
                    flex: 0.5,
                  
                  
                }}
            >
                  <View
                style={{
                    flex: 0.1,
                    alignItems: 'center',
                    justifyContent: 'center',
                    
                }}
            >

            </View>
                <View
                style={{
                    flex: 0.3,
                    alignItems: 'center',
                    justifyContent: 'center',
                    
                }}
            >
               <PageMarker position={1}/>
            </View>
            <View
                style={{
                    flex: 0.6,
                    alignItems: 'center',
                    justifyContent: 'center',
                    backgroundColor:'white'
                }}
            >
               <Image style={{flex:1,resizeMode:'contain'}} source={IMAGES.intro1}/>
            </View>
            </View>
            <View
                style={{
                    flex: 0.5,
                    alignItems: 'center',
                    
                   
                }}
            >

                <Text allowFontScaling={false} style={{color:Default.textColor,fontFamily:Default.font_HB,fontSize:24,textAlign:'center',marginHorizontal:25}}>
                Use DraftFuel to fuel your gaming hobby!
                </Text>
                <Text allowFontScaling={false} style={{color:Default.textColorLGray,fontFamily:Default.font_H,fontSize:18,textAlign:'center',marginHorizontal:25,marginTop:10,lineHeight:25}}>
                Effortlessly place the ???spare change??? and/or a fixed percentage of your banking deposits from any connected account directly into your DraftFuel account.
                </Text>
            <View style={{height:60,marginTop:10,width:100}}>
<CustomButton title={'Next'} onPress={()=>{this.props.navigation.navigate('IntroScreen2')}}/>
                </View>
                <Text allowFontScaling={false} style={{color:Default.textColorLGray,fontFamily:Default.font_H,fontSize:15,textAlign:'center',marginHorizontal:25,marginTop:5,lineHeight:25}}>
                * The DraftFuel Banking partner full issuer statement
                </Text>
            </View>
            <TouchableOpacity style={{height:40,position:'absolute',right:10,top:30,alignItems:'center',justifyContent:'center'}}>
<Text allowFontScaling={false} style={{color:Default.textColor,fontFamily:Default.font_H,fontSize:20,textAlign:'center',marginHorizontal:25,lineHeight:25,textDecorationLine:'underline'}}>
               SKIP
                </Text>
</TouchableOpacity>
            </View>
        );
    }
}


const mapStateToProps = state => {
    return { State: state.SignIn };
    
};
export default connect(mapStateToProps, actions)(IntroScreen2);