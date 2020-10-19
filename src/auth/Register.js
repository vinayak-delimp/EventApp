import React, { Component } from 'react';

import {
  View,
  Image,
  Text,
  TouchableOpacity,
  ImageBackground,
  ScrollView,
  TextInput,
  StyleSheet,Keyboard,
  Alert,
  ActivityIndicator,
} from 'react-native';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';

import { ApiCommon } from '../Apicommon';
import AsyncStorage from '@react-native-community/async-storage';
export default class Login extends Component {
  device_token = '';
  constructor() {
    super();

    this.state = {
      email: '',
      password: '',
      name: '',
      lastname: '',
      cpassword: '',
      mobile: '',
      company: '',

      isLoading: false,
    };

    try {
      AsyncStorage.getItem('device_token').then(val => {
        if (val !== null) {
          this.device_token = val;
          // alert(this.device_token);
        }


      });

    } catch (error) {
      // Error retrieving data
    }

  }

  onChangeInputText = (val, prop) => {
    // this.state.email = text;
    const state = this.state;
    state[prop] = val;
    this.setState(state);
  };

  onRegister = async () => {
    if (this.state.name === '') {

      this.showValidationAlert('Enter your first name')
      return;
    }
    if (this.state.lastname === '') {
      this.showValidationAlert('Enter your last name')

      return;
    }

    if (this.state.company === '') {
      this.showValidationAlert('Enter Company name.')

      return;
    }
    if (this.state.email === '') {

      this.showValidationAlert('Enter Email address.')

      return;
    }
    if (this.state.password === '') {
      this.showValidationAlert('Enter Password.')

      return;
    }

    if (this.state.mobile === '') {
      this.showValidationAlert('Enter Mobile Number.')

      return;
    }


    if (this.state.mobile.length > 10 || this.state.mobile.length < 10) {
      this.showValidationAlert('Enter valid mobile number.')

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
      'register?email=' +
      this.state.email +
      '&password=' +
      this.state.password +
      '&first_name=' +
      this.state.name +
      '&last_name=' +
      this.state.lastname +
      '&company=' +
      this.state.company +
      "&phone=" + this.state.mobile +
      '&c_password=' +
      this.state.password +
      "&device_token=" + this.device_token;

    console.log(url);
    fetch(url, options)
      .then((response) => response.json())
      .then((responseJson) => {
        // alert(JSON.stringify(responseJson));
        if (responseJson.status === '1') {
          this.props.navigation.goBack();
        }
        else {
          this.showValidationAlert(responseJson.data.error[0]);

        }
        this.setState({
          isLoading: false,
          dataSource: responseJson,
        });
      })
      .catch((error) => Alert.alert(error));
  };


  showValidationAlert(msg) {
    Alert.alert(
      "Alert",
      msg,
      [
        {
          text: "Ok",
          onPress: () => console.log("Cancel Pressed"),
          style: "cancel"
        }
      ],
      { cancelable: false }
    );
  }

  render() {
    if (this.state.isLoading) {
      return (
        <View style={styles.preloader}>
          <ActivityIndicator size="large" color="#9E9E9E" />
        </View>
      );
    }

    return (
      <>
        <ImageBackground
          source={require('../../assets/images/app_background.png')}
          style={styles.image}>
          <View style={{height:25}}/>
          {/* <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
                        <Image source={require('../../assets/images/logo.png')} />
                    </View> */}
          <KeyboardAwareScrollView style={{ flex: 1, padding: 15 }}>
            <Image
              style={{ width: '60%', height: 150, resizeMode: 'contain', alignSelf: 'center' }}
              source={require('../../assets/images/logo.png')}
            />

            <View style={{ backgroundColor: 'rgba(255,255,255,.9)', borderRadius: 15, padding: 20 }}>
              <Text style={{ marginTop: 5, paddingLeft: 5, color: '#696969', fontFamily:'Lato-Bold', fontsize: 10 }}>First Name</Text>
              <View style={styles.searchSection}>
                {/* <Icon name="ios-search" size={20} color="#000" /> */}
                <TextInput
                  // placeholder="First name"
                  autoCorrect={false}

                  style={{ height: 40, width: '80%' }}
                  value={this.state.name}
                  onChangeText={(val) => this.onChangeInputText(val, 'name')}
                  underlineColorAndroid="transparent"
                />
              </View>


              <Text style={{ marginTop: 10, paddingLeft: 5, color: '#696969', fontFamily:'Lato-Bold', fontsize: 10 }}>Last Name</Text>

              <View style={styles.searchSection}>
                {/* <Icon name="user-circle" size={20} color="#000" /> */}
                <TextInput
                autoCorrect={false}
                  // placeholder="Last name"
                  style={{ height: 40, width: '80%' }}
                  value={this.state.lastname}
                  onChangeText={(val) => this.onChangeInputText(val, 'lastname')}
                  underlineColorAndroid="transparent"
                />
              </View>


              <Text style={{ marginTop: 10, paddingLeft: 5, color: '#696969', fontFamily:'Lato-Bold', fontsize: 10 }}>Company Name</Text>

              <View style={styles.searchSection}>
                {/* <Icon name="user-circle" size={20} color="#000" /> */}
                <TextInput
                  // placeholder="Company"
                  autoCorrect={false}

                  style={{ height: 40, width: '80%' }}
                  value={this.state.company}
                  onChangeText={(val) => this.onChangeInputText(val, 'company')}
                  underlineColorAndroid="transparent"
                />
              </View>


              <Text style={{ marginTop: 10, paddingLeft: 5, color: '#696969', fontFamily:'Lato-Bold', fontsize: 10 }}>Email Address</Text>

              <View style={styles.searchSection}>
                {/* <Icon name="user-circle" size={20} color="#000" /> */}
                <TextInput
                  keyboardType={"email-address"}
                  autoCorrect={false}

                  // placeholder="Email address"
                  style={{ height: 40, width: '80%' }}
                  value={this.state.email}
                  onChangeText={(val) => this.onChangeInputText(val, 'email')}
                  underlineColorAndroid="transparent"
                />
              </View>

              <Text style={{ marginTop: 10, paddingLeft: 5, color: '#696969', fontFamily:'Lato-Bold', fontsize: 10 }}>Password</Text>


              <View style={styles.searchSection}>
                {/* <Icon name="user-circle" size={20} color="#000" /> */}
                <TextInput
                  secureTextEntry={true}
                  autoCorrect={false}
                  blurOnSubmit={false}
                  onSubmitEditing={()=>Keyboard.dismiss()}

                  // placeholder="Password"
                  style={{ height: 40, width: '80%' }}
                  value={this.state.password}
                  onChangeText={(val) => this.onChangeInputText(val, 'password')}
                  underlineColorAndroid="transparent"
                />
              </View>

              <Text style={{ marginTop: 10, paddingLeft: 5, color: '#696969', fontFamily:'Lato-Bold', fontsize: 10 }}>Mobile Number</Text>

              <View style={styles.searchSection}>
                {/* <Icon name="user-circle" size={20} color="#000" /> */}
                <TextInput
                  // placeholder="Mobile Number"
                  maxLength={10}
                  autoCorrect={false}

                  keyboardType={"phone-pad"}
                  style={{ height: 40, width: '80%' }}
                  value={this.state.address}
                  onChangeText={(val) => this.onChangeInputText(val, 'mobile')}
                  underlineColorAndroid="transparent"
                />
              </View>

              <View style={{ flexDirection: 'row' }}>


              </View>

              <TouchableOpacity
                style={styles.button}
                onPress={() => this.onRegister()}>
                <Text style={styles.text}>Register</Text>
              </TouchableOpacity>

              <TouchableOpacity
                style={{ alignSelf: 'center', marginTop:15 }}
                onPress={() => this.props.navigation.goBack()}
              // onPress={onPress}
              >
                <Text>
                  <Text
                    style={{ color: '#696969', marginRight: 5, fontSize: 13, fontFamily:'Lato-Bold' }}>
                    Already have account?
              </Text>
                  <Text
                    style={{ marginLeft: 5, color: 'rgba(190, 64, 58,0.9)', fontWeight:'bold', fontSize: 13 }}>
                    &nbsp;Login Now
              </Text>
                </Text>
              </TouchableOpacity>

            </View>

            <View style={{ height: 20 }} />
          </KeyboardAwareScrollView>
          {/* <View style={{ flex: 1, padding: 25, alignItems: "center" }}>
                        <TouchableOpacity
                            style={{ alignSelf: "center", marginTop: 35 }}
                            onPress={onPress}
                        >
                            <Text style={{ color: "#ffffff", fontSize: 14 }}>Don't have account? Register Now</Text>
                        </TouchableOpacity>

                    </View> */}
        </ImageBackground>
      </>
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
    fontWeight:'bold'
  },
  button: {
    shadowColor: 'rgba(255,0,0, .4)', // IOS
    shadowOffset: { height: 1, width: 1 }, // IOS
    shadowOpacity: 1, // IOS
    shadowRadius: 1, //IOS
    backgroundColor: '#ffffff',
    elevation: 5, // Android
    height: 50,
    width: 150,
    borderRadius: 25,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    marginTop: 20,
    alignSelf: 'center'

  },
  image: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
    paddingBottom:10
  },
  searchSection: {
    borderColor: '#d3d3d3',
    borderWidth: 1,
    height: 40,
    marginTop: 3,
    borderRadius: 5,
    paddingLeft: 15,
    flexDirection: 'row',
    //        justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff'
    // shadowColor: '#000',
    // shadowOffset: { width: 0, height: 1 },
    // shadowOpacity: 0.8,
    // shadowRadius: 2,
    // elevation: 5,
  },

  searchSection1: {
    borderColor: '#d3d3d3',
    borderWidth: 1,
    flex: 1,
    height: 50,
    marginTop: 10,
    marginLeft: 5,
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
