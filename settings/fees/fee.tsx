import { StatusBar } from 'expo-status-bar';
import React from "react";
import { SafeAreaView, StyleSheet, View, Text, TextInput } from "react-native";
import ReuseInput from '../../reuseables/input';
import DisplayInfo from '../../display/display';

export default function FeePage() {
    return (
        <SafeAreaView>
            <DisplayInfo 
                info='FEES'
            />
            <View style={styles.container}>
                <ReuseInput 
                    label='APP & REG FEE'
                    inputConfig={{
                        placeholder: '  AMOUNT'
                    }}
                />
                <ReuseInput 
                    label='LAYOUT FEE'
                    inputConfig={{
                        placeHolder: 'AMOUNT'
                    }}
                />
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        // backgroundColor: 'red'
    }
})