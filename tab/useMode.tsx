import { StatusBar } from 'expo-status-bar';
import React from "react";
import { SafeAreaView, StyleSheet, View, Text, TextInput } from "react-native";

export default function ModeOfUse() {
    return (
        <SafeAreaView>
            <View style={styles.container}>
                <Text>Open up App.tsx to start working on your app!</Text>
                <StatusBar style="auto" />
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'red'
    }
})