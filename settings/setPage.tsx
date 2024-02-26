import { StatusBar } from 'expo-status-bar';
import React, {useState} from "react";
import { SafeAreaView, StyleSheet, View, Text, TextInput } from "react-native";

import { Dropdown } from 'react-native-element-dropdown';

import RatePage from './rates/rate';
import FeePage from './fees/fee';
import ProcessingPage from './paymentAcc/processing';
import StagePage from './paymentAcc/stage';
import IdcPage from './paymentAcc/idc';
import AppButton from '../buttons/appBtn';
import DisplayInfo from '../display/display';
import { districtOffices } from '../data/data';

export default function SettingPage() {
    const [isFocus, setIsFocus] = useState(false);
    const [value, setValue] = useState('');


    const renderLabel = () => {
        if (value || isFocus) {
          return (
            <Text style={[styles.label, isFocus && { color: 'blue' }]}>
              Dropdown label
            </Text>
          );
        }
        return null;
      };
    return (
        <SafeAreaView>
            <DisplayInfo 
                info='CONFIGURATION'
            />
            <View>
                <Text>DISTRICT:</Text>
                <View style={styles.container}>
                {renderLabel()}
                <Dropdown
                    style={[styles.dropdown, isFocus && { borderColor: 'blue' }]}
                    placeholderStyle={styles.placeholderStyle}
                    selectedTextStyle={styles.selectedTextStyle}
                    inputSearchStyle={styles.inputSearchStyle}
                    iconStyle={styles.iconStyle}
                    data={districtOffices}
                    search
                    maxHeight={300}
                    labelField="label"
                    valueField="value"
                    placeholder={!isFocus ? 'Select item' : '...'}
                    searchPlaceholder="Search..."
                    value={value}
                    onFocus={() => setIsFocus(true)}
                    onBlur={() => setIsFocus(false)}
                    onChange={item => {
                    setValue(item.value);
                    setIsFocus(false);
                    }}
                    renderLeftIcon={() => (
                    <AntDesign
                        style={styles.icon}
                        color={isFocus ? 'blue' : 'black'}
                        name="Safety"
                        size={20}
                    />
                    )}
                />
            </View>
                {/* dropdown is needed here */}
                <Button 
                    title="Classes list"
                    onPress={listClasses}
                />
            </View>
            <RatePage />
            <FeePage />
            <ProcessingPage />
            <StagePage />
            <IdcPage />
            <AppButton 
                title='SAVE'
            />
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'red'
    },

    //single drop down styles
    dropdown: {
        height: 50,
        borderColor: 'gray',
        borderWidth: 0.5,
        borderRadius: 8,
        paddingHorizontal: 8,
      },
      icon: {
        marginRight: 5,
      },
      label: {
        position: 'absolute',
        backgroundColor: 'white',
        left: 22,
        top: 8,
        zIndex: 999,
        paddingHorizontal: 8,
        fontSize: 14,
      },
      placeholderStyle: {
        fontSize: 16,
      },
      selectedTextStyle: {
        fontSize: 16,
      },
      iconStyle: {
        width: 20,
        height: 20,
      },
      inputSearchStyle: {
        height: 40,
        fontSize: 16,
      },
})