import React, { useContext, useState } from "react";
import { SafeAreaView, 
    StyleSheet, 
    FlatList, 
    View, Text, TextInput, 
    TouchableOpacity, 
    Dimensions,
    ScrollView} from "react-native";
// import ReuseInput from "../../reuseables/input";
import DisplayInfo from "../display/display";
import FloorType from "../floors/floor";
import { AppStyles } from "../constants/styles";
import AppButton from "../buttons/appBtn";
import { ConfigDataContext, DispatchContext } from "../warehouse/configContext";
import { structureData } from "../../util/utilFxn";

export default function BuildingLevel({previewEditableInput}: any) {
    const [datum, buildDatum] = useState([{type: 'G/F', id: '1'}]);
        // {type: 'G/F', id: '1'},
        // {type: '1ST/F', id: '2'},
        // {type: '2ND/F', id: '3'},
        // {type: '3RD/F', id: '4'},
        // {type: '4TH/F', id: '5'},
        // {type: '5TH/F', id: '6'},
        // {type: '6TH/F', id: '7'},
        // {type: '7TH/F', id: '8'},
        // {type: '8TH/F', id: '9'},
        // {type: '9TH/F', id: '10'},
        // {type: '10TH/F', id: '11'},
        // {type: '11TH/F', id: '12'}
    
    const ctxData: any = useContext(ConfigDataContext);
    const dispatchData: any = useContext(DispatchContext);

    // const displayFloor: any = ({item}: any) => {
    //     <View style={styles.buildingLevelStyle}>
    //         <FloorType 
    //             floorPosition={item.type}
    //             style={styles.floorStyle}
    //             previewEditableInput={previewEditableInput}
    //             // {...{calResult, getUserInputs}}
    //         />
    //     </View>
    // }

    const getUserInputs = (storeKey: any, storeValue: number) => {
        const floorObj = {[storeKey]: storeValue}
        const floorArr = structureData(floorObj);
        dispatchData({...ctxData, floorData: floorArr});
        console.log('ctx', ctxData);
    }
    //calculated value
    // const calResult = ctxData.length * ctxData.breadth * ctxData.height * ctxData.rate;

    // Add floor btn
    const addFloor = () => {
        console.log('addfloor')
        buildDatum([...datum, 
            {
            type: datum.length 
                + 
                    (datum.length>1?( datum.length>2? (datum.length>3? 'TH': 'RD'): 'ND' ):'ST')
                +'/F', 
            id: (datum.length + 1).toString()} ])
    }
            //pseudocode 1 
    // create 2d array
    // one array for one building
    //push objects for floor into the needed building array (usually the last array) with addfloor btn
    //on adding a new building to ui, also add the new obj(with G/F)
    //

    // Add building btn
    // const addBuilding = () => {
    //     console.log('addbuilding')
    //     setBuildDatum([...buildDatum, 
    //         {
    //         category: buildDatum.length 
    //             +
    //                 (buildDatum.length>1?( buildDatum.length>2? (buildDatum.length>3? 'TH': 'RD'): 'ND' ):'ST')
    //             +' '
    //             +'BUILDING', 
    //         id: (buildDatum.length + 1).toString()} ])
    // }
    return (
        <>
        <SafeAreaView>
            <Text>{'1ST BUILDING'}</Text>
            <ScrollView>
                {/* <FlatList 
                    data={buildData}
                    renderItem={displayFloor}
                /> */}
                {datum.map((datums, i) => (
                    <View key={i+1} style={styles.buildingLevelStyle}>
                    <FloorType 
                        floorPosition={datums.type}
                        style={styles.floorStyle}
                        previewEditableInput={previewEditableInput}
                        {...{ getUserInputs}}
                    />
                </View>
                ))} 
            {/* <View style={styles.buildingLevelStyle}>
                <FloorType 
                    floorPosition='G/F:'
                    style={styles.floorStyle}
                    previewEditableInput={previewEditableInput}
                    {...{calResult, getUserInputs}}

                />
            </View>
            <View style={styles.buildingLevelStyle}>
                <FloorType 
                    floorPosition='1ST/F'
                    style={styles.floorStyle}
                    previewEditableInput={previewEditableInput}
                    {...{calResult, getUserInputs}}
                />
            </View> */}
            </ScrollView>
            <View style={styles.addFloorAndBuildingStyle}>
                <AppButton 
                    addFloorAndBuildingBtnStyle={styles.addFloorAndBuildingBtnStyle}
                    title='ADD FLOOR'
                    onGoto={addFloor}
                />
                <AppButton 
                    addFloorAndBuildingBtnStyle={styles.addFloorAndBuildingBtnStyle}
                    title='ADD BUILDING'
                />
            </View>
        </SafeAreaView>
        </>
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