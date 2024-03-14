import React from "react";

import { View } from "react-native";

import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { Entypo } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';

import WelcomeComp from "./screen/welcome";
import CalProcess from "./screen/calProcess";
import CalStage from "./screen/calStage";
import CalPenal from "./screen/calPenal";
import CalIdc from "./screen/calIdc";
import CalPfs from "./screen/calPfs";
import PixCollageSwitch from "./screen/pixSwitch";

import SettingPage from "./settings/setPage";
import HomePage from "./tab/home";
import ShareBtn from "./tab/shareComp";
import AboutPage from "./screen/about";
import ModeOfUse from "./tab/useMode";
import AppHeadLogo from "./reuseables/headerLogo";


const Tab = createBottomTabNavigator();

export default function App() {
    return (
        <NavigationContainer>
<Tab.Navigator 
  screenOptions={{
    //   tabBarStyle: {display: 'none'}
    headerTitle: (props) => <AppHeadLogo {...props} />,
    headerTitleAlign: 'center',
    headerStyle: {
        backgroundColor: '#305452'
    },    
    headerStatusBarHeight: 50
    }}
              
            >
                
                {/* <Tab.Screen name="welcome" options={{
                        headerShown: false
                        }} component={WelcomeComp} 
                    /> */}
                <Tab.Screen  name='Home' options={{
                    tabBarIcon: () => <Entypo name="home" size={24} color="black" />
                }} component={HomePage} />
                
                <Tab.Screen name='Mode of Use' options={{
                    tabBarIcon: () => <Entypo name="help" size={24} color="black" />
                }} component={ModeOfUse} />
                <Tab.Screen name='About' options={{
                    tabBarIcon: () => <MaterialCommunityIcons name="navigation-variant" size={24} color="black" />
                }} component={AboutPage} />
                <Tab.Screen name='Share' options={{
                    tabBarIcon: () => <FontAwesome name="share-alt" size={24} color="black" />
                }} component={ShareBtn} />
                {/* building type */}
                <Tab.Group 
                    screenOptions={{
                        tabBarIconStyle: {display: 'none'},
                        tabBarLabelStyle: {display: 'none'},
                        tabBarItemStyle: {},
                        tabBarButton: () => <View />
                    }}
                >
                    
                    <Tab.Screen name='process' component={CalProcess} />
                    <Tab.Screen name='stage' component={CalStage} />
                    <Tab.Screen name='penal' component={CalPenal} />
                    <Tab.Screen name='idc' component={CalIdc} />
                    <Tab.Screen name='setting' component={SettingPage} />
                    <Tab.Screen name='pfs' options={{
                        
                    }} component={CalPfs} />
                    <Tab.Screen name='pixCollage' component={PixCollageSwitch} />
                </Tab.Group>
            </Tab.Navigator>
            
        </NavigationContainer>
    )
}