import { StatusBar } from 'expo-status-bar';
import React from "react";
import { SafeAreaView, StyleSheet, View, Text, TextInput } from "react-native";
import PaymentAcc from '../../settings/paymentAcc/paymentAcc';
import ApplicantDet from '../../bio/applicantDet';
import AppButton from '../../buttons/appBtn';
import PaymentDisplay from '../../display/paymentDisplay';
import PenalPaymentDet from '../../display/penalPaymentDet';
import ScreenHeadings from '../../headings/Heading';

export default function PageUsedInPenal({navigation}: any) {
    return (
        <SafeAreaView>
            <ScreenHeadings
                title='APPLICATION DETAILS'
            />
            <ApplicantDet />
            <ScreenHeadings 
                title='PENAL'
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
    }
})