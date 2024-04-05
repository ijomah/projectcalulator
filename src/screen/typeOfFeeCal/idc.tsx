import { StatusBar } from 'expo-status-bar';
import React from "react";
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

export default function Idc(this: any, {navigation, getUserData}: any) {
    return (
        <SafeAreaView>
            <ScreenHeadings
                title='APPLICATION DETAILS'
            />
            <ApplicantDet />
            <ScreenHeadings 
                title='BETTERMENT FEE (INFRASTRUCTURE DEVELOPMENT CHARGE'
            />
            <View style={{justifyContent: 'center',flexDirection: 'row'}}>
                <ReuseInput
                    label=''
                    inputConfig={{
                        placeholder: 'LETTABLE SPACE/UNIT',
                        inputMode: 'numeric',
                        onChangeText: getUserData.bind(this, 'lettableSpaceIdc')
                    }}
                />
                <Text>x</Text>
                <ReuseInput
                    label=''
                    inputConfig={{
                        placeholder: 'CURRENT RATE',
                        inputMode: 'numeric',
                        onChangeText: getUserData.bind(this, 'currentRateIdc')
                    }}
                />
            </View>
            <View style={{justifyContent: 'center',flexDirection: 'row'}}>
                <DisplayInfo
                    info='LETTABLE SPACE/UNIT'
                />
                <Text>x</Text>
                <DisplayInfo
                    info='CURRENT RATE'
                />
            </View>
            <PaymentDisplay />
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