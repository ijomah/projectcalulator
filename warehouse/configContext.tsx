import React, {useState} from "react";
import { createContext } from "react";
import { SafeAreaView, View } from "react-native";

export const ConfigContext = createContext({
    // rate: {
        resident: null,
        commercial: null,
        institute: null,
        industry: null,
        agric: null,
        recreation: null,
        mixedUse: null,
    // },
    // fee: {
        layout: null,
        appReg: null,
    // },
    // processFee: {
        agencyCode: null,
        revenueCode: null,
    // },
    // stageFee: {
        // agencyCode: null,
        // revenueCode: null,
    // },
    // idcFee: {
        // agencyCode: null,
        // revenueCode: null,
    // },
    addConfig: () => {},
    editConfig: () => {},
    removeConfig: () => {}
})

export default function ConfigContextProvider({children}: any) {
    const [rates, setRates] = useState(0);
    const [fees, setFees] = useState(0);
    const [processFee, setProcessFee] = useState(0);
    const [stageFee, setStageFee] = useState(0);
    const [idcFee, setIdcFee] = useState(0);

    const value = {
        rate: rates, 
        // {},
        fee: fees, 
        // {},
        processFee: processFee,
        // {},
        stageFee: stageFee,
        // {},
        idcFee: idcFee,
        // {},
        addConfig: (datum: object) => {},
        editConfig: (datum: object) => {},
        removeConfig: (datum: object) => {}
    }
    return (
        <ConfigContext.Provider value={value}>
            {children}
        </ConfigContext.Provider>
    )
}
