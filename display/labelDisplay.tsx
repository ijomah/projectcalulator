import React from "react";
import { SafeAreaView, 
    StyleSheet, 
    FlatList, 
    View, Text, TextInput, 
    TouchableOpacity } from "react-native";

import { Entypo } from '@expo/vector-icons';
import { FontAwesome6 } from '@expo/vector-icons';

import DisplayInfo from "./display";

export default function LabelledDisplay({info, isSign, namedInfo}: any) {
    return (
        <SafeAreaView>
            <Text>{namedInfo}</Text>
            {/* Equality sign icon */}
            {isSign?
                <Entypo name="dots-two-vertical" size={24} color="black" />
                :
                <FontAwesome6 name="equals" size={24} color="black" />
            }
            <DisplayInfo 
                info={info}
            />
        </SafeAreaView>
    )
}