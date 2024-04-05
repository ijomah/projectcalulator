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


export default function ApplicantDet({navigation, previewEditableInput, disableInput}: any) {

   
    return (
        <SafeAreaView style={styles.bioContainer}>
            <ReuseInput 
                label='LOCATION OF DEVELOPMENT:'
                inputConfig={{
                    // placeholder: 'INPUT LAND AREA'
                    editable: previewEditableInput
                }}
            />
            <ReuseInput 
                label='APPLICANT NAME:'
                inputConfig={{
                    // placeholder: 'INPUT LAND AREA'
                    editable: previewEditableInput,
                    inputMolde: 'text'
                }}
            />
            <ReuseInput 
                label='APPLICANT ADDRESS:'
                inputConfig={{
                    // placeholder: 'INPUT LAND AREA'
                    editable: previewEditableInput,
                    inputMode: 'text'
                }}
            />
            <ReuseInput 
                label='TELEPHONE NO:'
                inputConfig={{
                    // placeholder: 'INPUT LAND AREA'
                    editable: previewEditableInput,
                    inputMode: 'tel',

                }}
            />
            <ReuseInput 
                label='FILE NUMBER:'
                inputConfig={{
                    // placeholder: 'INPUT LAND AREA'
                    editable: previewEditableInput,
                    inputMode: 'text',
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