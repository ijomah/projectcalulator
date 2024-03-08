import { StatusBar } from 'expo-status-bar';

import { StyleSheet, Text, View } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';


import HomePage from './home';
import AppHeadLogo from '../reuseables/headerLogo';
import ShareBtn from './shareComp';
import SettingPage from '../settings/setPage';



const Tab = createBottomTabNavigator();

export default function TabNavi() {
  return (
    <NavigationContainer>
      <Tab.Navigator 
        initialRouteName='home' 
        screenOptions={{
          headerStyle: {
            backgroundColor: '#305452'
          },
          headerTitle: (props) => <AppHeadLogo {...props} />,
          headerTitleAlign: 'center',
          // headerStatusBarHeight: 28 is default h325, w318
          headerStatusBarHeight: 45
        }}
      >
        <Tab.Screen  name='home' component={HomePage} />
        {/* <Tab.Screen name='stackNav' component={StackCompNav} /> */}
        {/* Calculation type */}
        {/* <Tab.Screen name='process' component={CalculateType} />
        <Tab.Screen name='stage' component={CalculateType} />
        <Tab.Screen name='penal' component={CalculateType} />
        <Tab.Screen name='idc' component={CalculateType} />
        <Tab.Screen name='pfs' component={CalculateType} /> */}
        {/* setting */}
        <Tab.Screen name='setting' component={SettingPage} />
        {/* <Tab.Screen name='usingMode' component={UseMode} />
        <Tab.Screen name='about' component={AboutPage} /> */}
        <Tab.Screen name='share' component={ShareBtn} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
