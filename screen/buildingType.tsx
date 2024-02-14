import React from "react";
import { SafeAreaView, 
        StyleSheet, 
        FlatList, 
        View, Text, TextInput, 
        TouchableOpacity } from "react-native";

export default function HomePage({navigation}: any) {
    const screenInfo = [
        {id: '1', type: 'process', info: 'Calculate Processing Fee'},
        {id: '2', type: 'stage', info: 'Calculate Stage Certificaton'},
        {id: '3', type: 'penal', info: 'Calculate Penal Fee'},
        {id: '4', type: 'idc',  info: 'Calculate I.D.C'},
        {id: '5', type: 'pfs', info: 'Calculate P.F.S Assessment'},
        {id: '6', type: 'setting', info: 'Setting'},
        {id: '7', type: 'pixCollage', info: 'Picture Collage'}
    ]

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
                data={screenInfo}
                renderItem={showScreenInfo}
                keyExtractor={({item}: any) => item.id}
            />
        </SafeAreaView>
    )
}