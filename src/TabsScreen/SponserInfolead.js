import React, { Component } from 'react';
import { ScrollView, Alert, View, ImageBackground, Image, Text, TouchableOpacity, TextInput, StyleSheet } from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';
import Icon from 'react-native-vector-icons/FontAwesome';

import { ApiCommon } from '../Apicommon';
export default class SponserInfolead extends Component {

  sponsername;
  jjbody = '';

  constructor(props) {
    super(props);
    const user_name = this.props.route.params.name_;
    this.sponsername = user_name.name;

    this.state = {
      sponsername: this.sponsername,
      sponserimage: user_name.image,
      sponserinfo: user_name.info,
      comment: '',
      name: '',
      jobtitle: '',
      organisation: '',
      email: '', phone: '',
      dataSource: [], selectedId: ''
    };

  }
  componentDidMount() {

    try {
      AsyncStorage.getItem('login').then(val => {
        if (val !== null)
          this.jjbody = JSON.parse(val);
        console.log(this.jjbody);


      });

    } catch (error) {
      // Error retrieving data
    }

  };




  enquireNow = () => {
    try {
      var jjbody = '';

      if (this.state.name === '') {
        alert('Please enter name');
        return;
      }
      if (this.state.phone === '') {
        alert('Enter phone number');
        return;
      }
      
      if (this.state.email === '') {
        alert('Enter email address');
        return;
      }
     
      if (this.state.jobtitle === '') {
        alert('Enter your job title');
        return;
      }
      if (this.state.organisation === '') {
        alert('Enter your organisation name');
        return;
      }
      if (this.state.comment === '') {
        alert('Enter your comment');
        return;
      }

      AsyncStorage.getItem('login').then(val => {
        if (val !== null)
          jjbody = JSON.parse(val);



        const url =
          ApiCommon.base_url +
          'leadinquiry?email=' +
          this.state.email +
          "&token=" + this.jjbody.token +

          '&name=' +
          this.state.name +

          '&job_title=' +
          this.state.jobtitle +

          '&sponser_title=' +
          this.state.sponsername + "&phone=" + this.state.phone +
          "&comment=" + this.state.comment +
          "&organisation=" + this.state.organisation


        console.log(url);


        const options = {
          method: 'POST',
          //   'headers': {
          //     'Content-Type': 'application/x-www-form-urlencoded'
          //   }
        };

        fetch(url, options)
          .then((response) => response.json())
          .then((responseJson) => {
            if (responseJson.status === '0')
              Alert.alert(JSON.stringify(responseJson.data.error[0]));
            else {
              alert(responseJson.data.message);
              this.props.navigation.goBack();
            }
            this.setState({
              isLoading: false,
              dataSource: responseJson,
            });
          })
          .catch((error) => console.log(error));


      });

    } catch (error) {
      // Error retrieving data
    }



  };



  onChangeInputText = (val, prop) => {
    // this.state.email = text;
    const state = this.state;
    state[prop] = val;
    this.setState(state);
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

          <View style={{ alignSelf: 'center', flex: .8 }}>
            <Icon style={[{ marginLeft: 16, color: '#FFFFFF' }]} size={22} name={'bars'} onPress={() => this.onBack()} />
          </View>
          <View style={{ flex: 3, justifyContent: 'center', alignItems: 'center', textAlign: 'center' }}>
            <Text style={{ color: '#FFFFFF', fontSize: 18, alignSelf: 'center', marginTop: 5, fontFamily: 'Lato-Bold' }}>{this.state.sponsername}</Text>
          </View>
          <TouchableOpacity style={{ alignSelf: 'center', flex: .5, justifyContent: 'center', width: 90, alignItems: "center" }} onPress={() => this.signout()}>
            <Icon style={{ alignSelf: 'flex-end', marginRight: 16 }} name="sign-out" color={'#ffffff'} size={18} />
          </TouchableOpacity>

        </View>

        {/* <View
          style={{
            flex: 1,
            backgroundColor: 'rgba(255,255,255,0.7)',
            marginTop: 10,
          
            paddingTop: 10,
            paddingBottom: 10,
            paddingLeft: 15,
            paddingRight: 15,
            borderColor:'#000000',
            borderTopLeftRadius:30,
            borderTopRightRadius:30,
            backgroundColor:'rgba(255, 255, 255, 0.8)',
            borderRadius: 30,

          }}> */}
        <View
          style={{
            flex: 2,
            borderWidth: 1,
            borderTopWidth: 7,
            borderColor: '#000000',
            borderTopLeftRadius: 30,
            borderTopRightRadius: 30,
            backgroundColor: 'rgba(255, 255, 255, 0.8)',
            borderRadius: 25,
            padding: 15, justifyContent: 'center'
          }}>
          <ScrollView showsVerticalScrollIndicator={false} >
            <View style={{ borderRadius: 10, backgroundColor: '#FFFFFF', padding: 5, width: 150, alignSelf: 'center' }}>
              <Image style={{ backgroundColor: '#ffffff', padding: 5, height: 120, width: 140, alignSelf: 'center', resizeMode: 'contain', borderRadius: 15 }} source={this.state.sponserimage}></Image>

            </View>
            <Text style={{ textAlign: 'justify', justifyContent: 'center', color: '#000000', fontFamily: 'Lato-Regular', fontSize: 12, marginTop: 10 }}>{this.state.sponserinfo}</Text>



            <View style={styles.searchSection}>

              <TextInput
                placeholder="Name"
                style={{ height: 40, width: '80%' }}
                value={this.state.name}
                onChangeText={(val) => this.onChangeInputText(val, 'name')}
                underlineColorAndroid="transparent"
              />
            </View>
            <View style={styles.searchSection}>
              {/* <Icon name="user-circle" size={20} color="#000" /> */}
              <TextInput
                maxLength={10}
                placeholder="Phone"
                keyboardType={"phone-pad"}

                style={{ height: 40, width: '80%' }}
                value={this.state.phone}
                onChangeText={(val) => this.onChangeInputText(val, 'phone')}
                underlineColorAndroid="transparent"
              />
            </View>

            <View style={styles.searchSection}>
              {/* <Icon name="user-circle" size={20} color="#000" /> */}
              <TextInput
                placeholder="Email"
                keyboardType={"email-address"}

                style={{ height: 40, width: '80%' }}
                value={this.state.email}
                onChangeText={(val) => this.onChangeInputText(val, 'email')}
                underlineColorAndroid="transparent"
              />
            </View>

            <View style={styles.searchSection}>
              {/* <Icon name="user-circle" size={20} color="#000" /> */}
              <TextInput
                placeholder="Job Title"
                style={{ height: 40, width: '80%' }}
                value={this.state.jobtitle}
                onChangeText={(val) => this.onChangeInputText(val, 'jobtitle')}
                underlineColorAndroid="transparent"
              />
            </View>


            <View style={styles.searchSection}>
              {/* <Icon name="user-circle" size={20} color="#000" /> */}
              <TextInput
                placeholder="Organisation"
                style={{ height: 40, width: '80%' }}
                value={this.state.organisation}
                onChangeText={(val) => this.onChangeInputText(val, 'organisation')}
                underlineColorAndroid="transparent"
              />
            </View>

            <View style={styles.searchSection1}>
              {/* <Icon name="user-circle" size={20} color="#000" /> */}
              <TextInput
                placeholder="Comment"
                style={{ height: 80, width: '80%' }}
                value={this.state.comment}
                onChangeText={(val) => this.onChangeInputText(val, 'comment')}
                underlineColorAndroid="transparent"
              />
            </View>


            <TouchableOpacity style={{
              alignSelf: 'center',
              justifyContent: 'center',
              alignItems: "center",
              height: 50, width: 150,
              marginTop: 30,
              marginBottom:20,
              borderRadius: 25,
              backgroundColor: '#FFFFFF',
              shadowColor: '#000',
              shadowOffset: { width: 0, height: 1 },
              shadowOpacity: 0.8,
              shadowRadius: 1,
            }}
              onPress={() => this.enquireNow()}
            >
              <Text style={{ fontWeight: 'bold' }}>Enquire Now</Text>
            </TouchableOpacity>

          </ScrollView>

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
  searchSection: {
    borderColor: '#d3d3d3',
    borderWidth: 1,
    height: 50,
    marginTop: 10,
    borderRadius: 25,
    paddingLeft: 25,
    flexDirection: 'row',
    //        justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',

  },
  searchSection1: {
    borderColor: '#d3d3d3',
    borderWidth: 1,
    height: 80,
    marginTop: 10,
    borderRadius: 50,
    paddingLeft: 25,
    flexDirection: 'row',
    //        justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',

  }
});
