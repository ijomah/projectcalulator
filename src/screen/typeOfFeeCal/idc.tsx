import { StatusBar } from 'expo-status-bar';
import React, { useContext, useState } from "react";
import { SafeAreaView, StyleSheet, View, Text, TextInput } from "react-native";
import PaymentAcc from '../../settings/paymentAcc/paymentAcc';
import ApplicantDet from '../../bio/applicantDet';
import AppButton from '../../buttons/appBtn';
import PaymentDisplay from '../../display/paymentDisplay';
import PenalPaymentDet from '../../display/penalPaymentDet';
import ScreenHeadings from '../../headings/Heading';
import LabelledDisplay from '../../display/labelDisplay';
import DisplayInfo from '../../display/display';
import ReuseInput from '../../reuseables/input';
import { ConfigDataContext, DispatchContext } from '../../warehouse/configContext';
// import ManageApplicantDetails from '../../bio/manageApplicantDet';

export default function Idc(this: any, {navigation}: any) {
    const idcCtxData: any = useContext(ConfigDataContext);
    const dispatchIdcCtxData: any = useContext(DispatchContext);
    const [idcLettable, setIdclettable] = useState(0);
    const [curRate, setCurRate] =useState(0);
    const getUserInputData = (objKey: any, objValue: number) => {
        console.log('idc data', idcCtxData);
        dispatchIdcCtxData({...idcCtxData, [objKey]: objValue })
        objKey === 'lettableSpaceIdc' && setIdclettable(objValue);
        // Object.keys(idcCtxData) === lettableSpaceIdc
        objKey === 'currentRateIdc' && setCurRate(objValue);
        // console.log('idc state', idcMultiplier);
    }

    //cal
    const calIdcTotal = idcLettable * curRate
    return (
        <SafeAreaView>
            <ScreenHeadings
                title='APPLICATION DETAILS'
            />
            {/* <ManageApplicantDetails /> */}
            <ApplicantDet 
                gatherDet={getUserInputData}
            />
            <ScreenHeadings 
                title='BETTERMENT FEE (INFRASTRUCTURE DEVELOPMENT CHARGE)'
            />
            <View style={{justifyContent: 'center',flexDirection: 'row'}}>
                <ReuseInput
                    label=''
                    inputConfig={{
                        placeholder: 'LETTABLE SPACE/UNIT',
                        inputMode: 'numeric',
                        onChangeText: getUserInputData.bind(this, 'lettableSpaceIdc')
                    }}
                />
                <Text>x</Text>
                <ReuseInput
                    label=''
                    inputConfig={{
                        placeholder: 'CURRENT RATE',
                        inputMode: 'numeric',
                        onChangeText: getUserInputData.bind(this, 'currentRateIdc')
                    }}
                />
            </View>
            <View style={{justifyContent: 'center',flexDirection: 'row'}}>
                <DisplayInfo
                    // info={idcMultiplier === null? 'LETTABLE SPACE/UNIT' : idcMultiplier.lettableSpaceIdc}
                    info={idcLettable || 'LETTABLE SPACE/UNIT'}
                />
                <Text>x</Text>
                <DisplayInfo
                    // info={idcCtxData.currentRateIdc === undefined? 'CURRENT RATE' : idcMultiplier.currentRateIdc}
                    info={curRate || 'CURRENT RATE'}
                />
                <Text>=</Text>
                <DisplayInfo
                    info={calIdcTotal || 'Total'}
                />
            </View>
            <PaymentDisplay
                total={calIdcTotal || '***'}
                agencyCode={idcCtxData.bettermentAgencyCode}
                revCode={idcCtxData.bettermentRevenueCode}
                payType = 'BETTERMENT (IDC) '
            />
            {/* <PenalPaymentDet />  */}

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
                    title='CAL PENAL'
                    isBtn={true}
                    onGoto={() => navigation.navigate('penalFee')}
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
    }
})