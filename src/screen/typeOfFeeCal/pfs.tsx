import React, { useContext, useEffect, useState } from "react";
import { 
    SafeAreaView, 
    StyleSheet, 
    FlatList, 
    View, Text, TextInput, 
    TouchableOpacity, 
    useWindowDimensions,
    Dimensions,
    ScrollView
} from "react-native";


import CalcuationTypes from "../calType";
import ApplicantDet from "../../bio/applicantDet";
import BuildingLevel from "../../buildings/building";
import ScreenHeadings from "../../headings/Heading";
// import ManageApplicantDetails from "../../bio/manageApplicantDet";
import { ConfigDataContext, DispatchContext } from "../../warehouse/configContext";
import { calculate, multiplyNum } from "../../../util/utilFxn";

export default function Pfs({navigation, params}: any) {
    // const ctxData: any = useContext(ConfigDataContext);
    // const dispatchCtxData: any = useContext(DispatchContext);

    // const devDimension = useWindowDimensions();

    const ctxData: any = useContext(ConfigDataContext);
    const dispatchCtxData: any = useContext(DispatchContext)
    const [fenceFee, setfenceFee]: any = useState({fencingQFee: '',
        firstQfloorQpump: '',
        addQpump: '',
        underQgroundQtank: '',
        pfsQFencingQFee: ''
    });
    const devDimension = useWindowDimensions();

    //From build level comp
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
    // const ctxData: any = useContext(ConfigDataContext);
    // const dispatchData: any = useContext(DispatchContext);
    const [moreFloor, setMoreFloor]: any = useState([]);
    const [fulFloor, setFulFloor]: any = useState({
        length: '',
        breadth: '',
        height: '',
        rate: ctxData.selectedBuildType.rate,
        gFloorRes: ''
    });

    //From calType Comp 
    const [assess,  setAssess] = useState(0)
    const [subtot, setSubTot] = useState(0)
    const [tenPercentage, setTenPercent] = useState(0)
    const [fivePercentage, setFivePercent] = useState(0);
    const [procFee, setProcessFee] = useState(0);

    //For pfs input
    const [floorPump, setFloorPump] = useState('');
    const [addPump, setAddPump] = useState('');
    const [tank, setTank] = useState('');
    const [pfsFence, setPfsFence] = useState('');

    //Floor total
    const [floorAddition, setFloorAddition ] = useState(0);

    const getUserDatum = (fenceKey: any, fenceVal: any) => {
        // console.log('pfee', addUp(...[1, 2, 10], 2, 3))
        // console.log('outer', this)
        fenceKey === 'addQpump' && setAddPump(fenceVal);
        fenceKey === 'firstQfloorQpump' && setFloorPump(fenceVal);
        fenceKey === 'underQgroundQtank' && setTank(fenceVal);
        

        if(fenceKey !== 'fencingQFee' || fenceKey === 'pfsQFencingQFee') {
            // console.log('pfee2', fenceKey, fenceVal)
            
            if (fenceKey === 'pfsQFencingQFee') {
                if (fenceVal > 650) {
                        // console.log('pfee3', fenceVal)
                       let fencingFee: any = ((fenceVal - 650) * 10) + 20000;
                        setfenceFee({...fenceFee, [fenceKey]: ((fenceVal - 650) * 10) + 20000})
                        dispatchCtxData({...ctxData, [fenceKey]: ((fenceVal - 650) * 10) + 20000 });
                        setPfsFence(fencingFee);
                        computeAssessmentData()
                    } else if(fenceVal <= 650) {
                        // let fenceFee = fenceVal;
                        console.log('pfee4', fenceVal)
                        setfenceFee({...fenceFee, [fenceKey]: fenceVal})
                        dispatchCtxData({...ctxData, [fenceKey]: fenceVal});  
                        setPfsFence(fenceVal);
                        computeAssessmentData()
                    }
            }

            if(fenceKey != 'pfsQFencingQFee') {
                // if (fenceVal > 650) {
                    //     console.log('pfee3', fenceFee)
                    //    let fencingFee = ((fenceVal - 650) * 10) + 20000;
                    //     setfenceFee({...fenceFee, [fenceKey]: ((fenceVal - 650) * 10) + 20000})
                    //     dispatchCtxData({...ctxData, [fenceKey]: fenceVal});
                    //     computeAssessmentData(fencingFee)
                    // } else if(fenceVal <= 650) {
                        console.log('pfee 8', fenceFee);
                        // let fenceFee = fenceVal;
                        setfenceFee({...fenceFee, [fenceKey]: fenceVal})
                        dispatchCtxData({...ctxData, [fenceKey]: fenceVal});
                        computeAssessmentData()  
                    // }
            }
            
            
        }

        // let fencingFee = ((fenceVal - 650) * 10) + 20000;
    //                     setfenceFee({...fenceFee, [fenceKey]: ((fenceVal - 650) * 10) + 20000})
    //                     dispatchCtxData({...ctxData, [fenceKey]: ((fenceVal - 650) * 10) + 20000 });
    //                     // computeAssessmentData(fencingFee)
    //                     console.log('pfsfeeData', fenceKey, fenceFee )
    }

    const doAssessment = parseInt(pfsFence)
    + parseInt(addPump)
    + parseInt(floorPump)
    + parseInt(tank);
    

     //From build level comp
    const getUserInputs = (storeKey: any, storeValue: number) => {  
        
        // setFulFloor({...fulFloor, [storeKey]: storeValue})

        dispatchCtxData({...ctxData, [storeKey]: storeValue});
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
        
       dispatchCtxData({...ctxData, floorData: [...ctxData.floorData, {
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


    //From calType Comp 
    
    //get the floor data arr
    //filter the array to the correct arithmetical ones
    //take the floor total of each floor
    //cal your assessment then

    const computeAssessmentData = () => {
        let assessCost;
        if (ctxData.floorTotal.length === 0) {
            assessCost = floorAddition + doAssessment
            return
        } 
                
            let reduceResAddition = ctxData.floorTotal.reduce((a: any, b: any) => a + b);
            setFloorAddition(parseInt(reduceResAddition))
            assessCost = floorAddition + doAssessment
                            // + parseInt(assessVal)
                            // + parseInt(addPump)
                            // + parseInt(floorPump)
                            // + parseInt(tank)
            setAssess(assessCost)
            console.log('touched contxt in-if-block', ctxData, assessCost)
            dispatchCtxData({...ctxData, assessmentFee: assessCost});
        
        //     if(typeof(assessVal) === "object") {
        //     let reduceResAddition = ctxData.floorTotal.reduce((a: any, b: any) => a + b);
        //     let assessCost = reduceResAddition 
        //         + parseInt(assessVal.pfsQFencingQFee)
        //         + parseInt(assessVal.firstQfloorQpump)
        //         + parseInt(assessVal.addQpump)
        //         + parseInt(assessVal.underQgroundQtank);
        //     setAssess(parseInt(assessCost))
        //     console.log('object in-if-block', ctxData, assessCost)
        //     dispatchCtxData({...ctxData, assessmentFee: assessCost});
        // }
        

        // let assessCost = reduceResAddition + parseInt(fenceFee.fencingQFee)
        

        // addUp(...ctxData.floorTotal, parseInt(fenceFee.fencingQFee)) || addUp(...ctxData.floorTotal, ctxData.fencingQFee)
        

        // if(isPfs === true) {
        //     assessCost= addUp(...ctxData.floorTotal, ctxData.pfsQFencingQFee, ctxData.addpump, ctxData.firstQfloorQpump, ctxData.underQgroundQtank)
        //     setAssess(parseInt(assessCost))
        // }
        
        
        
        // console.log('touched contxt2', ctxData, assess)

        //calls
        
        let subTotal = assessCost + parseInt(ctxData.layoutQFee) + parseInt(ctxData.appQRegQFee)
        // addUp(parseInt(assessVal), parseInt(ctxData.layoutQFee), parseInt(ctxData.appQRegQFee));
        cal10Percent();
        let tenPercent = (assessCost * 10) / 100     //ie 10%
        cal5Percent();
        let fivePercent = (assessCost * 5) / 100     //ie 5%        
        
        setSubTot(subTotal);
        setTenPercent(tenPercent);
        setFivePercent(fivePercent);
    
        computeProcessingFee(assessCost)

    }

    const computeProcessingFee = (assessmentVal: number) => {

        if (ctxData.selectedBuildType.buildType !== 'residential') {        
            let totalForProcessingFee = assessmentVal + parseInt(ctxData.layoutQFee) + parseInt(ctxData.appQRegQFee) +
                (assessmentVal * 10) / 100 +
                (assessmentVal * 5) / 100 +
                assessmentVal;
            
            setProcessFee(totalForProcessingFee);
        } 
        
        if(ctxData.selectedBuildType.buildType === 'residential') {
            let totalForProcessingFee = assessmentVal + parseInt(ctxData.layoutQFee) + parseInt(ctxData.appQRegQFee) +
                (assessmentVal * 10) / 100 +
                assessmentVal;

            setProcessFee(totalForProcessingFee);
        }
    }
        //put in ctx
            // if(isPfs === true) {
            //     dispatchCtxData({...ctxData, assessmentFee: addUp(...ctxData.floorTotal, ctxData.pfsQFencingQFee, ctxData.addpump, ctxData.firstQfloorQpump, ctxData.underQgroundQtank)});
            // } else {
            //     dispatchCtxData({...ctxData, assessmentFee: addUp(...ctxData.floorTotal, ctxData.fencingQFee)});
            // }

        //calls
    //     calSubTotal();
    //     cal10Percent();
    //     cal5Percent();
    //     calTotal();
    // }

    // const workoutPfs = () => {

    // }
    
    // let structTotal
    //
    //functions
    const cal10Percent = () => {
        // let tenPercent = ctxData.assessmentFee * 0.1     //ie 10%
        let tenPercent = assess * 0.1     //ie 10%
        dispatchCtxData({...ctxData, tenPercent: tenPercent})
    } 
    const cal5Percent = () => {
        // let fivePercent = ctxData.assessmentFee * 0.05     //ie 5%
        let fivePercent = assess * 0.05     //ie 5%
        dispatchCtxData({...ctxData, fivePercent: fivePercent})
    }
    

    //From ManageApplicant details
    const [counting, setCounting] = useState(0);
    
    const gatherDet = (applikey: any, applivalue: any) => {
        const appliDet = {[applikey]: applivalue};
        // const bioDataArr = structureData(appliDet);
        structureData(appliDet);
        // dispatchCtxData({...ctxData, bioData: bioDataArr})
        console.log('bioMsg', ctxData)
        
    }

    const structureData = (bioVal: any) => {
        //loop the object
        //create a new obj based on the no. of key/value pairs
        // the new obj should have an id
        //the keys will be turn to values
        // this fxn will return an array
    
        //then finally attach the array to the context obj @
        // the component where it is called
    
        //use a for in loop
        //get the keys and values
        // formulate the obj the components needs
        // let newObjArr = [];
        setCounting(counting + 1)
        //  ++counter;
        for (var objDatumKey in bioVal) {
            
            // locate the upperCase in the string
            //shift the text at that point
            let properData = objDatumKey.split('Q').join(' ').toLocaleUpperCase();
            dispatchCtxData({...ctxData, bioData:[...ctxData.bioData, {ownerKey: properData, id: counting, ownerData: bioVal[objDatumKey]}]})
            // return newObjArr;
        }
    }
    useEffect( () => computeAssessmentData(), [addPump, floorPump, tank, pfsFence, assess, floorAddition] )
    return (
        <ScrollView style={styles.processCase}>
        <ScreenHeadings 
            title='APPLICATION DETAILS'
        />
        {/* <ManageApplicantDetails /> */}
        <ApplicantDet 
            {...{gatherDet}}
        />
        <BuildingLevel {...{params,getUserInputs,
            addBuildBtn,
            timesValues, 
            getTotalVal, 
            floorTotArr,
            addFloor,
            buildLevelData}} 
        />
        <CalcuationTypes 
            navigation={navigation}
            {...{computeAssessmentData,
                assess,
                tenPercentage,
                fivePercentage,
                procFee,
                subtot,
                getUserDatum,
                fenceFee
            }} 
            isPfs={true}
        />    
    </ScrollView>
    )
}

const screenSize = Dimensions.get("screen");

const styles = StyleSheet.create({
    processCase: {
        margin: 10
        // backgroundColor: 'yellow',
        // height: screenSize.height - 150, //use dim api or windowdim hook
        // alignItems: 'center',
        // justifyContent: 'center',
    },
})