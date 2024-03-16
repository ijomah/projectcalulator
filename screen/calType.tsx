import React from "react";
import { SafeAreaView, 
        StyleSheet, 
        FlatList, 
        View, Text, TextInput, 
        TouchableOpacity, 
        Dimensions
} from "react-native";

import { FontAwesome6 } from '@expo/vector-icons';

import AppButton from "../buttons/appBtn";
import ReuseInput from "../reuseables/input";
import DisplayInfo from "../display/display";
import LabelledDisplay from "../display/labelDisplay";
import { AppStyles } from "../constants/styles";


export default function CalcuationTypes({navigation}: any) {

   
    return (
        <SafeAreaView>
            <View style={styles.fencingFeeStyle}>
                <ReuseInput 
                        calTypeStyle={styles.calTypeInputStyle}
                        label='FENCING FEE:'
                        inputConfig={{
                            placeholder: 'LAND AREA'
                        }}
                />
                <FontAwesome6 name="equals" size={15} color="black" />
                <DisplayInfo
                        info='Result'
                />
           </View>     

           
            <LabelledDisplay 
                calTypeLabelStyle={styles.calTypeLabelStyle}
                namedInfo='ASSESSMENT FEE'
                info='Result'
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
            title='CAL STAGE CERT'
            // btnConfig=
            />

            <AppButton 
            title='CAL PENAL'
            // btnConfig=
            />

            <AppButton 
            title='CAL IDC'
            // btnConfig=
            />

            <AppButton 
            title='PREVIEW'
            // btnConfig=
            />
        </SafeAreaView>
    )
}

const { width, height } = Dimensions.get('screen');

const styles = StyleSheet.create({
    fencingFeeStyle: {
        flexDirection: 'row',
        alignItems: 'center',
        // justifyContent: 'space-around',
        justifyContent: 'space-around',
    },

    calTypeLabelStyle: {
        // flexDirection: 'row',
        // justifyContent: 'flex-end',
    },

    calTypeInputStyle: {
        width: AppStyles.smallInputWidth,
        // justifyContent: 'space-between',
        // marginRight: 15,
        marginRight: width / 100.9
    }
})