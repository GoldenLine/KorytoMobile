import React, { Component } from 'react';
import {Alert, AppRegistry, Button, StyleSheet, Text, TouchableHighlight, View} from 'react-native';

export default class ButtonBasics extends Component {
    _onPressButton() {
        Alert.alert('Kocham Cię :*')
    }

    _onLongPressButton() {
        Alert.alert('Mocno Cię Kocham :*')
    }



    render() {
        return (
            <View style={styles.container}>
                <View style={styles.buttonContainer}>
                    <Button
                        onPress={this._onPressButton}
                        title="Naciśnij mnie :)"
                    />
                </View>
                <TouchableHighlight onPress={this._onPressButton} onLongPress={this._onLongPressButton} underlayColor="white" style={styles.buttonContainer}>
                    <View style={styles.button}>
                        <Text style={styles.buttonText}>Naciśnij mnie długo i krótko ;)</Text>
                    </View>
                </TouchableHighlight>
                <View style={styles.buttonContainer}>
                    <Button
                        onPress={this._onPressButton}
                        title="Press Me"
                        color="#841584"
                    />
                </View>
                <View style={styles.alternativeLayoutButtonContainer}>
                    <Button
                        onPress={this._onPressButton}
                        title="This looks great!"
                    />
                    <Button
                        onPress={this._onPressButton}
                        title="OK!"
                        color="#841584"
                    />
                </View>
            </View>

        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
    },
    buttonContainer: {
        margin: 20,
    },
    alternativeLayoutButtonContainer: {
        margin: 20,
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    button: {
        marginBottom: 30,
        width: 260,
        alignItems: 'center',
        backgroundColor: '#2196F3'
    },
    buttonText: {
        padding: 20,
        color: 'white'
    }
})

// skip this line if using Create React Native App
AppRegistry.registerComponent('AwesomeProject', () => ButtonBasics);
