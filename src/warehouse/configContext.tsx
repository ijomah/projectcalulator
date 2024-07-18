import React, {useState, createContext, useEffect} from "react";

import { useSQLiteContext } from "expo-sqlite";
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
                selectedBuildType: {},
                fName: 'admin',
                lName: 'boss',
                phoneNo: '08012345678',
                residential: '',
                commercial: '',
                institutional: '',
                industrial: '',
                agricultural: '',
                recreational: '',
                mixedUse: '',
                district:'',
                buildingType: '',
                floorType: '',
                locationQofQdevelopment: '',
                applicantQname: '',
                applicantQaddress: '',
                telephoneQno: '',
                fileQnumber: '',
                bioData: [],
                feesDatum: [],
                floorData: [],
                floorTotal: [],
                assessmentFee: null,
                subTotal: '',
                processingFee: '',
                penalFee: '',
                pfsQFencingQFee: '',
                fencingQFee: '',
                firstQfloorQpump: '',
                addQpump: '',
                underQgroundQtank: '',
                sec: '',
                appQRegQFee: '',
                layoutQFee: '',
                tenPercent: '',
                fivePercent: '',
                processingfeeRevenueCode: '',
                processingfeeAgencyCode: '',
                stagecertificationAgencyCode: '',
                stagecertificationRevenueCode: '',
                bettermentAgencyCode: '',
                bettermentRevenueCode: ''
        }
    const db = useSQLiteContext();
    const [data, setData] = useState(value)
    

        //Insert into db here

        //Read from db here using the hook and update
        // the state variable(data).
    const getDBData = async () => {
        const dbRes = await db.getFirstAsync(`
            SELECT * FROM rates
            JOIN codes ON rates.user_id = codes.user_id
            JOIN districts ON districts.user_id = rates.user_id
            JOIN fees ON fees.user_id = rates.user_id;
        `)

        setData({...data, dbRes})
        console.log('hi db', dbRes)
    }

    // I need this to run once
    useEffect(() => {
        getDBData();
    }, [])

    return (
        <ConfigDataContext.Provider value={data}>
            <DispatchContext.Provider value={setData}>
                {children}
            </DispatchContext.Provider>
        </ConfigDataContext.Provider>
    )
}
