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
import { AppStyles, customDisplayStyle } from "../constants/styles";
import PaymentDisplay from "../display/paymentDisplay";


export default function CalcuationTypes({navigation}: any) {

    return (
        <SafeAreaView>
            <View style={styles.fencingFeeStyle}>
               <View style={{flex: 4.2,}}>
                    <ReuseInput 
                            // calTypeLabelFlex={styles.calTypeLabelFlex}
                            // calTypeInputFlex={styles.calTypeInputFlex}
                            calTypeStyle={[
                                styles.calTypeInputStyle, 
                            ]}
                            label='FENCING FEE:'
                            inputConfig={{
                                placeholder: 'INPUT LAND AREA'
                            }}
                    />
                </View>
                <FontAwesome6 
                    style={styles.calTypeIconStyle}
                    name="equals" 
                    size={15} 
                    color="black" 
                />
                <DisplayInfo 
                    style={styles.calDisplayInfoStyle}
                    calTypeLabelStyle={customDisplayStyle}
                        info='Result'
                />
           </View>     

            <View>
                <View>
                    <LabelledDisplay 
                        calTypeLabelStyle={customDisplayStyle}
                        namedInfo='ASSESSMENT FEE'
                        info='Result'
                        isText={false}
                    />
                    
                    <LabelledDisplay 
                        calTypeLabelStyle={customDisplayStyle}
                        namedInfo='LAYOUT FEE'
                        isText={false}
                    />

                    <LabelledDisplay
                        calTypeLabelStyle={customDisplayStyle}
                        namedInfo='APP & REG FEE'
                        isText={false}
                    />

                    <LabelledDisplay 
                        calTypeLabelStyle={customDisplayStyle}
                        namedInfo='SUB TOTAL'
                        isText={false}
                    />

                    <LabelledDisplay
                        calTypeLabelStyle={customDisplayStyle}
                        namedInfo='10%'
                        isText={false}
                    />

                    <LabelledDisplay
                        calTypeLabelStyle={customDisplayStyle}
                        namedInfo='S.E.C'
                        isText={false}
                    />

                    <LabelledDisplay
                        calTypeLabelStyle={customDisplayStyle}
                        namedInfo='TOTAL'
                        info='Total Result'
                        isText={false}
                    />
                </View>
                <PaymentDisplay />
                <View style={styles.calTypeBtnContainerStyle}>
                    <AppButton 
                        calTypeBtnStyle={styles.calTypeBtnStyle}
                        title='CAL STAGE CERT'
                        // btnConfig=
                        onGoto={() => navigation.navigate('stageIdcPenal')}
                    />

                    <AppButton 
                        calTypeBtnStyle={styles.calTypeBtnStyle}
                        title='CAL PENAL'
                        // btnConfig=
                    />

                    <AppButton 
                        calTypeBtnStyle={styles.calTypeBtnStyle}
                        title='CAL IDC'
                        // btnConfig=
                    />
                </View>

                <AppButton 
                    calTypeBtnStyle={styles.calTypeBtnStyle}
                    title='PREVIEW'
                    // btnConfig=
                />
            </View>
        </SafeAreaView>
    )
}

const { width, height } = Dimensions.get('screen');

const styles = StyleSheet.create({
    calTypeLabelFlex: {
        // flex: 12
    },
    calTypeInputFlex: {
        // flex: 6
    },
    calTypeIconStyle: {
        flex: 1,
    },
    calDisplayInfoStyle: {
        flex: 4,
    },
    calTypeBtnContainerStyle: {
        flexDirection: 'row',
        justifyContent: 'space-around'
    },
    calTypeBtnStyle: {
        width: AppStyles.smallBtnWidth,
        height: AppStyles.smallBtntnHeight,
    },
    fencingFeeStyle: {
        flexDirection: 'row',
        alignItems: 'center',
        // justifyContent: 'space-between',       
    },

    calTypeLabelStyle: {
        // flexDirection: 'row',
        // justifyContent: 'flex-end',
    },

    calTypeInputStyle: {
        width: AppStyles.mediumInputWidth,
        // flex: 8,
        // justifyContent: 'space-between',
        // marginRight: 15,
        marginRight: width / 100.9
    }
})