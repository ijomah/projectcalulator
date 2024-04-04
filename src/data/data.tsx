export const screeninfos = [
    {id: '1', type: 'process', building: 'Residential',  info: 'Calculate Processing Fee', colors: '#f8d731'},
    {id: '2', type: 'stage', building: 'Commercial', info: 'Calculate Stage Certificaton', colors: '#0000ff'},
    {id: '3', type: 'penal', building: 'Institutional', info: 'Calculate Penal Fee', colors: '#ff0000'},
    {id: '4', type: 'idc', building: 'Mixed Use',  info: 'Calculate I.D.C', colors: '#727430'},
    {id: '5', type: 'pfs', building: 'Agricultural', info: 'Calculate P.F.S Assessment', colors: '#136734'},
    {id: '6', type: 'setting', building: 'Recreational', info: 'Setting', colors: '#00ff00'},
    // {id: '7', type: 'pixCollage', building: null, info: 'Picture Collage'}
]

export const feeData = [
    {feeType:'ASSESSMENT', id: '1'},
    {feeType:'PROCESSING', id: '2'}
];
export const percentData = [
    {label: '5%', value: '1'}, 
    {label: '10%', value: '2'}, 
    {label: '15%', value: '3'}, 
    {label: '20%', value: '4'},
    {label: '25%', value:'5'},
    {label: '30%', value: '6'},
    {label: '35%', value: '7'},
    {label: '40%', value: '8'},
    {label: '45%', value: '9'},
    {label: '50%', value: '10'},
    {label: '55%', value: '11'},
    {label: '60%', value: '12'},
    {label: '65%', value: '13'},
    {label: '70%', value: '14'},
    {label: '80%', value: '15'},
    {label: '85%', value: '16'},
    {label: '90%', value: '17'},
    {label: '95%', value: '18'},
    {label: '100%', value: '19'}
]

//filter the Array

// let rangeNum = (min: number, max: number) => Array.from({length: max-min+1}, (_, i)=> {
//     if((min + i)%5 === 0 ) return {value: (min + i)+'%', label: `${i +1}`}
// })
// let numPercent = rangeNum(6, 100)
// export const percentData = numPercent.filter((datum) => datum != undefined)

export const districtOffices = [
    {id: '1', district: 'Eti-Osa West'},
    {id: '2', district: 'Eti-Osa East'},
    {id: '3', district: 'Ajah'},
    {id: '4', district: 'Ikota'},
    {id: '5', district: 'Amuwo-Odofin'},
    {id: '6', district: 'Isolo'},
    {id: '7', district: 'Oshodi'},
    {id: '8', district: 'Ejigbo'},
    {id: '9', district: 'Ojo'},
    {id: '10', district: 'Iba-Otto-Awori'},
    {id: '11', district: 'Olorunda'},
    {id: '12', district: 'Badagry'},
    {id: '13', district: 'Agboyi-Ketu'},
    {id: '14', district: 'Ikeja'},
    {id: '15', district: 'Ojodu'},
    {id: '16', district: 'Ibeju-Lekki West'},
    {id: '17', district: 'Ibeju-Lekki East'},
    {id: '18', district: 'Lekki 1'},
    {id: '19', district: 'Victoria Island'},
    {id: '20', district: 'Ikoyi'},
    {id: '20', district: 'Ikoyi'},
    {id: '21', district: 'Lagos island'},
    {id: '22', district: 'Mushin'},
    {id: '23', district: 'Surulere'},
    {id: '24', district: 'Coker Agunda'},
    {id: '25', district: 'Shomolu'},
    {id: '26', district: 'Mainland'},
    {id: '27', district: 'Kosofe'},
    {id: '28', district: 'Apapa'},
    {id: '29', district: 'Ajeromi'},
    {id: '30', district: 'Ori-Ade'},
    {id: '31', district: 'Igando-Ikotun'},
    {id: '32', district: 'Ayobo-Ipaja'},
    {id: '33', district: 'Alimosho'},
    {id: '34', district: 'Agbado-Oke Odo'},
    {id: '35', district: 'Egbe-Idimu'},
    {id: '36', district: 'Mosan'},
    {id: '37', district: 'Ifako-Ijaiye'},
    {id: '38', district: 'Agege'},
    {id: '39', district: 'Ojokoro'},
    {id: '40', district: 'Ikorodu Central'},
    {id: '41', district: 'Ikorodu West'},
    {id: '42', district: 'ljede'},
    {id: '43', district: 'Igbogbo Baiyeku'},
    {id: '44', district: 'Ikorodu North'},
    {id: '45', district: 'Imota'},
    {id: '46', district: 'Lekki 2'},
    {id: '47', district: 'Epe'},
    {id: '48', district: 'Eredo'},
    {id: '49', district: 'E-pp Headquarters'}
]

