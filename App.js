import React, {Component} from 'react';

import AppHeader from "./Components/AppHeader";
import {Container, Button, Text, Content} from "native-base";
import {fetch} from "react-native";

export function getFood() {
    return fetch('')
        .then(function(response) {
            return response.json()
        });
}

export default class HeaderExample extends Component {

    state = {
        isReady: false
    };

    async componentWillMount() {
        await Expo.Font.loadAsync({
            'Roboto': require('native-base/Fonts/Roboto.ttf'),
            'Roboto_medium': require('native-base/Fonts/Roboto_medium.ttf'),
        });
        this.setState({isReady: true})
    }


    render() {
        if (!this.state.isReady) {
            return <Expo.AppLoading/>;
        }
        let buttons = [];
        for (let i=0; i< 20;i++) {
            buttons.push(
                <Button key={i} block info style={{marginTop: 15}}>
                    <Text>Test {i}</Text>
                </Button>
            )
        }

        return (
            <Container>
                <AppHeader/>
                <Content>
                    { buttons }

                </Content>
            </Container>
        );
    }
}
