import React, { useContext, useState } from "react";
import { SafeAreaView, 
    StyleSheet, 
    FlatList, 
    View, Text, TextInput, 
    TouchableOpacity, 
    Dimensions,
    ScrollView} from "react-native";
// import ReuseInput from "../../reuseables/input";

import BuildingLevel from "../building";
import { ConfigDataContext, DispatchContext } from "../../warehouse/configContext";
import { AppStyles } from "../../constants/styles";
import AppButton from "../../buttons/appBtn";

export default function ManageBuilding({previewEditableInput}: any) {
    const [floorDatum, setFloorDatum] = useState([{type: 'G/F', id: '1'}]);
    const [buildDatum, setBuildDatum]: any[] = useState([{category: '1ST BUILDING', id: 1}]);
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
    
    // const ctxData: any = useContext(ConfigDataContext);
    // const dispatchData: any = useContext(DispatchContext);

    // const getUserInputs = (storeKey: any, storeValue: number) => {
    //     dispatchData({...ctxData, [storeKey]: storeValue});
    //     console.log('ctx', ctxData);
    // }

    //calculated value
    // const calResult = ctxData.length * ctxData.breadth * ctxData.height * ctxData.rate;
    
    // Add floor btn
    const addFloor = () => {
        console.log('addfloor')
        setFloorDatum([...floorDatum, 
            {
            type: floorDatum.length 
                + 
                    (floorDatum.length>1?( floorDatum.length>2? (floorDatum.length>3? 'TH': 'RD'): 'ND' ):'ST')
                +'/F', 
            id: (floorDatum.length + 1).toString()} ])
    }

    // Add building btn
    const addBuilding = () => {
        console.log('addbuilding')
        setBuildDatum([...buildDatum, 
            {
            category: buildDatum.length 
                +
                    (buildDatum.length>1?( buildDatum.length>2? (buildDatum.length>3? 'TH': 'RD'): 'ND' ):'ST')
                +' '+'BUILDING', 
            id: (buildDatum.length + 1).toString()} ])
    }
    return (
        <SafeAreaView>
            <ScrollView>
                {buildDatum.map((datums: any, i: any) => (
                    <View key={i+1} style={styles.buildingLevelStyle}>
                    <BuildingLevel 
                        buildingCategory={datums.category}
                        previewEditableInput={previewEditableInput}
                        // {...{ getUserInputs}}
                    />
                </View>
                ))} 
            
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
                    onGoto={addBuilding}
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
})