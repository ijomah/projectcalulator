import React from "react";
import { 
    SafeAreaView, 
    StyleSheet, 
    FlatList, 
    View, Text, TextInput, 
    TouchableOpacity, 
    useWindowDimensions} from "react-native";
import ReuseInput from "../reuseables/input";
import DisplayInfo from "../display/display";

export default function FloorType({floorPosition, calResult}: any) {
    const devHeight = useWindowDimensions().height;
    return (
        <SafeAreaView style={styles.floorStyle}>
            <DisplayInfo
                info={floorPosition}
            />
            <View style={styles.dimStyle}>
                <View style={styles.lengthStyle}>
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
                <View style={styles.lengthStyle}>
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
            </View>
            <DisplayInfo
                info={calResult}
            />
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    floorStyle: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        margin: 2
    },

    dimStyle: {
        justifyContent: 'center',
        alignItems: 'center',
        margin: 2
    },

    lengthStyle: {flexDirection: 'row'},
    cardStyle: {
        height: 100,
        // height: devHeight < 235 ? 45 : 124,
        width: 110,
        backgroundColor: '#A3FFBA',
        margin: 5,
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: 2,
        borderColor: '#C8C92D'
    }
})