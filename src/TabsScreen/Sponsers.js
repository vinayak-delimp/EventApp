import React, { Component } from 'react';
import { FlatList, Alert, View, ImageBackground, Image, Text, StyleSheet } from 'react-native';

import AsyncStorage from '@react-native-community/async-storage';
import Icon from 'react-native-vector-icons/FontAwesome';
import { TouchableOpacity } from 'react-native-gesture-handler';
export default class Sponsers extends Component {

  sponsersData;
  constructor(props) {
    super(props);
    this.state = {
      dataSource: []
    };

    this.sponsersData = [

      {
        "name": "SEDI Energy",
        "info": "Sedi Energy is the renewable energy division of Waves that focuses on innovative solar solutions using flexible photovoltaic modules with rapid-deploy configurations effective in challenging environments. Using our patented deisgn and ultra-lightweight panels, we can offer a higher efficiency and better value for money for our clients",
        "image": require('../../assets/images/spnsr/sp20.png')
      },
      
      {
        "name": "Koolangkas Kreate",
        "info": "",
        "image": require('../../assets/images/spnsr/sp22.png')
      },

      {
        "name": "Area Technologies",
        "info": "Aria Technologies is a distributor of Unified Communication Solutions which include some of the world’s most popular and advanced solutions which include Ericsson-LG Enterprise, Lifesize, LANCOM Systems, SO Connect, Messages On Hold, XMedius and Jabra. We support a network of over 200 Channel Partners across Australia with sales, training, marketing, and a local engineering presence",
        "image": require('../../assets/images/spnsr/sp1.png')
      },
      {
        "name": "Australian Govenment",
        "info": "",
        "image": require('../../assets/images/spnsr/sp2.png')
      },
      {
        "name": "BOYA",
        "info": "",
        "image": require('../../assets/images/spnsr/sp3.png')
      },
      {
        "name": "CDM ICT SERVICE",
        "info": "Established in 1957 in Darwin, CDM Australia is a leading Australian-owned information and communications technology (ICT) infrastructure and services company. With national branches, CDM Australia has become one of the largest privately owned business systems groups in the nation. CDM Australia offers a full suite of ICT services, operating five market divisions, servicing both large and small corporations. CDM is a Telstra premium business and enterprise partner with over 25 years' experience delivering communications technology solutions to Telstra customers.",
        "image": require('../../assets/images/spnsr/sp4.png')
      },
      {
        "name": "Check Point Software Technologies Ltd",
        "info": "Check Point Sotiware Technologies Ltd is a leading provider of cyber security solutions to corporate enterprises and governments globally. Its solutions protect customers from 5th-generation cyber-attacks with an industry leading catch rate of malware, ransomware and other targeted attacks. Check Point offers a multilevel security architecture with our new Gen V advanced threat prevention that protects all networks, cloud and mobile operations of a business against all known attacks combined with the industry's most comprehensive and intuitive single point of control management system. Check Point protects over 100,000 organizations of all sizes. ",
        "image": require('../../assets/images/spnsr/sp5.png')
      },
      {
        "name": "AKS Civil Construction",
        "info": "",
        "image": require('../../assets/images/spnsr/sp6.png')
      },
      {
        "name": "Crown",
        "info": "",
        "image": require('../../assets/images/spnsr/sp7.png')
      },
      {
        "name": "Go Culture",
        "info": "",
        "image": require('../../assets/images/spnsr/sp8.png')
      },
      {
        "name": "Spartan First",
        "info": "partan First is an Indigenous occupational health provider that can provide expert end-to-end services tailored to the industry requirements for civil, construction, mining and government. Spartan First undertake the most comprehensive pre-employment services customised specifically to your needs",
        "image": require('../../assets/images/spnsr/sp9.png')
      }, {
        "name": "StarLeaf",
        "info": "StarLeaf is the provider of choice for delivering meeting solutions that exceed enterprise expectations of service, security, and support. StarLeaf enables seamless collaboration through intelligently engineered, reliable meeting room systems, superior video conferencing, and secure messaging. Designed and engineered by StarLeaf, the experience is intuitive and feature-rich, allowing total interoperability across all devices.",
        "image": require('../../assets/images/spnsr/sp10.png')
      },

      {
        "name": "Telstra Business Technology Center",
        "info": "Telstra   Business Technology Centre Perth North is set up to be a one-stop shop for small, medium and large business customers. Bringing together a team of highly trained staff with expertise in business trends and our leading range of technology solutions, TBTC can deliver everything from website and e-commerce platiorms to fixed broadband, mobile services & managed services. More complex technology needs requires more dedicated service and support, and we understand that in an increasingly digital world your business’s connectivity and reliability are paramount",
        "image": require('../../assets/images/spnsr/sp12.png')
      },
      {
        "name": "Third Space",
        "info": "",
        "image": require('../../assets/images/spnsr/sp14.png')
      },
      {
        "name": "Training Alliance",
        "info": "",
        "image": require('../../assets/images/spnsr/sp15.png')
      }
      , {
        "name": "Wave Australia",
        "info": "Waves Australia is a wireless integrator and part of the international Waves Group, which has been in opera on for two decades in the Radio and Satellite Communications industry primarily servicing the emergency, public safety, government, hospitality and Oil & Gas Markets. Our holistic approach on total wireless technology solutions offers customers the ease and convenience of a single point of contact while providing a comprehensive range of services and solutions, whether it is to manage existing projects or developing turnkey systems. We offer a wide range of quality products from the world's leading manufacturers. No mater what your application, Waves has a solution to fit your budget. From a simple UHF radio to a complex area wide network our expansive range ensures we have the right product fit for you.",
        "image": require('../../assets/images/spnsr/sp16.png')
      }
      ,
      {
        "name": "PILBARA META MAYA",
        "info": "Waves Australia is a wireless integrator and part of the international Waves Group, which has been in opera on for two decades in the Radio and Satellite Communications industry primarily servicing the emergency, public safety, government, hospitality and Oil & Gas Markets.",
        "image": require('../../assets/images/spnsr/sp17.png')
      },
      {
        "name": "LemonApp",
        "info": "At LemonApp, we make custom apps and high-performance websites affordable and accessible for Small to Medium Businesses and Not-For-Profit organisations without compromising on quality, user experience or ongoing support.",
        "image": require('../../assets/images/spnsr/sp21.png')
      },
      {
        "name": "PerthExpo",
        "info": "Waves Australia is a wireless integrator and part of the international Waves Group, which has been in opera on for two decades in the Radio and Satellite Communications industry primarily servicing the emergency, public safety, government, hospitality and Oil & Gas Markets.",
        "image": require('../../assets/images/spnsr/sp18.png')
      },
      {
        "name": "BOQ MIDLAND",
        "info": "Waves Australia is a wireless integrator and part of the international Waves Group, which has been in opera on for two decades in the Radio and Satellite Communications industry primarily servicing the emergency, public safety, government, hospitality and Oil & Gas Markets.",
        "image": require('../../assets/images/spnsr/sp19.png')
      },
       
      {
        "name": "Hockey Australia",
        "info": "",
        "image": require('../../assets/images/spnsr/sp23.png')
      },
      {
        "name": "Figure8",
        "info": "",
        "image": require('../../assets/images/spnsr/sp24.png')
      }, {
        "name": "Firm Construction",
        "info": "",
        "image": require('../../assets/images/spnsr/sp25.png')
      },
      {
        "name": "Fish",
        "info": "",
        "image": require('../../assets/images/spnsr/sp26.png')
      }
      , {
        "name": "Fleet Complete",
        "info": "Fleet Complete is a leading global provider of mission-critical connected technologies for fleet, asset and mobile workforce based businesses. We help solve our customers daily challenges by giving them a connected mobility platform that best suits their needs. Whether it's vehicles, mobile workers or stationary assets, we help you connect to it all.",
        "image": require('../../assets/images/spnsr/sp27.png')
      },
      {
        "name": "NIT",
        "info": "National Indigenous Times (NIT) strives to be the most comprehensive Indigenous online news site in Australia by offering rigorous reporting on the issues that affect Aboriginal and Torres Strait Islander peoples. We celebrate positive stories and achievements, advocate for reconciliation, and offer a balance of stories across news, politics, business, the arts, and sport. NIT have a strong adherence to ethical practices, including staff behaviour, the acquisition of information, attributing imagery and facts, advertising and more.",
        "image": require('../../assets/images/spnsr/nit.png')
      },
      {
        "name": "Indigenous IPA",
        "info": "",
        "image": require('../../assets/images/spnsr/sp28.png')
      },
      {
        "name": "Hockeyroos",
        "info": "",
        "image": require('../../assets/images/spnsr/sp29.png')
      },
      {
        "name": "Microsoft",
        "info": "",
        "image": require('../../assets/images/spnsr/sp30.png')
      }
      ,
      {
        "name": "THE BACKLOT",
        "info": "",
        "image": require('../../assets/images/spnsr/sp31.png')
      },
      {
        "name": "Kookaburras",
        "info": "",
        "image": require('../../assets/images/spnsr/sp32.png')
      },
      {
        "name": "Languag live",
        "info": "",
        "image": require('../../assets/images/spnsr/sp33.png')
      }
      ,
      {
        "name": "Waangara Marra Consulting",
        "info": "",
        "image": require('../../assets/images/spnsr/sp34.png')
      },
      {
        "name": "CISCO",
        "info": "Cisco is the worldwide leader in IT, networking, security and collaboration. We enable people to make powerful connections - whether in business, education, "+
        "philanthropy, or creativity. Cisco hardware, software, and service offerings are used "+
        "to create the Internet solutions that make networks possible - providing easy access to information anywhere, at any time. "+
        "\nCisco helps seize the opportunities of tomorrow by proving that amazing things can "+
        "happen when you connect the unconnected. If you can imagine it, we will build the bridge to get you there.",
        "image": require('../../assets/images/spnsr/sp35.png')
      },
      {
        "name": "SDS",
        "info": "Safety Direct Solutions leads the way as providers of quality-assured and nationally recognised training and qualifications in Workplace Safety.",
        "image": require('../../assets/images/spnsr/sp36.png')
      },
      {
        "name": "KNOWLES",
        "info": "",
        "image": require('../../assets/images/spnsr/sp37.png')
      },
      {
        "name": "Furious",
        "info": "",
        "image": require('../../assets/images/spnsr/sp38.png')
      }
,
      {
        "name": "Sista Girl",
        "info": "",
        "image": require('../../assets/images/spnsr/sp39.png')
      }





    ];

    this.state.dataSource = this.sponsersData;
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

  onViewSponser = (name) => {
    this.props.navigation.navigate('SponserInfolead', { name_: name });
  }

  onChangeInputText = (val, prop) => {
    // this.state.email = text;
    const state = this.state;
    state[prop] = val;
    this.setState(state);
  };

  onVoteNow = (id) => {

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
        imageStyle={{borderBottomLeftRadius:25,borderBottomRightRadius:25 }}
        source={require('../../assets/images/app_background.png')}
        style={styles.image}>

        <View style={{ flexDirection: 'row', borderBottomWidth: 0, width: '100%', height: 56, justifyContent: 'center' }}>

          <View style={{ alignSelf: 'center', flex: 1 }}>
            <Icon style={[{ marginLeft: 16, color: '#FFFFFF' }]} size={22} name={'bars'} onPress={() => this.onBack()} />
          </View>
          <View style={{ flex: 2, justifyContent: 'center', alignItems: 'center', textAlign: 'center', alignContent: 'center' }}>
            <Text style={{ color: '#FFFFFF', fontSize: 20, alignSelf: 'center', marginTop: 12, fontFamily: 'Lato-Bold', flex: 2 }}>Sponsors</Text>
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
            borderRadius: 25,
            marginTop:10,
            padding: 8, justifyContent: 'center'
          }}>
          <FlatList
            numColumns={3}
            showsVerticalScrollIndicator={false}

            data={this.state.dataSource}
            renderItem={({ item }) =>
              // <View style={{ height: 50 }}>
              //     <Text style={{ height: 50 }}>{item.name}</Text>
              //     <View style={{ height: 1, backgroundColor: 'gray' }}></View>
              // </View>
              <View style={{ flex: 1 }}>
                <TouchableOpacity
                  onPress={() => this.onViewSponser(item)} style={{ justifyContent: 'center', backgroundColor: '#FFFFFF', borderRadius: 10, flex: 1, padding: 5, margin: 5,flex:1 }}>
                  <Image

                    style={{ resizeMode: 'contain', height: 110, width:95, alignSelf: 'center' }}
                    source={item.image}>

                  </Image>

                </TouchableOpacity>


              </View>


            }
            keyExtractor={(item, index) => index.toString()}
          />


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
