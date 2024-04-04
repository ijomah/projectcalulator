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
import AppButton from "../buttons/appBtn";
import { screeninfos } from "../data/data";
import DisplayInfo from "../display/display";
import { ConfigDataContext } from "../warehouse/configContext";


export default function BuildingTypePage({nav, compPathName}: any) {
    const devDimension = useWindowDimensions();
    const [rate, setRate] = useState(0);
    const ctxRate = useContext(ConfigDataContext);
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