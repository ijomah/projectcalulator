import { StatusBar } from 'expo-status-bar';
import React from "react";
import { SafeAreaView, StyleSheet, View, Text, TextInput } from "react-native";
import PaymentAcc from './paymentAcc';

export default function IDCAccount({getUserData}: any) {
    return (
        <SafeAreaView>
            <PaymentAcc
                feeType='BETTERMENT (IDC)'
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