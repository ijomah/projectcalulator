import { StatusBar } from 'expo-status-bar';
import React from "react";
import { SafeAreaView, StyleSheet, View, Text, TextInput } from "react-native";
import RatePage from './rates/rate';
import FeePage from './fees/fee';
import ProcessingPage from './paymentAcc/processing';
import StagePage from './paymentAcc/stage';
import IdcPage from './paymentAcc/idc';
import AppButton from '../buttons/appBtn';

export default function SettingPage() {
    return (
        <SafeAreaView>
            <RatePage />
            <FeePage />
            <ProcessingPage />
            <StagePage />
            <IdcPage />
            <AppButton />
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'red'
    }
})