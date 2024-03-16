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


import CalcuationTypes from "../calType";
import ApplicantDet from "../../bio/applicantDet";
import BuildingLevel from "../../buildings/building";

export default function ProcessFee({navigation}: any) {
    const devDimension = useWindowDimensions();

     
    return (
        <SafeAreaView style={styles.processCase}>
            
            <ApplicantDet />
            <BuildingLevel />
            <CalcuationTypes />
            
        </SafeAreaView>
    )
}

const screenSize = Dimensions.get("screen");

const styles = StyleSheet.create({
    processCase: {
        // backgroundColor: 'yellow',
        // height: screenSize.height - 150, //use dim api or windowdim hook
        // alignItems: 'center',
        // justifyContent: 'center',
    },
})