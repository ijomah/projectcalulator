export const screeninfos = [
    {id: '1', type: 'process', building: 'Residential',  info: 'Calculate Processing Fee'},
    {id: '2', type: 'stage', building: 'Commercial', info: 'Calculate Stage Certificaton'},
    {id: '3', type: 'penal', building: 'institutional', info: 'Calculate Penal Fee'},
    {id: '4', type: 'idc', building: 'Mised Use',  info: 'Calculate I.D.C'},
    {id: '5', type: 'pfs', building: 'Agricultural', info: 'Calculate P.F.S Assessment'},
    {id: '6', type: 'setting', building: 'Recreational', info: 'Setting'},
    // {id: '7', type: 'pixCollage', building: null, info: 'Picture Collage'}
]

export const feeData = [
    {feeType:'ASSESSMENT', id: '1'},
    {feeType:'PROCESSING', id: '2'}
];
// export const percentData = [
//     '5%', '10%', '15%', '20%', '25%', '30%',
//     '35%', '40%', '45%', '50%', '55%', '60%',
//     '65%', '70%', '80%', '85%', '90%', '95%',
//     '100%'
// ]

//filter the Array

let rangeNum = (min: number, max: number) => Array.from({length: max-min+1}, (_, i)=> {
    if((min + i)%5 === 0 ) return {value: (min + i)+'%', label: `${i +1}`}
})
let numPercent = rangeNum(5, 100)
export const percentData = numPercent.filter((datum) => datum != undefined)

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

