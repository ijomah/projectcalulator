import React, { useContext } from "react";
import { SafeAreaView } from "react-native";
import { ConfigDataContext, DispatchContext } from "../../warehouse/configContext";
import SettingPage from "../setPage";


export default function ManagerSetting() {
    const ctxStore: any = useContext(ConfigDataContext);
    const dispatchToCtxStore: any = useContext(DispatchContext);
    const getUserData = (inputKey: any, inputValue: any) => {
        // console.log('input', inputKey, inputValue);
        console.log('input', {...ctxStore, [inputKey]: inputValue});
        dispatchToCtxStore({...ctxStore, [inputKey]: inputValue})

    }

    //Save the data
  const saveData = (distKey: any, distValue: any) => {

    console.log('ctx content', {...ctxStore, [distKey]: distValue})
  }
    return (
       <SettingPage 
            {...{saveData, getUserData}}
       />
    )
}