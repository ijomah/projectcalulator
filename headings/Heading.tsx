import React from "react";
import { 
    ScrollView, 
    StyleSheet, 
    View, Text, 
    Button
} from "react-native";

//This is reusable button- can be used as prev, save & fee btn
export default function ScreenHeadings({title}: any) {
    return (
        <View
        >
            <Text style={styles.h1}>{title}</Text>
        </View>            
    )
}

const styles=StyleSheet.create({
    h1: {},
    h2: {},
    h3: {},
})