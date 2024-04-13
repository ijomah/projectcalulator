import React, { useContext } from "react";
import { SafeAreaView } from "react-native";
import { ConfigDataContext, DispatchContext } from "../../warehouse/configContext";
import SettingPage from "../setPage";

import * as SecureStore from 'expo-secure-store';

export default function ManagerSetting() {
    const ctxStore: any = useContext(ConfigDataContext);
    const dispatchToCtxStore: any = useContext(DispatchContext);
    const getUserData = (inputKey: any, inputValue: any) => {
        // console.log('input', inputKey, inputValue);
        console.log('input', {[inputKey]: inputValue});
        dispatchToCtxStore({...ctxStore, [inputKey]: inputValue})

    }

    //Save the data
  const saveData = async (distKey: any, distValue: any) => {
    const {...storeCtxData} = ctxStore
    const valueForStore = JSON.stringify({...ctxStore, [distKey]: distValue})
    await SecureStore.setItemAsync("settingData", valueForStore);
    console.log('ctx content', valueForStore)
  }

    return (
       <SettingPage 
            {...{saveData, getUserData}}
       />
    )
}