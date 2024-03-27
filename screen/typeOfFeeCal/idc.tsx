import { StatusBar } from 'expo-status-bar';
import React from "react";
import { SafeAreaView, StyleSheet, View, Text, TextInput } from "react-native";
import PaymentAcc from '../../settings/paymentAcc/paymentAcc';
import LabelledDisplay from '../../display/labelDisplay';
import AppButton from '../../buttons/appBtn';
import ScreenHeadings from '../../headings/Heading';
import ApplicantDet from '../../bio/applicantDet';
import PaymentDisplay from '../../display/paymentDisplay';
import PenalPaymentDet from '../../display/penalPaymentDet';

export default function Idc({navigation}: any) {
    return (
        <SafeAreaView>
            <ScreenHeadings
                title='APPLICATION DETAILS'
            />
            <ApplicantDet />
            <ScreenHeadings 
                title='BETTERMENT FEE (INFRASTRUCTURE DEVELOPMENT CHARGE'
            />

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