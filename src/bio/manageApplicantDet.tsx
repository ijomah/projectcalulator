// import React, { useContext, useState } from "react";
// import { SafeAreaView, 
//         StyleSheet, 
//         FlatList, 
//         View, Text, TextInput, 
//         TouchableOpacity 
// } from "react-native";
// import ApplicantDet from "./applicantDet";
// import { ConfigDataContext, DispatchContext } from "../warehouse/configContext";


// export default function ManageApplicantDetails({gatherDet}) {
//     const ctxData: any = useContext(ConfigDataContext);
//     const dispatchCtxData: any = useContext(DispatchContext);

//     // const [counting, setCounting] = useState(0);
    
//     // const gatherDet = (applikey: any, applivalue: any) => {
//     //     const appliDet = {[applikey]: applivalue};
//     //     // const bioDataArr = structureData(appliDet);
//     //     structureData(appliDet);
//     //     // dispatchCtxData({...ctxData, bioData: bioDataArr})
//     //     console.log('bioMsg', ctxData)
        
//     // }

//     // const structureData = (bioVal: any) => {
//     //     //loop the object
//     //     //create a new obj based on the no. of key/value pairs
//     //     // the new obj should have an id
//     //     //the keys will be turn to values
//     //     // this fxn will return an array
    
//     //     //then finally attach the array to the context obj @
//     //     // the component where it is called
    
//     //     //use a for in loop
//     //     //get the keys and values
//     //     // formulate the obj the components needs
//     //     // let newObjArr = [];
//     //     setCounting(counting + 1)
//     //     //  ++counter;
//     //     for (var objDatumKey in bioVal) {
            
//     //         // locate the upperCase in the string
//     //         //shift the text at that point
//     //         let properData = objDatumKey.split('Q').join(' ').toLocaleUpperCase();
//     //         dispatchCtxData({...ctxData, bioData:[...ctxData.bioData, {ownerKey: properData, id: counting, ownerData: bioVal[objDatumKey]}]})
//     //         // return newObjArr;
//     //     }
//     // }
//     return (
//         <ApplicantDet 
//             {...{gatherDet}}
//         />
//     )
// }