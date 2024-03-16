import React from "react";
import { 
    SafeAreaView, 
    StyleSheet, 
    FlatList, 
    View, Text, TextInput, 
    TouchableOpacity, 
    useWindowDimensions,
    Dimensions} from "react-native";
import ReuseInput from "../reuseables/input";
import DisplayInfo from "../display/display";
import { AppStyles } from "../constants/styles";

export default function FloorType({floorPosition, calResult}: any) {
    const devHeight = useWindowDimensions().height;
    return (
        <SafeAreaView style={styles.floorStyle}>
            <DisplayInfo
                info='G/F:'
                // info="Ground Floor"  // to put icon
            />
            <View style={styles.dimContainerStyle}>
                <View style={styles.lengthStyle}>
                    <ReuseInput 
                        floorTxtInputStyle={styles.TxtInputStyle}
                        inputConfig={{
                            placeholder: 'Length'
                        }}
                    />
                    <Text>x</Text>
                    <ReuseInput 
                        floorTxtInputStyle={styles.TxtInputStyle}
                        inputConfig={{
                            placeholder: 'Breadth'
                        }}
                    />
                </View>
                <View style={styles.lengthStyle}>
                    <ReuseInput 
                        floorTxtInputStyle={styles.TxtInputStyle}
                        inputConfig={{
                            placeholder: 'Height'
                        }}
                    />
                    <Text>x</Text>
                    <ReuseInput 
                        floorTxtInputStyle={styles.TxtInputStyle}
                        inputConfig={{
                            placeholder: 'Rate'
                        }}
                    />
                </View>
            </View>
            <Text>=</Text>
            <DisplayInfo
                floorDisplayStyle={styles.floorDisplayInfoStyle}
                info='calculatedResult'
            />
        </SafeAreaView>
    )
}

const { width, height } = Dimensions.get('screen');

const styles = StyleSheet.create({
    
    floorDisplayInfoStyle: {
        // width: 80,
        height: 26.88,
        borderWidth: 3,
        borderColor: AppStyles.inputOutlineColor,
        borderStyle: 'solid',
        borderRadius: 7,
    },
    floorStyle: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-around',
    },

    dimContainerStyle: {
        // justifyContent: 'center',
        // alignItems: 'center',
        // margin: 2
        // backgroundColor: 'red',
    },

    lengthStyle: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    
    TxtInputStyle: {
        // width: 100
        width: width / 4.5,
    }
})