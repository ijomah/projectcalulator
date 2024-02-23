import { StatusBar } from 'expo-status-bar';
import React from "react";
import { SafeAreaView, StyleSheet, View, Text, TextInput } from "react-native";
import ReuseInput from '../../reuseables/input';
import PaymentAcc from './paymentAcc';

export default function StagePage() {
    return (
        <SafeAreaView>
            <PaymentAcc 
                feeType='STAGE CERTIFICATION'
            />
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'red'
    }
})