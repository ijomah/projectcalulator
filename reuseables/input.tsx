import React from "react";
import { 
    SafeAreaView, 
    StyleSheet, 
    FlatList, 
    View, Text, TextInput, 
    TouchableOpacity, 
    useWindowDimensions} from "react-native";
import { AppStyles } from "../constants/styles";

export default function ReuseInput({label, inputCheck, inputConfig}: any) {
    const deviceSize = useWindowDimensions();
    return (
        <SafeAreaView>
            <View style={styles.inputCaseStyle}>
                <Text style={styles.labelStyle}>{label}:</Text>
                <TextInput 
                    style={styles.inputStyle}
                    {...inputConfig}
                />
            </View>
        </SafeAreaView>
    )
}

const styles=StyleSheet.create({
    inputCaseStyle: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        margin: 20,
    },

    labelStyle: {},

    inputStyle: {
        width: 200,
        height: 35,
        borderWidth: 3,
        borderColor: AppStyles.inputOutlineColor,
        borderStyle: 'solid',
    },
})