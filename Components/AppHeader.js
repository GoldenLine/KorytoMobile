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
                <Left style={styles.left}>
                    <Image source={{uri: 'https://bis.gazeta.pl/im/6/22376/m22376736.png'}}  style={{height:55, width: 55, flex: 1}} />
                </Left>
                <Body>
                <Title style={styles.title}>Koryto Mobile</Title>
                </Body>
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
        height: 57 + getStatusBarHeight(),
        backgroundColor: '#f3f3f3',
    },
    left: {
        width: 200
    },
    title: {
        color: '#474747',
    }
});

module.exports = AppHeader;
