import React from "react";
import { 
    ScrollView, 
    StyleSheet, 
    View, Text, 
    Button, 
    TouchableOpacity 
} from "react-native";
import { useNavigation } from "@react-navigation/native";

//This is reusable button- can be used as prev, save & fee btn
export default function AppButton({title, addFloorAndBuildingBtnStyle, onGoto, btnConfig}: any) {

    return (
        <TouchableOpacity
            style={[styles.btn, addFloorAndBuildingBtnStyle]}
            onPress={onGoto}
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
        height: 42,
        width: 80,
        shadowColor: '#dbaeaf',
        shadowOffset: {
            width: 3,
            height: 5,
        },
        shadowOpacity: 0.9,
        elevation: 14,
        borderRadius:10,
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf: 'center',
        margin: 5,

    }
})