import React from "react";
import { SafeAreaView, 
    StyleSheet, 
    FlatList, 
    View, Text, TextInput, 
    TouchableOpacity } from "react-native";

import { Entypo } from '@expo/vector-icons';
import { FontAwesome6 } from '@expo/vector-icons';

import DisplayInfo from "./display";
import { customDisplayStyle } from "../constants/styles";
import AppButton from "../buttons/appBtn";

export default function LabelledDisplay({
        info, 
        isText, 
        isSign,
        isWhat, 
        isPfs,
        prevLabelStyle,
        multiplandInfo,
        calTypeLabelStyle,
        penalPaymentDetFlexStyle,
        rightPenalPaymentDetFlexStyle, 
        onCal,
        namedInfo}: any
    ) {
    return (
        <SafeAreaView style={[styles.labelDisplayStyle]}>
            {isText?
                <>
                    <Text style={[styles.nonEmptyTextStyle, prevLabelStyle]}>{multiplandInfo}</Text>
                    {/* <Text style={{marginHorizontal: '2%'}}>x</Text> */}
                </>
                :
                <Text style={isWhat? styles.noSpace : styles.emptyTextStyle}>{' '}</Text>
                
            }
            <Text style={[
                styles.namedInfoStyle, 
                penalPaymentDetFlexStyle]}>{namedInfo}</Text>
            {/* Equality sign icon */}
            {isSign?
                <Entypo 
                name="dots-two-vertical" 
                size={15} color="black" />
                :
                <FontAwesome6 
                    style={
                        styles.iconEqualStyle
                    }
                    name="equals" 
                    size={15} 
                    color="black" 
                />
            }
            {/* {isPfs === true?  */}
            {/* <AppButton 
            title={totalValue}
            onGoto={}
            />
            : */}
            <DisplayInfo 
                style={[
                    // styles.displayInfoPartStyle, 
                    // penalPaymentDetFlexStyle,
                    rightPenalPaymentDetFlexStyle
                ]}
                rightPenalPaymentDetFlexStyle={rightPenalPaymentDetFlexStyle}
                calTypeLabelStyle={calTypeLabelStyle}
                onCal={onCal}
                info={info.toString()}
            />
            {/* } */}
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    labelDisplayStyle: {
        flexDirection: 'row',
        // justifyContent: 'space-around',

    },

    noSpace: {
        flex: 0,
    },

    nonEmptyTextStyle: {
        marginLeft: '1%',
        // flex: 1.7
    },

    emptyTextStyle: {
        flex: 1.7
    },

    namedInfoStyle: {
        flex: 2.5        
    },

    iconEqualStyle: {
        flex: 1
    },

    displayInfoPartStyle: {
        flex: 4
        
    }

})