import React, { useContext, useEffect } from "react";
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



export default function CalcuationTypes(this: any, {getUserData, floorTotArr, navigation, isPfs}: any) {
    const ctxData: any = useContext(ConfigDataContext);
    const dispatchCtxData: any = useContext(DispatchContext)
    

    //get the floor data arr
    //filter the array to the correct arithmetical ones
    //take the floor total of each floor
    //cal your assessment then
    // const computeAssessmentData = () => {
    //     console.log('touched')
    //     //filter the arr
    //     let filteredFloorData = ctxData.floorData.filter((info: any) => (info.length * info.breadth * info.height * info.rate) === info.gFloorRes);
        
    //     dispatchCtxData({...ctxData, floorData: filteredFloorData})

    //     let floorTotArr = filteredFloorData.reduce((item: any, current: any, floorIdx: any) => {
    //         // if (current === 'gFloorRes') {
    //             item[floorIdx] = current.gFloorRes
    //         // }
    //         let floorTotalArr = Object.values(item); 
    //         return Object.values(item);
    //     }, {} )
        
    //     // let floorTotArr = Object.values(floorTotObj);
    //     //put in ctx
    //     if(isPfs === true) {
    //         dispatchCtxData({...ctxData, assessmentFee: addUp(...floorTotArr, ctxData.pfsQFencingQFee, ctxData.addpump, ctxData.firstQfloorQpump, ctxData.underQgroundQtank)});
    //     } else {
    //         dispatchCtxData({...ctxData, assessmentFee: addUp(...floorTotArr, ctxData.fencingQFee)});
    //     }

    //     //calls
    //     calSubTotal();
    //     cal10Percent();
    //     cal5Percent();
    //     calTotal();
    // }

    // const workoutPfs = () => {

    // }
    // if (isPfs === true) {
    //     dispatchCtxData({...ctxData, assessmentFee: addUp(...ctxData.floorTotal, ctxData.pfsQFencingQFee, ctxData.addpump, ctxData.firstQfloorQpump, ctxData.underQgroundQtank)});
    // }
    // let structTotal
    //
    //functions
    // const cal10Percent = () => {
    //     let tenPercent = ctxData.assessmentFee * 0.1     //ie 10%
    //     dispatchCtxData({...ctxData, tenPercent: tenPercent})
    // } 
    // const cal5Percent = () => {
    //     let fivePercent = ctxData.assessmentFee * 0.05     //ie 5%
    //     dispatchCtxData({...ctxData, fivePercent: fivePercent})
    // }
    // const calSubTotal = () => {
    //     let subTotal = addUp(ctxData.assessmentFee, ctxData.layout, ctxData.appReg);
    //     dispatchCtxData({...ctxData, subTotal: subTotal})
    // }
    // const calTotal = () => {
    //     let total = addUp(ctxData.tenPercent, ctxData.sec, ctxData.subTotal)
    //     dispatchCtxData({...ctxData, total: total});
    // }

    // setInterval(computeAssessmentData, 50000 )
    // useEffect(() => {
    //     computeAssessmentData
    // }, [ctxData])

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
                                            onChangeText: getUserData.bind(this, 'pfsQFencingQFee'),
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
                                    info={ctxData.pfsQFencingQFee}
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
                                        onChangeText: getUserData.bind(this, 'firstQfloorQpump'),
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
                                info={ctxData.firstQfloorQpump}
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
                                        onChangeText: getUserData.bind(this, 'addQpump'),
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
                                info={ctxData.addQpump}
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
                                            onChangeText: getUserData.bind(this, 'underQgroundQtank'),
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
                                    info={ctxData.underQgroundQtank}
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
                                    onChangeText: getUserData.bind(this, 'fencingQFee'),
                                    // onEndEditting: computeAssessmentData
                                    // onKeyPress:computeAssessmentData
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
                            info={ctxData.fencingQFee}
                    />
                </View>
            }
            <View>
                <View>
                    <LabelledDisplay 
                        calTypeLabelStyle={customDisplayStyle}
                        namedInfo='ASSESSMENT FEE'
                        // onCal={computeAssessmentData}
                        info={ctxData.assessmentFee || 'Get Result'}
                        isText={false}
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
                        info={ctxData.subTotal}
                        isText={false}
                    />
                    
                    <LabelledDisplay
                        calTypeLabelStyle={customDisplayStyle}
                        namedInfo='10%'
                        info={ctxData.tenPercent}
                        isText={false}
                    />

                    <>
                    {isPfs &&
                        <LabelledDisplay
                            calTypeLabelStyle={customDisplayStyle}
                            namedInfo='5% LASEMA'
                            info={ctxData.fivePercent}
                            isText={false}
                        />  
                    }
                    </>

                    <LabelledDisplay
                        calTypeLabelStyle={customDisplayStyle}
                        namedInfo='S.E.C'
                        info={ctxData.sec}
                        isText={false}
                    />

                    <LabelledDisplay
                        calTypeLabelStyle={customDisplayStyle}
                        namedInfo='TOTAL'
                        info={ctxData.processingFee}
                        isText={false}
                    />
                </View>
                <PaymentDisplay />
                <View style={styles.calTypeBtnContainerStyle}>
                    <AppButton 
                        calTypeBtnStyle={styles.calTypeBtnStyle}
                        title='CAL STAGE CERT'
                        // btnConfig=
                        onGoto={() => navigation.navigate('stageIdcPenal')}
                    />

                    <AppButton 
                        calTypeBtnStyle={styles.calTypeBtnStyle}
                        title='CAL PENAL'
                        onGoto={() => navigation.navigate('penalFee')}
                        // btnConfig=
                    />

                    <AppButton 
                        calTypeBtnStyle={styles.calTypeBtnStyle}
                        title='CAL IDC'
                        onGoto={() => navigation.navigate('idcFee')}
                        // btnConfig=
                    />
                </View>

                <AppButton 
                    calTypeBtnStyle={styles.calTypeBtnStyle}
                    title='PREVIEW'
                    onGoto={() => navigation.navigate('preview')}
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