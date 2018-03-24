import React, {Component} from 'react';
import {
    Container,
    Header,
    Left,
    Body,
    Right,
    Button,
    Icon,
    Title,
    Card,
    CardItem,
    Thumbnail,
    Drawer
} from 'native-base';
import {StyleSheet, StatusBar, Platform, Text} from 'react-native';
import SideBar from "./Components/SideBar";

export function getStatusBarHeight(skipAndroid: boolean = false) {
    if (Platform.OS === 'ios') {
        return ifIphoneX(44, 20);
    }

    if (skipAndroid) {
        return 0;
    }

    return StatusBar.currentHeight;
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
        closeDrawer = () => {
            this.drawer._root.close()
        };
        openDrawer = () => {
            this.drawer._root.open()
        };

        let cards = [];

        for (let i = 0; i < 8; i++) {

            cards.push(
                <Card key={i}>
                    <CardItem>
                        <Body>
                        <Text>
                            Tutaj jakiś tekst
                        </Text>
                        </Body>
                    </CardItem>
                </Card>
            )
        }
        return (

            <Drawer
                ref={(ref) => {
                    this.drawer = ref;
                }}
                content={<SideBar navigator={this.navigator}/>}
                onClose={() => this.closeDrawer()}>
                // Main View
                <Container>

                    <Header style={styles.header}>
                        <Left>
                            <Button transparent>
                                <Thumbnail square
                                           source={{uri: 'data:image/jpeg;base64,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'}}/>
                            </Button>
                        </Left>
                        <Body>
                        <Title>Header</Title>
                        </Body>
                        <Right>
                            <Button transparent>
                                <Icon name='menu'/>
                            </Button>
                        </Right>
                    </Header>

                    {cards}
                </Container>

            </Drawer>

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