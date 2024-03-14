import React from "react";
import { 
    SafeAreaView, 
    StyleSheet, 
    FlatList, 
    View, Text, TextInput, 
    TouchableOpacity, 
    useWindowDimensions,
    Dimensions} from "react-native";
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

const {width, height} = Dimensions.get('screen');

const styles=StyleSheet.create({
    inputCaseStyle: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        margin: (width / 100),
    },

    labelStyle: {
        fontSize: 13,
        color: '#1044b8'
    },

    inputStyle: {
        width: width / 2,
        height: (height / 100) * 3,
        borderWidth: 3,
        borderColor: AppStyles.inputOutlineColor,
        borderStyle: 'solid',
        borderRadius: 8,
    },
})