import React, { useContext, useState } from "react";
import { 
    SafeAreaView, 
    StyleSheet, 
    FlatList, 
    View, Text, TextInput, 
    TouchableOpacity, 
    useWindowDimensions,
    Dimensions,
    ImageBackground,
    ToastAndroid
} from "react-native";

import AppButton from "../buttons/appBtn";
import { screeninfos } from "../data/data";
import DisplayInfo from "../display/display";
import { ConfigDataContext, DispatchContext } from "../warehouse/configContext";


export default function BuildingTypePage({transferRate, nav, compPathName}: any) {
    const devDimension = useWindowDimensions();
    // const [rate, setRate] = useState({});
    
    // const ctxRate: any = useContext(ConfigDataContext);
    // const dispatchCtxRate: any = useContext(DispatchContext);
    // // const [rateCtxState, setRateCtxState] = useState(ctxRate);
    // // const nav = useNavigation();
    // //Transfer rate will interact with context
    // //get the rate from setting
    // //pass it as parameter to nav
    // const transferRate = (rateKey: any) => {
    //     // const storeDataStr: any = SecureStore.getItemAsync("settingData");
    //     // const storeData = JSON.parse(storeDataStr)
    //     // console.log('store', storeDataStr, storeData);
    //     dispatchCtxRate({...ctxRate, 
    //         selectedBuildType: {
    //             buildType: rateKey, 
    //             rate: ctxRate[rateKey]
    //         }})
    //     // loop the ctx obj
    //     //compare the keys with the one string
    //     //if true, take the value, set it to state
    //     // setRate({buildType: rateKey, rate: ctxRate[rateKey]})
    //     // let keyRate = rateKey.replace(' ', '');
    //     // console.log('ctxRate', ctxRate)
    //     // for (var property in ctxRate) {
    //     //     console.log('property for ctx', property)
            
    //     //     if (property === rateKey ) {
    //     //         // let ppty = property.toLowerCase();
    //     //         dispatchCtxRate({...ctxRate, rateKey: ctxRate[property]})
    //     //     }
    //     // }
    //     // console.log(Object.keys(ctxRate))
    //     // const {...ctxRateCopy} = ctxRate;
    //     // Object.getOwnPropertyNames(ctxRate).forEach((objKey)=>{
    //     //     if(objKey === rateKey.replace(' ', '')) {
    //     //         setRate(ctxRate.objKey);
    //     //     }
    //     // })
    // };

    const goto  = () => {
        // if (rate === 0) {
        //     // return ToastAndroid.BOTTOM('Please select a building type',)
        //     return console.log('no rate o')
        // }
        // console.log('rate is', rate)
        nav.navigate(compPathName);
    };
    const showScreenInfo = ({item}: any) => {
        return(
            <TouchableOpacity 
                onPress={() => {
                    transferRate(item.buildType)
                }}
                style={[styles.buildType, {borderColor: item.colors, backgroundColor: 'white', opacity: 0.8,}]}
            >
                <DisplayInfo 
                    info={item.building != null ? item.building : ''}
                />
            </TouchableOpacity>
        )
    } 

    
    return (
        <SafeAreaView style={styles.buildTypeBox}>
            <ImageBackground
                source={require('./../../assets/imagebg.jpeg')}
                style={styles.imgBg}
            >
                 <FlatList
                    style={{height: screenSize.height / 1.75 }}
                    contentContainerStyle={{height: screenSize.height / 1.8,}}
                    data={screeninfos}
                    renderItem={showScreenInfo}
                    // keyExtractor={({item}: any) => item.id}
                />
                <AppButton 
                    onGoto={goto}
                    btnConfig={{}}
                    title='NEXT'
                />
            </ImageBackground>
        </SafeAreaView>
    )
}

const screenSize = Dimensions.get("screen");
const styles = StyleSheet.create({
    buildTypeBox: {
        // backgroundColor: 'yellow',
        // height: 750, //use dim api or windowdim hook
        // height: screenSize.height - 163,
        height: screenSize.height / 1.33,
        width: screenSize.width - 20,
        // alignItems: 'center',
        // justifyContent: 'center',
        // backgroundColor: 'red',
    },
    buildType: {
        justifyContent: 'center',
        alignItems: 'center',
        width: screenSize.width - 100,
        // height: 80,
        height: (screenSize.height / 10) - 15,
        borderWidth: 5,
        borderStyle: 'solid',
        borderColor: 'green',
        // margin: 15,
        margin: ((screenSize.height / 10) - 15) / 15,
        borderRadius: 20,
    },
    imgBg: {
            // height: screenSize.height / 1.35,
            height: screenSize.height / 1.5,
            flexDirection: 'column',
            alignItems: 'center',
            // alignSelf: 'stretch',
            width: screenSize.width - 20,
            opacity: 0.8,
            resizeMode: 'contain',
            // backgroundColor: 'yellow',
    }

})