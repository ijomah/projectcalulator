import React, {useState} from "react";
import { SafeAreaView, StyleSheet, View, Text, TextInput, Dimensions, ScrollView } from "react-native";

import { AntDesign } from '@expo/vector-icons';

import { Dropdown } from 'react-native-element-dropdown';

import { feeData, percentData } from '../../data/data';

import PaymentAcc from '../../settings/paymentAcc/paymentAcc';
import DisplayInfo from "../../display/display";
import PaymentDisplay from "../../display/paymentDisplay";
import LabelledDisplay from "../../display/labelDisplay";
import ApplicantDet from "../../bio/applicantDet";
import AppButton from "../../buttons/appBtn";
import ScreenHeadings from "../../headings/Heading";
import { AppStyles } from "../../constants/styles";



export default function StageAndIDCAndPenal({navigation}: any) {
    const [isFocus, setIsFocus] = useState(false);
    const [value, setValue] = useState('');

    const [isFocused, setIsFocused] = useState(false);
    const [values, setValues] = useState('');


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
      <ScrollView>
        <SafeAreaView style={styles.stageIdcPenalContainerStyle}>
          <View>
            <ScreenHeadings 
              title='APPLICATION DETAILS'
            />
            <ApplicantDet />
            <View>
              <ScreenHeadings                
                  title='STAGE CERTIFICATION'
              />
            </View>
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
            <LabelledDisplay
                multiplandInfo='PROCESSING FEE'
                namedInfo='35%'
                info='......'
                isText={true}
                // isSign=
            />
            <PaymentDisplay
                // total='2040494'
                // code=
            />
            <View style={{
              flexDirection: 'row',
              justifyContent: 'center'
              }}
            >
              <AppButton 
                stageIdcPenalBtnStyle={styles.stageIdcPenalBtnStyle}
                title='CAL PENAL'
                onGoto={() => navigation.navigate('penalFee')}
              />

              <AppButton 
                stageIdcPenalBtnStyle={styles.stageIdcPenalBtnStyle}
                title='CAL I.D.C'
                onGoto={() =>navigation.navigate('idcFee')}
              // btnConfig=
              />
            </View>
          </View>
            <AppButton 
              stageIdcPenalBtnStyle={styles.stageIdcPenalBtnStyle}
              title='PREVIEW'
              onGoto={() => navigation.navigate('preview')}
              // btnConfig=
            />
        </SafeAreaView>
      </ScrollView>
    )
}

const { width, height } = Dimensions.get("screen");

const styles = StyleSheet.create({
  stageIdcPenalContainerStyle: {
    height: AppStyles.height,
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
    stageIdcPenalBtnStyle: {
      width: AppStyles.smallBtnWidth,
      height: AppStyles.smallBtntnHeight,
    },

     //single drop down styles
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