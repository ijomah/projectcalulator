import {Asset} from 'expo-asset';
import {manipulateAsync} from 'expo-image-manipulator';

export const persistData = () => {
    //save to secure store
}

export const savePageData = (pageKey: string, value: object)  => {
    
}

// TO GET ASSET FROM DEVICE MEMORY
const copyFromAssets = async (asset: any) => {
  try {
    const [{localUri}] = await Asset.loadAsync(asset);
    return localUri;
  } catch (error) {
    console.log(error);
  }
};
// CONVERT LocalUri to base64
const processLocalImage = async (imageUri: any) => {
  try {
    const uriParts = imageUri.split('.');
    const formatPart = uriParts[uriParts.length - 1];
    let format: any;

    if (formatPart.includes('png')) {
      format = 'png';
    } else if (formatPart.includes('jpg') || formatPart.includes('jpeg')) {
      format = 'jpeg';
    }

    const {base64} = await manipulateAsync(imageUri, [], {
      format: format || 'png',
      base64: true,
    });

    return `data:image/${format};base64,${base64}`;
  } catch (error) {
    console.log(error);
    throw error;
  }
};
// const htmlContent = async () => {
//   try {

//     const asset = require('./src/assets/logo.png');
//     let src = await copyFromAssets(asset);
//     src = await processLocalImage(src);

export const structureData = (val: any) => {
    //loop  the object
    //create a new obj based on the no. of key/value pairs
    // the new obj should have an id
    //the keys will be turn to values
    // this fxn will return an array

    //then finally attach the array to the context obj @
    // the component where it is called

    //use a for in loop
    //get the keys and values
    // formulate the obj the components needs
    let newObjArr = [];
    let counter = 0;
    for (var objDatumKey in val) {
        ++counter;
        // locate the upperCase in the string
        //shift the text at that point
        let properData = objDatumKey.split('Q').join(' ').toLocaleUpperCase();
        newObjArr.push({ownerKey: properData, id: counter, ownerData: val[objDatumKey]})
        return newObjArr;
    }
}

export function calculate() {
  var resData = 0;
  return {
    answer: () => {
      return resData;
    },

    multiply: (datum: any, rateType: any) => {
      //use switch statement here
      const times = Number(datum.length) * Number(datum.breadth) * Number(datum.height)
      resData = times * Number(datum[rateType]); 
      // switch (rateType) {
      //   case 'residential':
      //     res = times * datum[rateType];    
      //     break;
      //   case 'commercial':
      //     res = times * datum[rateType];
      //     break;
      //   case 'institutional':
      //     res = times * datum[rateType];
      //     break;
      //   case 'mixedUse':
      //     res = times * datum[rateType];
      //     break;
      //   case 'agricultural':
      //     res = times * datum[rateType];
      //     break;
      //   case 'recreational':
      //     res = times * datum[rateType];
      //     break;
      //   default:
      //     res = times * datum[rateType];
      // }
      
      
    },

    addTwo: (val: any) => {
      // for (let i=0; i<val.length; i++)
        
        
        
        // if (val.length === 2) {
        //   res = val[0] + val[1]; 
        // } else if (val.length === 3) {
        //   res = val[0] + val[1] + val[2]; 
        // } else if (val.legth === 4) {
        //   res = val[0] + val[1] + val[2] + val[3]; 
        // } else if (val.length === 5) {
        //   res = val[0] + val[1] + val[2] + val[3] + val[4]; 
        // } else if (val.length === 6) {
        //   res = val[0] + val[1] + val[2] + val[3] + val[4] + val[5]; 
        // } else if(val.length === 7) {
        //   res = val[0] + val[1] + val[2] + val[3] + val[4] + val[5] + val[6]; 
        // }
      
    }
  }
}

export function multiplyNum(stateRate: any) {
  return function (val1: any) {
    return function (val2: any) {
      return function (val3: any) {
        return val1 * val2 * val3 * stateRate;
      }
    }
  }
}

export function addUp(...addee: any) {
  return addee.reduce((a: any, b: any) => a + b)
}

const calPercent = () => {}