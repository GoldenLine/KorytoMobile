import React, {Component} from 'react';

import AppHeader from "./Components/AppHeader";
import {Container, Button, Text, Content, Toast, Root} from "native-base";

export default class HeaderExample extends Component {

    state = {
        isReady: false
    };

    _sendNotification(url) {
        console.log(url);
        fetch(url).then((response) => {
            if (false === response.ok) {
                response.text().then((responseText => {
                    Toast.show({
                        text: responseText,
                        position: 'bottom',
                        buttonText: 'Okay',
                        type: 'danger',
                        duration: 3000,
                    })
                }))
            } else {
                Toast.show({
                    text: 'Wysłano powiadomienie',
                    position: 'bottom',
                    buttonText: 'Okay',
                    type: 'success',
                    duration: 3000,
                })
            }

        }).catch((error) => {
            console.error(error);
        });

    }

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
                <Button key={item.label} block warning style={{marginTop: 15}} onPress={() => {
                    this._sendNotification(item.url)
                }}>
                    <Text>{item.label}</Text>
                </Button>
            )
        });

        return (
            <Root>
                <Container>
                    <AppHeader/>
                    <Content>
                        {buttons}
                    </Content>
                </Container>
            </Root>
        );
    }
}
