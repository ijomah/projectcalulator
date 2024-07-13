import { StatusBar } from 'expo-status-bar';
import React, { useContext } from "react";
import { SafeAreaView, StyleSheet, View, Text, TextInput } from "react-native";
import ReuseInput from '../../reuseables/input';
import { ConfigDataContext } from '../../warehouse/configContext';

export default function PaymentAcc(this: any, {feeType, getUserData}: any) {
    const payCtx: any = useContext(ConfigDataContext)
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
                        placeholder: '  Account',
                        inputMode: 'numeric',
                        textAlign: 'center',
                        onChangeText: getUserData.bind(this, `${feeType.replace(" ", "").toLowerCase()}`+"AgencyCode"),
                        value: payCtx[`${feeType.replace(" ", "").toLowerCase()}`+"AgencyCode"]
                        
                        
                    }}
                />
                <ReuseInput 
                    label='REVENUE CODE'
                    inputConfig={{
                        placeholder: '  Account',
                        inputMode: 'numeric',
                        textAlign: 'center',
                        onChangeText: getUserData.bind(this, `${feeType.replace(" ", "").toLowerCase()}`+"RevenueCode"),
                        value: payCtx[`${feeType.replace(" ", "").toLowerCase()}`+"RevenueCode"]
                        
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