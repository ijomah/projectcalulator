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

export default function PageUsedInPenal() {
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
                    // btnConfig= 
                />
                <AppButton
                    title='CAL I.D.C'
                    // btnConfig=
                />
            </View>
            <AppButton 
                title='PREVIEW'
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