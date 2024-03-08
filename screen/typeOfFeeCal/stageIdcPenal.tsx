import React, {useState} from "react";
import { SafeAreaView, StyleSheet, View, Text, TextInput } from "react-native";

import { AntDesign } from '@expo/vector-icons';

import { Dropdown } from 'react-native-element-dropdown';

import { feeData, percentData } from '../../data/data';

import PaymentAcc from '../../settings/paymentAcc/paymentAcc';
import DisplayInfo from "../../display/display";
import PaymentDisplay from "../../display/paymentDisplay";
import LabelledDisplay from "../../display/labelDisplay";
import ApplicantDet from "../../bio/applicantDet";
import AppButton from "../../buttons/appBtn";



export default function StageAndIDCAndPenal() {
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
            <ApplicantDet />

            <DisplayInfo
                info='STAGE CERTIFICATION'
            />
            <View>
                <View style={styles.container}>
                    {renderLabel()}
                    <Dropdown
                        style={[styles.dropdown, isFocus && { borderColor: 'blue' }]}
                        placeholderStyle={styles.placeholderStyle}
                        selectedTextStyle={styles.selectedTextStyle}
                        inputSearchStyle={styles.inputSearchStyle}
                        iconStyle={styles.iconStyle}
                        data={feeData}
                        search
                        maxHeight={300}
                        labelField="id"
                        valueField="feeType"
                        placeholder={!isFocus ? 'Select item' : '...'}
                        searchPlaceholder="Search..."
                        value={value}
                        onFocus={() => setIsFocus(true)}
                        onBlur={() => setIsFocus(false)}
                        onChange={item => {
                        setValue(item.feeType);
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
                <View style={styles.dropdownContainer}>
                        {renderLabel()}
                        <Dropdown
                            style={[styles.dropdown, isFocus && { borderColor: 'blue' }]}
                            placeholderStyle={styles.placeholderStyle}
                            selectedTextStyle={styles.selectedTextStyle}
                            inputSearchStyle={styles.inputSearchStyle}
                            iconStyle={styles.iconStyle}
                            data={percentData}
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
            </View>
            <LabelledDisplay
                // info=
                // namedInfo=
                // isSign=
            />
            <PaymentDisplay
                // total=
                // code=
            />

            <AppButton 
            // title=
            // btnConfig=
            />

            <AppButton 
            // title=
            // btnConfig=
            />

            <AppButton
              // title=
              // btnConfig=
            />
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'red'
    },

     //single drop down styles
     dropdownContainer: {},
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