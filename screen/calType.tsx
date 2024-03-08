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


export default function 
({navigation}: any) {

   
    return (
        <SafeAreaView>
            <View>
                <ReuseInput 
                        label='FENCING FEE:'
                        inputConfig={{
                            placeholder: 'INPUT LAND AREA'
                        }}
                />
                <FontAwesome6 name="equals" size={24} color="black" />
                <DisplayInfo
                        // info=
                />
           </View>     

           
            <LabelledDisplay
                namedInfo='ASSESSMENT FEE'
                // info={}
            />
            
            <LabelledDisplay
                namedInfo='LAYOUT FEE'
            />

            <LabelledDisplay
                namedInfo='APP & REG FEE'
            />

            <LabelledDisplay 
                namedInfo='SUB TOTAL'
            />

            <LabelledDisplay
                namedInfo='10%'
            />

            <LabelledDisplay
                namedInfo='S.E.C'
            />

            <LabelledDisplay
                namedInfo='TOTAL'
            />

            <AppButton 
            // title=
            // btnConfig=
            />

            <AppButton 
            // title=
            // btnConfig=
            />

            <AppButton 
            // title=
            // btnConfig=
            />

            <AppButton 
            // title=
            // btnConfig=
            />
        </SafeAreaView>
    )
}