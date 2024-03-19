import React from "react";
import { 
    ScrollView, 
    StyleSheet, 
    View, Text, 
    Button,
    Dimensions
} from "react-native";
import { AppStyles, customDisplayStyle } from "../constants/styles";

//This is reusable button- can be used as prev, save & fee btn
export default function ScreenHeadings({title, h1, h2, h3}: any) {
    return (
        <View
            style={[styles.headingContainerStyle]}
        >
            {/* !!h1 && */}
             <Text style={styles.h1}>{title}</Text>
            {/* !!h2 && <Text style={styles.h2}>{title}</Text>
            !!h3 && <Text style={styles.h3}>{title}</Text> */}
        </View>            
    )
}

const { width, height } = Dimensions.get('screen');

const styles = StyleSheet.create({
    headingContainerStyle: {
        width: width / 1.3,
        alignSelf: 'center',
        borderWidth: 3,
        borderStyle: 'solid',
        borderColor: AppStyles.inputOutlineColor
    },
    h1: {
        color: AppStyles.txtColor,
        textAlign: 'center'
    },
    h2: {},
    h3: {},
})