import React, { Component } from 'react';
import { Alert, View, ImageBackground, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { Text } from 'native-base';
import Icon from 'react-native-vector-icons/FontAwesome';
export default class EventInfo extends Component {

  constructor(props) {
    super(props);
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
      <ImageBackground
        imageStyle={{ borderBottomLeftRadius: 30, borderBottomRightRadius: 30 }}
        source={require('../../assets/images/app_background.png')}
        style={styles.image}>

        <View style={{ flexDirection: 'row', borderBottomWidth: 0, width: '100%', height: 56, justifyContent: 'center' }}>

          <View style={{ alignSelf: 'center', flex: 1 }}>
            <Icon style={[{ marginLeft: 16, color: '#FFFFFF' }]} size={18} name={'bars'} onPress={() => this.onBack()} />
          </View>
          <View style={{ flex: 2, justifyContent: 'center', alignItems: 'center', textAlign: 'center', alignContent: 'center' }}>
            <Text style={{ color: '#FFFFFF', fontSize: 22, alignSelf: 'center', marginTop: 12, fontFamily: 'Lato-Bold', flex: 2 }}>Event Info</Text>
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
            marginTop: 10

          }}>
          <ScrollView showsVerticalScrollIndicator={false} style={{ paddingLeft: 16, paddingRight: 16, marginBottom: 10,paddingBottom:5 }}
          >
            {/* 
            <Image

              style={{ resizeMode: 'contain', width: 120, height: 120, alignSelf: 'center' }}
              source={require('../../assets/images/logo.png')}>

            </Image> */}

            <Image
              style={{ resizeMode: 'contain', width: 160, height: 160, alignSelf: 'center' }}
              source={require('../../assets/images/eventlogo.png')}
            />
            <Text style={{ color: '#000000', fontFamily: 'Lato-Bold', fontSize: 16, marginBottom: 10 }}>IEBF2020</Text>
            <Text style={{ textAlign: 'left', fontWeight: "normal", fontSize: 13, fontFamily: 'Lato-Regular' }}>
              The key objective of IEBF2020 is to encourage and assist Indigenous business development
              and bridge the digital divide for greater access to information and technology for community
              economic development. Supported by CDM Australia and Telstra Business Technology
              Centre’s economic and social well-being objectives by showcasing a forum of cutting edge
              technology to encourage growth in Indigenous owned and run businesses. The forum is
              designed to help and support Indigenous businesses to make the most of technology, to grow
business and opportunities.{'\n'}</Text>

            <Text style={{ fontFamily: 'Lato-Bold', color: '#000000', fontSize: 16, marginBottom: 5 }}>We bring this together by the following:</Text>



            <View style={{ flexDirection: 'row' }}>
              {/* <Image source={require('../../assets/images/tick.png')} style={{ height: 10, width: 10 }}></Image> */}
              <Text style={{ marginLeft: 4 }}>
              <Image source={require('../../assets/images/tick.png')} style={{ height: 10, width: 10 }}></Image>

                <Text style={{ fontFamily: 'Lato-Bold', fontSize: 13, }}> IOT:</Text>
                <Text style={{ fontFamily: 'Lato-Regular', fontSize: 13 }}> Better connectivity through internet and voice services.{"\n"}</Text>
              </Text>

            </View>

            <View style={{ flexDirection: 'row' }}>
              <Text style={{ marginLeft: 4 }}>
              <Image source={require('../../assets/images/tick.png')} style={{ height: 10, width: 10 }}></Image>

                <Text style={{ fontFamily: 'Lato-Bold', fontSize: 13 }}> Video Conferencing:</Text>
                <Text style={{ fontFamily: 'Lato-Regular', fontSize: 13 }}> To enable more productivity and greater reach.{"\n"}</Text>
              </Text>

            </View>




            <View style={{ flexDirection: 'row' }}>
              <Text style={{ marginLeft: 4 }}>
              <Image source={require('../../assets/images/tick.png')} style={{ height: 10, width: 10 }}></Image>

                <Text style={{ fontFamily: 'Lato-Bold', fontSize: 13 }}> Security:</Text>
                <Text style={{ fontFamily: 'Lato-Regular', fontSize: 13 }}> Data security, end point security and mobile security to safeguard businesses.{"\n"}</Text>
              </Text>

            </View>




            <View style={{ flexDirection: 'row' }}>
              <Text textBreakStrategy={'simple'} style={{ marginLeft: 4 }}>
              <Image source={require('../../assets/images/tick.png')} style={{ height: 10, width: 10 }}></Image>

                <Text style={{ fontFamily: 'Lato-Bold', fontSize: 13 }}> Wireless Technology:</Text>
                <Text style={{ alignSelf: 'stretch', textAlign: 'left', fontFamily: 'Lato-Regular', fontSize: 13 }}> The power of a wireless age, greater connectivity.{'\n'}</Text>
              </Text>

            </View>



            <View style={{ flexDirection: 'row' }}>
              <Text style={{ marginLeft: 4 }}>
              <Image source={require('../../assets/images/tick.png')} style={{ height: 10, width: 10 }}></Image>

                <Text style={{ fontFamily: 'Lato-Bold', fontSize: 13 }}> AI:</Text>
                <Text style={{ fontFamily: 'Lato-Regular', fontSize: 13 }}> Artificial technology and Machine to Machine technology.{'\n'}</Text>
              </Text>

            </View>



            <View style={{ flexDirection: 'row' }}>
              <Text style={{ marginLeft: 4 }}>
              <Image source={require('../../assets/images/tick.png')} style={{ height: 10, width: 10 }}></Image>

                <Text style={{ fontFamily: 'Lato-Bold', fontSize: 13 }}> Solar Energy:</Text>
                <Text style={{ fontFamily: 'Lato-Regular', fontSize: 13 }}> Powering devices completely off the grid, using nature to power business.{'\n'}</Text>
              </Text>

            </View>



            <View style={{ flexDirection: 'row' }}>
              <Text style={{ marginLeft: 4 }}>
              <Image source={require('../../assets/images/tick.png')} style={{ height: 10, width: 10 }}></Image>

                <Text style={{ fontFamily: 'Lato-Bold', fontSize: 13 }}> Fleet Management:</Text>
                <Text style={{ fontFamily: 'Lato-Regular', fontSize: 13 }}> GPS tracking real time and asset management.{'\n'}</Text>
              </Text>

            </View>



            <View style={{ flexDirection: 'row' }}>
              <Text style={{ marginLeft: 4 }}>
              <Image source={require('../../assets/images/tick.png')} style={{ height: 10, width: 10 }}></Image>

                <Text style={{ fontFamily: 'Lato-Bold', fontSize: 13 }}> Leasing {'&'} ROI:</Text>
                <Text style={{ fontFamily: 'Lato-Regular', fontSize: 13 }}> TBTC’s offering and strategy to procure business hardware.{'\n'}</Text>
              </Text>

            </View>


            <View style={{ flexDirection: 'row' }}>
              <Text style={{ marginLeft: 4 }}>
              <Image source={require('../../assets/images/tick.png')} style={{ height: 10, width: 10 }}></Image>

                <Text style={{ fontFamily: 'Lato-Bold', fontSize: 13 }}> Grants {'&'} Technology Funds:</Text>
                <Text style={{ fontFamily: 'Lato-Regular', fontSize: 13 }}> Partnering with TBTC and finding what’s available.{'\n'}</Text>
              </Text>

            </View>



            <View style={{ flexDirection: 'row' }}>
              <Text style={{ marginLeft: 4 }}>
              <Image source={require('../../assets/images/tick.png')} style={{ height: 10, width: 10 }}></Image>

                <Text style={{ fontFamily: 'Lato-Bold', fontSize: 13 }}> Culture {'&'} Language Preservation:</Text>
                <Text style={{ fontFamily: 'Lato-Regular', fontSize: 13 }}> Using technology to fast track linguistic and preservation
for future generations.{'\n'}</Text>
              </Text>

            </View>


            <View style={{ flexDirection: 'row' }}>
              <Text style={{ marginLeft: 4 }}>
              <Image source={require('../../assets/images/tick.png')} style={{ height: 10, width: 10 }}></Image>

                <Text style={{ fontFamily: 'Lato-Bold', fontSize: 13 }}> Employment {'&'} Training:</Text>
                <Text style={{ fontFamily: 'Lato-Regular', fontSize: 13 }}> creating sustainable opportunities in training, support and meaningful pathways to business development.</Text>
              </Text>

            </View>








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
});
