import { StatusBar } from 'expo-status-bar';
import React from "react";
import { SafeAreaView, StyleSheet, View, Text, TextInput } from "react-native";
import ReuseInput from '../../reuseables/input';
import DisplayInfo from '../../display/display';


export default function FeePage(this: any, {getUserData}: any) {
    return (
        <SafeAreaView>
            <DisplayInfo 
                info='FEES'
            />
            <View style={styles.container}>
                <ReuseInput 
                    label='APP & REG FEE'
                    inputConfig={{
                        placeholder: '  AMOUNT',
                        inputMode: 'numeric',
                        onChangeText: getUserData.bind(this, "app&RegFee"),
                    }}
                />
                <ReuseInput 
                    label='LAYOUT FEE'
                    inputConfig={{
                        placeHolder: 'AMOUNT',
                        inputMode: 'numeric',
                        onChangeText: getUserData.bind(this, "layoutFee"),
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