import React from "react";
import { 
    SafeAreaView, 
    StyleSheet,
    Image, 
    Text, View, 
    TouchableOpacity, 
    Dimensions,
    ScrollView
} from "react-native"

import { Feather } from '@expo/vector-icons';

export default function WelcomeComp({navigation}: any) {
    return (
        // <ScrollView>
            <SafeAreaView style={styles.welcomeContainerStyle}>
                
                    <Image
                        style={styles.welcomeBannerStyle}
                        source={require('./../assets/assesscal.png')}
                    />
                    <View style={styles.welcomeNavandBrandStyle}
                    >
                        <TouchableOpacity
                            style={styles.welcomeNavStyle}
                            onPress={() => navigation.navigate('home')}
                        >
                            <Feather name="arrow-right-circle" size={40} color="black" />
                        </TouchableOpacity>   
                        <Text>DEVELOPED BY: SMARTPAVE CONSULT (c)</Text>    
                    </View>
                
            </SafeAreaView>
        // </ScrollView> 
    )
}

const {width, height} = Dimensions.get("screen");

const styles = StyleSheet.create({
    welcomeContainerStyle: {
        height: height > 850? height: '100%',
        width: width > 950? width* 0.9 : width,
        justifyContent: 'center',
        alignContent: 'center',
        },
    welcomeNavandBrandStyle: {
        height: height / 2.7,
        // backgroundColor: 'yellow',
        justifyContent: 'space-between',
        alignItems: 'center'
    },

    welcomeBannerStyle: {
        width: '80%',
        height: height / 2,
        // height: 350, 
        // width: 350, 
        backgroundColor: '#305452',
        alignSelf: 'center',
        alignItems: 'center'
    },
    welcomeNavStyle:  {}
})