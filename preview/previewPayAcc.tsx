import { StatusBar } from 'expo-status-bar';
import React from "react";
import { SafeAreaView, StyleSheet, View, Text, TextInput } from "react-native";
import PaymentDisplay from '../src/display/paymentDisplay';
import ScreenHeadings from '../src/headings/Heading';
import DisplayInfo from '../src/display/display';

export default function PreviewPaymentAcc({payTitle}: any) {
    //Use the contxet to get the values here
    // 
    return (
        <SafeAreaView>
            <ScreenHeadings 
                title={'payTitle'}
            />
            <View style={{flexDirection: 'row'}}>
                <DisplayInfo 
                    info={'ASSESSMENT FEE'}
                />
                <Text>x</Text>
                <DisplayInfo 
                    info={'MULTIPLIER PERCENT'}
                />
            </View>
            <View style={{flexDirection: 'row'}}>
                <DisplayInfo
                    info={'fee amount'}
                />
                <Text>x</Text>
                <DisplayInfo 
                    info={'percent data'}
                />
                <Text>=</Text>
                <DisplayInfo
                    info={'Result'}
                />
            </View>
            <PaymentDisplay 
                total={'total'}
                codes={'codes'}
            />    
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        // backgroundColor: 'red'
    }
})