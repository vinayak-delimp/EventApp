import React, { Component } from 'react';
import { View, StyleSheet, Image, Text } from 'react-native';
import {
    useTheme,
    Avatar,
    Title,
    Caption,
    Paragraph,
    Drawer,
} from 'react-native-paper';
import {
    DrawerContentScrollView,
    DrawerItem
} from '@react-navigation/drawer';

import Icon from 'react-native-vector-icons/FontAwesome';
import AsyncStorage from '@react-native-community/async-storage';



export function DrawerContent(props) {

    // //const components = async () => {
    //      name:"";
    //       var username;    

    // //}
    var usern = "";



    return (

        <View style={{ flex: 1 }}>
            <DrawerContentScrollView {...props}>
                <View style={styles.drawerContent}>
                    <View style={styles.userInfoSection}>

                        {/*                        
<Text style={{color:'#FFFFFF', fontFamily:'Lato-Bold',fontSize:22}}>{usern}
</Text>
<Text style={{color:'#FFFFFF', fontFamily:'Lato-Bold',fontSize:14}}>Phone: 1234567890</Text>
<Text style={{color:'#FFFFFF', fontFamily:'Lato-Bold',fontSize:14}}>Company: Delm</Text> */}
                        <Image
                            style={{ alignSelf: 'center', resizeMode: 'contain', height: 140, width: 170 }}
                            source={require('../assets/images/eventlogo.png')}
                        />

                    </View>

                    <Drawer.Section style={styles.drawerSection}>
                        <DrawerItem
                            icon={({ color, size }) => (
                                <Icon style={{marginLeft:5}} name="user" color={'#000000'} size={24} />


                            )}
                            label="My Profile"
                            labelStyle={{ color: '#000000', marginLeft: 10, fontSize: 18, fontFamily: 'Lato-Bold' }}
                            onPress={() => { props.navigation.navigate('Profile') }}
                        />
                        <View style={{ width: '100%', height: .8, backgroundColor: '#d3d3d3' }}></View>
                        <DrawerItem
                            icon={({ color, size }) => (
                                <Image
                                    style={{ alignSelf: 'center', resizeMode: 'contain', height: 32, width: 32 }}
                                    source={require('../assets/images/event.png')} />
                            )}
                            label="Event Info"
                            labelStyle={{ color: '#000000', fontSize: 18, fontFamily: 'Lato-Bold' }}
                            onPress={() => { props.navigation.navigate('EventInfo') }}
                        />
                        <View style={{ width: '100%', height: .8, backgroundColor: '#d3d3d3' }}></View>

                        <DrawerItem
                            icon={({ color, size }) => (
                                // <Icon 
                                // name="calendar" 
                                // color='#e85b3d'
                                // size={size}
                                // />



                                <Image
                                    style={{ alignSelf: 'center', resizeMode: 'contain', height: 32, width: 32 }}
                                    source={require('../assets/images/agenda.png')}
                                />
                            )}
                            label="Agenda"
                            labelStyle={{ color: '#000000', fontSize: 18, fontFamily: 'Lato-Bold' }}
                            onPress={() => { props.navigation.navigate('Agenda') }}
                        />
                        <View style={{ width: '100%', height: .8, backgroundColor: '#d3d3d3' }}></View>



                        {/* <View style={{ width: '100%', height: .8, backgroundColor: '#d3d3d3' }}></View> */}
                        <DrawerItem
                            icon={({ color, size }) => (
                                <Image
                                    style={{ alignSelf: 'center', resizeMode: 'contain', height: 32, width: 32 }}
                                    source={require('../assets/images/speaker.png')}
                                />
                            )}
                            label="Speakers"
                            labelStyle={{ color: '#000000', fontSize: 18, fontFamily: 'Lato-Bold' }}
                            onPress={() => { props.navigation.navigate('Speakers') }}
                        />
                        <View style={{ width: '100%', height: .8, backgroundColor: '#d3d3d3' }}></View>
                        <DrawerItem
                            icon={({ color, size }) => (
                                <Image
                                    style={{ alignSelf: 'center', resizeMode: 'contain', height: 30, width: 30 }}
                                    source={require('../assets/images/sponsor.png')} />

                            )}
                            label="Sponsors"
                            labelStyle={{ color: '#000000', fontSize: 18, fontFamily: 'Lato-Bold' }}
                            onPress={() => { props.navigation.navigate('Sponsers') }}
                        />

                        {/* <View style={{ width: '100%', height: .8, backgroundColor: '#d3d3d3' }}></View> */}

                    </Drawer.Section>

                </View>
            </DrawerContentScrollView>
            <Drawer.Section style={styles.bottomDrawerSection}>
                {/* <DrawerItem 
                    icon={({color, size}) => (
                        <Icon 
                        name="sign-out" 
                        color='#FFFFFF'
                        size={size}
                        />
                    )}
                    label="Sign Out"
                    labelStyle={{color:'#FFFFFF',fontSize:18,fontWeight:'bold'}}
                    onPress={this.signOut()}
                /> */}
            </Drawer.Section>
        </View>
    );

}

const styles = StyleSheet.create({
    drawerContent: {
        flex: 1,
        margin: 0,
        padding: 0,
    },
    userInfoSection: {
        paddingLeft: 20,
        height: 140,
        justifyContent: 'center',
        marginTop: 0
    },
    title: {
        fontSize: 16,
        marginTop: 3,
        fontWeight: 'bold',
    },
    caption: {
        fontSize: 14,
        lineHeight: 14,
    },
    row: {
        marginTop: 20,
        flexDirection: 'row',
        alignItems: 'center',

    },
    section: {
        flexDirection: 'row',
        alignItems: 'center',
        marginRight: 15,
    },
    paragraph: {
        fontWeight: 'bold',
        marginRight: 3,
    },
    drawerSection: {
        marginTop: 15,

    },
    bottomDrawerSection: {
        marginBottom: 15,
        // borderTopColor: '#f4f4f4',
        // borderTopWidth: 1,
        backgroundColor: '#ffffff'

    },
    preference: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingVertical: 12,

        paddingHorizontal: 16,
    },
});
