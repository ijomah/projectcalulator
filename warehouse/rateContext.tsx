import React, {useState} from "react";
import { createContext } from "react";
import { SafeAreaView, View } from "react-native";

const ConfigContext = createContext({
    rate: {
        resident: null,
        commercial: null,
        institute: null,
        industry: null,
        agric: null,
        recreation: null,
        mixedUse: null,
    },
    fee: {
        layout: null,
        appReg: null
    },
    processFee: {
        agencyCode: null,
        revenueCode: null
    },
    stageFee: {
        agencyCode: null,
        revenueCode: null
    },
    idcFee: {
        agencyCode: null,
        revenueCode: null
    },
    addConfig: () => {},
    editConfig: () => {},
    removeConfig: () => {}
})

export default function ConfigContextProvider({children}: any) {
    const val = {
        rate: {},
        fee: {},
        processFee: {},
        stageFee: {},
        idcFee: {},
        addConfig: (datum: object) => {},
        editConfig: (datum: object) => {},
        removeConfig: (datum: object) => {}
    }
    return (
        <ConfigContext.Provider value={val}>
            {children}
        </ConfigContext.Provider>
    )
}
