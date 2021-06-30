import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Button, TextInput } from 'react-native';
import * as Speech from 'expo-speech';

export default class App extends React.Component {
  state = {
    inputWords: ''
  }
  changeWords = (text) => {
    this.setState({ inputWords: text });
  }
  speak = () => {
    const words = this.state.inputWords;
    Speech.speak(words);
  }
  render() {
    return (
      <View style={styles.container}>
        <View>
          <Text style={styles.headingText}>Text To Speech</Text>
        </View>
        <TextInput
          style={styles.inputText}
          placeholder="Write Some Words"
          value={this.state.words}
          onChangeText={(text) => this.changeWords(text)}
        />
        <Button title="Say Something" onPress={this.speak} />
        <StatusBar style="auto" />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputText: {
    borderStyle: 'solid',
    padding: 10,
    marginBottom: 10,
    backgroundColor: '#DEFEA7',
    width: 300
  },
  headingText: {
    marginBottom: 10,
    fontWeight: 'bold',
    fontSize: 25
  }
});
