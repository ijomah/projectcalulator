import React from "react";
import { SafeAreaView, 
    StyleSheet, 
    FlatList, 
    View, Text, TextInput, 
    TouchableOpacity } from "react-native";
import ReuseInput from "../reuseables/input";
import DisplayInfo from "../display/display";

export default function FloorType({floorPosition, calResult}: any) {
    return (
        <SafeAreaView>
            <DisplayInfo
                info={floorPosition}
            />
            <View>
                <ReuseInput 
                    inputConfig={{
                        placeholder: 'Length'
                    }}
                />

                <ReuseInput 
                    inputConfig={{
                        placeholder: 'Breadth'
                    }}
                />
            </View>
            <View>
                <ReuseInput 
                    inputConfig={{
                        placeholder: 'Height'
                    }}
                />
                <ReuseInput 
                    inputConfig={{
                        placeholder: 'Rate'
                    }}
                />
            </View>
            <DisplayInfo
                info={calResult}
            />
        </SafeAreaView>
    )
}