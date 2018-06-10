import React from 'react';
import { Alert, AppRegistry, Button, StyleSheet, View, TouchableOpacity, Text } from 'react-native';

export default class App extends React.Component {
  _onPressButton() {
      Alert.alert('You tapped the button!')
    }

  render() {
    return (
        <View style={styles.container}>
        <View>
          <Text style={styles.title}>Bubblers</Text>
        </View>
        <View>
          <TouchableOpacity
             style={styles.button}
             onPress={this._onPressButton}
           >
             <Text style={styles.buttonText}> Begin > </Text>
           </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
   flex: 1,
   justifyContent: 'center',
   backgroundColor: '#2c9c91',
  },
  title: {
    fontSize: 80,
    color: 'lightblue',
    textAlign: 'center',
    marginBottom: 400,
  },
  button: {
    backgroundColor: 'lightblue',
    padding: 20,
    marginLeft: 50,
    marginRight: 50,
    alignItems: 'center',
    borderRadius: 20,
  },
  buttonText: {
    fontSize: 30,
    color: 'white',
  },
  buttonContainer: {
    margin: 20
  },
  alternativeLayoutButtonContainer: {
    margin: 20,
    flexDirection: 'row',
    justifyContent: 'space-between'
  }
})
