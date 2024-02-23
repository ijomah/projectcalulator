import React from "react";
import { 
    SafeAreaView, 
    StyleSheet, 
    FlatList, 
    View, Text, TextInput, 
    TouchableOpacity, 
    ImageBackground,
    useWindowDimensions
} from "react-native";

export default function AboutPage() {
    return (
        <SafeAreaView style={style.main}>
            <View>
                <Text>
                    This is about the Assessment Calculator App
                </Text>
            </View>
        </SafeAreaView>
    )
}

const style = StyleSheet.create({
    main: {}
})