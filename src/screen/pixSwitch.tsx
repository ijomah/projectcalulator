import * as React from 'react';
import { 
    View, 
    StyleSheet, 
    Button, 
    Platform, Text, 
    SafeAreaView 
} from 'react-native';

import * as ImagePicker from 'expo-image-picker';
import * as Print from 'expo-print';
import { shareAsync } from 'expo-sharing';
// import { useState } from 'react';

//What i wanted
// Create an html code that has 3 img tag
// Use css to dynamically change the display orientation
// A btn is fine for supplying such data for changing it with css
// I will need expo file system in order to save things in the
//phone file system

// import gateofbuilding from './../../assets/gateofbuilding.jpg'
const img1 = require('./../../assets/gateofbuilding.jpg')
//  './../assets/gateofbuilding.jpg';
// import onebuilding from './../../assets/onebuilding.jpg'
const img2 = require('./../../assets/onebuilding.jpg');
// "'./../assets/onebuilding.jpg'";
const img3 = require('./../../assets/twobuilding.jpg')
// "'./../assets/twobuilding.jpg'";
const imgHeading = 'Building Pictures'



export default function PixCollageSwitch() {
  const [selectedPrinter, setSelectedPrinter] = React.useState();
  const [image, setImage]: any = React.useState([]);

  const html = `
  <html>
    <head>
      <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0, user-scalable=no" />
    </head>
    <body style="text-align: center;">
      <h1 style="font-size: 50px; font-family: Helvetica Neue; font-weight: normal;">
        ${imgHeading}
      </h1>
      <div id="img-case">
          <img
              src="${image[1]}"
              style="width: 40vw;" 
          />
          <img
              src="${image[2]}"
              style="width: 40vw;" 
          />
          <img
              src="${image[2]}"
              style="width: 40vw;" 
          />
      </div>
    </body>
  </html>
  `;

  const pickImage = async () => {
    // No permissions request is necessary for launching the image library
    let {assets, canceled} = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    console.log('asse', assets);

    if (!canceled) {
      assets?.forEach(({uri})=> {
        return setImage([...image, uri])
      })
      // return setImage(assets[0].uri);
    }
  };

  const print = async () => {
    // On iOS/android prints the given html. On web prints the HTML from the current page.
    await Print.printAsync({
      html,
    //   printerUrl: selectedPrinter?.url, // iOS only
    });
  };

  const printToFile = async () => {
    // On iOS/android prints the given html. On web prints the HTML from the current page.
    console.log(html)
    const { uri } = await Print.printToFileAsync({ html });
    console.log('File has been saved to:', uri);
    await shareAsync(uri, { UTI: '.pdf', mimeType: 'application/pdf' });
  };

//   const selectPrinter = async () => {
//     const printer = await Print.selectPrinterAsync(); // iOS only
//     setSelectedPrinter(printer);
//   };

  return (
    <View style={styles.container}>
      <Button title="Print" onPress={print} />
      <View style={styles.spacer} />
      <Button title="Share as PDF file" onPress={printToFile} />
      <View style={styles.spacer} />
      <Button title='Pick Image' onPress={pickImage} />
      {Platform.OS === 'ios' && (
        <>
          <View style={styles.spacer} />
          <Button 
            title="Select printer" 
            // onPress={selectPrinter} 
            />
          <View style={styles.spacer} />
          {selectedPrinter ? (
            <Text style={styles.printer}>{`Selected printer: ${selectedPrinter}`}</Text>
          ) : undefined}
        </>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#ecf0f1',
    flexDirection: 'column',
    padding: 8,
  },
  spacer: {
    height: 8,
  },
  printer: {
    textAlign: 'center',
  },
});
