import React from "react";
import { SafeAreaView, StyleSheet, Text, View } from "react-native";
import DisplayInfo from "../src/display/display";
import LabelledDisplay from "../src/display/labelDisplay";
import { AppStyles } from "../src/constants/styles";

import { FontAwesome6 } from '@expo/vector-icons';

export default function PreviewBuildingLevel({val}: any) {
    return (
        <SafeAreaView style={{flexDirection: 'row', justifyContent: 'space-between'}}>
            <View style={styles.prevbuildLevelStyle}>
                <DisplayInfo
                    prevBuidingDisplayInfoStyle={styles.prevBuidingDisplayInfoStyle}
                    info='G/F :'
                />                
                <DisplayInfo
                prevBuidingDisplayInfoStyle={styles.prevBuidingDisplayInfoStyle}
                info={'484'}
                />
                <Text>x</Text>
                <DisplayInfo
                info={'844'}
                prevBuidingDisplayInfoStyle={styles.prevBuidingDisplayInfoStyle}
                />
                <Text>x</Text>
                <DisplayInfo
                info={'577'}
                prevBuidingDisplayInfoStyle={styles.prevBuidingDisplayInfoStyle}
                />
                <Text>x</Text>
                <DisplayInfo
                info={'883'}
                prevBuidingDisplayInfoStyle={styles.prevBuidingDisplayInfoStyle}
                />
                
                
            </View>
            <FontAwesome6 
                style={styles.iconEqualStyle}
                name="equals" 
                size={15} 
                color="black" 
            />
            <DisplayInfo
                info={'647484'}
                prevBuidingDisplayInfoStyle={styles.prevBuidingDisplayInfoStyle}
                prevBuildingOutlineStyle={styles.prevBuildingOutlineStyle}
                />
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    prevbuildLevelStyle: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: AppStyles.width / 1.87,
    },
    prevBuidingDisplayInfoStyle: {
        width: 30,
    },
    prevBuildingOutlineStyle: {
        borderWidth: 3,
        borderStyle: 'solid',
        borderColor: AppStyles.inputOutlineColor,
        width: AppStyles.smallBtnWidth,
        borderRadius: 7,
    },
    iconEqualStyle:{
        flex: 1
    }
})