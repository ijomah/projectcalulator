import React from "react";
import { 
    SafeAreaView, 
    StyleSheet, 
    FlatList, 
    View, Text, TextInput, 
    TouchableOpacity } from "react-native";
import DisplayInfo from "./display";

export default function PaymentDisplay({total, codes}: any) {
    return (
        <SafeAreaView>
            <Text>PLEASE PAY THE SUMM OF {' '} {total}
                {' '} TO LASG ACCOUNT AS PROCESSING FEE
            </Text>
            <View>
                <View>
                    <DisplayInfo
                        info={codes}
                    />: {' '} 
                    <DisplayInfo
                        info={codes}
                    />
                </View>

                <View>
                    <DisplayInfo
                        info={codes}
                    />: {' '} 
                    <DisplayInfo
                        info={codes}
                    />
                </View>
            </View>
        </SafeAreaView>
    )
}