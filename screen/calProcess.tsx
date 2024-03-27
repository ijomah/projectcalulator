import React from "react";
import { 
    SafeAreaView, 
    StyleSheet, 
    FlatList, 
    View, Text, TextInput, 
    TouchableOpacity, 
    useWindowDimensions,
    Dimensions
} from "react-native";

import { screeninfos } from "../data/data";
import DisplayInfo from "../display/display";
import AppButton from "../buttons/appBtn";
import BuildingTypePage from "./buildingType";

export default function CalProcess({navigation}: any) {
    const devDimension = useWindowDimensions()

     
    return (
        <SafeAreaView style={styles.buildTypeBox}>
            <BuildingTypePage 
                nav={navigation}
                compPathName='processFee'
            />
        </SafeAreaView>
    )
}

const screenSize = Dimensions.get("screen");

const styles = StyleSheet.create({
    buildTypeBox: {
        // backgroundColor: 'yellow',
        height: screenSize.height - 150, //use dim api or windowdim hook
        alignItems: 'center',
        justifyContent: 'center',
    },
    buildType: {
        justifyContent: 'center',
        alignItems: 'center',
        width: 350,
        // height: 80,
        height: screenSize.height / 10,
        borderWidth: 5,
        borderStyle: 'solid',
        borderColor: 'green',
        margin: 15,
        borderRadius: 20,
    }

})