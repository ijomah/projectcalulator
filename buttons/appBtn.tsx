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
            {...btnConfig}
        >
            <Text>{title}</Text>
        </TouchableOpacity>            
    )
}