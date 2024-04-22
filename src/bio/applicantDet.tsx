import React from "react";
import { SafeAreaView, 
        StyleSheet, 
        FlatList, 
        View, Text, TextInput, 
        TouchableOpacity 
} from "react-native";

import { FontAwesome6 } from '@expo/vector-icons';

import AppButton from "../buttons/appBtn";

import DisplayInfo from "../display/display";
import LabelledDisplay from "../display/labelDisplay";
import ReuseInput from "../reuseables/input";


export default function ApplicantDet(this: any, {navigation, gatherDet, previewEditableInput, disableInput}: any) {

   
    return (
        <SafeAreaView style={styles.bioContainer}>
            <ReuseInput 
                label='LOCATION OF DEVELOPMENT:'
                inputConfig={{
                    // placeholder: 'INPUT LAND AREA'
                    editable: previewEditableInput,
                    onChangeText: gatherDet.bind(this, 'locationQofQdevelopment')
                }}
            />
            <ReuseInput 
                label='APPLICANT NAME:'
                inputConfig={{
                    // placeholder: 'INPUT LAND AREA'
                    editable: previewEditableInput,
                    inputMolde: 'text',
                    onChangeText: gatherDet.bind(this, 'applicantQname')
                }}
            />
            <ReuseInput 
                label='APPLICANT ADDRESS:'
                inputConfig={{
                    // placeholder: 'INPUT LAND AREA'
                    editable: previewEditableInput,
                    inputMode: 'text',
                    onChangeText: gatherDet.bind(this, 'applicantQaddress')
                }}
            />
            <ReuseInput 
                label='TELEPHONE NO:'
                inputConfig={{
                    // placeholder: 'INPUT LAND AREA'
                    editable: previewEditableInput,
                    inputMode: 'tel',
                    onChangeText: gatherDet.bind(this, 'telephoneQno')

                }}
            />
            <ReuseInput 
                label='FILE NUMBER:'
                inputConfig={{
                    // placeholder: 'INPUT LAND AREA'
                    editable: previewEditableInput,
                    inputMode: 'text',
                    onChangeText: gatherDet.bind(this, 'fileQnumber')
                }}
            />
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    bioContainer: {
        borderWidth: 5,
        borderStyle: 'solid',
        borderColor: 'black',
    }
});