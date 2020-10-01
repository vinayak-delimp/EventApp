

import React, {Component} from 'react';
import {View,ImageBackground,Image,Text,StyleSheet} from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
export default class ViewMapfloor extends Component{
    
    render(){

        return(
            <ImageBackground source={require('../../assets/images/group.png')} style={styles.image}>
                <View style={{flex:2,backgroundColor:'#ffffff',borderRadius:15,margin:15}}>
                    <ScrollView>
                    <Text style={{margin:15, textAlign:'justify'}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras mauris felis, feugiat a pulvinar sed, rhoncus sit amet ex. Aliquam tempus consequat velit, non pharetra mi tempor sit amet. Ut sagittis cursus libero eu egestas. Sed efficitur viverra mauris, vel faucibus nisl mollis quis. Aliquam vitae enim metus. Praesent porttitor purus felis. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Fusce eget orci congue, fermentum metus eget, posuere odio. Aenean vehicula eros ut mattis blandit. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Aliquam et orci sit amet lacus elementum congue eu quis enim. Vestibulum risus turpis, blandit non nisi et, tincidunt efficitur magna. Donec pharetra facilisis mauris, nec placerat leo. Quisque non placerat magna, eu aliquet nibh. Fusce ut congue orci, sit amet lobortis orci.</Text>
                    </ScrollView>
                </View>
                <View style={{flex:1, alignItems:"center"}}>
                        <Image style={{ marginTop: 10}} source={require('../../assets/images/bottom_logo.png')} />
                </View>
            </ImageBackground>
        );
    }
}

const styles = StyleSheet.create({
    image: {
        flex: 1,
        resizeMode: "cover",
        justifyContent: "center"
    }

});