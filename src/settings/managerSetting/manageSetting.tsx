import React, { useContext, useState } from "react";
import { SafeAreaView } from "react-native";

// import { useSQLiteContext } from "expo-sqlite";

import { ConfigDataContext, DispatchContext } from "../../warehouse/configContext";
import SettingPage from "../setPage";

import * as SecureStore from 'expo-secure-store';


export default function ManagerSetting() {
    const ctxStore: any = useContext(ConfigDataContext);
    const dispatchToCtxStore: any = useContext(DispatchContext);
    // const db = useSQLiteContext();
  const [dbVal, setDbVal] = useState({})

    const getUserData = (inputKey: any, inputValue: any) => {
        // console.log('input', inputKey, inputValue);
        console.log('input', {[inputKey]: inputValue});
        dispatchToCtxStore({...ctxStore, [inputKey]: inputValue})
        setDbVal({...dbVal, [inputKey]: inputValue})

    }

    //Save the data
  const saveData = async (distKey: any, distValue: any) => {
    dispatchToCtxStore({...ctxStore, [distKey]: distValue})
    // console.log('ctx content', valueForStore)
    // storeInfo(db, ctxStore);
    
  }

  const storeInfo = async (db: any, docData: any) => {
    const userId = await db.runAsync(`
                INSERT INTO users (
                    fname,
                    lname,
                    phone_no
                ) VALUES (?, ?, ?)`,
                [
                    docData.fName,
                    docData.lName,
                    docData.phoneNo
                ]
                // (_: any, res: any) => {
                //     userId = res.insertId;
                //     console.log('resObj',res.insertId)
                //     resolve(res)
                // }
                // (_, err) => {
                //     console.log(err: any)
                //     reject(err: any)
                // }
            );

            await db.runAsync(`
                    INSERT INTO rates (
                        residential,
                        commercial,
                        institutional,
                        mixeduse,
                        agricultural,
                        recreational,
                        industrial,
                        date,
                        user_id,
                        ) 
                    VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)`,
                    [
                        docData.residential,
                        docData.commercial,
                        docData.institutional,
                        docData.mixeduse,
                        docData.agricultural,
                        docData.recreational,
                        docData.industrial,
                        docData.date,
                        docData.user_id,
                        userId
                    ]
                    // (_: any, res: any) => {
                    //     console.log('apidbusers good', res);
                    //     resolve(res);
                    // },
                    // (_, err) => {
                    //     console.log('apidbusers', err)
                    //     reject(err: any)
                    // }
                );

            await db.runAsync(`
                    INSERT INTO fees (
                      appQRegQFee,
                      layoutQFee,
                        user_id
                    ) VALUES (?, ?, ?)`,
                    [
                        docData.appQRegQFee,
                        docData.layoutQFee,
                        userId
                    ]
                    
                );
// //Remember to drop column applic_name here. 
// //it is now in name table
// //Relationship is many to many
            await db.runAsync(`
                    INSERT INTO codes (
                      processingfeeRevenueCode,
                      processingfeeAgencyCode,
                      stagecertificationAgencyCode,
                      stagecertificationRevenueCode,
                      bettermentAgencyCode,
                      bettermentRevenueCode
                    ) VALUES (?, ?, ?, ?, ?, ?)`,
                    [
                        docData.processingfeeRevenueCode,
                        docData.processingfeeAgencyCode,
                        docData.stagecertificationAgencyCode,
                        docData.stagecertificationRevenueCode,
                        docData.bettermentAgencyCode,
                        docData.bettermentRevenueCode,
                        userId
                    ]
                )

}

    return (
       <SettingPage 
            {...{saveData, getUserData}}
       />
    )
}