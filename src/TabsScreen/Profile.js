import React, { Component } from "react";
import { TouchableOpacity, Image, StyleSheet, Text, View, ScrollView, ImageBackground,Alert } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import AsyncStorage from '@react-native-community/async-storage';

export default class Profile extends Component {

  jjbody = "";
  constructor(props) {
    super(props);
    this.state = {
      jjbody: ''
    };


  }

  componentDidMount() {

    try {
      AsyncStorage.getItem('login').then(val => {
        if (val !== null)
          this.jjbody = JSON.parse(val);
        this.state.jjbody = this.jjbody

        this.setState(this.state);


      });

    } catch (error) {
      // Error retrieving data
    }

  };

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
      <ImageBackground
      imageStyle={{ borderBottomLeftRadius: 30, borderBottomRightRadius: 30 }}

      source={require('../../assets/images/app_background.png')}
      style={styles.image}>
      <View style={{ flexDirection: 'row', borderBottomWidth: 0, width: '100%', height: 56, justifyContent: 'center' }}>

        <View style={{ alignSelf: 'center', flex: 1 }}>
          <Icon style={[{ marginLeft: 16, color: '#FFFFFF' }]} size={22} name={'bars'} onPress={() => this.onBack()} />
        </View>
        <View style={{ flex: 2, justifyContent: 'center', alignItems: 'center', textAlign: 'center', alignContent: 'center' }}>
          <Text style={{ color: '#FFFFFF', fontSize: 22, alignSelf: 'center', marginTop: 12, fontFamily: 'Lato-Bold', flex: 2 }}>Profile</Text>
        </View>
        <TouchableOpacity style={{ alignSelf: 'center', flex: 1, justifyContent: 'center', width: 90, alignItems: "center" }} onPress={() => this.signout()}>
          <Icon style={{ alignSelf: 'flex-end', marginRight: 16 }} name="sign-out" color={'#ffffff'} size={18} />
        </TouchableOpacity>

      </View>
      <View
          style={{
            flex: 2,
            borderWidth:1,
            borderTopWidth:7,
            borderColor:'#000000',
            borderTopLeftRadius:30,
            borderTopRightRadius:30,
            backgroundColor:'rgba(255, 255, 255, 0.8)',
            borderRadius: 30,
            paddingTop:40
          }}>

        {/* <View
          style={{
            flex: 2,
            backgroundColor: 'rgba(255,255,255,0.7)',
            borderRadius: 15,
            marginTop: 50,
         justifyContent:'center',
            shadowColor: '#000000',
            shadowOffset: { width: 13, height: 3 },
            shadowOpacity: 0.8,
            shadowRadius: 2,
            elevation: 5,
            padding: 15
          }}> */}


<View style={{alignSelf:'center', marginTop:10, backgroundColor: 'rgba(190, 64, 58,0.9)', justifyContent:'center',alignItems:'center', borderRadius:75, height:150,width:150}}>
<Image
            style={{ height:100,width:100,   resizeMode: 'contain' }}
            source={require('../../assets/images/user_profile.png')}
          />
</View>
         
          <View style={{ marginTop:40,flexDirection: 'row',paddingLeft:10 }}>
            <Text style={styles.pro_text}>Name</Text>
            <Text style={styles.pro_text}>{this.state.jjbody.full_name}</Text>

          </View>


          <View style={{ flexDirection: 'row', marginTop: 10,paddingLeft:10 }}>
            <Text style={styles.pro_text}>Phone No</Text>
            <Text style={styles.pro_text}>{this.state.jjbody.phone}</Text>

          </View>

          <View style={{ flexDirection: 'row', marginTop: 10,paddingLeft:10 }}>
            <Text style={styles.pro_text}>Email Id</Text>
            <Text style={styles.pro_text}>{this.state.jjbody.email}</Text>

          </View>

          <View style={{ flexDirection: 'row', marginTop: 10,paddingLeft:10 }}>
            <Text style={styles.pro_text}>Company Name</Text>
            <Text style={styles.pro_text}>{this.state.jjbody.company}</Text>

          </View>
        </View>
      </ImageBackground>

    );
  }

}

const styles = StyleSheet.create({
  image: {
    flex: 1,
    resizeMode: 'cover',
    backgroundColor:'#000000',
    justifyContent: 'center',
  },
  pro_text: {
    fontSize: 16, color: '#000000', fontFamily:'Lato-Bold', flex: 1
  }
});