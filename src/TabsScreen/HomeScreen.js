import React, { Component } from 'react';
import {
  TouchableOpacity,
  Image, Alert,
  ImageBackground,
  StyleSheet,
  Text,
  View,
  ScrollView,
} from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';
import Icon from 'react-native-vector-icons/FontAwesome';


export default class HomeScreen extends Component {

  constructor(props) {
    super(props);

  }

  onBack = () => {

    this.props.navigation.openDrawer('OpenDrawer', { param1: "vnayak" });
  }

  onSpeakers = () => {

    this.props.navigation.navigate('Speakers');
  }

  onEventInfo = () => {

    this.props.navigation.navigate('EventInfo');
  };

  onViewMap = () => {
    this.props.navigation.navigate('Agenda');
  };

  onAgenda = () => {
    this.props.navigation.navigate('Agenda');
  }

  onVoteNow = () => {
    this.props.navigation.navigate('AwardsCats');
  };

  onSponsers = () => {
    this.props.navigation.navigate('Sponsers');
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
        imageStyle={{ borderBottomRightRadius: 30, borderBottomLeftRadius: 30 }}
        source={require('../../assets/images/app_background.png')}
        style={styles.image}>

        <View style={{ flexDirection: 'row', borderBottomWidth: 0, width: '100%', height: 56, backgroundColor: 'transparent', justifyContent: 'center' }}>
          <View style={{ alignSelf: 'center', flex: 1 }}>
            <Icon style={[{ marginLeft: 16, color: '#FFFFFF' }]} size={18} name={'bars'} onPress={() => this.onBack()} />
          </View>
          <View style={{ flex: 2, justifyContent: 'center', alignItems: 'center', textAlign: 'center', alignContent: 'center' }}>
            {/* <Text style={{ color: '#FFFFFF', fontSize: 16, alignSelf: 'center', marginTop: 12, fontFamily: 'Lato-Bold', flex: 2 }}>Home</Text> */}
          </View>
          <TouchableOpacity style={{ alignSelf: 'center', flex: 1, justifyContent: 'center', alignItems: "center" }}
            onPress={() => this.signout()}
          >
            <Icon style={{ alignSelf: 'flex-end', marginRight: 16 }} name="sign-out" color={'#ffffff'} size={18} />

            {/* <Text style={{ color: '#FFFFFF', fontSize: 16, alignSelf: 'center', marginTop: 15, paddingRight: 10, fontFamily: 'Lato-Bold', flex: 2 }}>Logout</Text> */}
          </TouchableOpacity>

        </View>
        <ScrollView style={{ flex: 1, paddingTop: 40 }}>
          <View style={{ flex: 3, alignItems: 'center', justifyContent: 'center' }}>


            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'center',
              }}>
              <TouchableOpacity
                style={{
                  justifyContent: 'center',
                  height: 95,
                  width: 95,
                  borderRadius: 75,
                  alignItems: 'center',
                  backgroundColor: '#ffffff'
                }}
                onPress={() => this.onEventInfo()}>



                <Image
                  style={{ resizeMode: 'contain', paddingTop: 10, marginTop: 5, height: 40, width: 50 }}
                  source={require('../../assets/images/event.png')}
                />
                <Text
                  style={{
                    color: '#000000',
                    fontSize: 13,
                    fontFamily: 'Lato-Bold', alignSelf: 'center',
                    marginBottom: 10,
                  }}>
                  Event Info
</Text>
              </TouchableOpacity>

              <TouchableOpacity

                onPress={() => this.onSponsers()}
                style={{
                  backgroundColor: '#fffFFF',
                  marginLeft: 40,
                  justifyContent: 'center',
                  alignItems: 'center',
                  height: 95,
                  width: 95,
                  borderRadius: 75,
                }}>


                <Image
                  style={{ resizeMode: 'contain', paddingTop: 10, marginTop: 5, height: 40, width: 50 }}
                  source={require('../../assets/images/sponsor.png')}
                />
                <Text
                  style={{
                    color: '#000000',
                    fontSize: 13,
                    fontFamily: 'Lato-Bold', alignSelf: 'center',
                    marginBottom: 10,
                  }}>
                  Sponsors
</Text>
              </TouchableOpacity>


            </View>

            <View
              style={{
                flexDirection: 'row',
                marginTop: 30,

                justifyContent: 'center',
              }}>
              <TouchableOpacity
                onPress={() => this.onAgenda()}
                style={{
                  justifyContent: 'center',
                  backgroundColor: '#FFFFFF',
                  height: 95,
                  width: 95,
                  alignItems: "center",
                  borderRadius: 75,
                }}>

                <Image
                  style={{ resizeMode: 'contain', paddingTop: 10, marginTop: 5, height: 40, width: 50 }}
                  source={require('../../assets/images/agenda.png')}
                />
                <Text
                  style={{
                    color: '#000000',
                    fontSize: 13,
                    fontFamily: 'Lato-Bold', alignSelf: 'center',
                    marginBottom: 10,
                  }}>
                  Agenda
</Text>
              </TouchableOpacity>
              <TouchableOpacity

                onPress={() => this.onSpeakers()}
                style={{
                  marginLeft: 40,
                  justifyContent: 'center',
                  backgroundColor: '#FFFFFF',
                  height: 95,
                  width: 95,
                  alignItems: "center",
                  borderRadius: 75,
                }}>

                <Image
                  style={{ resizeMode: 'contain', paddingTop: 10, marginTop: 5, height: 40, width: 60 }}
                  source={require('../../assets/images/speaker.png')}
                />
                <Text
                  style={{
                    color: '#000000',
                    fontSize: 13,
                    fontFamily: 'Lato-Bold', alignSelf: 'center',
                    marginBottom: 10,
                  }}>
                  Speakers
</Text>
              </TouchableOpacity>
            </View>


            <TouchableOpacity
              style={{
                justifyContent: 'center',
                backgroundColor: '#ffffff',
                height: 50,
                width: 150,
                borderRadius: 75,
                marginTop: 40,
                alignSelf: 'center',
                shadowColor: '#000',
                shadowOffset: { width: 0, height: 1 },
                shadowOpacity: 0.8,
                shadowRadius: 2,
                elevation: 5
              }}
              onPress={() => this.onVoteNow()}>
              <Text
                style={{
                  color: '#000000',
                  fontSize: 16,
                  fontFamily: 'Lato-Bold',
                  alignSelf: 'center',
                }}>
                Vote Now
           </Text>
            </TouchableOpacity>

          </View>

          <View style={{ flex: 1.3, alignItems: 'center' }}>
            <Text style={{
              color: '#ffffff',
              fontSize: 14,
              marginTop: 30,
              fontFamily: 'Lato-Bold',
              alignSelf: 'center',
            }}>Sponsored by</Text>
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
                color: '#FFFFFF',
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

        </ScrollView>

      </ImageBackground >
    );
  }
}
const styles = StyleSheet.create({
  image: {
    flex: 1,
    height: '100%',
    resizeMode: 'stretch',
    justifyContent: 'center',
    backgroundColor: '#000000'
  },
});
