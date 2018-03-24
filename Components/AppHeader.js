import React, { Component } from 'react';
import {
    Image,
    Platform,
    StatusBar, StyleSheet,
    Text,
} from 'react-native';

import {Header,Left,Button,Icon,Right,Body,Title} from 'native-base';

export function getStatusBarHeight(skipAndroid: boolean = false) {
    if (Platform.OS === 'ios') {
        return ifIphoneX(44, 20);
    }

    if (skipAndroid) {
        return 0;
    }

    return StatusBar.currentHeight;
}

export default class AppHeader extends Component {
    render() {
        return (
            <Header style={styles.header}>
                <Left>

                </Left>
                <Body>
                <Title>Nazwa Aplikacji</Title>
                </Body>
                <Right>
                    <Button transparent>
                        <Icon name='bulb' />
                    </Button>
                </Right>
            </Header>
        );
    }
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    header: {
        paddingTop: getStatusBarHeight(),
        height: 54 + getStatusBarHeight(),
    },
});

module.exports = AppHeader;
