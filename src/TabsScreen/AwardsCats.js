import React, { Component } from "react";
import { TouchableOpacity, FlatList, Image, ImageBackground, StyleSheet, Text, Alert, View, ScrollView } from 'react-native';
import { ApiCommon } from "../Apicommon";
import AsyncStorage from '@react-native-community/async-storage';
import Icon from 'react-native-vector-icons/FontAwesome';
export default class AwardsCats extends Component {
    access_token;
    constructor(props) {
        super(props);
        this.state = {
            dataSource: []
        };
    }

    componentDidMount() {

        try {
            AsyncStorage.getItem('login').then(val => {
                if (val !== null)
                    var jjbody = JSON.parse(val);
                this.access_token = jjbody.token

                this.getAwardsCats(this.access_token);
            });

        } catch (error) {
            // Error retrieving data
        }

    }
    getAwardsCats(access_token) {

        const options = {
            'method': 'POST',
            //   'headers': {
            //     'Content-Type': 'application/x-www-form-urlencoded'
            //   }
        };
        const url = ApiCommon.base_url + "getallcategory?token=" + access_token;
        fetch(url, options)
            .then(response => response.json())
            .then((responseJson) => {

                if (responseJson.status === '1') {
                    // this.props.navigation.navigate('ThankyouScreen');
                }
                else {
                    alert(responseJson.data.error[0]);
                }
                //     alert(JSON.stringify(responseJson));
                this.setState({
                    dataSource: responseJson.data.categories
                })
            })
            .catch(error => console.log(error)) //to catch the errors if any   

    }


    onVoteNow = (id) => {
        this.props.navigation.navigate('AwardsNominee', { id_: id });
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
    onBack() {
        this.props.navigation.openDrawer();
    }


    render() {
        return (

            <>
                <ImageBackground imageStyle={{ borderBottomLeftRadius: 30, borderBottomRightRadius: 30 }}

                    source={require('../../assets/images/app_background.png')} style={styles.image}>
                    <View style={{ flexDirection: 'row', borderBottomWidth: 0, width: '100%', height: 56, justifyContent: 'center' }}>

                        <View style={{ alignSelf: 'center', flex: 1 }}>
                            <Icon style={[{ marginLeft: 16, color: '#FFFFFF' }]} size={18} name={'bars'} onPress={() => this.onBack()} />
                        </View>
                        <View style={{ flex: 2, justifyContent: 'center', alignItems: 'center', textAlign: 'center', alignContent: 'center' }}>
                            <Text style={{ color: '#FFFFFF', fontSize: 22, alignSelf: 'center', marginTop: 12, fontFamily: 'Lato-Bold', flex: 2 }}>Awards</Text>
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


                        }}>


                        <View
                            style={{
                                flex: 2,


                                borderRadius: 30,
                                marginTop: 10,
                                padding: 16


                            }}>

                            <FlatList

                                data={this.state.dataSource}
                                renderItem={({ item }) =>
                                    // <View style={{ height: 50 }}>
                                    //     <Text style={{ height: 50 }}>{item.name}</Text>
                                    //     <View style={{ height: 1, backgroundColor: 'gray' }}></View>
                                    // </View>
                                    <TouchableOpacity style={{
                                        justifyContent: 'center', backgroundColor: '#ffffff', width: '100%', height: 60, alignSelf: 'center', marginBottom: 3
                                    }}
                                        onPress={() => this.onVoteNow(item)}>
                                        <Text style={{ color: '#000000', fontSize: 16, fontFamily: 'Lato-Regular', textAlign: 'center', alignSelf: "center" }}>{item.name}</Text>
                                    </TouchableOpacity>

                                }
                            />
                        </View>




                        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>

                            <Text style={{
                                color: '#000000',
                                fontSize: 14,

                                fontFamily: 'Lato-Bold',
                                alignSelf: 'center',
                            }}>Sponsered by</Text>
                            <View style={{ flexDirection: 'row', marginTop: 15 }}>
                                <View style={{ backgroundColor: '#FFFFFF', borderRadius: 10, width: 80, height: 70, marginLeft: 10 }}>
                                    <Image
                                        style={{ width: 75, height: 75, resizeMode: 'contain' }}
                                        source={require('../../assets/images/spnsr/sp12.png')}
                                    />
                                </View>
                                <View style={{ backgroundColor: '#FFFFFF', borderRadius: 10, width: 80, height: 70, marginLeft: 10 }}>
                                    <Image
                                        style={{ width: 75, height: 75, resizeMode: 'contain' }}
                                        source={require('../../assets/images/spnsr/sp4.png')}
                                    />
                                </View>

                            </View>

                        </View>
                    </View>

                </ImageBackground>
            </>
        );
    }
}

const styles = StyleSheet.create({
    image: {
        flex: 1,
        resizeMode: "cover",
        justifyContent: "center",
        backgroundColor: '#000000'
    }

});