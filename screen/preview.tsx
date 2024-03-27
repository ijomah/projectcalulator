import React from "react";
import { 
    SafeAreaView, 
    StyleSheet, 
    Image,
    FlatList, 
    View, Text, TextInput, 
    TouchableOpacity, 
    useWindowDimensions,
    Dimensions,
    ScrollView
} from "react-native";
import ScreenHeadings from "../headings/Heading";
import ApplicantDet from "../bio/applicantDet";
import BuildingLevel from "../buildings/building";
import CalcuationTypes from "./calType";
import DisplayInfo from "../display/display";
import AppButton from "../buttons/appBtn";
import PaymentDisplay from "../display/paymentDisplay";
import LabelledDisplay from "../display/labelDisplay";
import { customDisplayStyle } from "../constants/styles";


export default function PreviewPage({navigation}: any) {
    const devDimension = useWindowDimensions();

    const downloadPage = () => {
        // download code
    };
    return (
        <ScrollView style={styles.processCase}>
            <View style={styles.imgContainerStyle}>
                <Image
                    style={styles.imgStyle}
                    source={require('./../assets/icon.png')}
                />
                <Image
                    style={styles.imgStyle}
                    source={require('./../assets/asses-calculator.png')}
                />
            </View>
            <DisplayInfo
                info='CALCULATION OF ASSESSMENT'
            />
            <DisplayInfo
                info='FOR PROCESSING FEE'
            />
            <DisplayInfo
                info='IKOYI DISTRICT OFFICE'
            />
            <ScreenHeadings 
                title='APPLICATION DETAILS'
            />
            <ApplicantDet />
            <BuildingLevel />
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

                    <>
                    {/* {isPfs && */}
                        <LabelledDisplay
                            calTypeLabelStyle={customDisplayStyle}
                            namedInfo='5% LASEMA'
                            isText={false}
                        />  
                    {/* } */}
                    </>

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
            <AppButton 
                title='SAVE'
                onGoto={downloadPage}
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
    imgContainerStyle: {
        flexDirection: 'row',
        justifyContent: 'space-around'
    },
    imgStyle: {
        height: 50,
        width: 80,
    },
})