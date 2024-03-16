import React from "react";
import { SafeAreaView, 
    StyleSheet, 
    FlatList, 
    View, Text, TextInput, 
    TouchableOpacity } from "react-native";

export default function DisplayInfo({floorDisplayStyle, textColor, info}: any) {
    return (
        <SafeAreaView>
            <Text style={[styles.displayTextStyle, {color: textColor}, floorDisplayStyle]}>{info}</Text>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    displayTextStyle: {
        // backgroundColor: 'yellow'
    }
})