import React from 'react';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator, CardStyleInterpolators } from '@react-navigation/stack';
import { Text, View, Dimensions, TextInput, Image, FlatList, TouchableOpacity, ScrollView } from 'react-native';
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
//import {createDrawerNavigator} from 'react-navigation-drawer';
import { createDrawerNavigator } from '@react-navigation/drawer';
// import { Default } from '../../components/Defaults';
// import FontAwesome from 'react-native-vector-icons/FontAwesome5';
// import DrawerContent from '../components/DrawerContent';
// // Screens
import IntroScreen1 from '../screens/IntroFlow/IntroScreen1';
// import Login from '../screens/LoginFlow/Login';
// import SignUp from '../screens/LoginFlow/SignUp';
// import ForgotPass from '../screens/LoginFlow/ForgotPass';
// import ForgotPassResend from '../screens/LoginFlow/ForgotPassResend';

// import SuggestService from '../screens/MainFlow/SuggestService';
// import NewRequest from '../screens/MainFlow/NewRequest';
// import Calendar from '../screens/MainFlow/Calendar';
// import dashboad from '../screens/MainFlow/dashboad';
// import ProfileScreen from '../screens/MainFlow/ProfileScreen';
// import MyRequests from '../screens/MainFlow/MyRequests';
// import Inbox from '../screens/MainFlow/Inbox';
// import ChatScreen from '../screens/MainFlow/ChatScreen';
// import ResolveAuthScreen from '../screens/LoginFlow/ResolveAuthScreen';
// import ResetPass from '../screens/Settings/ResetPassword';
// import JobHistory from '../screens/MainFlow/JobHistory';
// import PaymentHistory from '../screens/MainFlow/PaymentHistory';
// import Complaints from '../screens/MainFlow/Complaints';
import { navigationRef } from './navigationRef';
// const Drawer = createDrawerNavigator();
const Stack = createStackNavigator();

const MainNavigation = (props) => {
    return (
        <NavigationContainer ref={navigationRef}>
        <Stack.Navigator
            screenOptions={{
                gestureEnabled: true,
                gestureDirection: 'horizontal',
                cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,

            }}
            initialRouteName="IntroScreen1"
            mode="modal">
                <Stack.Screen
                name="IntroScreen1"
                component={IntroScreen1}
                options={{ headerShown: false, animationEnabled: false }}
            />
            {/* <Stack.Screen
                name="Login"
                component={Login}
                options={{ headerShown: false, animationEnabled: false }}
            />
            <Stack.Screen
                name="SignUp"
                component={SignUp}
                options={{ headerShown: false, animationEnabled: false }}
            />
            <Stack.Screen
                name="ForgotPass"
                component={ForgotPass}
                options={{ headerShown: false, animationEnabled: false }}
            />
            <Stack.Screen
                name="ForgotPassResend"
                component={ForgotPassResend}
                options={{ headerShown: false, animationEnabled: false }}
            />
            <Stack.Screen
                name="Dashboard"
                component={dashboad}
                options={{ headerShown: false, animationEnabled: false }}
            />

            <Stack.Screen
                name="SuggestService"
                component={SuggestService}
                options={{ headerShown: false, animationEnabled: false }}
            />
            <Stack.Screen
                name="NewRequest"
                component={NewRequest}
                options={{ headerShown: false, animationEnabled: false }} />

            <Stack.Screen
                name="JobHistory"
                component={JobHistory}
                options={{ headerShown: false, animationEnabled: false }}
            />
            <Stack.Screen
                name="Calendar"
                component={Calendar}
                options={{ headerShown: false, animationEnabled: false }}
            />
            <Stack.Screen
                name="MyRequests"
                component={MyRequests}
                options={{ headerShown: false, animationEnabled: false }}
            />
            <Stack.Screen
                name="Inbox"
                component={Inbox}
                options={{ headerShown: false, animationEnabled: false }}
            />
            <Stack.Screen
                name="InboxDetails"
                component={ChatScreen}
                options={{ headerShown: false, animationEnabled: false }}
            />
            <Stack.Screen
                name="PaymentHistory"
                component={PaymentHistory}
                options={{ headerShown: false, animationEnabled: false }}
            />
            <Stack.Screen
                name="Complaints"
                component={Complaints}
                options={{ headerShown: false, animationEnabled: false }}
            />
            <Stack.Screen
                name="Profile"
                component={ProfileScreen}
                options={{ headerShown: false, animationEnabled: false }}
            /> */}
        </Stack.Navigator>
        </NavigationContainer>
    )
}
// const DrawerNavigator = () => {
//     return (
//         <NavigationContainer ref={navigationRef}>
//             <Drawer.Navigator
//                 drawerContent={(props) => <DrawerContent {...props} />}
//                 drawerContentOptions={{
//                     activeTintColor: '#2B5D85',
//                     inactiveTintColor: '#000000',
//                     labelStyle: {
//                         fontFamily: 'NotoSerif-Bold',
//                         fontSize: 16, fontWeight: 'normal'
//                     },

//                 }}
//                 lazy={true}
//                 initialRouteName={Login}>
//                 <Drawer.Screen name="Home" component={MainNavigation}
//                     options={{
//                         drawerIcon: () => (
//                             <FontAwesome name='home' size={25} color='#549355' />
//                         )
//                     }} />
//                 <Drawer.Screen name="Profile" component={ProfileScreen}
//                     options={{
//                         drawerIcon: () => (
//                             <FontAwesome name='user-alt' size={20} color='#549355' />
//                         )
//                     }} />
//                 <Drawer.Screen name="Change Password" component={ResetPass}
//                     options={{
//                         drawerIcon: () => (
//                             <FontAwesome name='lock' size={20} color='#549355' />
//                         )
//                     }} />
//                 {/* <Drawer.Screen name="Break" component={BasicScreen}
//                 options={{
//                     drawerIcon: () => (
//                         <FontAwesome name='clock' size={20} color='#549355' solid />
//                     )
//                 }} /> */}
//                 <Drawer.Screen name="My Reviews and Ratings" component={BasicScreen}
//                     options={{
//                         drawerIcon: () => (
//                             <FontAwesome name='star' size={20} color='#549355' solid />
//                         )
//                     }} />
//                 {/* <Drawer.Screen name="PaymentHistory" component={PaymentHistory}
//                 options={{
//                     drawerIcon: () => (
//                         <FontAwesome name='star' size={20} color='#549355' solid />
//                     )
//                 }} /> */}
//             </Drawer.Navigator>
//         </NavigationContainer>
//     );
// }
export default MainNavigation;