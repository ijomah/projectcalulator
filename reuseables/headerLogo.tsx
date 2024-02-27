import React from "react";
import { 
    ScrollView, 
    StyleSheet, 
    View, Text, 
    Button, 
    Image 
} from "react-native";

//This is reusable button- can be used as prev, save & fee btn
export default function AppHeadLogo({title, btnConfig}: any) {
    
    return (
        <Image
            source={require('./../assets/assess-Calculator.png')}
        />
            // <Text>{title}</Text>
        
    )
}