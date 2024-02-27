import { StatusBar } from 'expo-status-bar';

import { StyleSheet, Text, View } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import SettingPage from './settings/setPage';
import HomePage from './tab/home';
import ShareBtn from './tab/shareComp';
import AppHeadLogo from './reuseables/headerLogo';

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator screenOptions={{
        headerTitle: (props) => <AppHeadLogo {...props} />
      }}>
        <Tab.Screen name='setting' component={SettingPage} />
        <Tab.Screen name='home' component={HomePage} />
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
