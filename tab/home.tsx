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
    // const {width, height, fontScale, scale} = useWindowDimensions();
    const showScreenInfo = ({item}: any) => {
        return(
            <TouchableOpacity
                style={styles.cardStyle}
                onPress={navigation.navigate(item.dest)}
            >
                <Text>{item.info}</Text>
            </TouchableOpacity>
        )
    } 
    return (
        <SafeAreaView style={styles.listStyle}>
            <FlatList
                data={screenInfo}
                renderItem={showScreenInfo}
                // keyExtractor={({item}: any) => item.id}
                numColumns={3}
            />
            {/* <Text>Height: {height}</Text>
            <Text>Width: {width}</Text>
            <Text>Font scale: {fontScale}</Text>
            <Text>Pixel ratio: {scale}</Text> */}
            <ImageBackground 
            source={require('./../assets/imagebg.jpeg')}
            style={styles.bgImgStyle}    
            >
                {/* <Text>hi</Text> */}
            </ImageBackground>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    listStyle: {
        // justifyContent: 'space-between',
        backgroundColor: 'white',
        alignItems: 'center',
        margin: 2,
        height: 740
    },
    cardStyle: {
        height: 100,
        width: 110,
        backgroundColor: '#A3FFBA',
        margin: 10,
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: 2,
        borderColor: '#C8C92D'
    },
    bgImgStyle: {
        height: 200,
        flexDirection: 'column',
        alignSelf: 'stretch',
        width: 410,
        opacity: 0.4
    }
})