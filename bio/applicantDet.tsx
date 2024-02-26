import React from "react";
import { SafeAreaView, 
        StyleSheet, 
        FlatList, 
        View, Text, TextInput, 
        TouchableOpacity 
} from "react-native";

import { FontAwesome6 } from '@expo/vector-icons';

import AppButton from "../buttons/appBtn";
import ReuseInput from "../reuseables/input";
import DisplayInfo from "../display/display";
import LabelledDisplay from "../display/labelDisplay";


export default function ApplicantDet({navigation}: any) {

   
    return (
        <SafeAreaView>
            <ReuseInput 
                label='LOCATION OF DEVELOPMENT:'
                inputConfig={{
                    // placeholder: 'INPUT LAND AREA'
                }}
            />
            <ReuseInput 
                label='APPLICANT NAME:'
                inputConfig={{
                    // placeholder: 'INPUT LAND AREA'
                }}
            />
            <ReuseInput 
                label='APPLICANT ADDRESS:'
                inputConfig={{
                    // placeholder: 'INPUT LAND AREA'
                }}
            />
            <ReuseInput 
                label='TELEPHONE NO:'
                inputConfig={{
                    // placeholder: 'INPUT LAND AREA'
                }}
            />
            <ReuseInput 
                label='FILE NUMBER:'
                inputConfig={{
                    // placeholder: 'INPUT LAND AREA'
                }}
            />
        </SafeAreaView>
    )
}