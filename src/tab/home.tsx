import React, { useContext } from "react";
import { 
    SafeAreaView, 
    StyleSheet, 
    FlatList, 
    View, Text, TextInput, 
    TouchableOpacity, 
    ImageBackground,
    useWindowDimensions,
    Dimensions,
    Pressable
} from "react-native";

import { MaterialIcons } from '@expo/vector-icons';
import { ConfigDataContext, DispatchContext } from "../warehouse/configContext";
import { useSQLiteContext } from "expo-sqlite";

export default function HomePage({navigation}: any) {
    const screenInfo = [
        {id: '1', dest: 'process', info: 'Calculate Processing Fee', iconName: 'calculate'},
        {id: '2', dest: 'stage', info: 'Calculate Stage Certificaton', iconName: 'local-drink'},
        {id: '3', dest: 'penal', info: 'Calculate Penal Fee', iconName: 'swipe-vertical'},
        {id: '4', dest: 'idc',  info: 'Calculate I.D.C', iconName: 'escalator'},
        {id: '5', dest: 'pfs', info: 'Calculate P.F.S Assessment', iconName: 'scale'},
        {id: '6', dest: 'setting', info: 'Setting', iconName: 'settings-applications'},
        {id: '7', dest: 'pixCollage', info: 'Picture Collage', iconName: 'picture-in-picture'}
    ]
    // const {width, height, fontScale, scale} = useWindowDimensions();
    const ctxHome: any = useContext(ConfigDataContext);
    const dispatchCtxHome: any = useContext(DispatchContext);
    const db = useSQLiteContext();
    
    const showScreenInfo = ({item}: any) => {
        return(
            <Pressable
                style={styles.cardStyle}
                onPress={() => {
                    item.dest != 'setting' || item.dest != 'pixCollage'? readDB() : '';
                    navigation.navigate(item.dest)
                }}
            >
                <MaterialIcons name={item.iconName} size={40} color="#305452" />
                <Text style={styles.cardTextStyle}>{item.info}</Text>
            </Pressable>
        )
    } 

     //Read db here
   const readDB = async () => {
    const dbResult = await db.getFirstAsync(`
        SELECT * FROM rates
        JOIN codes ON rates.user_id = codes.user_id
        JOIN districts ON districts.user_id = rates.user_id
        JOIN fees ON fees.user_id = rates.user_id;
    `);

    dispatchCtxHome({...ctxHome, dbResult})
    console.log('hi db from HOME', dbResult)
}
    return (
        <SafeAreaView style={styles.listStyle}>
            
            {/* <Text>Height: {height}</Text>
            <Text>Width: {width}</Text>
            <Text>Font scale: {fontScale}</Text>
            <Text>Pixel ratio: {scale}</Text> */}
            <ImageBackground 
            source={require('./../../assets/imagebg.jpeg')}
            style={styles.bgImgStyle}    
            >
                <FlatList
                    contentContainerStyle={styles1.flatlistStyle}
                    data={screenInfo}
                    renderItem={showScreenInfo}
                    // keyExtractor={({item}: any) => item.id}
                    numColumns={3}
                />
                {/* <Text>hi</Text> */}
            </ImageBackground>
        </SafeAreaView>
    )
}

const {width, height} = Dimensions.get('screen');

const styles1 = StyleSheet.create({
    flatlistStyle: {
        // alignItems: 'center',
},
})
const styles = StyleSheet.create({
    listStyle: {
        justifyContent: 'center',
        // backgroundColor: 'red',
        alignItems: 'center',
        // margin: (width / 100) * 2,
        height: height
    },
    
    cardStyle: {
        height: height / 8,
        width: width / 3.5,        
        backgroundColor: '#A3FFBA',
        margin: (height / 100) + 0.3,
        alignItems: 'center',
        borderWidth: 2,
        borderRadius: 10,
        shadowColor: '#ad474a',
        shadowOffset: {
            width: -3,
            height: 4
        },
        shadowOpacity: 0.8,
        elevation: 14,
        borderColor: '#C8C92D'
    },
    bgImgStyle: {    
        // justifyContent: 'center',
        alignContent: 'center',
        height: height,
        flexDirection: 'column',
        alignSelf: 'stretch',
        width: width * 2,
        // opacity: 0.4,
        resizeMode: 'cover',
    },
    cardTextStyle: {
        textAlign: 'center',
    }
})
