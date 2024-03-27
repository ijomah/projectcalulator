import React, { useContext, useState } from "react";
import { 
    SafeAreaView, 
    StyleSheet, 
    FlatList, 
    View, Text, TextInput, 
    TouchableOpacity, 
    useWindowDimensions,
    Dimensions,
    ImageBackground
} from "react-native";

import { useNavigation } from "@react-navigation/native";

import { screeninfos } from "../data/data";
import DisplayInfo from "../display/display";
import AppButton from "../buttons/appBtn";
import { ConfigContext } from "../warehouse/configContext";

export default function BuildingTypePage({nav, compPathName}: any) {
    const devDimension = useWindowDimensions();
    const [rate, setRate] = useState(0);
    const ctxRate = useContext(ConfigContext);
    // const nav = useNavigation();
    //Transfer rate will interact with context
    //get the rate from setting
    //pass it as parameter to nav
    const transferRate = () => {

    };

    const goto  = () => {
        transferRate();
        nav.navigate(compPathName, {rateTransfer: ''});
    };
    const showScreenInfo = ({item}: any) => {
        return(
            <TouchableOpacity 
                onPress={transferRate}
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
            <AppButton 
                onGoto={goto}
                btnConfig={{
                    
                }}
                title='NEXT'
            />
            <ImageBackground
                source={require('./../assets/imagebg.jpeg')}
                style={styles.imgBg}
            >

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
        alignItems: 'center',
        justifyContent: 'center',
        // backgroundColor: 'red',
    },
    buildType: {
        justifyContent: 'center',
        alignItems: 'center',
        width: 350,
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
            height: 50,
            flexDirection: 'column',
            alignSelf: 'stretch',
            width: 410,
            opacity: 0.4,
    }

})