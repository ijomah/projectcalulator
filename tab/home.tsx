import React from "react";
import { SafeAreaView, 
        StyleSheet, 
        FlatList, 
        View, Text, TextInput, 
        TouchableOpacity } from "react-native";

export default function HomePage({navigation}: any) {
    const screenInfo = [
        {id: '1', dest: 'process', info: 'Calculate Processing Fee'},
        {id: '2', dest: 'stage', info: 'Calculate Stage Certificaton'},
        {id: '3', dest: 'penal', info: 'Calculate Penal Fee'},
        {id: '4', dest: 'idc',  info: 'Calculate I.D.C'},
        {id: '5', dest: 'pfs', info: 'Calculate P.F.S Assessment'},
        {id: '6', dest: 'setting', info: 'Setting'},
        {id: '7', dest: 'pixCollage', info: 'Picture Collage'}
    ]

    const showScreenInfo = ({item}: any) => {
        return(
            <TouchableOpacity
                onPress={navigation.navigate(item.dest)}
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
                numColumns={3}
            />
        </SafeAreaView>
    )
}