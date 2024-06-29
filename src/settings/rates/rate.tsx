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
                        textAlign: 'center',
                        // value: '',
                        onChangeText: getUserData.bind(this, "residential")

                    }}
                />

                <ReuseInput 
                    label='COMMERCIAL USE'
                    inputConfig={{
                        placeHolder: 'Rate',
                        inputMode: 'numeric',
                        textAlign: 'center',
                        onChangeText: getUserData.bind(this, "commercial")
                        
                    }}
                />

                <ReuseInput 
                    label='INDUSTRIAL USE'
                    inputConfig={{
                        placeHolder: 'Rate',
                        inputMode: 'numeric',
                        textAlign: 'center',
                        onChangeText: getUserData.bind(this, "industrial")
                    }}
                />

                <ReuseInput 
                    label='INSTITUTIONAL USE'
                    inputConfig={{
                        placeHolder: 'Rate',
                        textAlign: 'center',
                        inputMode: 'numeric',
                        onChangeText: getUserData.bind(this, "institutional")
                        
                    }}
                />

                <ReuseInput 
                    label='AGRICULTURAL USE'
                    inputConfig={{
                        placeHolder: 'Rate',
                        inputMode: 'numeric',
                        textAlign: 'center',
                        onChangeText: getUserData.bind(this, "agricultural")
                        
                    }}
                />

                <ReuseInput 
                    label='RECREATIONAL USE'
                    inputConfig={{
                        placeHolder: 'Rate',
                        inputMode: 'numeric',
                        textAlign: 'center',
                        onChangeText: getUserData.bind(this, 'recreational')
                        
                    }}
                />

                <ReuseInput 
                    label='MIXED USE'
                    inputConfig={{
                        placeHolder: 'Rate',
                        inputMode: 'numeric',
                        textAlign: 'center',
                        onChangeText: getUserData.bind(this, "mixedUse")
                        
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