import React, {useState} from "react";
import { 
  SafeAreaView, 
  ScrollView, 
  StyleSheet, 
  View, Text, 
  TextInput, 
  Button, 
  Dimensions
} from "react-native";

import { Dropdown } from 'react-native-element-dropdown';

import RatePage from './rates/rate';
import FeePage from './fees/fee';
import ProcessingAcc from './paymentAcc/processing';
import StagePage from '../screen/typeOfFeeCal/stageIdcPenal';
import IdcPage from '../screen/typeOfFeeCal/usedInPenal';
import AppButton from '../buttons/appBtn';
import DisplayInfo from '../display/display';

import { percentData, districtOffices } from '../data/data';

import { AntDesign } from '@expo/vector-icons';
import StageAccount from "./paymentAcc/stageAcc";
import IDCAccount from "./paymentAcc/idcAcc";


export default function SettingPage() {
    const [isFocus, setIsFocus] = useState(false);
    const [value, setValue] = useState('');


    const renderLabel = () => {
        if (value || isFocus) {
          return (
            <Text style={[styles.label, isFocus && { color: 'blue' }]}>
              {/* Dropdown label */}
            </Text>
          );
        }
        return null;
      };
    return (
        <SafeAreaView style={styles.settingStyles}>
            <DisplayInfo 
                    info='CONFIGURATION'
                />
            <ScrollView>
                <View style={styles.dropDownAndLabel}>
                    <DisplayInfo 
                      info='DISTRICT:'
                      textColor='#1044b8'
                    />
                    <View style={styles.dropdownContainer}>
                        {renderLabel()}
                        <Dropdown
                            style={[styles.dropdown, isFocus && { borderColor: '#c8c92d' }]}
                            placeholderStyle={styles.placeholderStyle}
                            selectedTextStyle={styles.selectedTextStyle}
                            inputSearchStyle={styles.inputSearchStyle}
                            iconStyle={styles.iconStyle}
                            data={districtOffices}
                            search
                            maxHeight={300}
                            labelField="district"
                            valueField="id"
                            placeholder={!isFocus ? 'Select item' : '...'}
                            searchPlaceholder="Search..."
                            value={value}
                            onFocus={() => setIsFocus(true)}
                            onBlur={() => setIsFocus(false)}
                            onChange={item => {
                            setValue(item.id);
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
                </View>
                <RatePage />
                <FeePage />
                <ProcessingAcc />
                <StageAccount />
                <IDCAccount />
                <AppButton 
                    title='SAVE'
                />
            </ScrollView>
        </SafeAreaView>
    )
}

const {width, height} = Dimensions.get('screen');


const styles = StyleSheet.create({
  settingStyles: {
        alignItems: 'center',
        margin: height / 100
    },

    //single drop down styles
    dropdownContainer: {},
    dropDownAndLabel: {
      flexDirection: 'row',
      justifyContent: 'space-between',  
    },
    dropdown: {
        height: (height / 100) * 3,
        width: width / 2,
        borderColor: '#c8c92d',
        borderWidth: 3,
        borderRadius: 8,
        paddingHorizontal: 8,
      },
      icon: {
        marginRight: 5,
      },
      label: {
        position: 'absolute',
        // backgroundColor: 'white',
        left: 22,
        // top: 8,
        top: 1,
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