import { StatusBar } from 'expo-status-bar';
import React from "react";
import { SafeAreaView, StyleSheet, View, Text, TextInput } from "react-native";
import ReuseInput from '../../reuseables/input';

export default function RatePage() {
    return (
        <SafeAreaView>
            <Text>RATES</Text>
            <View style={styles.container}>
                                <ReuseInput 
                    label='RESIDENTIAL USE'
                    inputConfig={{
                        placeHolder: 'Rate',

                    }}
                />

                                <ReuseInput 
                    label='COMMERCIAL USE'
                    inputConfig={{
                        placeHolder: 'Rate',
                        
                    }}
                />

                <ReuseInput 
                    label='INDUSTRIAL USE'
                    inputConfig={{
                        placeHolder: 'Rate',
                        
                    }}
                />

                <ReuseInput 
                    label='INSTITUTIONAL USE'
                    inputConfig={{
                        placeHolder: 'Rate',
                        
                    }}
                />

                <ReuseInput 
                    label='AGRICULTURAL USE'
                    inputConfig={{
                        placeHolder: 'Rate',
                        
                    }}
                />

                <ReuseInput 
                    label='RECREATIONAL USE'
                    inputConfig={{
                        placeHolder: 'Rate',
                        
                    }}
                />

                <ReuseInput 
                    label='MIXED USE'
                    inputConfig={{
                        placeHolder: 'Rate',
                        
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