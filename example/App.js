import React from 'react';
import { StyleSheet, View } from 'react-native';
import PdfReader from 'rn-pdf-reader-js';
import { Constants } from 'expo';

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <PdfReader source={{
          uri: "https://nbrosowsky.github.io/documents/QALMRI-example.pdf"
        }}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#ecf0f1',
  },
});