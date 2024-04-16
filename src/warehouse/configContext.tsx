import React, {useState, createContext} from "react";

import * as SecureStore from 'expo-secure-store'
// import { SafeAreaView, View } from "react-native";

export const DispatchContext: any = createContext(undefined);
export const ConfigDataContext: any = createContext(undefined)
//     {
//     // rate: {
//         resident: '',
//         commercial: '',
//         institute: '',
//         industry: '',
//         agric: '',
//         recreation: '',
//         mixedUse: '',
//     // },
//     // fee: {
//         layout: '',
//         appReg: '',
//     // },
//     // processFee: {
//         agencyCode: '',
//         revenueCode: '',
//     // },
//     // stageFee: {
//         // agencyCode: '',
//         // revenueCode: '',
//     // },
//     // idcFee: {
//         // agencyCode: '',
//         // revenueCode: '',
//     // },
//     addConfig: () => {},
//     editConfig: () => {},
//     removeConfig: () => {}
// }

export default function ConfigContextProvider({children}: any) {
    const value: any =  {
                residential: '',
                commercial: '',
                institutional: '',
                industrial: '',
                agricultural: '',
                recreational: '',
                mixedUse: '',
                processFee: [],
                assessmentFee: '',
                idcFee: [],
                stageFee: [],
                penalFee: [],
                pfsFee: []
                
                // layout: '',
                // appReg: '',
                // procAgencyCode: '',
                // procRevenueCode: '',
                // stageAgencyCode: '',
                // stageRevenueCode: '',
                // idcAgencyCode: '',
                // idcRevenueCode: '',
        }
    const [data, setData] = useState(value)
    
    return (
        <ConfigDataContext.Provider value={data}>
            <DispatchContext.Provider value={setData}>
                {children}
            </DispatchContext.Provider>
        </ConfigDataContext.Provider>
    )
}
