import React from "react";
import { 
    SafeAreaView, 
    StyleSheet, 
    FlatList, 
    View, Text, TextInput, 
    TouchableOpacity } from "react-native";
import DisplayInfo from "./display";
import LabelledDisplay from "./labelDisplay";

export default function PaymentDisplay({total, agencyCode, revCode, payType, codes}: any) {
    return (
        <SafeAreaView style={styles.payDisplayContainer}>
            <Text style={{textAlign: 'center'}}>
                PLEASE PAY THE SUM OF 
                {' '} 
                {'N'+total}
                {' '} 
                TO LASG ACCOUNT AS {payType} FEE
            </Text>
            <View style={{flexDirection: 'row',}}>
                <View style={{flexDirection: 'row'}}>
                    <DisplayInfo
                        info={'AGENCY CODE: '+ agencyCode}
                    />
                    {/* <Text> {' '} </Text> */}
                    {/* <DisplayInfo
                        info='AccountData'
                    /> */}
                </View>

                <View style={{flexDirection: 'row'}}>
                    <DisplayInfo
                        info={'  REVENUE CODE: '+ revCode}
                    />
                    {/* <Text> {' '} </Text> */}
                    {/* <DisplayInfo
                        info='AccountData'
                    /> */}
                </View>
            </View>

            {/* <View>
                <LabelledDisplay
                    namedInfo='REVENUE CODE'
                    info=''
                />
            </View> */}
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    payDisplayContainer: {
        // justifyContent: 'center',
        alignItems: 'center',

    }
})