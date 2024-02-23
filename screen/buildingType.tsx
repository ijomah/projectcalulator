import React from "react";
import { 
    SafeAreaView, 
    StyleSheet, 
    FlatList, 
    View, Text, TextInput, 
    TouchableOpacity, 
    useWindowDimensions} from "react-native";
import { screeninfos } from "../data/data";

export default function BuildingTypePage({navigation}: any) {
    const devDimension = useWindowDimensions()

    const showScreenInfo = ({item}: any) => {
        return(
            <TouchableOpacity
                style={styles.buildType}
                onPress={navigation.navigate(item.type)}
            >
                <Text>{item.building != null ? item.building : ''}</Text>
            </TouchableOpacity>
        )
    } 
    return (
        <SafeAreaView style={styles.buildTypeBox}>
            <FlatList
                data={screeninfos}
                renderItem={showScreenInfo}
                keyExtractor={({item}: any) => item.id}
            />
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    buildTypeBox: {},
    buildType: {}

})