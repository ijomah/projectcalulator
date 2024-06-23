import React, { useContext } from "react";
import { SafeAreaView, 
    StyleSheet, 
    FlatList, 
    View, Text, TextInput, 
    TouchableOpacity } from "react-native";
import { AppStyles } from "../constants/styles";
import { ConfigDataContext, DispatchContext } from "../warehouse/configContext";

export default function DisplayInfo({
        floorDisplayStyle,
        prevBuidingDisplayInfoStyle,
        calTypeLabelStyle, 
        textColor,
        prevDisplayStyles,
        prevBuildingOutlineStyle,
        rightPenalPaymentDetFlexStyle,
        onCal,
        info}: any
    ) {

    const ctxDatum: any = useContext(ConfigDataContext);

    return (
        <SafeAreaView style={[
                styles.displayInfoStyle,
                floorDisplayStyle, 
                prevDisplayStyles,
                calTypeLabelStyle,
                prevBuidingDisplayInfoStyle,
                prevBuildingOutlineStyle,
                rightPenalPaymentDetFlexStyle,
            ]}
        >
            <Text style={[
                    styles.displayTextStyle, 
                    {color: textColor}, 
                ]}
                // onPress={ctxDatum.computeAssessmentData}
            >{info}</Text>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    displayInfoStyle: {
        width: AppStyles.width / 3,
        alignItems: 'center',
    },
    displayTextStyle: {
        
    }
})