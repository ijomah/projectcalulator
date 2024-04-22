import React, { useContext } from "react";
import { SafeAreaView, 
        StyleSheet, 
        FlatList, 
        View, Text, TextInput, 
        TouchableOpacity 
} from "react-native";
import ApplicantDet from "./applicantDet";
import { ConfigDataContext, DispatchContext } from "../warehouse/configContext";
import { structureData } from "../../util/utilFxn";

export default function ManageApplicantDetails() {
    const ctxData: any = useContext(ConfigDataContext);
    const dispatchCtxData: any = useContext(DispatchContext)
    
    const gatherDet = (applikey: any, applivalue: any) => {
        const appliDet = {[applikey]: applivalue};
        const bioDataArr = structureData(appliDet);
        dispatchCtxData({...ctxData, bioData: bioDataArr})
        
    }
    return (
        <ApplicantDet 
            {...{gatherDet}}
        />
    )
}