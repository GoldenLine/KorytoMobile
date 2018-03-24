import React, { Component } from 'react';
import {
    Text,
} from 'react-native';

import {Content} from 'native-base';

export default class SideBar extends Component {
    render() {
        return (
            <Content style={{backgroundColor:'#ffffff'}}>
                <Text>Drawer</Text>
            </Content>
        );
    }
}

module.exports = SideBar;