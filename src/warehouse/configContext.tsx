import React, {useState} from "react";
import { createContext } from "react";
// import { SafeAreaView, View } from "react-native";

export const DispatchContext: any = createContext(undefined);
export const ConfigDataContext: any = createContext(undefined)
//     {
//     // rate: {
//         resident: null,
//         commercial: null,
//         institute: null,
//         industry: null,
//         agric: null,
//         recreation: null,
//         mixedUse: null,
//     // },
//     // fee: {
//         layout: null,
//         appReg: null,
//     // },
//     // processFee: {
//         agencyCode: null,
//         revenueCode: null,
//     // },
//     // stageFee: {
//         // agencyCode: null,
//         // revenueCode: null,
//     // },
//     // idcFee: {
//         // agencyCode: null,
//         // revenueCode: null,
//     // },
//     addConfig: () => {},
//     editConfig: () => {},
//     removeConfig: () => {}
// }

export default function ConfigContextProvider({children}: any) {
    const value: any =  {
                residentRate: null,
                commercialRate: null,
                institutionalRate: null,
                industrialRate: null,
                agricRate: null,
                recreateRate: null,
                mixedUseRate: null,
                // layout: null,
                // appReg: null,
                // procAgencyCode: null,
                // procRevenueCode: null,
                // stageAgencyCode: null,
                // stageRevenueCode: null,
                // idcAgencyCode: null,
                // idcRevenueCode: null,
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
