import { StatusBar } from 'expo-status-bar';
import React, { useContext } from "react";
import { SafeAreaView, StyleSheet, View, Text, TextInput } from "react-native";
import ReuseInput from '../../reuseables/input';
import { ConfigDataContext } from '../../warehouse/configContext';

export default function RatePage(this: any, {getUserData}: any) {
    const ctx: any = useContext(ConfigDataContext)
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
                        onChangeText: getUserData.bind(this, "residential"),
                        value: ctx.residential

                    }}
                />

                <ReuseInput 
                    label='COMMERCIAL USE'
                    inputConfig={{
                        placeHolder: 'Rate',
                        inputMode: 'numeric',
                        textAlign: 'center',
                        onChangeText: getUserData.bind(this, "commercial"),
                        value: ctx.commercial
                    }}
                />

                <ReuseInput 
                    label='INDUSTRIAL USE'
                    inputConfig={{
                        placeHolder: 'Rate',
                        inputMode: 'numeric',
                        textAlign: 'center',
                        onChangeText: getUserData.bind(this, "industrial"),
                        value: ctx.industrial
                    }}
                />

                <ReuseInput 
                    label='INSTITUTIONAL USE'
                    inputConfig={{
                        placeHolder: 'Rate',
                        textAlign: 'center',
                        inputMode: 'numeric',
                        onChangeText: getUserData.bind(this, "institutional"),
                        value: ctx.institutional
                    }}
                />

                <ReuseInput 
                    label='AGRICULTURAL USE'
                    inputConfig={{
                        placeHolder: 'Rate',
                        inputMode: 'numeric',
                        textAlign: 'center',
                        onChangeText: getUserData.bind(this, "agricultural"),
                        value: ctx.agricultural
                    }}
                />

                <ReuseInput 
                    label='RECREATIONAL USE'
                    inputConfig={{
                        placeHolder: 'Rate',
                        inputMode: 'numeric',
                        textAlign: 'center',
                        onChangeText: getUserData.bind(this, 'recreational'),
                        value: ctx.recreational
                        
                    }}
                />

                <ReuseInput 
                    label='MIXED USE'
                    inputConfig={{
                        placeHolder: 'Rate',
                        inputMode: 'numeric',
                        textAlign: 'center',
                        onChangeText: getUserData.bind(this, "mixedUse"),
                        value: ctx.mixedUse
                        
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