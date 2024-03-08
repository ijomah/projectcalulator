import React from "react";
import { 
    ScrollView, 
    StyleSheet, 
    View, Text, 
    Button, 
    TouchableOpacity 
} from "react-native";

//This is reusable button- can be used as prev, save & fee btn
export default function AppButton({title, btnConfig}: any) {
    const nav = () => {}
    return (
        <TouchableOpacity
            style={styles.btn}
            {...btnConfig}
        >
            <Text>{title}</Text>
        </TouchableOpacity>            
    )
}

const styles=StyleSheet.create({
    btn: {
        backgroundColor: 'red',
        height: 52,
        width: 100,
        borderRadius:10,
        justifyContent: 'center',
        alignItems: 'center',

    }
})