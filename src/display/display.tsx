import React from "react";
import { SafeAreaView, 
    StyleSheet, 
    FlatList, 
    View, Text, TextInput, 
    TouchableOpacity } from "react-native";
import { AppStyles } from "../constants/styles";

export default function DisplayInfo({
        floorDisplayStyle, 
        calTypeLabelStyle, 
        textColor,
        prevDisplayStyles, 
        info}: any
    ) {
    return (
        <SafeAreaView style={[
                styles.displayInfoStyle,
                floorDisplayStyle, 
                prevDisplayStyles,
                calTypeLabelStyle
            ]}
        >
            <Text style={[
                    styles.displayTextStyle, 
                    {color: textColor}, 
                ]}
            >{info}</Text>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    displayInfoStyle: {
        width: 120,
        alignItems: 'center',
    },
    displayTextStyle: {
        
    }
})