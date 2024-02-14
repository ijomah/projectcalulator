import React from "react";
import { 
    SafeAreaView, 
    StyleSheet, 
    FlatList, 
    View, Text, TextInput, 
    TouchableOpacity } from "react-native";

export default function ReuseInput({label, inputCheck, inputConfig}: any) {
    return (
        <SafeAreaView>
            <View>
                <Text>{label}</Text>
                <TextInput 
                    {...inputConfig}
                />
            </View>
        </SafeAreaView>
    )
}