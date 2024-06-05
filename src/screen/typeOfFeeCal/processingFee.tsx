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

export default function ProcessFee({navigation, params}: any) {
    const ctxProcData: any = useContext(ConfigDataContext);
    const dispatchCtxProcData: any = useContext(DispatchContext);
    const [fenceFee, setfenceFee] = useState({});
    const devDimension = useWindowDimensions();
     const getRate = () => {
        
     }

     const getUserData = (fenceKey: any, fenceVal: any) => {
        console.log('pfee', addUp(...[1, 2, 10], 2, 3))
        if(fenceKey === 'fencingQFee' || fenceKey === 'pfsQFencingQFee') {
            console.log('pfee2', fenceKey, fenceVal)
            
            if (fenceKey === 'fencingQFee') {
                if (fenceVal > 650) {
                    //     console.log('pfee3', objVal)
                    //    let fencingFee = ((objVal - 650) * 10) + 20000;
                        setfenceFee({[fenceKey]: ((fenceVal - 650) * 10) + 20000})
                        dispatchCtxProcData({...ctxProcData, fencingQFee: ((fenceVal - 650) * 10) + 20000 });
                    } else if(fenceVal <= 650) {
                        // let fenceFee = objVal;
                        setfenceFee({[fenceKey]: fenceVal})
                        dispatchCtxProcData({...ctxProcData, fencingQFee: fenceVal});  
                    }
            }

            if(fenceKey != 'fencingQFee') {
                if (fenceVal > 650) {
                    //     console.log('pfee3', objVal)
                    //    let fencingFee = ((objVal - 650) * 10) + 20000;
                        setfenceFee({[fenceKey]: ((fenceVal - 650) * 10) + 20000})
                        dispatchCtxProcData({...ctxProcData, fenceFee});
                    } else if(fenceVal <= 650) {
                        // let fenceFee = objVal;
                        setfenceFee({[fenceKey]: fenceVal})
                        dispatchCtxProcData({...ctxProcData, fenceFee});  
                    }
            }
            
            
        }
        // dispatchCtxProcData({...ctxProcData, [objkey]: objVal})
        computeAssessmentData()
     }

     const computeAssessmentData = () => {
        let assessCost = addUp(...ctxProcData.floorTotal, ctxProcData.fencingQFee)
        dispatchCtxProcData({...ctxProcData, assessmentFee: assessCost});
        console.log('touched contxt', ctxProcData, assessCost)

    //     //calls
        calSubTotal();
        cal10Percent();
        cal5Percent();
        calTotal();
    }

    // let structTotal
    //
    //functions
    const cal10Percent = () => {
        let tenPercent = ctxProcData.assessmentFee * 0.1     //ie 10%
        dispatchCtxProcData({...ctxProcData, tenPercent: tenPercent})
    } 
    const cal5Percent = () => {
        let fivePercent = ctxProcData.assessmentFee * 0.05     //ie 5%
        dispatchCtxProcData({...ctxProcData, fivePercent: fivePercent})
    }
    const calSubTotal = () => {
        let subTotal = addUp(ctxProcData.assessmentFee, ctxProcData.layout, ctxProcData.appReg);
        dispatchCtxProcData({...ctxProcData, subTotal: subTotal})
    }
    const calTotal = () => {
        let total = addUp(ctxProcData.tenPercent, ctxProcData.sec, ctxProcData.subTotal)
        dispatchCtxProcData({...ctxProcData, ProcessingFee: total});
    }

    //re-render
    // useEffect(() => {
    //     computeAssessmentData();
    // }, [ctxProcData])

    return (
        <ScrollView style={styles.processCase}>
            <ScreenHeadings 
                title='APPLICATION DETAILS'
            />
            <ManageApplicantDetails />
            <BuildingLevel {...{params}} />
            <CalcuationTypes 
                navigation={navigation} 
                getUserData={getUserData}
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