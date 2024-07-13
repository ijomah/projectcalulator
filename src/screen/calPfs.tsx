import React, { useContext } from "react";
import { 
    SafeAreaView, 
    StyleSheet, 
    FlatList, 
    View, Text, TextInput, 
    TouchableOpacity, 
    useWindowDimensions
} from "react-native";
// import { screeninfos } from "../src/data/data";
// import DisplayInfo from "../src/display/display";
// import AppButton from "../src/buttons/appBtn";
import BuildingTypePage from "./buildingType";
import { AppStyles } from "../constants/styles";
import { ConfigDataContext, DispatchContext } from "../warehouse/configContext";

export default function CalPfs({navigation}: any) {
    const ctxRate: any = useContext(ConfigDataContext);
    const dispatchCtxRate: any = useContext(DispatchContext);
    const devDimension = useWindowDimensions()


    const transferRate = (rateKey: any) => {
        dispatchCtxRate({...ctxRate, 
            selectedBuildType: {
                buildType: rateKey, 
                rate: ctxRate[rateKey]
            }})
        
    };
     
    return (
        <SafeAreaView style={styles.buildTypeBox}>
            <BuildingTypePage
                nav={navigation}
                compPathName='pfsFee'
                {...{transferRate}}
            />
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    buildTypeBox: {
        // backgroundColor: 'yellow',
        // height: 780, //use dim api or windowdim hook
        height: AppStyles.height - 150,
        alignItems: 'center',
        justifyContent: 'center',
    },
    buildType: {
        justifyContent: 'center',
        alignItems: 'center',
        width: 350,
        height: 80,
        borderWidth: 5,
        borderStyle: 'solid',
        borderColor: 'green',
        margin: 15,
        borderRadius: 20,
    }

})