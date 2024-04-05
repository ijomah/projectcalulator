import { StatusBar } from 'expo-status-bar';
import React from "react";
import { SafeAreaView, StyleSheet, View, Text, TextInput } from "react-native";
import PaymentAcc from './paymentAcc';

export default function StageAccount({getUserData}: any) {
    return (
        <SafeAreaView>
            <PaymentAcc
                feeType='STAGE CERTIFICATION'
                {...{getUserData}}
            />
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        // backgroundColor: 'red'
    }
})