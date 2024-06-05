import React from "react";
import { 
    SafeAreaView, 
    StyleSheet, 
    FlatList, 
    View, Text, TextInput, 
    TouchableOpacity, 
    useWindowDimensions
} from "react-native";
// import { screeninfos } from "../src/data/data";
// import DisplayInfo from "../src/display/display";
// import AppButton from "../src/buttons/appBtn";
import BuildingTypePage from "./buildingType";
import { AppStyles } from "../constants/styles";

export default function CalStage({navigation}: any) {
    const devDimension = useWindowDimensions()

     
    return (
        <SafeAreaView style={styles.buildTypeBox}>
            <BuildingTypePage
                nav={navigation}
                compPathName='stageIdcPenal'
            />
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    buildTypeBox: {
        // backgroundColor: 'yellow',
        height: AppStyles.height - 150, //use dim api or windowdim hook
        alignItems: 'center',
        justifyContent: 'center',
    },
    buildType: {
        justifyContent: 'center',
        alignItems: 'center',
        width: 350,
        height: 80,
        borderWidth: 5,
        borderStyle: 'solid',
        borderColor: 'green',
        margin: 15,
        borderRadius: 20,
    }

})