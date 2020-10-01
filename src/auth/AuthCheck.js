import React, {Component} from 'react';

import {View, StyleSheet, Alert, Image} from 'react-native';
import {ApiCommon} from '../Apicommon';
import AsyncStorage from '@react-native-community/async-storage';
const STORAGE_KEY = '@save_login';
export default class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      login: false,
    };
  }

  componentDidMount() {
    console.log('wokring');
    setTimeout(() => {
        
    this.readData();
    }, 1000);
  }

  readData = async () => {
    try {
     
      const login = await AsyncStorage.getItem('login');

      if (login !== null) {
       // console.log('value', login);
        this.props.navigation.goBack(null);

        this.props.navigation.navigate('Home');
      } else {
        //console.log('readd data', login);
        this.props.navigation.goBack(null);

        this.props.navigation.navigate('Auth');
      }
    } catch (e) {
      console.log('Failed to fetch the data from storage');
    }
  };

  render() {
    return (
      <Image source={require('../../assets/images/splash.png')}
      style={styles.image}>

      </Image>
    );
  }
}

const styles = StyleSheet.create({
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
  image: {
    width:'100%',
    height:'100%',
    
    
        resizeMode: 'stretch'
        
  }
});
