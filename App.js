import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default class App extends Component {
  render() {
    return (
      <View style={{ flex: 1 }}>
        <NavHeader />
        <View style={styles.container}>
          <Text>Ok fine you win.</Text>
          <Text>Changes you make will automatically reload.</Text>
          <Text>Shake your phone to open the developer menu.</Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#a3c9a8',
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: 0,
  },
  header: {
    backgroundColor: '#274c77',
    height: 100,
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: 1
  },
});

class NavHeader extends Component {
  render() {
    return (
      <View style={styles.header}>
        <Text>Header</Text>
      </View>
    );
  }
}