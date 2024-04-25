import { StatusBar } from 'expo-status-bar';
import React, { useState } from "react";
import { SafeAreaView, StyleSheet, View, Text, TextInput } from "react-native";

import { AntDesign } from '@expo/vector-icons';

import PaymentAcc from '../../settings/paymentAcc/paymentAcc';
import ApplicantDet from '../../bio/applicantDet';
import AppButton from '../../buttons/appBtn';
import PaymentDisplay from '../../display/paymentDisplay';
import PenalPaymentDet from '../../display/penalPaymentDet';
import ScreenHeadings from '../../headings/Heading';
import ManageApplicantDetails from '../../bio/manageApplicantDet';
import { AppStyles } from '../../constants/styles';
import { Dropdown } from 'react-native-element-dropdown';
import { feeData, percentData } from '../../data/data';

export default function PageUsedInPenal({navigation}: any) {
    const [isFocus, setIsFocus] = useState(false);
    const [value, setValue] = useState('');

    const [isFocused, setIsFocused] = useState(false);
    const [values, setValues] = useState('');

    const [percentRate, setPercentRate] = useState(0);
    const [labelPercent, setLabelPercent] = useState('');

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

      const setLabels = () => {
        if (value || isFocused) {
          return (
            <Text style={[
              styles.label, 
              isFocused && { 
                color: AppStyles.calTypeOutlineColor 
              }
            ]}>
              {/* Dropdown label */}
            </Text>
          );
        }
        return null;
      };

    return (
        <SafeAreaView>
            <ScreenHeadings
                title='APPLICATION DETAILS'
            />
            <ManageApplicantDetails />
            <ScreenHeadings 
                title='PENAL'
            />

            {/* drop down */}
            <View 
              style={{
                flexDirection: 'row',
                justifyContent: 'space-around',
                alignItems: 'center',
              }}
            >
                <View 
                  // style={styles.dropdownContainer}
                >
                    {renderLabel()}
                    <Dropdown
                        style={[styles.dropdown, styles.dropdownContainer,  isFocus && { borderColor: 'blue' }]}
                        placeholderStyle={styles.placeholderStyle}
                        selectedTextStyle={styles.selectedTextStyle}
                        inputSearchStyle={styles.inputSearchStyle}
                        iconStyle={styles.iconStyle}
                        data={feeData}
                        search
                        maxHeight={300}
                        labelField="feeType"
                        valueField="id"
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
                            color={isFocus ? 'blue' : AppStyles.inputOutlineColor}
                            name="Safety"
                            size={20}
                        />
                        )}
                    />
                </View>
                <Text>x</Text>
                <View 
                  // style={styles.dropdownContainer}
                >
                        {setLabels()}
                        <Dropdown
                            style={[styles.dropdown, styles.dropdownContainer, isFocused && { borderColor: 'blue' }]}
                            placeholderStyle={styles.placeholderStyle}
                            selectedTextStyle={styles.selectedTextStyle}
                            inputSearchStyle={styles.inputSearchStyle}
                            iconStyle={styles.iconStyle}
                            data={percentData}
                            search
                            maxHeight={300}
                            labelField="label"
                            valueField="value"
                            placeholder={!isFocused ? 'Select item' : '...'}
                            searchPlaceholder="Search..."
                            value={values}
                            onFocus={() => setIsFocused(true)}
                            onBlur={() => setIsFocused(false)}
                            onChange={item => {
                            setValues(item.value);
                            setLabelPercent(item.label);
                            setPercentRate(item.forCal);
                            setIsFocused(false);
                            }}
                            renderLeftIcon={() => (
                            <AntDesign
                                style={styles.icon}
                                color={isFocused ? 'blue' : AppStyles.inputOutlineColor}
                                name="Safety"
                                size={20}
                            />
                            )}
                        />
                </View>
            </View>

            <PaymentDisplay />
            <PenalPaymentDet />
            {/* <LabelledDisplay
                // info=
                // namedInfo=
                // isSign=
            />

            <LabelledDisplay
                // info=
                // namedInfo=
                // isSign=
            />

            <LabelledDisplay
                // info=
                // namedInfo=
                // isSign=
            />

            <LabelledDisplay
                // info=
                // namedInfo=
                // isSign=
            />

            <LabelledDisplay
                // info=
                // namedInfo=
                // isSign=
            />

            <LabelledDisplay
                // info=
                // namedInfo=
                // isSign=
            /> */}
            <View style={{
                    flexDirection: 'row',
                    justifyContent: 'space-around',
                }}>
                <AppButton 
                    title='CAL STAGE CERT'
                    isBtn={true}
                    onGoto={() => navigation.navigate('stageIdcPenal')}
                    // btnConfig= 
                />
                <AppButton
                    title='CAL I.D.C'
                    isBtn={true}
                    onGoto={() => navigation.navigate('idcFee')}
                    // btnConfig=
                />
            </View>
            <AppButton 
                title='PREVIEW'
                isBtn={true}
                onGoto={() => navigation.navigate('preview')}
            // btnConfig=
            />
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'red'
    },

    dropdownContainer: {
        width: AppStyles.bigInputWidth,
        height: AppStyles.inputHeight,
       },
       dropdown: {
           height: 50,
           borderColor: AppStyles.inputOutlineColor,
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