import React from "react";
import { 
    ScrollView, 
    StyleSheet, 
    View, Text, 
    Button, 
    Image, 
    useWindowDimensions
} from "react-native";

//This is reusable button- can be used as prev, save & fee btn
export default function AppHeadLogo({title, btnConfig}: any) {
    const devSize = useWindowDimensions();
    return (
        <Image
            style={[
                styles.imgStyles, 
                // {
                //     maxHeight: devSize.height / 10, 
                //     maxWidth: devSize.width / 2 
                // }
            ]}
            source={require('./../assets/asses-calculator.png')}
        />
        
    )
}

const styles=StyleSheet.create({
    imgStyles: {
        height: 110,
        width: 250,
        marginBottom: 25
    }
})