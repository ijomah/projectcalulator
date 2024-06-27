import React, { useContext, useEffect, useState } from "react";
import { SafeAreaView, 
        StyleSheet, 
        FlatList, 
        View, Text, TextInput, 
        TouchableOpacity, 
        Dimensions
} from "react-native";

import { FontAwesome6 } from '@expo/vector-icons';
import AppButton from "../buttons/appBtn";
import { customDisplayStyle, AppStyles } from "../constants/styles";
import DisplayInfo from "../display/display";
import LabelledDisplay from "../display/labelDisplay";
import PaymentDisplay from "../display/paymentDisplay";
import ReuseInput from "../reuseables/input";
import { addUp, calculate } from "../../util/utilFxn";
import { ConfigDataContext, DispatchContext } from "../warehouse/configContext";
import Pfs from "./typeOfFeeCal/pfs";



export default function CalcuationTypes(this: any, {
    getUserDatum,
    getFeeDataObj,
    computeAssessmentData,
    assess,
    tenPercentage,
    fivePercentage,
    procFee,
    subtot,
    fenceFee, navigation, isPfs}: any) {
    const ctxData: any = useContext(ConfigDataContext);
    const dispatchCtxData: any = useContext(DispatchContext)

    return (
        <SafeAreaView>
            {isPfs?
                <View style={styles.pfsPumpContainerStyle}
                >
                    <View style={styles.fencingFeeStyle}>
                        <View style={{flex: 4.2,}}>
                                <ReuseInput 
                                        // calTypeLabelFlex={styles.calTypeLabelFlex}
                                        // calTypeInputFlex={styles.calTypeInputFlex}
                                        calTypeStyle={[
                                            styles.calTypeInputStyle, 
                                        ]}
                                        label='FENCING FEE:'
                                        inputConfig={{
                                            placeholder: 'LAND AREA',
                                            textAlign: 'center',
                                            onChangeText: getUserDatum.bind(this, 'pfsQFencingQFee'),
                                            // onEndEditting: computeAssessmentData
                                        }}
                                />
                            </View>
                            <FontAwesome6 
                                style={styles.calTypeIconStyle}
                                name="equals" 
                                size={15} 
                                color="black" 
                            />
                            <DisplayInfo 
                                style={styles.calDisplayInfoStyle}
                                calTypeLabelStyle={customDisplayStyle}
                                    info={(fenceFee.pfsQFencingQFee).toString()}
                            />
                        </View>
                    <View style={styles.fencingFeeStyle}>
                    <View style={{flex: 4.2,}}>
                            <ReuseInput 
                                    // calTypeLabelFlex={styles.calTypeLabelFlex}
                                    // calTypeInputFlex={styles.calTypeInputFlex}
                                    calTypeStyle={[
                                        styles.calTypeInputStyle, 
                                    ]}
                                    label='1ST FLOOR PUMP:'
                                    inputConfig={{
                                        placeholder: 'INPUT COST',
                                        textAlign: 'center',
                                        onChangeText: getUserDatum.bind(this, 'firstQfloorQpump'),
                                        // onEndEditting: computeAssessmentData
                                    }}
                            />
                        </View>
                        <FontAwesome6 
                            style={styles.calTypeIconStyle}
                            name="equals" 
                            size={15} 
                            color="black" 
                        />
                        <DisplayInfo 
                            style={styles.calDisplayInfoStyle}
                            calTypeLabelStyle={customDisplayStyle}
                                info={fenceFee.firstQfloorQpump}
                        />
                    </View>
                    
                    <View style={styles.fencingFeeStyle}>
                    <View style={{flex: 4.2,}}>
                            <ReuseInput 
                                    // calTypeLabelFlex={styles.calTypeLabelFlex}
                                    // calTypeInputFlex={styles.calTypeInputFlex}
                                    calTypeStyle={[
                                        styles.calTypeInputStyle, 
                                    ]}
                                    label='ADD PUMP:'
                                    inputConfig={{
                                        placeholder: 'INPUT COST',
                                        textAlign: 'center',
                                        onChangeText: getUserDatum.bind(this, 'addQpump'),
                                        // onEndEditting: computeAssessmentData
                                    }}
                            />
                        </View>
                        <FontAwesome6 
                            style={styles.calTypeIconStyle}
                            name="equals" 
                            size={15} 
                            color="black" 
                        />
                        <DisplayInfo 
                            style={styles.calDisplayInfoStyle}
                            calTypeLabelStyle={customDisplayStyle}
                                info={fenceFee.addQpump}
                        />
                    </View>

                    <View style={styles.fencingFeeStyle}>
                        <View style={{flex: 4.2,}}>
                                <ReuseInput 
                                        // calTypeLabelFlex={styles.calTypeLabelFlex}
                                        // calTypeInputFlex={styles.calTypeInputFlex}
                                        calTypeStyle={[
                                            styles.calTypeInputStyle, 
                                        ]}
                                        label='UNDER GROUND TANK @ 5OOK/TANK:'
                                        inputConfig={{
                                            placeholder: 'INPUT COST',
                                            textAlign: 'center',
                                            onChangeText: getUserDatum.bind(this, 'underQgroundQtank'),
                                            // onEndEditting: computeAssessmentData
                                        }}
                                />
                            </View>
                            <FontAwesome6 
                                style={styles.calTypeIconStyle}
                                name="equals" 
                                size={15} 
                                color="black" 
                            />
                            <DisplayInfo 
                                style={styles.calDisplayInfoStyle}
                                calTypeLabelStyle={customDisplayStyle}
                                    info={fenceFee.underQgroundQtank}
                            />
                    </View>
                </View>
            :
                <View style={styles.fencingFeeStyle}>
                        {/* pfs ends here */}
                <View style={{flex: 4.2,}}>
                        <ReuseInput 
                                // calTypeLabelFlex={styles.calTypeLabelFlex}
                                // calTypeInputFlex={styles.calTypeInputFlex}
                                calTypeStyle={[
                                    styles.calTypeInputStyle, 
                                ]}
                                label='FENCING FEE:'
                                inputConfig={{
                                    placeholder: 'LAND AREA',
                                    textAlign: 'center',
                                    onChangeText: getUserDatum.bind(this, 'fencingQFee'),
                                    onChange: () => {                                    
                                        // computeAssessmentData();
                                        
                                        dispatchCtxData({...ctxData, assessmentFee: assess, processingFee: procFee})                                    
                                    }
                                }}
                        />
                    </View>
                    <FontAwesome6 
                        style={styles.calTypeIconStyle}
                        name="equals" 
                        size={15} 
                        color="black"
                    />
                    
                    <DisplayInfo 
                        style={styles.calDisplayInfoStyle}
                        calTypeLabelStyle={customDisplayStyle}
                            info={ctxData.fencingQFee === ""?fenceFee.fencingQFee : ctxData.fencingQFee}
                    />
                </View>
            }
            <View>
                <View>
                    <LabelledDisplay 
                        calTypeLabelStyle={customDisplayStyle}
                        namedInfo='ASSESSMENT FEE'
                        // onCal={computeAssessmentData}
                        info={assess.toString()}
                        isText={false}
                        isPfs={isPfs}
                    />
                    
                    <LabelledDisplay 
                        calTypeLabelStyle={customDisplayStyle}
                        namedInfo='LAYOUT FEE'
                        info={ctxData.layoutQFee}
                        isText={false}
                    />

                    <LabelledDisplay
                        calTypeLabelStyle={customDisplayStyle}
                        namedInfo='APP & REG FEE'
                        info={ctxData.appQRegQFee}
                        isText={false}
                    />

                    <LabelledDisplay 
                        calTypeLabelStyle={customDisplayStyle}
                        namedInfo='SUB TOTAL'
                        // info={ctxData.subTotal}
                        info={subtot}
                        isText={false}
                    />
                    
                    <LabelledDisplay
                        calTypeLabelStyle={customDisplayStyle}
                        namedInfo='10%'
                        // info={ctxData.tenPercent}
                        info={Math.round(tenPercentage * 100) / 100}
                        isText={false}
                    />

                    <>
                    {(isPfs || ctxData.selectedBuildType.buildType !== 'residential') &&
                        <LabelledDisplay
                            calTypeLabelStyle={customDisplayStyle}
                            namedInfo='5% LASEMA'
                            // info={ctxData.fivePercent}
                            info={Math.round(fivePercentage * 100) / 100}
                            isText={false}
                        />  
                    }
                    </>

                    <LabelledDisplay
                        calTypeLabelStyle={customDisplayStyle}
                        namedInfo='S.E.C'
                        // info={ctxData.sec}
                        info={assess}
                        isText={false}
                    />

                    <LabelledDisplay
                        calTypeLabelStyle={customDisplayStyle}
                        namedInfo='TOTAL'
                        // info={ctxData.processingFee}
                        info={Math.round(procFee * 100) / 100}
                        isText={false}
                    />
                </View>
                <PaymentDisplay
                    payType={'PROCESSING'}
                    total={Math.round(procFee * 100) / 100}
                    agencyCode={ctxData.processingfeeAgencyCode} 
                    revCode={ctxData.processingfeeRevenueCode}
                />
                <View style={styles.calTypeBtnContainerStyle}>
                    <AppButton 
                        calTypeBtnStyle={styles.calTypeBtnStyle}
                        title='CAL STAGE CERT'
                        // btnConfig=
                        onGoto={() => {
                            dispatchCtxData({...ctxData, assessmentFee: assess, processingFee: procFee})
                            navigation.navigate('stageIdcPenal', {proc: Math.round(procFee * 100) / 100,
                            assFee: assess
                         })}}
                    />

                    <AppButton 
                        calTypeBtnStyle={styles.calTypeBtnStyle}
                        title='CAL PENAL'
                        onGoto={() => {
                            dispatchCtxData({...ctxData, 
                                assessmentFee: assess, processingFee: procFee,
                                feesDatum: [...ctxData.feesDatum, {
                                    assessmentFee: assess,
                                    layoutFee: ctxData.layoutQFee,
                                    appRegFee: ctxData.appQRegQFee,
                                    subTotal: subtot,
                                    tenPercentage: tenPercentage,
                                    fivePercentage: fivePercentage,
                                    sec: assess,
                                    Total: procFee,
                                    fencingFee: parseInt(fenceFee.fencingQFee)
                                }]
                            })
                            navigation.navigate('penalFee', {proc: Math.round(procFee * 100) / 100,
                        assFee: assess
                     })}}
                        // btnConfig=
                    />

                    <AppButton 
                        calTypeBtnStyle={styles.calTypeBtnStyle}
                        title='CAL IDC'
                        onGoto={() => {
                            dispatchCtxData({...ctxData, 
                                assessmentFee: assess, processingFee: procFee,
                                feesDatum: [...ctxData.feesDatum, {
                                    assessmentFee: assess,
                                    layoutFee: ctxData.layoutQFee,
                                    appRegFee: ctxData.appQRegQFee,
                                    subTotal: subtot,
                                    tenPercentage: tenPercentage,
                                    fivePercentage: fivePercentage,
                                    sec: assess,
                                    Total: procFee,
                                    fencingFee: fenceFee
                                }]
                            })
                            navigation.navigate('idcFee')}}
                        // btnConfig=
                    />
                </View>

                <AppButton 
                    calTypeBtnStyle={styles.calTypeBtnStyle}
                    title='PREVIEW'
                    onGoto={() => {
                        dispatchCtxData({...ctxData, 
                            assessmentFee: assess, processingFee: procFee,
                            feesDatum: [...ctxData.feesDatum, {
                                assessmentFee: assess,
                                layoutFee: ctxData.layoutQFee,
                                appRegFee: ctxData.appQRegQFee,
                                subTotal: subtot,
                                tenPercentage: tenPercentage,
                                fivePercentage: fivePercentage,
                                sec: assess,
                                Total: procFee,
                                fencingFee: fenceFee
                            }]
                        })
                        navigation.navigate('preview')}}
                    // btnConfig=
                />
            </View>
        </SafeAreaView>
    )
}

const { width, height } = Dimensions.get('screen');

const styles = StyleSheet.create({
    pfsPumpContainerStyle: {},
    calTypeLabelFlex: {
        // flex: 12
    },
    calTypeInputFlex: {
        // flex: 6
    },
    calTypeIconStyle: {
        flex: 1,
    },
    calDisplayInfoStyle: {
        flex: 4,
    },
    calTypeBtnContainerStyle: {
        flexDirection: 'row',
        justifyContent: 'space-around'
    },
    calTypeBtnStyle: {
        width: AppStyles.smallBtnWidth,
        height: AppStyles.smallBtntnHeight,
    },
    fencingFeeStyle: {
        flexDirection: 'row',
        alignItems: 'center',
        // justifyContent: 'space-between',       
    },

    calTypeLabelStyle: {
        // flexDirection: 'row',
        // justifyContent: 'flex-end',
    },

    calTypeInputStyle: {
        width: AppStyles.smallInputWidth,
        // flex: 8,
        // justifyContent: 'space-between',
        // marginRight: 15,
        // marginRight: width / 100.9
    }
})