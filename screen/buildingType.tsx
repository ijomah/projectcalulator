import React from "react";
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
import { screeninfos } from "../data/data";
import DisplayInfo from "../display/display";
import AppButton from "../buttons/appBtn";

export default function BuildingTypePage({navigation}: any) {
    const devDimension = useWindowDimensions()

    const showScreenInfo = ({item}: any) => {
        return(
            <SafeAreaView 
                style={[styles.buildType, {borderColor: item.colors}]}
            >
                <DisplayInfo 
                    info={item.building != null ? item.building : ''}
                />
            </SafeAreaView>
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
                btnConfig={{
                    onPress: () => navigation.navigate(''),
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
        height: screenSize.height - 265,
        alignItems: 'center',
        justifyContent: 'center',
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
        height: (screenSize.height / 10) - 10,
    },
    imgBg: {
            height: 50,
            flexDirection: 'column',
            alignSelf: 'stretch',
            width: 410,
            opacity: 0.4,
    }

})