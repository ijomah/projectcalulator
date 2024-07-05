import React, { useContext, useState } from "react";
import { SafeAreaView, 
        StyleSheet, 
        FlatList, 
        View, Text, TextInput, 
        TouchableOpacity, 
        Animated
} from "react-native";

import { FontAwesome6 } from '@expo/vector-icons';

import AppButton from "../buttons/appBtn";

import DisplayInfo from "../display/display";
import LabelledDisplay from "../display/labelDisplay";
import ReuseInput from "../reuseables/input";
import { ConfigDataContext } from "../warehouse/configContext";


export default function ApplicantDet(this: any, {navigation,
    gatherDet, 
    previewEditableInput, disableInput}: any) {
        const ctxt: any = useContext(ConfigDataContext)
// let [anim] = useState(new Animated.Value(0))
//    Animated.timing(anim, {})

    return (
        <SafeAreaView style={styles.bioContainer}>
            <ReuseInput 
                label='LOCATION OF DEVELOPMENT:'
                inputConfig={{
                    // placeholder: 'INPUT LAND AREA'
                    editable: previewEditableInput,
                    textAlign: 'center',
                    onChangeText: gatherDet.bind(this, 'locationQofQdevelopment'),
                    value: ctxt.locationQofQdevelopment
                }}
            />
            <ReuseInput 
                label='APPLICANT NAME:'
                inputConfig={{
                    // placeholder: 'INPUT LAND AREA'
                    editable: previewEditableInput,
                    inputMolde: 'text',
                    textAlign: 'center',
                    onChangeText: gatherDet.bind(this, 'applicantQname'),
                    value: ctxt.applicantQname
                }}
            />
            <ReuseInput 
                label='APPLICANT ADDRESS:'
                inputConfig={{
                    // placeholder: 'INPUT LAND AREA'
                    editable: previewEditableInput,
                    inputMode: 'text',
                    textAlign: 'center',
                    onChangeText: gatherDet.bind(this, 'applicantQaddress'),
                    value: ctxt.applicantQaddress
                }}
            />
            <ReuseInput 
                label='TELEPHONE NO:'
                inputConfig={{
                    // placeholder: 'INPUT LAND AREA'
                    editable: previewEditableInput,
                    inputMode: 'numeric',
                    textAlign: 'center',
                    onChangeText: gatherDet.bind(this, 'telephoneQno'),
                    value: ctxt.telephoneQno

                }}
            />
            <ReuseInput 
                label='FILE NUMBER:'
                inputConfig={{
                    // placeholder: 'INPUT LAND AREA'
                    editable: previewEditableInput,
                    inputMode: 'text',
                    textAlign: 'center',
                    onChangeText: gatherDet.bind(this, 'fileQnumber'),
                    value: ctxt.fileQnumber
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