import React from "react";
import { SafeAreaView, 
    StyleSheet, 
    FlatList, 
    View, Text, TextInput, 
    TouchableOpacity } from "react-native";

export default function DisplayInfo({info}: any) {
    return (
        <SafeAreaView>
            <Text>{info}</Text>
        </SafeAreaView>
    )
}