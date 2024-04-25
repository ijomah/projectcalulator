import React from "react";
import { 
    SafeAreaView, 
    StyleSheet, 
    FlatList, 
    View, Text, TextInput, 
    TouchableOpacity, 
    useWindowDimensions,
    Dimensions,
    ScrollView
} from "react-native";


import CalcuationTypes from "../calType";
import ScreenHeadings from "../../headings/Heading";
import ApplicantDet from "../../bio/applicantDet";
import BuildingLevel from "../../buildings/building";
import ManageApplicantDetails from "../../bio/manageApplicantDet";

export default function ProcessFee({navigation, params}: any) {
    const devDimension = useWindowDimensions();
     const getRate = () => {
        
     }
     const getUserData = () => {}
    return (
        <ScrollView style={styles.processCase}>
            <ScreenHeadings 
                title='APPLICATION DETAILS'
            />
            <ManageApplicantDetails />
            <BuildingLevel />
        <CalcuationTypes 
            navigation={navigation} 
            getUserData={getUserData}
        />
            
        </ScrollView>
    )
}

const screenSize = Dimensions.get("screen");

const styles = StyleSheet.create({
    processCase: {
        margin: 10
        // backgroundColor: 'yellow',
        // height: screenSize.height - 150, //use dim api or windowdim hook
        // alignItems: 'center',
        // justifyContent: 'center',
    },
})