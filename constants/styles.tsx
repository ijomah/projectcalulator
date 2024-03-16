import { Dimensions } from "react-native"
const {width, height} =Dimensions.get('screen');
export const AppStyles = {
    inputHeight: '',
    bigInputWidth: '',
    smallInputWidth: width / 4.5,
    inputOutlineColor: '#C8C92D', //light lilac
    inputBorderStyle: 'solid',

    // btnColor: '#A3FFBA',
    smallBtntnHeight: height / 30,
    smallBtnWidth: width / 3.5,
    bigBtnWidth: width / 4,
    bigBtnHeight: '',
    btnTextColor: '#A3FFBA', //light green

    calTypeTextColor: '#faa11f', // orange
    calTypeOutlineColor: '#139b48', //slight dark green

    txtColor: '#293189', //blue
    txtFont: '',
    txtFamily: '',
    txtFontWeight: '',
    txtFontSize: '',

    //Building container outline
    buildingOutlineColor: '#991b1e', // Dark red
    totalBoxOutlineColor: '#991b1e',

}