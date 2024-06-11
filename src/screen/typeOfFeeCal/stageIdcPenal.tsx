import React, {useContext, useState} from "react";
import { SafeAreaView, StyleSheet, View, Text, TextInput, Dimensions, ScrollView } from "react-native";

import { AntDesign } from '@expo/vector-icons';

import { Dropdown } from 'react-native-element-dropdown';

import { feeData, percentData } from "../../data/data";

import PaymentAcc from '../../settings/paymentAcc/paymentAcc';
import ApplicantDet from "../../bio/applicantDet";
import AppButton from "../../buttons/appBtn";
import { AppStyles } from "../../constants/styles";
import LabelledDisplay from "../../display/labelDisplay";
import PaymentDisplay from "../../display/paymentDisplay";
import ScreenHeadings from "../../headings/Heading";
import { ConfigDataContext, DispatchContext } from "../../warehouse/configContext";
import ManageApplicantDetails from "../../bio/manageApplicantDet";
import DisplayInfo from "../../display/display";



export default function StageAndIDCAndPenal({navigation, route}: any) {
  const ctxStore: any = useContext(ConfigDataContext);
  const dispatchCtxStore: any = useContext(DispatchContext);

  // dispatchCtxStore({...ctxStore, assessmentFee: route.params.assFee, processingFee: route.params.proc})
    // fee drpdown
    const [isFocus, setIsFocus] = useState(false);
    const [value, setValue] = useState('');
    // const {proc, assFee} = route.params;
    //RateDropdown
    const [isFocused, setIsFocused] = useState(false);
    const [values, setValues] = useState('');

    const [percentRate, setPercentRate] = useState(0);
    const [labelPercent, setLabelPercent] = useState('');


    const renderFeeTypeDropdown = () => {
        if (labelPercent || isFocus) {
          return (
            <Text style={[styles.label, isFocus && { color: 'blue' }]}>
              {/* Dropdown label */}
            </Text>
          );
        }
        return null;
      };

      const renderRateDropdown = () => {
        console.log('stage')
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


    // const namedInfoCal: any = () => {
    //  let numWithoutPercent: number = Number(labelPercent.replace('%','')) / 100;
    //  setPercentRate(numWithoutPercent);
    //  console.log('namedinfoCal', numWithoutPercent);
    // }

    
    //Cal with 
    // const calStageFee: any = () => {
    //   const nameInfo = namedInfoCal();
    //   return ctxStore * nameInfo;
    // } 


    return (
      <ScrollView>
        <SafeAreaView style={styles.stageIdcPenalContainerStyle}>
          <View>
            <ScreenHeadings 
              title='APPLICATION DETAILS'
            />
            <ManageApplicantDetails />
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
                    {renderFeeTypeDropdown()}
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
                        setValue(item.id);
                        setLabelPercent(item.feeType)
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
                        {renderRateDropdown()}
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
                            // setLabelPercent(item.label);
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
            {/* <LabelledDisplay
                multiplandInfo={value || 'Processing Fee'}
                namedInfo={percentRate}
                info='......'
                isText={true}
                // isSign=
            /> */}
            <View style={{flexDirection: 'row'}}>
            <DisplayInfo 
              // info={labelPercent === "ASSESSMENT"? assFee  : labelPercent === "PROCESSING"? proc : '0' }
              info={labelPercent === "ASSESSMENT"? ctxStore.assessmentFee  : labelPercent === "PROCESSING"? ctxStore.processingFee : '0' }
              // info={labelPercent === "ASSESSMENT"? assFee  : proc }
            />
            <Text>x</Text>
            <DisplayInfo 
              info={percentRate}
            />
            <Text>=</Text>
            <DisplayInfo 
              info={labelPercent[0] === "ASSESSMENT"? Math.round(ctxStore.assessmentFee * percentRate * 100) / 100  : labelPercent[0] === "PROCESSING"? Math.round(ctxStore.processingFee * percentRate * 100) / 100 : '0'}
              // info={labelPercent === "ASSESSMENT"? Math.round((assFee * percentRate) * 100) / 100  : labelPercent === "PROCESSING"? Math.round((proc * percentRate) * 100) / 100 : '0'}
            />
            </View>
            <PaymentDisplay
                total={labelPercent[0] === "ASSESSMENT"? Math.round(ctxStore.assessmentFee * percentRate * 100) / 100  : labelPercent[0] === "PROCESSING"? ctxStore.processingFee * percentRate : '0'}
                // total={labelPercent === "ASSESSMENT"? Math.round((assFee * percentRate) * 100) / 100  : labelPercent === "PROCESSING"? Math.round((proc * percentRate) * 100) / 100 : '0'}
                agencyCode={ctxStore.stageAgencyCode}
                revCode={ctxStore.stageRevenueCode}
                payType = 'STAGE CERTIFICATION '
            />
            <View style={{
              flexDirection: 'row',
              justifyContent: 'center'
              }}
            >
              <AppButton 
                stageIdcPenalBtnStyle={styles.stageIdcPenalBtnStyle}
                title='CAL PENAL'
                onGoto={() => navigation.navigate('penalFee', route.params)}
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
    height: AppStyles.height - 180,
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