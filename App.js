import React, {Component} from 'react';

import AppHeader from "./Components/AppHeader";
import {Container, Button, Text, Content} from "native-base";

function sendNotification(url) {
    console.log(url);
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
        fetch('http://koryto.goldenline.pl/zarcie/lista')
            .then((response) => response.json())
            .then(data => {
                this.setState({data: data})
            })
            .catch((error) => {
                console.error(error);
            });

        this.setState({isReady: true})
    }


    render() {
        if (!this.state.isReady) {
            return <Expo.AppLoading/>;
        }

        if (!this.state.data) {
            return <Expo.AppLoading/>;
        }

        let buttons = [];

        this.state.data.forEach((item) => {
            buttons.push(
                <Button key={item.label} block warning style={{marginTop: 15}} onPress={sendNotification(item.url)}>
                    <Text>{item.label}</Text>
                </Button>
            )
        });


        return (
            <Container>
                <AppHeader/>
                <Content>
                    {buttons}
                </Content>
            </Container>
        );
    }
}
