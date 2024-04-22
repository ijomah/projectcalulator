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
import ApplicantDet from "../../bio/applicantDet";
import BuildingLevel from "../../buildings/building";
import ScreenHeadings from "../../headings/Heading";
import ManageApplicantDetails from "../../bio/manageApplicantDet";

export default function Pfs({navigation}: any) {
    const devDimension = useWindowDimensions();

     
    return (
        <ScrollView style={styles.processCase}>
            <ScreenHeadings 
                title='APPLICATION DETAILS'
            />
            <ManageApplicantDetails />
            <BuildingLevel />
        <CalcuationTypes 
            isPfs={true}
            navigation={navigation} 
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