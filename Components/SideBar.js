import React, { Component } from 'react';
import {
    Platform,
    StatusBar, StyleSheet,
    Text,
} from 'react-native';

import {Content} from 'native-base';

export default class SideBar extends Component {
    render() {
        return (
            <Content style={styles.content}>
                <Text>Drawer</Text>
            </Content>
        );
    }
}

export function getStatusBarHeight(skipAndroid: boolean = false) {
    if (Platform.OS === 'ios') {
        return ifIphoneX(44, 20);
    }

    if (skipAndroid) {
        return 0;
    }

    return StatusBar.currentHeight;
}

const styles = StyleSheet.create({
    content: {
        paddingTop: getStatusBarHeight(),
        height: 54 + getStatusBarHeight(),
        backgroundColor: '#ffffff',
    },
});

module.exports = SideBar;
