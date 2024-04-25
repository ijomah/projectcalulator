import React from "react";
import { SafeAreaView, StyleSheet, ScrollView, View, Text,  } from "react-native";
import LabelledDisplay from "./labelDisplay";

export default function PenalPaymentDet() {
    return (
        <SafeAreaView style={{padding: 5}}>
            <LabelledDisplay 
                namedInfo='REVENUE DESCRIPTION'
                info='PENAL FEES ON BUILDING PLAN'
                isSign={true}
                isText={false}
                isWhat={true}
                penalPaymentDetFlexStyle={styles.penalPaymentDetFlexStyle}
                rightPenalPaymentDetFlexStyle={styles.rightPenalPaymentDetFlexStyle}
            />

            <LabelledDisplay 
                namedInfo='ACCOUNT NAME'
                info='LAGOS STATE PHYSICAL PLANNING PERMIT AUTHORITY'
                isSign={true}
                isText={false}
                isWhat={true}
                penalPaymentDetFlexStyle={styles.penalPaymentDetFlexStyle}
                rightPenalPaymentDetFlexStyle={styles.rightPenalPaymentDetFlexStyle}
            />

            <LabelledDisplay
                namedInfo='ACCOUNT NUMBER'
                info='5120000780'
                isSign={true}
                isText={false}
                isWhat={true}
                penalPaymentDetFlexStyle={styles.penalPaymentDetFlexStyle}
                rightPenalPaymentDetFlexStyle={styles.rightPenalPaymentDetFlexStyle}
            />

            <LabelledDisplay 
                namedInfo='ACCOUNT NAME'
                info='FIDELITY BANK'
                isSign={true}
                isWhat={true}
                isText={false}
                rightPenalPaymentDetFlexStyle={styles.rightPenalPaymentDetFlexStyle}
                penalPaymentDetFlexStyle={styles.penalPaymentDetFlexStyle}
            />
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    penalPaymentDetFlexStyle: {
        // flex: 2
        flex: .5
    },
    rightPenalPaymentDetFlexStyle: {
        // flex: 2
        flex: .8,
        alignItems: 'flex-start',
    },
})