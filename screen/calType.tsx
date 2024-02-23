import React from "react";
import { SafeAreaView, 
        StyleSheet, 
        FlatList, 
        View, Text, TextInput, 
        TouchableOpacity } from "react-native";
import { screeninfos } from "../data/data";

export default function HomePage({navigation}: any) {

    const showScreenInfo = ({item}: any) => {
        return(
            <TouchableOpacity
                onPress={navigation.navigate(item.type)}
            >
                <Text>{item.info}</Text>
            </TouchableOpacity>
        )
    } 
    return (
        <SafeAreaView>
            <FlatList
                data={screeninfos}
                renderItem={showScreenInfo}
                keyExtractor={({item}: any) => item.id}
            />
        </SafeAreaView>
    )
}