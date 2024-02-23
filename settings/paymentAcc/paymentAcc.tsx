import { StatusBar } from 'expo-status-bar';
import React from "react";
import { SafeAreaView, StyleSheet, View, Text, TextInput } from "react-native";
import ReuseInput from '../../reuseables/input';

export default function PaymentAcc({feeType}: any) {
    return (
        <SafeAreaView>
            <Text>LASG {' '} {feeType} {' '} FEE PAYMENT ACCOUNT</Text>
            <View style={styles.container}>
                <ReuseInput 
                    label='Agency Code'
                    inputConfig={{
                        placeHolder: 'Code',
                        
                    }}
                />
                <ReuseInput 
                    label='Revenue Code'
                    inputConfig={{
                        placeHolder: 'Code',
                        
                    }}
                />
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'red'
    }
})