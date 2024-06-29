import { StatusBar } from 'expo-status-bar';
import React from "react";
import { SafeAreaView, StyleSheet, View, Text, TextInput } from "react-native";
import ReuseInput from '../../reuseables/input';

export default function PaymentAcc(this: any, {feeType, getUserData}: any) {
    return (
        <SafeAreaView>
            <Text>
                LASG {' '} {feeType} {' '} 
                FEE PAYMENT ACCOUNT
            </Text>
            <View style={styles.container}>
                <ReuseInput 
                    label='AGENCY CODE'
                    inputConfig={{
                        placeHolder: 'Code',
                        inputMode: 'numeric',
                        textAlign: 'center',
                        onChangeText: getUserData.bind(this, `${feeType.replace(" ", "").toLowerCase()}`+"AgencyCode")
                        
                    }}
                />
                <ReuseInput 
                    label='REVENUE CODE'
                    inputConfig={{
                        placeHolder: 'Code',
                        inputMode: 'numeric',
                        textAlign: 'center',
                        onChangeText: getUserData.bind(this, `${feeType.replace(" ", "").toLowerCase()}`+"RevenueCode")
                        
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