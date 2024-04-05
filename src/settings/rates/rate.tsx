import { StatusBar } from 'expo-status-bar';
import React from "react";
import { SafeAreaView, StyleSheet, View, Text, TextInput } from "react-native";
import ReuseInput from '../../reuseables/input';

export default function RatePage(this: any, {getUserData}: any) {
    return (
        <SafeAreaView>
            <Text>RATES</Text>
            <View style={styles.container}>
                <ReuseInput 
                    label='RESIDENTIAL USE'
                    inputConfig={{
                        placeHolder: 'Rate',
                        inputMode: 'numeric',
                        onChangeText: getUserData.bind(this, 'residentRate')

                    }}
                />

                <ReuseInput 
                    label='COMMERCIAL USE'
                    inputConfig={{
                        placeHolder: 'Rate',
                        inputMode: 'numeric',
                        onChangeText: getUserData.bind(this, 'commercialRate')
                        
                    }}
                />

                <ReuseInput 
                    label='INDUSTRIAL USE'
                    inputConfig={{
                        placeHolder: 'Rate',
                        inputMode: 'numeric',
                        onChangeText: getUserData.bind(this, 'industrialRate')
                    }}
                />

                <ReuseInput 
                    label='INSTITUTIONAL USE'
                    inputConfig={{
                        placeHolder: 'Rate',
                        inputMode: 'numeric',
                        onChangeText: getUserData.bind(this, 'institutionRate')
                        
                    }}
                />

                <ReuseInput 
                    label='AGRICULTURAL USE'
                    inputConfig={{
                        placeHolder: 'Rate',
                        inputMode: 'numeric',
                        onChangeText: getUserData.bind(this, 'agricRate')
                        
                    }}
                />

                <ReuseInput 
                    label='RECREATIONAL USE'
                    inputConfig={{
                        placeHolder: 'Rate',
                        inputMode: 'numeric',
                        onChangeText: getUserData.bind(this, 'recreateRate')
                        
                    }}
                />

                <ReuseInput 
                    label='MIXED USE'
                    inputConfig={{
                        placeHolder: 'Rate',
                        inputMode: 'numeric',
                        onChangeText: getUserData.bind(this, 'mixedUseRate')
                        
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