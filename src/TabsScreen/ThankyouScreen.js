import React, { Component } from "react";
import { TouchableOpacity, Image, ImageBackground, StyleSheet, Text, View, ScrollView } from 'react-native';
import { TextInput } from "react-native-gesture-handler";
import Icon from 'react-native-vector-icons/FontAwesome';

export default class ThankyouScreen extends Component {

    constructor(props) {
        super(props);
    }

    onEventInfo = () => {
        this.props.navigation.navigate('EventInfo');
    }

    onViewMap = () => {
        this.props.navigation.navigate('ViewMapfloor');
    }

    onVoteNow = () => {
        this.props.navigation.goBack(null);

        this.props.navigation.navigate('AwardsCats');
    }


    render() {
        return (
            <ImageBackground imageStyle={{ borderBottomLeftRadius: 30, borderBottomRightRadius: 30 }}
                source={require('../../assets/images/app_background.png')} style={styles.image}>

                <View style={{ flexDirection: 'row', borderBottomWidth: 0, width: '100%', height: 56, backgroundColor: 'transparent', justifyContent: 'center' }}>
                    <View style={{ alignSelf: 'center', flex: 1 }}>
                        <Icon style={[{ marginLeft: 8, color: '#FFFFFF' }]} size={18} name={'chevron-left'} />
                    </View>
                    <View style={{ flex: 2, justifyContent: 'center', alignItems: 'center', textAlign: 'center', alignContent: 'center' }}>
                        {/* <Text style={{ color: '#FFFFFF', fontSize: 20, alignSelf: 'center', marginTop: 12, fontFamily: 'Lato-Bold', flex: 2 }}>Awards</Text> */}
                    </View>
                    <View style={{ alignSelf: 'center', flex: 1, justifyContent: 'center', alignItems: "center" }}>
                        {/* <Text style={{ color: '#FFFFFF', fontSize: 16, alignSelf: 'center',marginTop:15, fontWeight: 'bold', flex: 2 }}>Logout</Text> */}
                    </View>

                </View>


                <View style={{
                    flex: 1, borderWidth: 1,
                    borderTopWidth: 7,
                    borderColor: '#000000',
                    borderTopLeftRadius: 30,
                    borderTopRightRadius: 30,
                    backgroundColor: 'rgba(255, 255, 255, 0.8)',
                    borderRadius: 30,
                    marginTop: 10,
                    alignItems: 'center'
                }}>
                    {/* <View style={{ flex: 1, alignItems: 'center' }}> */}
                    <Image style={{ marginTop: 35, height: 80, width: 80 }} source={require('../../assets/images/thnku.png')} />
                    <Text style={{ color: '#000000', fontFamily: 'Lato-Bold', fontSize: 18 }}>Thank you for voting</Text>

                    <TouchableOpacity style={{
                        shadowColor: 'rgba(255,0,0, .4)', // IOS
                        shadowOffset: { height: 1, width: 1 }, // IOS
                        shadowOpacity: 1, // IOS
                        shadowRadius: 1, //IOS
                        backgroundColor: '#ffffff',
                        elevation: 5, justifyContent: 'center', backgroundColor: '#ffffff', height: 50, width: 120, borderRadius: 75, marginTop: 20, alignSelf: 'center'
                    }}
                        onPress={() => this.onVoteNow()}>
                        <Text style={{ color: '#000000', fontSize: 16, fontFamily: 'Lato-Bold', alignSelf: "center" }}>OK</Text>
                    </TouchableOpacity>

                    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>

                        <Text style={{
                            color: '#000000',
                            fontSize: 14,

                            fontFamily: 'Lato-Bold',
                            alignSelf: 'center',
                        }}>Sponsered by</Text>
                        <View style={{ flexDirection: 'row', marginTop: 15 }}>
                            <View style={{ justifyContent: 'center', backgroundColor: '#FFFFFF', borderRadius: 10, width: 70, height: 70 }}>
                                <Image
                                    style={{ width: 60, height: 60, resizeMode: 'contain', alignSelf: 'center' }}
                                    source={require('../../assets/images/spnsr/sp12.png')}
                                />
                            </View>
                            <View style={{ justifyContent: 'center', backgroundColor: '#FFFFFF', borderRadius: 10, width: 70, height: 70, marginLeft: 10 }}>
                                <Image
                                    style={{ width: 60, height: 60, resizeMode: 'contain', alignSelf: 'center' }}
                                    source={require('../../assets/images/spnsr/sp4.png')}
                                />
                            </View>


                        </View>
                        <View style={{ flexDirection: 'row', marginTop: 10 }}>
                            <Text style={{
                                color: '#000000',
                                fontSize: 14,

                                fontFamily: 'Lato-Bold',
                                alignSelf: 'center',
                            }}>Powered by </Text>
                            <Image
                                style={{ width: 55, height: 55, resizeMode: 'contain' }}
                                source={require('../../assets/images/lemon.png')}
                            />
                        </View>
                    </View>


                </View>



            </ImageBackground>

        );
    }
}
const styles = StyleSheet.create({
    image: {
        flex: 1,
        resizeMode: "cover",
        backgroundColor: '#000000',
        justifyContent: "center"
    }

});