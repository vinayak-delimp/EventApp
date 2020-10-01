import React, { Component } from "react";
import { Alert, FlatList, TouchableOpacity, View, ImageBackground, Image, Text, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

export default class Speakers extends Component {
  sponsersData;
  constructor(props) {
    super(props);
    this.state = {
      dataSource: []
    };
    this.sponsersData = [
      {
        "name": "Rudi Mistry",
        "short_info": "Rudi offers a history of success spearheading all facets of management within the TBTC globally applying strong acumen and leadership talents.",

        "long_info": "Rudi offers a history of success" +
          "spearheading all facets of" +
          "management within the TBTC" +
          "globally applying strong" +
          "acumen and leadership talents." +
          "Rudi has had great success during his 10 years in role" +
          "and sets a benchmark of excellence. Most recently" +
          "Rudi has expanded his opera􀆟ons to Adelaide and is" +
          "responsible for providing overall leadership and" +
          "management of business systems and processes. Rudi" +
          "launched his career at Telstra over 20 years ago and" +
          "has spent over 15 years in increasingly senior" +
          "posi􀆟ons, finally being promoted to GM 6 years ago." +
          "He is a highly regarded General Manager and people" +
          "leader with a proven reputa􀆟on for building strong" +
          "market leading teams in the industry.",
        "post": "General Manager",
        "office": "TBTC Perth North",
        "image": require('../../assets/images/speaker/rudi.png')
      },
      {
        "name": "John O'Driscoll",
        "short_info": "John is the founder of IEBF, sparked by a desire to bridge the" +
          " divide in the technology space for indigenous businesses." +
          " John is a dynamic and outcome focused sales and management professional with over 15 years’" +
          " experience helping both growth and start up organisations with technology.",
        "long_info": "John is the founder of IEBF," +
          "sparked by a desire to bridge the" +
          "divide in the technology space for" +
          "indigenous businesses." +
          "John is a dynamic and outcome focused" +
          "sales and management professional with over 15 years’" +
          "experience helping both growth and start up organisa" +
          "tions with technology. John current manages the enterprise" +
          "team for the TBTC and a secondary role (pro" +
          "bono) as Indigenous liaison – business development." +
          "John has worked 􀆟relessly at making sure businesses" +
          "are embracing technology and using it to their full" +
          "poten􀆟al, whilst delivering solid ROI. John has" +
          "recieved numerous national awards and is highly" +
          "regarded as one of the top ICT solu􀆟ons specialists in" +
          "the country.",
        "post": "Enterprise Group Manager",
        "office": "TBTC Perth North",
        "image": require('../../assets/images/speaker/john.png')
      },
      {
        "name": "Camillo Della Maddalena",
        "short_info": "Camillo is Managing Director of" +
          " CDM Australia Established in" +
          " 1957, CDM Australia is a leading" +
          " Australian-owned information" +
          " and communications technology (ICT) infrastructure and Services Company",
        "long_info": "",
        "post": "Managing Director",
        "office": "CDM Australia",
        "image": require('../../assets/images/speaker/della.png')
      },
      {
        "name": "Marlon Samson",
        "short_info": "Marlon is passionate how unified communications and IT infrastructure can" +
          " change businesses and bring people closer. Marlon" +
          " is responsible for driving strategy and direction for our" +
          " business segment within Aria technologies including" +
          " Ericsson LG, Lancom system and Telstra services.",
        "long_info": "",
        "post": "Partner Manager",
        "office": "Area Technologies",
        "image": require('../../assets/images/speaker/marlon.png')
      },
      {
        "name": "Boyd Brown",
        "short_info": "Boyd Brown is the Regional General Manager for the Regional Australia team in WA." +
          " Boyd is focussed on customer" +
          " advocay and connecting with local, regional stakeholders and customers.",
        "long_info": "",
        "post": "Regional General Manager",
        "office": "Telstra Retail and Regional",
        "image": require('../../assets/images/speaker/boyd.png')
      },
      {
        "name": "Arun Manuel",
        "short_info": "Waves Australia is part of the Waves Group. Waves specialises" +
          " in wireless communications" +
          " handling with a prime focus on" +
          " consultancy, supply & support " +
          "services.",
        "long_info": "",
        "post": "Operations Manager",
        "office": "Waves Australia",
        "image": require('../../assets/images/speaker/arun.png')
      }
      ,


      {
        "name": "Des Headland",
        "short_info": "Des is CEO for Spartan First, " +
          "which is an Indigenous " +
          "occupational health provider " +
          "that can provide an expert, " +
          "end-to-end service to " +
          "industry and government.",
        "long_info": "",
        "post": "Chief Executive Officer",
        "office": "Spartan First",
        "image": require('../../assets/images/speaker/desh.png')
      }
      ,

      {
        "name": "Tim Fulton",
        "short_info": "Tim is the General Manager " +
          "for StarLeaf in Australia. " +
          "Tim is a passionate leader " +
          "and technology advocate " +
          "who has been driving the adoption of Video " +
          "Collaboration for the past 15+ years across APAC.",
        "long_info": "",
        "post": "General Manager",
        "office": "StarLeaf",
        "image": require('../../assets/images/speaker/tim.png')
      }

      ,
      {
        "name": "Brendon Nazar",
        "short_info": "Brendon is the Regional Sales Manager for the WA/NT " +
          "regions, Brendon has been with Fleet Complete for over " +
          "five years and has a vast technical knowledge of all " +
          "things telematics.",
        "long_info": "",
        "post": "Regional Manager WA & NT",
        "office": "Fleet Complete",
        "image": require('../../assets/images/speaker/brendon.png')
      },
      {
        "name": "Gary Gardiner",
        "short_info": "Gary has been working in the Cyber Security industry for 22 years. In this time he has worked in large financial institutions, Government System" +
          " Integrators and vendors. ",
        "long_info": "",
        "post": "Regional Manager WA & NT",
        "office": "Fleet Complete",
        "image": require('../../assets/images/speaker/gary.png')
      },
      {
        "name": "Jamie D'Arcy",
        "short_info": "Jamie is a senior executive with more than 20 years’ experience in the Telecommunications Industry. Jamie has had success, working in" +
          " both the direct sales and indirect sales channels across Telstra SME and Enterprise customers.",
        "long_info": "",
        "post": "Regional Manager WA & NT",
        "office": "Fleet Complete",
        "image": require('../../assets/images/speaker/jamie.png')
      },
      {
        "name": "Clinton Wolf",
        "short_info": "Clinton Wolf has a Bachelor of Laws (LLB) and a Bachelor of Arts (BA) from Murdoch University. Clinton has business interests in" +
          " Media,Health, Mining, Civil and Construction.",
        "long_info": "",
        "post": "Regional Manager WA & NT",
        "office": "Fleet Complete",
        "image": require('../../assets/images/speaker/clinton.png')
      },
      {
        "name": "Michelle Jenkins",
        "short_info": "An experienced business leader in Corporate and NGO positions holding Executive and CEO positions for over 25 years.",
        "long_info": "",
        "post": "Regional Manager WA & NT",
        "office": "Fleet Complete",
        "image": require('../../assets/images/speaker/jen.png')
      },
      {
        "name": "Tim Fawcett",
        "short_info": "Tim Fawcett is the head of government affairs for CISCO and part of Cisco's ANZ senior leadership team. Tim is responsible for all Cisco's government engagement activities including public policy advocacy and legislative response.",
        "long_info": "",
        "post": "Regional Manager WA & NT",
        "office": "Fleet Complete",
        "image": require('../../assets/images/speaker/ff.png')
      }
    ];


    this.state.dataSource = this.sponsersData;



  }

  onBack() {
    this.props.navigation.openDrawer();
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
      imageStyle={{ borderBottomLeftRadius: 30, borderBottomRightRadius: 30 }}

        source={require('../../assets/images/app_background.png')}
        style={styles.image}>
        <View style={{ flexDirection: 'row', borderBottomWidth: 0, width: '100%', height: 56, justifyContent: 'center' }}>

          <View style={{ alignSelf: 'center', flex: 1 }}>
            <Icon style={[{ marginLeft: 16, color: '#FFFFFF' }]} size={18} name={'bars'} onPress={() => this.onBack()} />
          </View>
          <View style={{ flex: 2, justifyContent: 'center', alignItems: 'center', textAlign: 'center', alignContent: 'center' }}>
            <Text style={{ color: '#FFFFFF', fontSize: 20, alignSelf: 'center', marginTop: 12, fontFamily: 'Lato-Bold', flex: 2 }}>Speakers</Text>
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
            marginTop: 10,
            padding: 16


          }}>
          <FlatList
            showsVerticalScrollIndicator={false}


            data={this.state.dataSource}
            renderItem={({ item }) =>

              <View
                style={{ flexDirection: 'row', borderRadius: 10, flex: 1, marginLeft: 2, marginTop: 17, marginBottom: 10, width: '100%' }}>
                <View style={{ flex: 1,height:85 }}>
                  <View style={{  }}>
                    <Image

                      style={{ padding:10, backgroundColor: '#FFFFff', borderRadius: 50, width: 90, height: 90}}
                      source={item.image}>

                    </Image>
                  </View>
                </View>
                <View style={{ flex: 2.2 }}>
                  <Text style={{ fontFamily: 'Lato-Bold', fontSize: 16, color: '#000000' }}>{item.name}</Text>

                  <View style={{ flexDirection: 'row', width: '100%', marginRight: 3 }}>
                    <Text style={{ fontSize: 13, flex: 1, color: '#000000', textAlign: 'left', fontFamily: 'Lato-Regular' }}>{item.short_info}</Text>
                  </View>
                </View>

              </View>

            }
            keyExtractor={(item, index) => index.toString()}

          />


        </View>
        {/* <View style={{ flex: 1, alignItems: 'center', marginTop: 30 }}>
            <Image
              style={{ marginTop: 10 }}
              source={require(item.image)}
            />
          </View> */}
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
