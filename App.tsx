import React from "react";

import { View } from "react-native";

import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { Entypo } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';


import HomePage from "./src/tab/home";
import ShareBtn from "./src/tab/shareComp";
import ModeOfUse from "./src/tab/useMode";
import ConfigContextProvider, { DispatchContext } from "./src/warehouse/configContext";
import AppHeadLogo from "./src/reuseables/headerLogo";
import AboutPage from "./src/screen/about";
import CalIdc from "./src/screen/calIdc";
import CalPenal from "./src/screen/calPenal";
import CalPfs from "./src/screen/calPfs";
import CalProcess from "./src/screen/calProcess";
import CalStage from "./src/screen/calStage";
import PixCollageSwitch from "./src/screen/pixSwitch";
import PreviewPage from "./src/screen/preview";
import Idc from "./src/screen/typeOfFeeCal/idc";
import Pfs from "./src/screen/typeOfFeeCal/pfs";
import ProcessFee from "./src/screen/typeOfFeeCal/processingFee";
import StageAndIDCAndPenal from "./src/screen/typeOfFeeCal/stageIdcPenal";
import PageUsedInPenal from "./src/screen/typeOfFeeCal/usedInPenal";
import SettingPage from "./src/settings/setPage";
import ManagerSetting from "./src/settings/managerSetting/manageSetting";
import { dbInit } from "./db/dbService";


const Tab = createBottomTabNavigator();

export default function App() {
    console.log('db init', dbInit())
    return (
        <ConfigContextProvider>
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
                        <Tab.Screen name='preview' component={PreviewPage} />
                        <Tab.Screen name='pfsFee' component={Pfs} />
                        <Tab.Screen name='idcFee' component={Idc} />
                        <Tab.Screen name='penalFee' component={PageUsedInPenal} />
                        <Tab.Screen name="stageIdcPenal" component={StageAndIDCAndPenal} />
                        <Tab.Screen name='processFee' component={ProcessFee} />
                        <Tab.Screen name='process' component={CalProcess} />
                        <Tab.Screen name='stage' component={CalStage} />
                        <Tab.Screen name='penal' component={CalPenal} />
                        <Tab.Screen name='idc' component={CalIdc} />
                        <Tab.Screen name='setting' component={ManagerSetting} />
                        <Tab.Screen name='pfs' component={CalPfs} />
                        <Tab.Screen name='pixCollage' component={PixCollageSwitch} />
                    </Tab.Group>
                </Tab.Navigator>
            </NavigationContainer>
        </ConfigContextProvider>
    )
}