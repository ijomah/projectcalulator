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
            <Text style={{color: 'white'}}>{title}</Text>
        </TouchableOpacity>            
    )
}

const styles=StyleSheet.create({
    btn: {
        borderColor: '#c8c92d',
        borderWidth: 2,
        backgroundColor: '#305452',
        height: 52,
        width: 100,
        borderRadius:10,
        justifyContent: 'center',
        alignItems: 'center',

    }
})