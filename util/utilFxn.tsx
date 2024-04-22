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