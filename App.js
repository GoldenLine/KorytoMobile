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
import SideBar from "./Components/SideBar";
import AppHeader from "./Components/AppHeader";

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

    closeDrawer = () => {
        this.drawer._root.close()
    };
    openDrawer = () => {
        this.drawer._root.open()
    };
    render() {
        if (!this.state.isReady) {
            return <Expo.AppLoading/>;
        }

        return (
            <Drawer
                ref={(ref) => { this.drawer = ref; }}
                content={<SideBar/>}
                onClose={() => this.closeDrawer()} >

                <AppHeader
                    openDrawer={this.openDrawer.bind(this)}
                />
            </Drawer>
        );
    }
}
