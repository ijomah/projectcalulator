import React from "react";
import { 
    SafeAreaView, 
    StyleSheet, 
    FlatList, 
    View, Text, TextInput, 
    TouchableOpacity, 
    useWindowDimensions
} from "react-native";
import { screeninfos } from "../data/data";
import DisplayInfo from "../display/display";
import AppButton from "../buttons/appBtn";

export default function BuildingTypePage({navigation}: any) {
    const devDimension = useWindowDimensions()

    const showScreenInfo = ({item}: any) => {
        return(
            <SafeAreaView 
                style={styles.buildType}
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
                data={screeninfos}
                renderItem={showScreenInfo}
                // keyExtractor={({item}: any) => item.id}
            />
            <AppButton 
                btnConfig={{
                    // onPress: navigation.navigate('item.type'),
                }}
                title='NEXT'
            />
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    buildTypeBox: {
        backgroundColor: 'yellow',
        height: 715, //use dim api or windowdim hook
        alignItems: 'center',
    },
    buildType: {
        justifyContent: 'center',
        alignItems: 'center',
        width: 350,
        height: 80,
        borderWidth: 5,
        borderStyle: 'solid',
        borderColor: 'green',
    }

})