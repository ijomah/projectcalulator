import * as React from 'react';
import { 
    View, 
    StyleSheet, 
    Button, 
    Platform, Text, 
    SafeAreaView 
} from 'react-native';

import * as Print from 'expo-print';
import { shareAsync } from 'expo-sharing';

//What i wanted
// Create an html code that has 3 img tag
// Use css to dynamically change the display orientation
// A btn is fine for supplying such data for changing it with css
// I will need expo file system in order to save things in the
//phone file system


const html = `
<html>
  <head>
    <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0, user-scalable=no" />
  </head>
  <body style="text-align: center;">
    <h1 style="font-size: 50px; font-family: Helvetica Neue; font-weight: normal;">
      Hello Expo!
    </h1>
    <div id="img-case">
        <img
            src="./../assets/gateofbuilding.jpg"
            style="width: 90vw;" 
        />
        <img
            src="./../assets/onebuilding.jpg"
            style="width: 90vw;" 
        />
        <img
            src="./../assets/twobuilding.jpg"
            style="width: 90vw;" 
        />
    </div>
  </body>
</html>
`;

export default function PixCollageSwitch() {
  const [selectedPrinter, setSelectedPrinter] = React.useState();

  const print = async () => {
    // On iOS/android prints the given html. On web prints the HTML from the current page.
    await Print.printAsync({
      html,
    //   printerUrl: selectedPrinter?.url, // iOS only
    });
  };

  const printToFile = async () => {
    // On iOS/android prints the given html. On web prints the HTML from the current page.
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
      <Button title="Print to PDF file" onPress={printToFile} />
      {Platform.OS === 'ios' && (
        <>
          <View style={styles.spacer} />
          <Button 
            title="Select printer" 
            // onPress={selectPrinter} 
            />
          <View style={styles.spacer} />
          {selectedPrinter ? (
            <Text style={styles.printer}>{`Selected printer: ${selectedPrinter.name}`}</Text>
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
