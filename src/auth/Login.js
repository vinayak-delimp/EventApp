import React, { Component } from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import {
  View,
  Image,
  Text,
  Alert,
  ActivityIndicator,
  TouchableOpacity,
  ImageBackground,
  TextInput,
  StyleSheet,
} from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';
import { ApiCommon } from '../Apicommon';
const STORAGE_KEY = '@save_login';
export default class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      isLoading: false,
    };
  }

  //      state = {
  //         email: '',
  //         password: '',

  //       };
  //     const { navigation } = props;
  //     const onPress = () => {navigation.navigate('Register')};
  onChangeEmailText = (val, prop) => {
    // this.state.email = text;
    const state = this.state;
    state[prop] = val;
    this.setState(state);
  };

  onChangePasswordText = (val, prop) => {
    // this.state.email = text;
    const state = this.state;
    state[prop] = val;
    this.setState(state);
  };

  onSignin = async () => {
    //this.props.navigation.navigate('Home');

    if (this.state.email === '') {
      Alert.alert('Enter Email address.');
      return;
    }
    if (this.state.password === '') {
      Alert.alert('Enter Password.');
      return;
    }

    this.setState({
      isLoading: true,
    });

    const options = {
      method: 'POST',
      //   'headers': {
      //     'Content-Type': 'application/x-www-form-urlencoded'
      //   }
    };
    const url =
      ApiCommon.base_url +
      'login?email=' +
      this.state.email +
      '&password=' +
      this.state.password;
    fetch(url, options)
      .then((response) => response.json())
      .then((responseJson) => {
        // Alert.alert( responseJson);
        if (responseJson.status === '0') {

          alert(JSON.stringify(responseJson));
        }
        else {
          AsyncStorage.setItem('login', JSON.stringify(responseJson.data));
          // AsyncStorage.setItem("fullName",JSON.stringify(responseJson.data.full_name));
          this.props.navigation.goBack(null);

          this.props.navigation.navigate('Home');
        }



        this.setState({
          isLoading: false,
          dataSource: responseJson,
        });
      })
      .catch((error) => Alert.alert(error));
  };

  onGoSignup = () => {
    this.props.navigation.navigate('Register');
  };

  render() {
    if (this.state.isLoading) {
      return (
        <View style={styles.preloader}>
          <ActivityIndicator size="large" color="#9E9E9E" />
        </View>
      );
    }
    return (
      <View style={{ flex: 1 }}>
        <ImageBackground
          source={require('../../assets/images/app_background.png')}
          style={styles.image}>
          <View
            style={{
              flex: 1,
              justifyContent: 'center',
              alignItems: 'center',
              padding: 10,
            }}>
            <Text
              style={{
                color: '#ffffff',
                fontFamily: 'Lato-Bold',
                fontSize: 22,
                marginBottom: 15,
              }}>
              WELCOME TO THE
            </Text>
            <Image
              style={{ width: 220, height: 150, resizeMode: 'contain' }}
              source={require('../../assets/images/logo.png')}
            />
          </View>
          <View style={{ flex: 2, paddingLeft: 20, paddingRight: 20 }}>
            <View style={styles.searchSection}>
              <Icon name="user-circle" size={20} color="#000" />
              <TextInput
                placeholder="Email address"
                style={{ height: 40, width: '100%', marginLeft: 15, fontFamily: 'Lato-Regular' }}
                onChangeText={(val) => this.onChangeEmailText(val, 'email')}
                value={this.state.email}
                underlineColorAndroid="transparent"
              />
            </View>
            <View style={styles.searchSection}>
              <Icon name="lock" size={20} color="#000" />
              <TextInput
                placeholder="Password"
                secureTextEntry={true}
                style={{ height: 40, width: '100%', marginLeft: 15, fontFamily: 'Lato_Regular' }}
                onChangeText={(text) =>
                  this.onChangePasswordText(text, 'password')
                }
                value={this.state.password}
                underlineColorAndroid="transparent"
              />
            </View>
            <TouchableOpacity elevation={5}
              style={styles.button}
              onPress={() => this.onSignin()}>
              <Text style={styles.text}>Sign In</Text>
            </TouchableOpacity>
            {/* </View> */}
            {/* <View style={{ flex: 1, padding: 5,backgroundColor:'#987898' }}> */}
            <TouchableOpacity
              style={{ alignSelf: 'center', marginTop: 20 }}
              onPress={() => this.onGoSignup()}>
              <Text>
                <Text
                  style={{ color: '#ffffff', marginRight: 5, fontSize: 16, fontFamily: 'Lato-Regular' }}>
                  Don't have an account?
              </Text>
                <Text
                  style={{ marginLeft: 5, color: '#fff93c', fontFamily: 'Lato-Bold', fontSize: 16 }}>
                  &nbsp;Register Now
              </Text>
              </Text>

            </TouchableOpacity>
            {/* <Image
              style={{ marginTop: 35 }}
              source={require('../../assets/images/bottom_logo.png')}
            /> */}

            {/* <View style={{
              flex: 1,
              justifyContent: 'center',
              alignItems: 'center'
            }}> */}

            <Text style={{
              color: '#FFFFFF',
              fontSize: 14,

              fontFamily: 'Lato-Bold',
              alignSelf: 'center',
            }}>Sponsored by</Text>

            <View style={{ flexDirection: 'row', marginTop: 15, alignItems: 'center', alignSelf: 'center' }}>
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
            <View style={{ flexDirection: 'row', marginTop: 10, alignSelf: 'center' }}>
              <Text style={{
                color: '#FFFFFF',
                fontSize: 14,

                fontFamily: 'Lato-Bold',
                alignSelf: 'center',
              }}>Powered by </Text>
              <Image
                style={{ width: 60, height: 60, resizeMode: 'contain' }}
                source={require('../../assets/images/lemon.png')}
              />
            </View>
          </View>

          {/* </View> */}

          {/* </View> */}
        </ImageBackground>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ff9900',
    justifyContent: 'center',
    paddingHorizontal: 10,
  },
  text: {
    fontSize: 16,
    fontFamily: 'Lato-Bold'
  },

  button: {
    shadowColor: 'rgba(255,0,0, .4)', // IOS
    shadowOffset: { height: 1, width: 1 }, // IOS
    shadowOpacity: 1, // IOS
    shadowRadius: 1, //IOS
    backgroundColor: '#ffffff',
    elevation: 5, // Android
    height: 44,
    width: 150,
    borderRadius: 25,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    marginTop: 20,
    alignSelf: 'center'

  },
  button1: {
    shadowColor: "#000000",
    shadowOpacity: 0.8,
    shadowRadius: 2,
    shadowOffset: {
      height: 1,
      width: 1
    },

    borderRadius: 25,
    alignItems: 'center',
    height: 50,

    justifyContent: 'center',
    marginLeft: 5,
    marginRight: 5,
    width: 200,
    alignSelf: 'center',
    backgroundColor: '#FFFFFF',
  },
  image: {
    flex: 1,
    paddingTop: 20,
    resizeMode: 'cover',
    justifyContent: 'center',
  },
  searchSection: {
    borderColor: '#d3d3d3',
    borderWidth: 1,
    height: 44,
    marginTop: 10,
    borderRadius: 25,
    paddingLeft: 25,
    flexDirection: 'row',
    //        justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 5,
  },
  preloader: {
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    position: 'absolute',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff',
  },
});
