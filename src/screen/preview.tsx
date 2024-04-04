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
import ApplicantDet from "../bio/applicantDet";
import BuildingLevel from "../buildings/building";
import AppButton from "../buttons/appBtn";
import { AppStyles, customDisplayStyle } from "../constants/styles";
import DisplayInfo from "../display/display";
import LabelledDisplay from "../display/labelDisplay";
import PaymentDisplay from "../display/paymentDisplay";
import ScreenHeadings from "../headings/Heading";


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
                    source={require('./../../assets/icon.png')}
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
            <BuildingLevel 
            previewEditableInput={false}
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
            <AppButton 
                title='DOWNLOAD'
                onGoto={downloadPage}
            />
        </ScrollView>
    )
}

const screenSize = Dimensions.get("screen");

const styles = StyleSheet.create({
    prevDisplayStyles: {
        width: screenSize.width,
    },
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
        backgroundColor: AppStyles.btnBackgroundColor,
        height: 60,
        width: 150,
    },
})