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

import * as Print from 'expo-print';
import { shareAsync } from 'expo-sharing';

import ApplicantDet from "../bio/applicantDet";
import BuildingLevel from "../buildings/building";
import AppButton from "../buttons/appBtn";
import { AppStyles, customDisplayStyle } from "../constants/styles";
import DisplayInfo from "../display/display";
import LabelledDisplay from "../display/labelDisplay";
import PaymentDisplay from "../display/paymentDisplay";
import ScreenHeadings from "../headings/Heading";
import PreviewBuildingLevel from "../../preview/prevBuildingLevel";
import PreviewPaymentAcc from "../../preview/previewPayAcc";


export default function PreviewPage({navigation}: any) {
    const [selectedPrinter, setSelectedPrinter] = React.useState();
    const devDimension = useWindowDimensions();

    const downloadPage = () => {
        // download this page as pdf
        // download code
    };
    const titleText = null;
    const html = `
    <!DOCTYPE html>
    <html lang="en">
        <head>
            <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0, user-scalable=no" />
        </head>
        <body style="text-align: center;">
            <h1 style="font-size: 50px; font-family: Helvetica Neue; font-weight: normal;">
                ${titleText}
            </h1>
            <div id="img-case" style="">
                
            </div>
        </body>
    </html>
    `
    return (
        <ScrollView contentContainerStyle={{justifyContent: 'space-between'}}>
        <View style={styles.processCase}>
            <View style={styles.imgContainerStyle}>
                <Image
                    style={[styles.imgStyle, {height: 50, width: 50}]}
                    source={require('./../../assets/lasg-prev-logo.jpg')}
                />
                <Image
                    style={styles.imgStyle}
                    source={require('./../../assets/asses-calculator.png')}
                />
            </View>
            <DisplayInfo 
                prevDisplayStyles={styles.prevDisplayStyles}
                info='CALCULATION OF ASSESSMENT'
            />
            <DisplayInfo 
                prevDisplayStyles={styles.prevDisplayStyles}
                info='FOR PROCESSING FEE'
            />
            <DisplayInfo 
                prevDisplayStyles={styles.prevDisplayStyles}
                info='IKOYI DISTRICT OFFICE'
            />
            <ScreenHeadings 
                prevDisplayStyles={styles.prevDisplayStyles}
                title='APPLICATION DETAILS'
            />
            <ApplicantDet 
                disableInput='disabled'
                previewEditableInput={false}
            />
            {/* <BuildingLevel 
            previewEditableInput={false}
            /> */}
            {/* <PreviewBuildingLevel /> */}
            <LabelledDisplay 
                        calTypeLabelStyle={customDisplayStyle}
                        multiplandInfo={'G/F : '+' '+' 88 '+' '+' x'}
                        namedInfo={' 45 '+' x'+ ' 34 '+ 'x '+ ' 234'}
                        info='86546'
                        isText={true}
                        isSign={false}
                        prevLabelStyle={{marginLeft: '0%',flex: 1.7}}
                        
                    />
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
                        previewEditableInput='false'
                    />

                    <LabelledDisplay
                        calTypeLabelStyle={customDisplayStyle}
                        namedInfo='APP & REG FEE'
                        isText={false}
                        previewEditableInput='false'
                    />

                    <LabelledDisplay 
                        calTypeLabelStyle={customDisplayStyle}
                        namedInfo='SUB TOTAL'
                        isText={false}
                        previewEditableInput='false'
                    />
                    
                    <LabelledDisplay
                        calTypeLabelStyle={customDisplayStyle}
                        namedInfo='10%'
                        isText={false}
                        previewEditableInput='false'
                    />

                    <>
                    {/* {isPfs && */}
                        <LabelledDisplay
                            calTypeLabelStyle={customDisplayStyle}
                            namedInfo='5% LASEMA'
                            isText={false}
                            previewEditableInput='false'
                        />  
                    {/* } */}
                    </>

                    <LabelledDisplay
                        calTypeLabelStyle={customDisplayStyle}
                        namedInfo='S.E.C'
                        isText={false}
                        previewEditableInput='false'
                    />

                    <LabelledDisplay
                        calTypeLabelStyle={customDisplayStyle}
                        namedInfo='TOTAL'
                        info='Total Result'
                        isText={false}
                        previewEditableInput='false'
                    />
                </View>
            <PaymentDisplay />
            {
            // fee?
               <PreviewPaymentAcc
                    
               />
            }
            <AppButton 
                title='SAVE'
                onGoto={downloadPage}
            />
            
        </View>
        <View>
        <Text style={
            {
                fontSize: AppStyles.txtFontSize * 8, 
                borderWidth: 1,
                marginBottom: 0,
                justifyContent: 'flex-end',
                borderColor: 'gray', 
                borderStyle: 'solid', 
                textAlign: 'center'
            }
        }>
            PLEASE CHECK THE CALCULATED ASSESSMENT FOR ERRORS. 
            ASSESSMENT CALCULATOR WOULD NOT BE LIABLE FOR ANY HUMAN ERROR
        </Text>
        </View>
        </ScrollView>
    )
}

const screenSize = Dimensions.get("window");

const styles = StyleSheet.create({
    prevDisplayStyles: {
        width: screenSize.width,
    },
    processCase: {
        margin: 10,
        // backgroundColor: 'yellow',
        height: screenSize.height - 210, //use dim api or windowdim hook
        // height: screenSize.height
        // alignItems: 'center',
        // justifyContent: 'center',
    },
    imgContainerStyle: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: screenSize.width / 1.17,
    },
    imgStyle: {
        backgroundColor: AppStyles.btnBackgroundColor,
        height: 60,
        width: 150,
    },
})