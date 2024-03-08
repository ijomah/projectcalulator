import React from "react";
import { 
    ScrollView, 
    StyleSheet, 
    View, Text, 
    Button
} from "react-native";

//This is reusable button- can be used as prev, save & fee btn
export default function ScreenHeadings({title, h1, h2, h3}: any) {
    return (
        <View
        >
            !!h1 && <Text style={styles.h1}>{title}</Text>
            !!h2 && <Text style={styles.h2}>{title}</Text>
            !!h3 && <Text style={styles.h3}>{title}</Text>
        </View>            
    )
}

const styles=StyleSheet.create({
    h1: {},
    h2: {},
    h3: {},
})