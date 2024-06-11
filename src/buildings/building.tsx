import React, { useContext, useEffect, useState } from "react";
import { SafeAreaView, 
    StyleSheet, 
    FlatList, 
    View, Text, TextInput, 
    TouchableOpacity, 
    Dimensions,
    ScrollView} from "react-native";
// import ReuseInput from "../../reuseables/input";
import DisplayInfo from "../display/display";
import FloorType from "../floors/floor";
import { AppStyles } from "../constants/styles";
import AppButton from "../buttons/appBtn";
import { ConfigDataContext, DispatchContext } from "../warehouse/configContext";
import { addUp, calculate, multiplyNum, structureData } from "../../util/utilFxn";

export default function BuildingLevel({previewEditableInput, params}: any) {
    const [datum, buildDatum] = useState([{type: 'G/F', id: '1', totResult: 0}]);
    //test for build array
    const [buildLevelData, setBuildLevelData] = useState(
        [
            [
                {
                    type: 'G/F', 
                    id: '1', 
                    totResult: 0
                }
            ]
        ]
    );
    
    const [floorTotArr, setFloorTotArr]: any = useState([]);
    const ctxData: any = useContext(ConfigDataContext);
    const dispatchData: any = useContext(DispatchContext);
    const [moreFloor, setMoreFloor]: any = useState([]);
    const [fulFloor, setFulFloor]: any = useState({
        length: '',
        breadth: '',
        height: '',
        rate: ctxData.selectedBuildType.rate,
        gFloorRes: ''
    });

   
    
    const getUserInputs = (storeKey: any, storeValue: number) => {  
        
        // setFulFloor({...fulFloor, [storeKey]: storeValue})

        dispatchData({...ctxData, [storeKey]: storeValue});
        let grFloorRes: any = fulFloor.gFloorRes
        grFloorRes = parseInt(fulFloor.length) * parseInt(fulFloor.height) * parseInt(fulFloor.breadth) * ctxData.selectedBuildType.rate;
        // floorDataArr.push({...fulFloor})
        // fulFloor.gFloorRes = timesValues().toString()
        
        
        // if(parseInt(fulFloor.length) > 0 && parseInt(fulFloor.height) > 0 && parseInt(fulFloor.breadth) > 0) {

            //new idea
            // setMoreFloor([...moreFloor, fulFloor])
            // ctxData.floorData = moreFloor
            // dispatchData({...ctxData, floorData: [...ctxData.floorData, fulFloor]})
            // dispatchData({...ctxData, floorData: moreFloor})
            console.log('gf', fulFloor.gFloorRes)
        // }
        // computeAssessmentData();
        console.log('ctx', ctxData);
    }

    // const getFloorData = () => {
    //     let i: any
    //     let dataFloor: any = {
    //         length: ctxData.length,
    //         breadth: ctxData.breadth,
    //         height: ctxData.height,
    //         rate: ctxData.rate,
    //         totRes: ctxData.height * ctxData.length * ctxData.breadth * ctxData.rate,
    //         floorLevel: datum[i].type
    //     }

    //     setFulFloor(dataFloor)
    // }
    
    const timesValues = () => {        
        let tot = multiplyNum(ctxData.selectedBuildType.rate)(ctxData.length)(ctxData.breadth)(ctxData.height);
        createFloorObj(tot)
        return tot
    }

    //form floor obj
    const createFloorObj = (floorTot: any) => {
        let floorObj = {
            length: null,
            breadth: null,
            height: null,
            rate: null,
            gFloorRes: null
        };
            floorObj.length = ctxData.length;
            floorObj.breadth= ctxData.breadth
            floorObj.height= ctxData.height
            floorObj.rate= ctxData.selectedBuildType.rate
            floorObj.gFloorRes= floorTot
        
       dispatchData({...ctxData, floorData: [...ctxData.floorData, {
            length: ctxData.length,
            breadth: ctxData.breadth,
            height: ctxData.height,
            rate: ctxData.selectedBuildType.rate,
            gFloorRes: floorTot
        }]});
    }

    //Add build btn
    const addBuildBtn = () => {
        setBuildLevelData([...buildLevelData, [{type: 'G/F', id: '1', totResult: 0}]]);
        console.log('add build btn', buildLevelData)
    }

    // Add floor btn
    const addFloor = () => {
        let buildingArrLength = buildLevelData.length;
        let lastItemArr;
        let floorVal = calculate()
        floorVal.multiply(ctxData, ctxData.rateKey);
        let ansVal = floorVal.answer()
        
        if (buildLevelData.length === 1) {
            // let anyDatumLength = buildLevelData[0].length;
            console.log('1st buildlength = 1')
           forAddingFloor(buildLevelData)
           setBuildLevelData([[...datum,  {
                    type: datum.length 
                        + 
                            (datum.length>1?( datum.length>2? (datum.length>3? 'TH': 'RD'): 'ND' ):'ST')
                        +'/F', 
                    id: (datum.length + 1).toString(),
                    totResult: ansVal
                } ]])
           
        } else if (buildLevelData.length > 1) {
            // let filterBuildArr = buildLevelData.filter(() => )
            // let lastArray = buildLevelData[buildLevelData.length - 1]
            // forAddingFloor(buildLevelData)
            addNewFloor(buildLevelData);
            console.log('just nows l>1')
            // setBuildLevelData([...buildLevelData, [...datum]])
        }

        console.log('addfloor');
    }
    
      
    const addNewFloor = (twoDArray: any) => {

        let new2dArray = twoDArray.map((itm1: any, i: any) => {
            
            if (i+1 >= twoDArray.length) {
                return [...itm1, {
                            type: itm1.length 
                                + 
                                    (itm1.length>1?( itm1.length>2? (itm1.length>3? 'TH': 'RD'): 'ND' ):'ST')
                                +'/F', 
                            id: (itm1.length + 1).toString(),
                            totResult: 0
                        }]
            }
            return [...itm1]
        })
        setBuildLevelData(new2dArray)
    }

    //you have to add a component btn for deleting build or floor
    const removeBuild = (idx: any) => {
        buildLevelData.filter((thg, indx) => indx !=  idx )
    }
    
    const getTotalVal = (childTotVal: any) => {
        console.log('tot', childTotVal)
        // dispatchData({...ctxData, floorTotal: [...ctxData.floorTotal, childTotVal]})
        setFulFloor({...fulFloor, gFloorRes: childTotVal})
    }

    
    const forAddingFloor = (arr: any) => {
        
            buildDatum([...arr[arr.length - 1], 
                    {
                        type: datum.length 
                            + 
                                (datum.length>1?( datum.length>2? (datum.length>3? 'TH': 'RD'): 'ND' ):'ST')
                            +'/F', 
                        id: (datum.length + 1).toString(),
                        totResult: 0
                    } 
                ]);
    }

    // const computeAssessmentData = () => {
        // let assessCost = addUp(...ctxData.floorTotal, ctxData.fencingQFee)
        // dispatchData({...ctxData, assessmentFee: assessCost});
        // console.log('touched contxt', ctxData)
        //filter the arr
        // let filteredFloorData = ctxData.floorData.filter((info: any) => (info.length * info.breadth * info.height * info.rate) === info.gFloorRes);
        
        // dispatchData({...ctxData, floorData: filteredFloorData})

        // let floorTotArray = filteredFloorData.reduce((item: any, current: any, floorIdx: any) => {
        //     // if (current === 'gFloorRes') {
        //         item[floorIdx] = current.gFloorRes
        //     // }
        //     let floorTotalArr = Object.values(item); 
        //     return Object.values(item);
        // }, {} )
        
        // // let floorTotArr = Object.values(floorTotObj);
        // setFloorTotArr(floorTotArray)
        //put in ctx
        // if(isPfs === true) {
        //     dispatchData({...ctxData, assessmentFee: addUp(...floorTotArr, ctxData.pfsQFencingQFee, ctxData.addpump, ctxData.firstQfloorQpump, ctxData.underQgroundQtank)});
        // } else {
            
        // }

        //calls
    //     calSubTotal();
    //     cal10Percent();
    //     cal5Percent();
    //     calTotal();
    // }

    //functions
    // const cal10Percent = () => {
    //     let tenPercent = ctxData.assessmentFee * 0.1     //ie 10%
    //     dispatchData({...ctxData, tenPercent: tenPercent})
    // } 
    // const cal5Percent = () => {
    //     let fivePercent = ctxData.assessmentFee * 0.05     //ie 5%
    //     dispatchData({...ctxData, fivePercent: fivePercent})
    // }
    // const calSubTotal = () => {
    //     let subTotal = addUp(ctxData.assessmentFee, ctxData.layout, ctxData.appReg);
    //     dispatchData({...ctxData, subTotal: subTotal})
    // }
    // const calTotal = () => {
    //     let total = addUp(ctxData.tenPercent, ctxData.sec, ctxData.subTotal)
    //     dispatchData({...ctxData, total: total});
    // }

    //re-render
    // useEffect(() => {
    //     computeAssessmentData();
    // }, [fulFloor])
    return (
        <>
        <SafeAreaView>
            {/* <Text>{'1ST BUILDING'}</Text>
            <ScrollView>
                {buildLevelData.map((datums, i) => {                      
                    return (
                    <View key={i+1} style={styles.buildingLevelStyle}>
                        {datums.map((datum, idx) => {
                            return (
                                <View key={idx+1} style={styles.buildingLevelStyle}>
                                    <FloorType 
                                        floorPosition={datum.type}
                                        style={styles.floorStyle}
                                        totResult={datum.totResult}
                                        previewEditableInput={previewEditableInput}
                                        {...{ getUserInputs}}
                                    />
                                </View>
                            )
                        })}
                    
                </View>
                )})}  
            </ScrollView> */}
            <ScrollView>
                {buildLevelData.map((datums, i) => {  
                    // if(i)                    
                    return (
                    <View key={i+1} 
                        // style={styles.buildingLevelStyle}
                    >
                        <Text>{' '}</Text>
                        <View style={styles.buildingNumberStyle}>
                            <View>
                                <Text>
                                    {  i+1 
                                        +
                                        (i+1>1?
                                            ( i+1>2? 
                                                (i+1>3? 
                                                    'TH': 'RD'
                                                ): 'ND' 
                                            ):'ST'
                                        ) 
                                        +' '
                                        + 'BUILDING'
                                    }
                                </Text>
                            </View>
                            {/* put thgs here */}
                        </View>
                        {datums.map((datum, idx) => {
                            return (
                                <View key={idx+1} style={styles.buildingLevelStyle}>
                                    <FloorType 
                                        floorPosition={datum.type}
                                        style={styles.floorStyle}
                                        // totResult={datum.totResult}
                                        previewEditableInput={previewEditableInput}
                                        {...{ getUserInputs, timesValues, getTotalVal, floorTotArr}}
                                    />
                                </View>
                            )
                        })}
                    
                </View>
                )})} 

            </ScrollView>
            <View style={styles.addFloorAndBuildingStyle}>
                <AppButton 
                    addFloorAndBuildingBtnStyle={styles.addFloorAndBuildingBtnStyle}
                    title='ADD FLOOR'
                    onGoto={addFloor}
                />
                <AppButton 
                    addFloorAndBuildingBtnStyle={styles.addFloorAndBuildingBtnStyle}
                    title='ADD BUILDING'
                    onGoto={addBuildBtn}
                />
            </View>
        </SafeAreaView>
        </>
    )
}

const { width, height } = Dimensions.get('screen');


const styles = StyleSheet.create({
    addFloorAndBuildingStyle: {
        flexDirection: 'row',
    },

    addFloorAndBuildingBtnStyle: {
        // width: width / 4,
        // height: height / 30,
        width: AppStyles.smallBtnWidth,
        height: AppStyles.smallBtntnHeight,
    },
    buildingNumberStyle: {
        width: width - 20,
        // height: height / 8,
        borderWidth: 3,
        borderColor: AppStyles.buildingOutlineColor,
        borderStyle: 'solid',
        borderRadius: 10,
        alignSelf: 'center',
    },
    buildingLevelStyle: {
        // backgroundColor: 'green',
        width: width - 20,
        height: height / 12,
        borderWidth: 3,
        borderColor: AppStyles.buildingOutlineColor,
        borderStyle: 'solid',
        borderRadius: 10,
        alignSelf: 'center',
    
    },
    floorStyle: {

    }
})