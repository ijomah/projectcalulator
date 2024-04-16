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

import { useNavigation } from "@react-navigation/native";
import AppButton from "../buttons/appBtn";
import { screeninfos } from "../data/data";
import DisplayInfo from "../display/display";
import { ConfigDataContext } from "../warehouse/configContext";

import * as SecureStore from 'expo-secure-store';


export default function BuildingTypePage({nav, compPathName}: any) {
    const devDimension = useWindowDimensions();
    const [rate, setRate] = useState();
    
    const ctxRate: any = useContext(ConfigDataContext);
    const [rateCtxState, setRateCtxState] = useState(ctxRate);
    // const nav = useNavigation();
    //Transfer rate will interact with context
    //get the rate from setting
    //pass it as parameter to nav
    const transferRate = (rateKey: any) => {
        // const storeDataStr: any = SecureStore.getItemAsync("settingData");
        // const storeData = JSON.parse(storeDataStr)
        // console.log('store', storeDataStr, storeData);
        // loop the ctx obj
        //compare the keys with the one string
        //if true, take the value, set it to state
        // setRate(ctxRate[rateKey])
        let keyRate = rateKey.replace(' ', '')
        console.log('ctxRate', ctxRate)
        for (var property in ctxRate) {
            console.log('property for ctx', property)
            
            if (property === keyRate ) {
                // let ppty = property.toLowerCase();
                return setRate(rateCtxState[property])
            }
        }
        // console.log(Object.keys(ctxRate))
        const {...ctxRateCopy} = ctxRate;
        // Object.getOwnPropertyNames(ctxRate).forEach((objKey)=>{
        //     if(objKey === rateKey.replace(' ', '')) {
        //         setRate(ctxRate.objKey);
        //     }
        // })
        console.log('rate',rate)
    };

    const goto  = () => {
        if (rate === 0) {
            // return ToastAndroid.BOTTOM('Please select a building type',)
            return console.log('no rate o')
        }
        console.log('rate is', rate)
        nav.navigate(compPathName, {rateTransfer: rate});
    };
    const showScreenInfo = ({item}: any) => {
        return(
            <TouchableOpacity 
                onPress={() => {
                    transferRate(item.building)
                }}
                style={[styles.buildType, {borderColor: item.colors}]}
            >
                <DisplayInfo 
                    info={item.building != null ? item.building : ''}
                />
            </TouchableOpacity>
        )
    } 

    
    return (
        <SafeAreaView style={styles.buildTypeBox}>
            <FlatList
                style={styles.flatListstyle}
                data={screeninfos}
                renderItem={showScreenInfo}
                // keyExtractor={({item}: any) => item.id}
            />
            
            <ImageBackground
                source={require('./../../assets/imagebg.jpeg')}
                style={styles.imgBg}
            >
                <AppButton 
                    onGoto={goto}
                    btnConfig={{
                        
                    }}
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
        height: screenSize.height - 163,
        width: screenSize.width - 20,
        alignItems: 'center',
        justifyContent: 'center',
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
        margin: ((screenSize.height / 10) - 15) / 10,
        borderRadius: 20,
    },

    flatListstyle: {
        // height: (screenSize.height / 10) - 10,
        // backgroundColor: 'yellow',
        
    },
    imgBg: {
            height: screenSize.height / 5,
            flexDirection: 'column',
            alignSelf: 'stretch',
            width: screenSize.width - 20,
            // opacity: 0.4,
            resizeMode: 'contain'
    }

})