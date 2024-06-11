import React, { useContext, useEffect, useState } from "react";
import { 
    SafeAreaView, 
    StyleSheet, 
    FlatList, 
    View, Text, TextInput, 
    TouchableOpacity, 
    useWindowDimensions,
    Dimensions,
    ScrollView
} from "react-native";


import CalcuationTypes from "../calType";
import ScreenHeadings from "../../headings/Heading";
import ApplicantDet from "../../bio/applicantDet";
import BuildingLevel from "../../buildings/building";
import ManageApplicantDetails from "../../bio/manageApplicantDet";
import { ConfigDataContext, DispatchContext } from "../../warehouse/configContext";
import { addUp } from "../../../util/utilFxn";
// console.log('outer', this.fencingQFee)
export default function ProcessFee({navigation, params}: any) {
    // console.log('inner', this.fencingQFee)
    const ctxData: any = useContext(ConfigDataContext);
    const dispatchCtxData: any = useContext(DispatchContext)
    const [fenceFee, setfenceFee] = useState({});
    const devDimension = useWindowDimensions();
    //  const getThis = this

     const getUserDatum = (fenceKey: any, fenceVal: any) => {
        // console.log('pfee', addUp(...[1, 2, 10], 2, 3))
        // console.log('outer', this)
        if(fenceKey === 'fencingQFee' || fenceKey === 'pfsQFencingQFee') {
            // console.log('pfee2', fenceKey, fenceVal)
            
            if (fenceKey === 'fencingQFee') {
                if (fenceVal > 650) {
                        // console.log('pfee3', fenceVal)
                    //    let fencingFee = ((objVal - 650) * 10) + 20000;
                        setfenceFee({[fenceKey]: ((fenceVal - 650) * 10) + 20000})
                        dispatchCtxData({...ctxData, [fenceKey]: ((fenceVal - 650) * 10) + 20000 });
                    } else if(fenceVal <= 650) {
                        // let fenceFee = objVal;
                        // console.log('pfee4', fenceVal)
                        setfenceFee({[fenceKey]: fenceVal})
                        dispatchCtxData({...ctxData, [fenceKey]: fenceVal});  
                    }
            }

            if(fenceKey != 'fencingQFee') {
                if (fenceVal > 650) {
                    //     console.log('pfee3', objVal)
                    //    let fencingFee = ((objVal - 650) * 10) + 20000;
                        setfenceFee({[fenceKey]: ((fenceVal - 650) * 10) + 20000})
                        dispatchCtxData({...ctxData, [fenceKey]: fenceVal});
                    } else if(fenceVal <= 650) {
                        // let fenceFee = objVal;
                        setfenceFee({[fenceKey]: fenceVal})
                        dispatchCtxData({...ctxData, [fenceKey]: fenceVal});  
                    }
            }
            
            
        }
        // dispatchCtxData({...ctxData, computeAssessmentData: computeAssessmentData})
        // computeAssessmentData()
     }

    //  const computeAssessmentData = () => {
    //     let assessCost = addUp(...ctxData.floorTotal, ctxData.fencingQFee)
    //     dispatchCtxData({...ctxData, assessmentFee: assessCost});
    //     console.log('touched contxt', ctxData, assessCost)

    // //     //calls
    //     calSubTotal();
    //     cal10Percent();
    //     cal5Percent();
    //     calTotal();
    // }

    // // let structTotal
    // //
    // //functions
    // const cal10Percent = () => {
    //     let tenPercent = ctxData.assessmentFee * 0.1     //ie 10%
    //     dispatchCtxData({...ctxData, tenPercent: tenPercent})
    // } 
    // const cal5Percent = () => {
    //     let fivePercent = ctxData.assessmentFee * 0.05     //ie 5%
    //     dispatchCtxData({...ctxData, fivePercent: fivePercent})
    // }
    // const calSubTotal = () => {
    //     let subTotal = addUp(ctxData.assessmentFee, ctxData.layout, ctxData.appReg);
    //     dispatchCtxData({...ctxData, subTotal: subTotal})
    // }
    // const calTotal = () => {
    //     let total = addUp(ctxData.tenPercent, ctxData.sec, ctxData.subTotal)
    //     dispatchCtxData({...ctxData, ProcessingFee: total});
    // }

    //re-render
    // useEffect(() => {
    //     computeAssessmentData();
    // }, [ctxData])

    return (
        <ScrollView style={styles.processCase}>
            <ScreenHeadings 
                title='APPLICATION DETAILS'
            />
            <ManageApplicantDetails />
            <BuildingLevel {...{params}} />
            <CalcuationTypes 
                navigation={navigation} 
                getUserDatum={getUserDatum}
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
})