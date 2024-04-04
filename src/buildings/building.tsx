import React from "react";
import { SafeAreaView, 
    StyleSheet, 
    FlatList, 
    View, Text, TextInput, 
    TouchableOpacity, 
    Dimensions} from "react-native";
// import ReuseInput from "../../reuseables/input";
import DisplayInfo from "../display/display";
import FloorType from "../floors/floor";
import { AppStyles } from "../constants/styles";
import AppButton from "../buttons/appBtn";

export default function BuildingLevel({previewEditableInput}: any) {
    const buildData = [
        {type: 'G/F', id: '1'},
        {type: '1ST/F', id: '2'},
        {type: '2ND/F', id: '3'},
        {type: '3RD/F', id: '4'},
        {type: '4TH/F', id: '5'},
        {type: '5TH/F', id: '6'},
        {type: '6TH/F', id: '7'},
        {type: '7TH/F', id: '8'},
        {type: '8TH/F', id: '9'},
        {type: '9TH/F', id: '10'},
        {type: '10TH/F', id: '11'},
        {type: '11TH/F', id: '12'}
    ]
    const displayFloor: any = ({item}: any) => {
        <View style={styles.buildingLevelStyle}>
                <FloorType 
                    floorPosition={item.type}
                    style={styles.floorStyle}
                />
            </View>
    }
    return (
        <SafeAreaView>
            {/* <FlatList 
                data={buildData}
                renderItem={displayFloor}
            /> */}
            <View style={styles.buildingLevelStyle}>
                <FloorType 
                    floorPosition='G/F:'
                    style={styles.floorStyle}
                    previewEditableInput={previewEditableInput}
                />
            </View>
            <View style={styles.buildingLevelStyle}>
                <FloorType 
                    floorPosition='1ST/F'
                    style={styles.floorStyle}
                    previewEditableInput={previewEditableInput}
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
        width: width - 20,
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