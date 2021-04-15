import React from "react";
import { View, Text,Image, ImageStore,TouchableOpacity,Dimensions } from "react-native";
import AsyncStorage from '@react-native-async-storage/async-storage';
import { connect } from 'react-redux';
import * as actions from '../../store/action';
import PageMarker from "../../components/PageMrker";
import { IMAGES } from "../../defaults/images";
import { Default } from "../../defaults/Default";
import CustomButton from "../../components/CustomButton";
const {width,height}=Dimensions.get('window');
class IntroScreen1 extends React.Component {

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
               <PageMarker position={2}/>
            </View>
            <View
                style={{
                    flex: 0.6,
                    alignItems: 'center',
                    justifyContent: 'center',
                    backgroundColor:'white'
                }}
            >
               <Image style={{flex:1,width:width-20,resizeMode:'cover',overflow:'visible'}} source={IMAGES.intro2}/>
            </View>
            </View>
            <View
                style={{
                    flex: 0.5,
                    alignItems: 'center',
                    
                   
                }}
            >

                <Text allowFontScaling={false} style={{color:Default.textColor,fontFamily:Default.font_HB,fontSize:24,textAlign:'center',marginHorizontal:25}}>
                Connect your DraftFuel 
account to your favorite
gaming platforms.
                </Text>
                <Text allowFontScaling={false} style={{color:Default.textColorLGray,fontFamily:Default.font_H,fontSize:18,textAlign:'center',marginHorizontal:25,marginTop:10,lineHeight:25}}>
                Connect your DraftFuel account as a payment source with your favorite accounts in minutes.
                </Text>
            <View style={{height:60,marginTop:10,width:100}}>
       <CustomButton title={'Next'} onPress={()=>{this.props.navigation.navigate('IntroScreen3')}}/>
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
export default connect(mapStateToProps, actions)(IntroScreen1);