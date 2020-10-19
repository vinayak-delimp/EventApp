import React, { Component } from "react";

import AsyncStorage from '@react-native-community/async-storage';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Text, View, FlatList, Alert, StyleSheet, TouchableOpacity, ImageBackground } from 'react-native';
export default class Agenda extends Component {

    agendaData;
    constructor(props) {
        super(props);
        this.state = {
            dataSource: []
        };

        this.agendaData = [
            {
                "time": "8:45 AM",
                "desc": "Doors Open"
            },
            {
                "time": "9:00 AM",
                "desc": "Start"
            },
            {
                "time": "9:05 AM",
                "desc": "Introduction Keynote Speakers"
            },
            {
                "time": "10:00 AM",
                "desc": "Trade Show Open"
            },
            {
                "time": "12:00 PM",
                "desc": "Lunch and Entertainment"
            },
            {
                "time": "12:45 PM",
                "desc": "Keynote Speakers"
            },
            {
                "time": "01:00 PM",
                "desc": "Auction"
            },
            {
                "time": "01:15 PM",
                "desc": "Business Spotlight"
            },

            {
                "time": "02:00 PM",
                "desc": "Award Presentations"
            },

            {
                "time": "02:15 PM",
                "desc": "Intermission"
            },

            {
                "time": "02:30 PM",
                "desc": "Live Interviews"
            },
            {
                "time": "03:00 PM",
                "desc": "Keynote Speakers"
            },
            {
                "time": "04:00 PM",
                "desc": "Closing Speaker"
            }



        ];

        this.state.dataSource = this.agendaData;
    }
    onBack() {
        this.props.navigation.openDrawer();
    }


    signout = () => {
        Alert.alert(
            "Alert",
            "Do you want to logout?",
            [
                {
                    text: "No",
                    onPress: () => console.log("Cancel Pressed"),
                    style: "cancel"
                },
                {
                    text: "Yes", onPress: () => {
                        console.log("OK Pressed")
                        AsyncStorage.removeItem('login');
                        setTimeout(() => {
                            this.props.navigation.goBack(null);
                            this.props.navigation.navigate('Auth')

                        }, 500);
                    }
                }
            ],
            { cancelable: false }
        );
    };

    render() {
        return (
            <ImageBackground
                imageStyle={{ borderBottomLeftRadius: 30, borderBottomRightRadius: 30 }}
                source={require('../../assets/images/app_background.png')}
                style={styles.image}>
                <View style={{ flexDirection: 'row', borderBottomWidth: 0, width: '100%', height: 56, justifyContent: 'center' }}>

                    <View style={{ alignSelf: 'center', flex: 1 }}>
                        <Icon style={[{ marginLeft: 16, color: '#FFFFFF' }]} size={18} name={'bars'} onPress={() => this.onBack()} />
                    </View>
                    <View style={{ flex: 2, justifyContent: 'center', alignItems: 'center', textAlign: 'center', alignContent: 'center' }}>
                        <Text style={{ color: '#FFFFFF', fontSize: 22, alignSelf: 'center', marginTop: 12, fontFamily: 'Lato-Bold', flex: 2 }}>Agenda</Text>
                    </View>
                    <TouchableOpacity style={{ alignSelf: 'center', flex: 1, justifyContent: 'center', width: 90, alignItems: "center" }} onPress={() => this.signout()}>
                        <Icon style={{ alignSelf: 'flex-end', marginRight: 16 }} name="sign-out" color={'#ffffff'} size={18} />
                    </TouchableOpacity>

                </View>
                <View
                    style={{
                        flex: 2,

                        borderWidth: 1,
                        borderTopWidth: 7,
                        borderColor: '#000000',
                        borderTopLeftRadius: 30,
                        borderTopRightRadius: 30,
                        backgroundColor: 'rgba(255, 255, 255, 0.8)',
                        borderRadius: 30,
                        marginTop: 10,
                        padding: 16


                    }}>
                    <View style={{
                        flexDirection: 'row',
                        height: 50,
                        justifyContent: 'center', shadowColor: '#000000',
                        shadowOffset: { width: 13, height: 3 },
                        shadowOpacity: 0.8,
                        shadowRadius: 2,
                        elevation: 5,
                        alignItems: 'center',
                        backgroundColor: 'rgba(190, 64, 58,0.9)'
                    }}>

                        <Text style={{ flex: 1, color: '#FFFFFF', fontSize: 16, fontFamily: 'Lato-Bold', textAlign: 'left', marginLeft: 20 }}>Time</Text>
                        <Text style={{ flex: 1, color: '#FFFFFF', fontSize: 16, fontFamily: 'Lato-Bold', textAlign: 'right', marginRight: 20 }}>Topic</Text>

                    </View>

                    <FlatList
                        showsVerticalScrollIndicator={false}
                        style={{}}
                        data={this.state.dataSource}
                        renderItem={({ item }) =>

                            <View style={{ flexDirection: 'row', backgroundColor: '#FFFFFF', borderBottomWidth: 0, height: 50, justifyContent: 'center', alignItems: 'center', marginBottom: 3 }}>

                                <Text style={{ flex: 1, color: '#000000', fontSize: 14, fontFamily: 'Lato-Regular', textAlign: 'left', marginLeft: 16 }}>{item.time}</Text>
                                <Text style={{ flex: 2.5, color: '#000000', fontSize: 14, fontFamily: 'Lato-Regular', textAlign: 'right', marginRight: 16 }}>{item.desc}</Text>

                            </View>


                        }
                        keyExtractor={(item, index) => index.toString()}

                    />
                </View>
            </ImageBackground>


        );

    }
}

const styles = StyleSheet.create({
    image: {
        flex: 1,
        resizeMode: 'cover',
        justifyContent: 'center',
        backgroundColor: '#000000'
    },
});