import React, { useContext } from "react";
import { 
    SafeAreaView, 
    StyleSheet, 
    Image,
    FlatList, 
    View, Text, TextInput, 
    TouchableOpacity, 
    useWindowDimensions,
    Dimensions,
    ScrollView,
    ToastAndroid
} from "react-native";

import * as Print from 'expo-print';
import { FontAwesome6 } from '@expo/vector-icons';
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
import { ConfigDataContext } from "../warehouse/configContext";
import ReuseInput from "../reuseables/input";
// import { feeData } from "../data/data";

// let label: any, distName, buildLevel, floorLevel, length, breadth,
// height,rate, fenceLabel: any, feeData: any, value: any, res, totalAmt, agentCode,revCode,feeResult: any
const imgAssessCal = require('./../../assets/asses-calculator.png');
const imgLag = require('./../../assets/lasg-prev-logo.jpg')
let arr = new Array(3)   

// const html = `<html>
//     <head>
//         <meta>
//         <title>ASSEMENT CALCULATOR</title>
//         <link rel="stylesheet" href="styles/index.scss" type="text/scss" />
//         <style>
//             #build-data-display:checked~#builds #floor-para {
//                 display: none;
//             }

//             .display-types {
//                 display: flex;
//                 font-size: 25px;
//             }

//             #applic-data {
//                 border: 3px solid black;
//                 justify-content: space-around;
//             }

//             #output-res-outline-color {
//                 border: 2px solid #C8C92D;
//             }

//             #floor-para>span {
//                 color: #FAA11F
//             }

//             #sign-color {
//                 color: #293189;
//             }
//         </style>
//     </head>

//     <body style="color: #293189;">
//         <!-- <input type="checkbox" id="build-data-display" hidden />
//         <input type="checkbox" id="floor-data-display" hidden />
//         <input type="checkbox" id="cal-data-display" hidden /> -->
//         <header>
//             <div style="display: flex; flex-direction: row;">
//                 <img src="${imgLag}" style="width: 40vw; height:15vw;margin: 3px" alt="Lagos building logo" />
//                 <img src="${imgAssessCal}" style="width: 40vw; height:15vw;margin: 3px" alt="Assessment calculator logo" />
//             </div>
//             <h1 style="text-align: center;">
//                 CALCULATION OF ASSESSMENT
//             </h1>
//             <h2 style="text-align: center;">${distName} DISTRICT OFFICE</h2>
//             <h3 style="text-align: center;" id="output-res-outline-color">
//                 APPLICATION DETAILS
//             </h3>
//         </header>
//         <section id="applic-data" class="display-types">
//         ${arr.map((bioDatum) => (`
//             <div>
//                 <p style="flex: 7;">${label}</p>
//                 <p id="output-res-outline-color" style="flex: 5;">${value}</p>
//             </div>`))}
            
//         </section>

//         <section id="builds">
//             <div id="build-para">
//             ${contxt.floorData.map((floorDatum)=>{
//                 <div></div>
//             })}
//                 <h4>${buildLevel}</h4>
//                 <div id="floor-para" class="display-types">
//                     <span>
//                         <b style="flex: 1.5; color: #293189;">${floorLevel}</b>:
//                     </span>
//                     <span>
//                         <span style="flex: 0.5;">${length}</span style="flex: 1;">
//                         <span style="flex: 0.5; text-align: center;">x</span>
//                         <span style="flex: 0.5;">${breadth}</span>
//                         <span style="flex: 0.5; text-align: center;">x</span>
//                         <span style="flex: 0.5;">${height}</span>
//                         <span style="flex: 0.5; text-align: center;">x</span>
//                         <span style="flex: 0.5;">${rate}</span>
//                     </span>
//                     <span id="sign-color" style="text-align: center;color: #293189;flex: 1;">=</span>
//                     <span style="flex: 3.8;" id="output-res-outline-color">${res}</span>
//                 </div>
//             </div>
//         </section>

//         <section id="cal-data">
//             <div>
//             ${arr.map((dat) => (
//                 `<p class="display-types">
//                     <span style="flex: 1;"><b>${fenceLabel}:</b> </span>

//                     <span id="output-res-outline-color" style="flex: 1">${feeData}</span><span>SQM</span><span style="flex:.279;text-align: center; color: #293189;">=</span><span id="output-res-outline-color" style="flex: 1.033;">${feeResult}</span>
//                 </p>`
//             ))}
//             </div> <span style="position: absolute; top: 51.7vh; left: 28.9vw; font-size: 11px; color:#FAA11F;"> > 650SQM = LAND AREA - 650 x 10 + 20,
//                 000</span>
//         </section>
//         <div style="" id="stamp">
//                 <p>STAMP HERE</p>
//             </div><section id="pay-data">
//                     <div>
//                         <p style="text-align: center;">
//                             PLEASE PAY THE SUM OF ${totalAmt} TO LASG ACCOUNT
//                             AS PROCESSING FEE
//                         </p>
//                         <div style="margin-left: 7%;" class="display-types">
//                             <span style="flex: 1.5; width: 300px;">AGENCY CODE: </span><span style="flex: 2;">${agentCode}</span>
//                             <span style="flex: 1.5;">REVENUE CODE: </span><span style="flex: 1.5;">${revCode}</span>
//                         </div>

                        
//                     </div>
//                 </section><div style="display: grid; justify-content: center;" id="btn">
//                     <button id="output-res-outline-color">SAVE</button>
//                 </div><div>
//                     <p style="font-size: 7px; text-align: center; border: 2px solid gray;">
//                         PLEASE CHECK THE CALCULATED ASSESSMENT FOR ERRORS.
//                         ASSESSMENT CALCULATOR WOULD NOT BE LIABLE FOR ANY HUMAN ERROR
//                     </p>
//                 </div>
//         </body>
//         <footer>

//         </footer>

//     </html>`

export default function PreviewPage({navigation, gatherDet}: any) {
    const contxt: any = useContext(ConfigDataContext)
    const [selectedPrinter, setSelectedPrinter] = React.useState();
    const devDimension = useWindowDimensions();

    const html = `<html>
    <head>
        <meta>
        <title>ASSEMENT CALCULATOR</title>
        <link rel="stylesheet" href="styles/index.scss" type="text/scss" />
        <style>
            #build-data-display:checked~#builds #floor-para {
                display: none;
            }

            .display-types {
                display: flex;
                font-size: 25px;
            }

            #applic-data {
                border: 3px solid black;
                justify-content: space-around;
            }

            #output-res-outline-color {
                border: 2px solid #C8C92D;
            }

            #floor-para>span {
                color: #FAA11F
            }

            #sign-color {
                color: #293189;
            }
        </style>
    </head>

    <body style="color: #293189;">
        <!-- <input type="checkbox" id="build-data-display" hidden />
        <input type="checkbox" id="floor-data-display" hidden />
        <input type="checkbox" id="cal-data-display" hidden /> -->
        <header>
            <div style="display: flex; flex-direction: row;">
                <img src="${imgLag}" style="width: 40vw; height:15vw;margin: 3px" alt="Lagos building logo" />
                <img src="${imgAssessCal}" style="width: 40vw; height:15vw;margin: 3px" alt="Assessment calculator logo" />
            </div>
            <h1 style="text-align: center;">
                CALCULATION OF ASSESSMENT
            </h1>
            <h2 style="text-align: center;">${contxt.district} DISTRICT OFFICE</h2>
            <h3 style="text-align: center;" id="output-res-outline-color">
                APPLICATION DETAILS
            </h3>
        </header>
        <section id="applic-data" class="display-types">
        ${contxt.bioData.map((bioDatum: any) => (`
            <div>
                <p style="flex: 7;">${bioDatum.label}</p>
                <p id="output-res-outline-color" style="flex: 5;">${bioDatum.value}</p>
            </div>`))}
            
        </section>

        <section id="builds">
            <div id="build-para">
            <h4>1 BUILDING</h4>
                ${contxt.floorData.map((floorDatum: any, idxFloor: any)=>{
                    let floorInfor
                switch(idxFloor) {
                    case 0:
                        floorInfor = 'G/F'    
                        break;
                    case 1:
                        floorInfor = `${idxFloor}` + 'ST/F'
                        break;
                    case 2:
                        floorInfor = `${idxFloor}` + 'ND/F'
                        break;
                    case 3:
                        floorInfor = `${idxFloor}` + 'RD/F'
                        break;
                    default:
                        floorInfor = `${idxFloor}` + 'TH/F'
                        break;
                }
                    return `<div>
                        <div id="floor-para" class="display-types">
                            <span>
                                <b style="flex: 1.5; color: #293189;">${floorInfor}</b>:
                            </span>
                            <span>
                                <span style="flex: 0.5;">${floorDatum.length}</span style="flex: 1;">
                                <span style="flex: 0.5; text-align: center;">x</span>
                                <span style="flex: 0.5;">${floorDatum.breadth}</span>
                                <span style="flex: 0.5; text-align: center;">x</span>
                                <span style="flex: 0.5;">${floorDatum.height}</span>
                                <span style="flex: 0.5; text-align: center;">x</span>
                                <span style="flex: 0.5;">${floorDatum.rate}</span>
                            </span>
                            <span id="sign-color" style="text-align: center;color: #293189;flex: 1;">=</span>
                            <span style="flex: 3.8;" id="output-res-outline-color">${floorDatum.gFloorRes}</span>
                        </div>
                    </div>`
                })}
                
            </div>
        </section>

        <section id="cal-data">
            <div>
            ${contxt.feeDatum.map((_feeDatum: any) => (
                `<p class="display-types">
                    <span style="flex: 1;"><b>${_feeDatum.fenceLabel}:</b> </span>

                    <span id="output-res-outline-color" style="flex: 1">${_feeDatum.feeData}</span>
                    <span>SQM</span>
                    <span style="flex:.279;text-align: center; color: #293189;">=</span>
                    <span id="output-res-outline-color" style="flex: 1.033;">${_feeDatum.feeResult}</span>
                </p>`
            ))}
            </div> <span style="position: absolute; top: 51.7vh; left: 28.9vw; font-size: 11px; color:#FAA11F;"> > 650SQM = LAND AREA - 650 x 10 + 20,
                000</span>
        </section>
        <div style="" id="stamp">
                <p>STAMP HERE</p>
            </div><section id="pay-data">
                    <div>
                        <p style="text-align: center;">
                            PLEASE PAY THE SUM OF ${contxt.procFee} TO LASG ACCOUNT
                            AS PROCESSING FEE
                        </p>
                        <div style="margin-left: 7%;" class="display-types">
                            <span style="flex: 1.5; width: 300px;">AGENCY CODE: </span><span style="flex: 2;">${contxt.processingfeeAgencyCode}</span>
                            <span style="flex: 1.5;">REVENUE CODE: </span><span style="flex: 1.5;">${contxt.processingfeeRevenueCode}</span>
                        </div>

                        
                    </div>
                </section><div style="display: grid; justify-content: center;" id="btn">
                    <button id="output-res-outline-color">SAVE</button>
                </div><div>
                    <p style="font-size: 7px; text-align: center; border: 2px solid gray;">
                        PLEASE CHECK THE CALCULATED ASSESSMENT FOR ERRORS.
                        ASSESSMENT CALCULATOR WOULD NOT BE LIABLE FOR ANY HUMAN ERROR
                    </p>
                </div>
        </body>
        <footer>

        </footer>

    </html>`
    const downloadPage = () => {
        // download this page as pdf
        // download code
    };
    
    const print = async () => {
        ToastAndroid.show('Saved ...', ToastAndroid.LONG)
        // On iOS/android prints the given html. On web prints the HTML from the current page.
        await Print.printAsync({
          html,
        //   printerUrl: selectedPrinter?.url, // iOS only
        });
      };
    
      const printToFile = async () => {
        // On iOS/android prints the given html. On web prints the HTML from the current page.
        console.log(html)
        const { uri } = await Print.printToFileAsync({ html });
        console.log('File has been saved to:', uri);
        await shareAsync(uri, { UTI: '.pdf', mimeType: 'application/pdf' });
      };

    const setFloorPosition = contxt.floorData.map((flData: any, florIdx: number) => {
            let floorInfo
            switch(florIdx) {
                case 0:
                    floorInfo = 'G/F'    
                    break;
                case 1:
                    floorInfo = `${florIdx}` + 'ST/F'
                    break;
                case 2:
                    floorInfo = `${florIdx}` + 'ND/F'
                    break;
                case 3:
                    floorInfo = `${florIdx}` + 'RD/F'
                    break;
                default:
                    floorInfo = `${florIdx}` + 'TH/F'
                    break;
            }
            return (
                <LabelledDisplay 
                    key={florIdx+1}
                    calTypeLabelStyle={customDisplayStyle}
                    multiplandInfo={`${floorInfo}:`+ ' ' + ' ' + ' ' + `${flData.length} `  + ' x ' +
                        ` ${flData.breadth} ` +' x ' + ` ${flData.height} ` + ' x '+  ` ${flData.rate}`
                    }
                    // namedInfo={`${flData.breadth} ` +' x ' + ` ${flData.height} ` + ' x '+  ` ${flData.rate}`}
                    info={flData.gFloorRes}
                    isPreviewFloor={true}
                    isText={true}
                    isSign={false}
                    prevLabelStyle={{marginLeft: '0%',flex: 1.7}}
                    
                />
            )
        })
    
    return (
        <>
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
                    gatherDet={()=>{}}
                    disableInput='disabled'
                    previewEditableInput={false}
                    previewInputData={{
                        applicantQaddress: contxt.applicantQaddress,
                        applicantQname: contxt.applicantQname,
                        telephoneQno: contxt.telephoneQno,
                        fileQnumber: contxt.fileQnumber
                    }}
                />
                {
                    setFloorPosition()
                }
                <View style={styles.fencingFeeStyle}>
                        
                    <View style={{flex: 4.2,}}>
                            <ReuseInput 
                                    calTypeStyle={[
                                        styles.calTypeInputStyle, 
                                    ]}
                                    label='FENCING FEE:'
                                    inputConfig={{
                                        placeholder: 'LAND AREA',
                                        textAlign: 'center',
                                        inputMode: 'numeric',
                                        readOnly: true,
                                        value: contxt.fencingQFee
                                        // onChangeText: getUserDatum.bind(this, 'fencingQFee'),
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
                            info={contxt.fencingQFee}
                                // === ""?fenceFee.fencingQFee : ctxData.fencingQFee}
                    />
                </View>
                <View>
                        <LabelledDisplay 
                            calTypeLabelStyle={customDisplayStyle}
                            namedInfo='ASSESSMENT FEE'
                            info={contxt.assessmentFee}
                            isText={false}
                            
                        />
                        
                        <LabelledDisplay 
                            calTypeLabelStyle={customDisplayStyle}
                            namedInfo='LAYOUT FEE'
                            isText={false}
                            info={contxt.layoutQFee}
                            previewEditableInput='false'
                        />

                        <LabelledDisplay
                            calTypeLabelStyle={customDisplayStyle}
                            namedInfo='APP & REG FEE'
                            isText={false}
                            info={contxt.appQRegQFee}
                            previewEditableInput='false'
                        />

                        <LabelledDisplay 
                            calTypeLabelStyle={customDisplayStyle}
                            namedInfo='SUB TOTAL'
                            isText={false}
                            info={contxt.subTotal}
                            previewEditableInput='false'
                        />
                        
                        <LabelledDisplay
                            calTypeLabelStyle={customDisplayStyle}
                            namedInfo='10%'
                            isText={false}
                            info={contxt.tenPercent}
                            previewEditableInput='false'
                        />

                        {/* <> */}
                        {/* {isPfs && */}
                            {/* <LabelledDisplay
                                calTypeLabelStyle={customDisplayStyle}
                                namedInfo='5% LASEMA'
                                info={contxt.fivePercent}
                                isText={false}
                                previewEditableInput='false'
                            />   */}
                        {/* } */}
                        {/* </> */}

                        <LabelledDisplay
                            calTypeLabelStyle={customDisplayStyle}
                            namedInfo='S.E.C'
                            isText={false}
                            info={contxt.sec}
                            previewEditableInput='false'
                        />

                        <LabelledDisplay
                            calTypeLabelStyle={customDisplayStyle}
                            namedInfo='TOTAL'
                            isText={false}
                            info={Math.round(contxt.processingFee * 100) / 100}
                            previewEditableInput='false'
                        />
                    </View>
                <PaymentDisplay 
                    total={Math.round(contxt.processingFee * 100) / 100}
                    agencyCode={contxt.processingfeeAgencyCode}
                    revCode={contxt.processingfeeRevenueCode}
                    payType={'PROCESSING'}
                />
                {
                // fee?
                //    <PreviewPaymentAcc
                        
                //    />
                }
                <AppButton 
                // It should preview and save as pdf. May be two button will be fine here 
                    title='SAVE'
                    onGoto={print}
                />
                
            </View>
    
            
            </ScrollView>
            <View style={{justifyContent: "flex-end"}}>
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
        </>
    )
}

const screenSize = Dimensions.get("window");

const styles = StyleSheet.create({
    fencingFeeStyle: {
        flexDirection: 'row',
        alignItems: 'center',
        // justifyContent: 'space-between',       
    },
    calTypeInputStyle: {
        width: AppStyles.smallInputWidth,
    },
    calDisplayInfoStyle: {
        flex: 4,
    },
    calTypeIconStyle: {
        flex: 1,
    },
    
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