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

export default function LabelledDisplay({
        info, 
        isText, 
        isSign,
        isWhat, 
        multiplandInfo, 
        calTypeLabelStyle,
        penalPaymentDetFlexStyle, 
        namedInfo}: any
    ) {
    return (
        <SafeAreaView style={[styles.labelDisplayStyle]}>
            {isText?
                <>
                    <Text style={styles.nonEmptyTextStyle}>{multiplandInfo}</Text>
                    <Text style={{marginHorizontal: '2%'}}>x</Text>
                </>
                :
                <Text style={isWhat? styles.noSpace : styles.emptyTextStyle}>{' '}</Text>
                
            }
            <Text style={[styles.namedInfoStyle, penalPaymentDetFlexStyle]}>{namedInfo}</Text>
            {/* Equality sign icon */}
            {isSign?
                <Entypo 
                name="dots-two-vertical" 
                size={15} color="black" />
                :
                <FontAwesome6 
                    style={styles.iconEqualStyle}
                    name="equals" 
                    size={15} 
                    color="black" 
                />
            }
            <DisplayInfo 
                style={[styles.displayInfoPartStyle, penalPaymentDetFlexStyle]}
                calTypeLabelStyle={calTypeLabelStyle}
                info={info}
            />
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    labelDisplayStyle: {
        flexDirection: 'row',
        // justifyContent: 'space-around',

    },

    noSpace: {
        flex:0
    },

    nonEmptyTextStyle: {
        marginLeft: '1%',
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