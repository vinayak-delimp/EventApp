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
        imageStyle={{borderBottomLeftRadius:30,borderBottomRightRadius:30 }}
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
          <Icon style={{alignSelf:'flex-end',marginRight:16}} name="sign-out" color={'#ffffff'} size={18} />
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
            marginTop:10
            
          }}>
          <ScrollView showsVerticalScrollIndicator={false} style={{ paddingLeft: 16, paddingRight: 12, marginBottom: 10 }}
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
            <Text style={{ textAlign: 'left', fontWeight: "normal", fontSize: 14, fontFamily: 'Lato-Regular' }}>
              IEBF2020 The key objective of IEBF2020 is to encourage and assist Indigenous business development
             and bridge the digital divide for greater access to information and technology for community economic development.{"\n\n"}
             Supported by CDM Australia and Telstra Business Technology Centre’s economic and social wellbeing objectives by showcasing
             a forum of cutting edge technology to encourage growth in Indigenous owned and run business.{"\n\n"}
             The forum is designed to help and support Indigenous businesses to make the most of technology to grow business and opportunities.{"\n"}
            </Text>

            <Text style={{ fontFamily: 'Lato-Bold', color: '#000000', fontSize: 16, marginBottom: 10 }}>IEBF 2020 WILL CONNECT YOU TO INSIGHTS SOLUTIONS IN:</Text>



            <View style={{ flexDirection: 'row' }}>
              <Image source={require('../../assets/images/tick.png')} style={{ height: 12, width: 12, marginTop: 7 }}></Image>
              <Text style={{ marginLeft: 8 }}>
                <Text style={{ fontFamily: 'Lato-Bold', fontSize: 14 }}>IOT: </Text>
                <Text style={{ fontFamily: 'Lato-Regular', fontSize: 14 }}> Better connectivity through internet and   voice services.{"\n"}</Text>
              </Text>

            </View>

            <View style={{ flexDirection: 'row' }}>
              <Image source={require('../../assets/images/tick.png')} style={{ height: 12, width: 12, marginTop: 7 }}></Image>
              <Text style={{ marginLeft: 8 }}>
                <Text style={{ fontFamily: 'Lato-Bold', fontSize: 14 }}>Video Conferencing: </Text>
                <Text style={{ fontFamily: 'Lato-Regular', fontSize: 14 }}> Enabling more productivity and greater reach.{"\n"}</Text>
              </Text>

            </View>




            <View style={{ flexDirection: 'row' }}>
              <Image source={require('../../assets/images/tick.png')} style={{ height: 12, width: 12, marginTop: 7 }}></Image>
              <Text style={{ marginLeft: 8 }}>
                <Text style={{ fontFamily: 'Lato-Bold', fontSize: 14 }}>Security: </Text>
                <Text style={{ fontFamily: 'Lato-Regular', fontSize: 14 }}> Data security, end point security and mobile security to safeguard your business.{"\n"}</Text>
              </Text>

            </View>




            <View style={{ flexDirection: 'row' }}>
              <Image source={require('../../assets/images/tick.png')} style={{ height: 12, width: 12, marginTop: 7 }}></Image>
              <Text textBreakStrategy={'simple'} style={{ marginLeft: 8 }}>
                <Text style={{ fontFamily: 'Lato-Bold', fontSize: 14 }}>Wireless technology: </Text>
                <Text style={{ alignSelf: 'stretch', textAlign: 'left', fontFamily: 'Lato-Regular', fontSize: 14 }}> The power of wireless age, greater connectivity.{'\n'}</Text>
              </Text>

            </View>



            <View style={{ flexDirection: 'row' }}>
              <Image source={require('../../assets/images/tick.png')} style={{ height: 12, width: 12, marginTop: 7 }}></Image>
              <Text style={{ marginLeft: 8 }}>
                <Text style={{ fontFamily: 'Lato-Bold', fontSize: 14 }}>AI: </Text>
                <Text style={{ fontFamily: 'Lato-Regular', fontSize: 14 }}> Artiﬁcial technology and Machine to Machine technology.{'\n'}</Text>
              </Text>

            </View>



            <View style={{ flexDirection: 'row' }}>
              <Image source={require('../../assets/images/tick.png')} style={{ height: 12, width: 12, marginTop: 7 }}></Image>
              <Text style={{ marginLeft: 8 }}>
                <Text style={{ fontFamily: 'Lato-Bold', fontSize: 14 }}>Solar energy and powering devices completely oﬀ the grid: </Text>
                <Text style={{ fontFamily: 'Lato-Regular', fontSize: 14 }}> Using nature to power business.{'\n'}</Text>
              </Text>

            </View>



            <View style={{ flexDirection: 'row' }}>
              <Image source={require('../../assets/images/tick.png')} style={{ height: 12, width: 12, marginTop: 7 }}></Image>
              <Text style={{ marginLeft: 8 }}>
                <Text style={{ fontFamily: 'Lato-Bold', fontSize: 14 }}>Fleet management: </Text>
                <Text style={{ fontFamily: 'Lato-Regular', fontSize: 14 }}> GPS tracking real time and asset management.{'\n'}</Text>
              </Text>

            </View>



            <View style={{ flexDirection: 'row' }}>
              <Image source={require('../../assets/images/tick.png')} style={{ height: 12, width: 12, marginTop: 7 }}></Image>
              <Text style={{ marginLeft: 8 }}>
                <Text style={{ fontFamily: 'Lato-Bold', fontSize: 14 }}>Leasing {'&'} ROI: </Text>
                <Text style={{ fontFamily: 'Lato-Regular', fontSize: 14 }}> TBTC’s oﬀering and strategy to procure business hardware.{'\n'}</Text>
              </Text>

            </View>


            <View style={{ flexDirection: 'row' }}>
              <Image source={require('../../assets/images/tick.png')} style={{ height: 12, width: 12, marginTop: 7 }}></Image>
              <Text style={{ marginLeft: 8 }}>
                <Text style={{ fontFamily: 'Lato-Bold', fontSize: 14 }}>Grants {'&'} Tec funds: </Text>
                <Text style={{ fontFamily: 'Lato-Regular', fontSize: 14 }}> Partnering with TBTC and ﬁnding what’s available.{'\n'}</Text>
              </Text>

            </View>



            <View style={{ flexDirection: 'row' }}>
              <Image source={require('../../assets/images/tick.png')} style={{ height: 12, width: 12, marginTop: 7 }}></Image>
              <Text style={{ marginLeft: 8 }}>
                <Text style={{ fontFamily: 'Lato-Bold', fontSize: 14 }}>Culture {'&'} Language preservation: </Text>
                <Text style={{ fontFamily: 'Lato-Regular', fontSize: 14 }}> Using technology to fast track linguistic {'&'} preservation for future generations.{'\n'}</Text>
              </Text>

            </View>


            <View style={{ flexDirection: 'row' }}>
              <Image source={require('../../assets/images/tick.png')} style={{ height: 12, width: 12, marginTop: 7 }}></Image>
              <Text style={{ marginLeft: 8 }}>
                <Text style={{ fontFamily: 'Lato-Bold', fontSize: 14 }}>Employment {'&'} Training: </Text>
                <Text style={{ fontFamily: 'Lato-Regular', fontSize: 14 }}> Creating sustainable opportunities in training, support and meaningful pathways to business development.</Text>
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
    backgroundColor:'#000000'
  },
});
