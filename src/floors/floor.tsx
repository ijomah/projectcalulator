import React, { useContext, useState } from "react";
import { 
    SafeAreaView, 
    StyleSheet, 
    FlatList, 
    View, Text, TextInput, 
    TouchableOpacity, 
    useWindowDimensions,
    Dimensions} from "react-native";
import { customDisplayStyle } from "../constants/styles";
import DisplayInfo from "../display/display";
import ReuseInput from "../reuseables/input";
import { ConfigDataContext, DispatchContext } from "../warehouse/configContext";
import AppButton from "../buttons/appBtn";

export default function FloorType(this: any, 
    {
        floorPosition, 
        previewEditableInput, 
        getUserInputs,
        createFloorObj,
        structureData,
        calResult,
        totResult,
        timesValues,
        getTotalVal
    }: any) {
    const devHeight = useWindowDimensions().height;
        const floorCtxVal: any = useContext(ConfigDataContext);
        const dispatchFloorCtx: any = useContext(DispatchContext);
        const [totalValue, setTotalValue] = useState(0)
    //cal case
    //getUserInputs = null

    return (
        <SafeAreaView style={styles.floorStyle}>
            {/* <DisplayInfo
                info='G/F:'
                // info="Ground Floor"  // to put icon
            /> */}
            <Text>{floorPosition}</Text>
            <View style={styles.dimContainerStyle}>
                <View style={styles.lengthStyle}>
                    <ReuseInput 
                        floorTxtInputStyle={styles.TxtInputStyle}
                        inputConfig={{
                            placeholder: 'Length',
                            editable: previewEditableInput,
                            inputMode: 'numeric',
                            textAlign: 'center',
                            onChangeText: getUserInputs.bind(this, 'length') 
                        }}
                    />
                    <Text>x</Text>
                    <ReuseInput 
                        floorTxtInputStyle={styles.TxtInputStyle}
                        inputConfig={{
                            placeholder: 'Breadth',
                            editable: previewEditableInput,
                            inputMode: 'numeric',
                            textAlign: 'center',
                            onChangeText: getUserInputs.bind(this, 'breadth') 
                        }}
                    />
                </View>
                <View style={styles.lengthStyle}>
                    <ReuseInput 
                        floorTxtInputStyle={styles.TxtInputStyle}
                        inputConfig={{
                            placeholder: 'Height',
                            editable: previewEditableInput,
                            inputMode: 'numeric',
                            textAlign: 'center',
                            onChangeText: getUserInputs.bind(this, 'height') 
                        }}
                    />
                    <Text>x</Text>
                    <ReuseInput 
                        floorTxtInputStyle={styles.TxtInputStyle}
                        inputConfig={{
                            placeholder: 'Rate',
                            editable: false,
                            inputMode: 'numeric',
                            textAlign: 'center',
                            value: floorCtxVal.selectedBuildType.rate
                            // onChangeText: getUserInputs.bind(this, 'rate') 
                        }}
                    />
                </View>
            </View>
            <Text>=</Text>
            {/* <ReuseInput 
                        floorTxtInputStyle={styles.TxtInputStyle}
                        inputConfig={{
                            placeholder: 'Tap here',
                            editable: false,
                            inputMode: 'tel',
                            // disabled: true,
                            value: totalValue,
                            onPressOut: () => {
                                console.log('press')
                                setTotalValue(timesValues())
                            } 
                        }}
                    /> */}

                    {/* Floor multiplication btn */}
                    <AppButton
                        title={totalValue}
                        onGoto={
                            () => {
                                getTotalVal(timesValues())
                                setTotalValue(timesValues())
                                // structureData()
                                dispatchFloorCtx({...floorCtxVal, 
                                    bioData: [...floorCtxVal.bioData, {
                                        locationQofQdevelopment: floorCtxVal.locationQofQdevelopment,
                                        applicantQname: floorCtxVal.applicantQname,
                                        applicantQaddress: floorCtxVal.applicantQaddress,
                                        telephoneQno: floorCtxVal.telephoneQno,
                                        fileQnumber: floorCtxVal.fileQnumber}],
                                    floorData: [...floorCtxVal.floorData, createFloorObj(timesValues())],
                                    floorTotal: [...floorCtxVal.floorTotal, timesValues()]})
                                
                            } 
                        }
                    />
            {/* <DisplayInfo
                // floorDisplayStyle={styles.floorDisplayInfoStyle}
                floorDisplayStyle={customDisplayStyle}
                // info={floorCtxVal.floorRes}
                info={totalValue}
                onPress={ () => {
                                console.log('press')
                                setTotalValue(timesValues())
                            } 
                        }
            /> */}
        </SafeAreaView>
    )
}

const { width, height } = Dimensions.get('screen');

const styles = StyleSheet.create({
    
    // floorDisplayInfoStyle: {
    //     height: 26.88,
    //     borderWidth: 3,
    //     borderColor: AppStyles.inputOutlineColor,
    //     borderStyle: 'solid',
    //     borderRadius: 7,
    //     paddingLeft: 3,
    //     paddingRight: 3,
    // },
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