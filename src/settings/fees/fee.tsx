import { StatusBar } from 'expo-status-bar';
import React, { useContext } from "react";
import { SafeAreaView, StyleSheet, View, Text, TextInput } from "react-native";
import ReuseInput from '../../reuseables/input';
import DisplayInfo from '../../display/display';
import { ConfigDataContext } from '../../warehouse/configContext';


export default function FeePage(this: any, {getUserData}: any) {
    const feeCtx: any = useContext(ConfigDataContext);
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
                        textAlign: 'center',
                        onChangeText: getUserData.bind(this, "appQRegQFee"),
                        value: feeCtx.appQRegQFee
                    }}
                />
                <ReuseInput 
                    label='LAYOUT FEE'
                    inputConfig={{
                        placeholder: 'AMOUNT',
                        inputMode: 'numeric',
                        textAlign: 'center',
                        onChangeText: getUserData.bind(this, "layoutQFee"),
                        value: feeCtx.layoutQFee
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