import React from "react";
import { SafeAreaView, StyleSheet, ScrollView, View, Text,  } from "react-native";
import LabelledDisplay from "./labelDisplay";

export default function PenalPaymentDet() {
    return (
        <SafeAreaView>
            <LabelledDisplay 
                namedInfo='REVENUE DESCRIPTION'
                info='PENAL FEES ON BUILDING PLAN'
                isSign={true}
                isText={false}
                isWhat={true}
                penalPaymentDetFlexStyle={styles.penalPaymentDetFlexStyle}
            />

            <LabelledDisplay 
                namedInfo='ACCOUNT NAME'
                info='LAGOS STATE PHYSICAL PLANNING PERMIT AUTHORITY'
                isSign={true}
                isText={false}
                isWhat={true}
                penalPaymentDetFlexStyle={styles.penalPaymentDetFlexStyle}
            />

            <LabelledDisplay
                namedInfo='ACCOUNT NUMBER'
                info='5120000780'
                isSign={true}
                isText={false}
                isWhat={true}
                penalPaymentDetFlexStyle={styles.penalPaymentDetFlexStyle}
            />

            <LabelledDisplay 
                namedInfo='ACCOUNT NAME'
                info='FIDELITY BANK'
                isSign={true}
                isWhat={true}
                isText={false}
                penalPaymentDetFlexStyle={{flex: 1}}
            />
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    penalPaymentDetFlexStyle: {
        flex: 2
    },

})