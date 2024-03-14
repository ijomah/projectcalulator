import React from "react";
import { SafeAreaView, 
    StyleSheet, 
    FlatList, 
    View, Text, TextInput, 
    TouchableOpacity } from "react-native";

export default function DisplayInfo({textColor, info}: any) {
    return (
        <SafeAreaView>
            <Text style={[styles.displayTextStyle, {color: textColor}]}>{info}</Text>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    displayTextStyle: {
        
    }
})