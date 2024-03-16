import React from "react";
import { SafeAreaView, 
    StyleSheet, 
    FlatList, 
    View, Text, TextInput, 
    TouchableOpacity, 
    Dimensions} from "react-native";
import ReuseInput from "../reuseables/input";
import DisplayInfo from "../display/display";
import FloorType from "../floors/floor";
import { AppStyles } from "../constants/styles";
import AppButton from "../buttons/appBtn";

export default function BuildingLevel() {
    return (
        <SafeAreaView>
            <View style={styles.buildingLevelStyle}>
                <FloorType 
                    style={styles.floorStyle}
                />
            </View>
            <View style={styles.addFloorAndBuildingStyle}>
                <AppButton 
                    addFloorAndBuildingBtnStyle={styles.addFloorAndBuildingBtnStyle}
                    title='ADD FLOOR'
                />
                <AppButton 
                    addFloorAndBuildingBtnStyle={styles.addFloorAndBuildingBtnStyle}
                    title='ADD BUILDING'
                />
            </View>
        </SafeAreaView>
    )
}

const { width, height } = Dimensions.get('screen');


const styles = StyleSheet.create({
    addFloorAndBuildingStyle: {
        flexDirection: 'row',
    },

    addFloorAndBuildingBtnStyle: {
        // width: width / 4,
        // height: height / 30,
        width: AppStyles.smallBtnWidth,
        height: AppStyles.smallBtntnHeight,
    },
    buildingLevelStyle: {
        // backgroundColor: 'green',
        width: width - 10,
        height: height / 12,
        borderWidth: 3,
        borderColor: AppStyles.buildingOutlineColor,
        borderStyle: 'solid',
        borderRadius: 10,
        alignSelf: 'center',
    
    },
    floorStyle: {

    }
})