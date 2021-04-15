import React from "react";
import { View, Text,Image } from "react-native";
import AsyncStorage from '@react-native-async-storage/async-storage';
import { connect } from 'react-redux';
import * as actions from '../../store/action';
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
               
            </View>
        );
    }
}


const mapStateToProps = state => {
    return { State: state.SignIn };
    
};
export default connect(mapStateToProps, actions)(IntroScreen1);