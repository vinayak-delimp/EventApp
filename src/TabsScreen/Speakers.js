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
        "name": "John O'Driscoll",
        "long_info": "John is the founder of IEBF, sparked by a desire to bridge the" +
          " divide in the technology space for indigenous businesses." +
          " John is a dynamic and outcome focused sales and management professional with over 15 years’" +
          " experience helping both growth and start up organisations with technology.",
        "short_info": "John is the founder of IEBF, sparked by a desire to bridge the divide in the technology space for Indigenous businesses. John is a dynamic and outcome focused sales and management professional with over 15 years’ experience helping both growth and start up organisations with technology. John currently manages the enterprise team for the TBTC and a secondary role (probono) as Aboriginal Engagement - Business Development. John has worked tirelessly at making sure businesses are embracing technology and using it to their full potential, whilst delivering solid ROI. John has received numerous national awards and is highly regarded in the ICT industry.",
        "post": "Enterprise Group Manager",
        "office": "TBTC Perth North",
        "image": require('../../assets/images/speaker/john.png')
      },
      {
        "name": "Rudi Mistry",
        "long_info": "Rudi offers a history of success spearheading all facets of management within the TBTC globally applying strong acumen and leadership talents.",

        "short_info": "Rudi offers a history of success " +
          "spearheading all facets of " +
          "management within the TBTC " +
          "globally applying strong " +
          "acumen and leadership talents. " +
          "Rudi has had great success during his 10 years in role " +
          "and sets a benchmark of excellence. Most recently " +
          "Rudi has expanded his operations to Adelaide and is " +
          "responsible for providing overall leadership and " +
          "management of business systems and processes. Rudi " +
          "launched his career at Telstra over 20 years ago and " +
          "has spent over 15 years in increasingly senior " +
          "positions, finally being promoted to GM 6 years ago. " +
          "He is a highly regarded General Manager and people " +
          "leader with a proven reputation for building strong " +
          "market leading teams in the industry.",
        "post": "General Manager",
        "office": "TBTC Perth North",
        "image": require('../../assets/images/speaker/rudi.png')
      },
      {
        "name": "Camillo Della Maddalena",
        "short_info": "Camillo is Managing Director of CDM Australia Established in 1957, CDM Australia is a leading Austrlian - owned information and" +
          " communications technology (ICT) infrastructure and Services Company. With national branches, CDM Austra- lia has become one of the largest privately owned business systems groups in the nation. CDM Australia offers a full suite of ICT services, operating five market divisions, servicing both large and small corporations. CDM is a Telstra premium business and enterprise partner with over 25 years’ experience delivering communication technology solutions to Telstra customers.",
        "long_info": "",
        "post": "Managing Director",
        "office": "CDM Australia",
        "image": require('../../assets/images/speaker/della.png')
      },
      {
        "name": "Jamie D'Arcy",
        "short_info": "Jamie is a senior executive with more than 20 years’ experience in the " +
          "Telecommunications Industry. Jamie has had success, working in " +
          "both the direct sales and indirect sales channels across Telstra SME and Enterprise customers. " +
          "A reputation for building high performance sales teams with a proven ability to deliver profitable " +
          "revenue and market share growth. Jamie has a record of delivering business results whilst successfully " +
          "implementing organisational change. Jamie is an executive with strong engagement skills coupled with an ability " +
          "to develop and implement initiatives to transform sales, revenue and customer satisfaction results.",
        "long_info": "",
        "post": "Regional Manager WA & NT",
        "office": "Fleet Complete",
        "image": require('../../assets/images/speaker/jamie.png')
      },
      {
        "name": "Michelle Jenkins",
        "short_info": "An experienced business leader in Corporate and NGO positions holding Executive and CEO positions for over 25 years. " +
          "Michelle has worked with the Corporate and NGO sector and has sat on Government NFP and Corporate Boards both in Australia" +
          " and the UK, with experience in Strategy, Finance and Acquisitions/Mergers and Governance. Michelle was a Finalist in the Telstra Business Women's Award 2019. In her spare time, Michelle is a Justice of the " +
          "Peace, a Marriage Celebrant and Board Director of Bizlink, who support individuals with a disability in employment. Michelle is also passionate about supporting women into leadership roles and in mentoring and coaching future female leaders. " +
          "Michelle holds a Master's in Business Leadership, Diploma of Management and financial planning qualifications in Australia and UK.",
        "long_info": "",
        "post": "Regional Manager WA & NT",
        "office": "Fleet Complete",
        "image": require('../../assets/images/speaker/jen.png')
      },
      {
        "name": "Tim Fawcett",
        "short_info": "Tim Fawcett is the head of government affairs for CISCO and part of Cisco's ANZ senior leadership team. " +
          "Tim is responsible for all Cisco's government engagement activities including public policy advocacy and legislative response. " +
          "Tim also leads development and implementation of Cisco's $100m national engagement plan and is an executive sponsor for a major Cisco account. Tim is  a passionate advocate for inclusion and diversity which he believes is essential for a modern, sustainable business. " +
          "Tim is a director of the Diversity Council Australia and Chair of its information technology committee. " +
          "Tim was formerly a director of Launchvic, the Victorian Government's lead and enterpreneur and start up support agency, and was chair of its audit, risk and governance committee. " +
          "Tim was formerly Deputy Chair of the advisory board for the University of Melbourne's Networked Society institute. " +
          "Tim supports cancer research not for profit the Snowdome Foundation and is former Vice President of the Make a Difference Foundation. " +
          "Tim holds a Master of Public Policy from the Australian National University and a Bachelor of Arts and Honours from La Trobe University. ",
        "long_info": "",
        "post": "Regional Manager WA & NT",
        "office": "Fleet Complete",
        "image": require('../../assets/images/speaker/ff.png')
      }
      ,
      {
        "name": "Marlon Samson",
        "short_info": "With over 20 years’ experience both local and international in the Telecommunications industry, Marlon is passionate how unified communications and IT infrastructure can" +
          " change businesses and bring people closer. Marlon" +
          " is responsible for driving strategy and direction for our" +
          " business segment within Aria technologies including" +
          " Ericsson LG, Lancom system and Telstra services. Marlon has history of running channels and working with market trends. Marlon has worked with the following systems Ericsson LG, Mitel, Shoretel, Cisco, Aastra, Starleaf and Lancom network and WiFi systems. " +
          "Marlon's newest passion is SO Connect and SDN.",
        "long_info": "",
        "post": "Partner Manager",
        "office": "Area Technologies",
        "image": require('../../assets/images/speaker/marlon.png')
      },
      {
        "name": "Boyd Brown",
        "short_info": "Boyd Brown is the Regional General Manager for the Regional Australia team in WA. Boyd is focussed on customer advocay and connecting " +
          "with local, regional stakeholders and customers. Boyd works with his local team on a wide portfolio including infrastructure, local marketing, technology & regional customer service. Boyd delivers strong community and business outcomes within WA's Regional markets. Boyd works hard strengthen Telstra’s regional connections by improving regional coverage and service through technology, collaboration and capability.",
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
          "services. Waves full service approach on total wireless technology solutions offers customers the ease and convenience of a single point of contact while provid- ing a comprehensive range of services and solutions, whether it is to manage existing projects or developing Turnkey Systems.",
        "long_info": "",
        "post": "Operations Manager",
        "office": "Waves Australia",
        "image": require('../../assets/images/speaker/arun.png')
      }
      ,
      {
        "name": "Gary Gardiner",
        "short_info": "Gary has been working in the Cyber Security industry for 22 years. In this time he has worked in large financial institutions, Government System" +
          " Integrators and vendors. During this time he has done digital forensics for law enforcement, Penetra on testing and audits. Gary now manages the pre sales engineering team for Check Point Software covering the APAC and Japan region.",
        "long_info": "",
        "post": "Regional Manager WA & NT",
        "office": "Fleet Complete",
        "image": require('../../assets/images/speaker/gary.png')
      },
      {
        "name": "Clinton Wolf",
        "short_info": "Clinton Wolf has a Bachelor of Laws (LLB) and a Bachelor of Arts (BA) from Murdoch University. Clinton has business interests in" +
          " Media,Health, Mining, Civil and Construction. Clinton is currently Chairman of iContracting Pty Ltd, Executive Chairman of Spartan First Health and Managing Director of the National Indigenous Times. Passionate about Indigenous Education Clinton is non Executive Director of Madalah, which provides scholarships to Indigenous secondary and tertiary students.",
        "long_info": "",
        "post": "Regional Manager WA & NT",
        "office": "Fleet Complete",
        "image": require('../../assets/images/speaker/clinton.png')
      },
      {
        "name": "Des Headland",
        "short_info": "Des is CEO for Spartan First, " +
          "which is an Indigenous " +
          "occupational health provider " +
          "that can provide an expert, " +
          "end-to-end service to " +
          "industry and government. Community engagement and empowering our youth has given Des fantastic opportunities to represent some amazing organistions as ambassadorial and Paton roles. Des had an AFL career spanning over 12 years with the Brisbane lions and the Fremantle Dockers, earning a premiership with the Brisbane Lions before making a switch back home to WA.",
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
          "Collaboration for the past 15+ years across APAC. When successfully deployed video collaboration helps changes the way people live their lives, having positive impacts on communities, businesses and individuals.",
        "long_info": "",
        "post": "General Manager",
        "office": "StarLeaf",
        "image": require('../../assets/images/speaker/tim.png')
      }

      ,
      {
        "name": "Brendon Nazar",
        "short_info": "Brendon is the Regional Sales Manager for the WA/NT regions, Brendon has been with Fleet Complete for over five years and " +
          "has a vast technical knowledge of all things telemaics. With over 20 years sales experience, Brendon has had the opportunity to work with some of the largest companies both nationally and lobaly, and continues to do so today. Brendon is a dedicaed business professional who takes pride in delivering the correct solution for his clients",
        "long_info": "",
        "post": "Regional Manager WA & NT",
        "office": "Fleet Complete",
        "image": require('../../assets/images/speaker/brendon.png')
      },





      {
        "name": "Dinali David",
        "short_info": "Dinali is CEO of Domini Global Business Services, Managing Director of LeamonApp Australia, "+
         "Director for GACS Australia and serves as an Executive Director for DAPA Australia and the Director for DAPA Australia and the AWS Institute of Education. "+
         "Dinali is also GMCx of Australia-Israel Chamber of Commerce (WA) and Vice President of the Voice over Festival of Performing Arts and a former Artistic Director of The Colombo Music Festival. Dinali earned her Executive MBA at "+
         "Quantic School of Business and Technology, Washington USA and her BBA in Management and Marketing from Northwood University in Michigan USA alongside diplomas in "+
         "Vocal Music, Leadership and Entrepreneurship. Dinali is known for her transformative approach to business growth and customer success and her expertise in business transformation, leadership, coaching and talent development. "  ,
        "long_info": "",
        "post": "Regional Manager WA & NT",
        "office": "Fleet Complete",
        "image": require('../../assets/images/speaker/din.png')
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
                <View style={{ height: 75, width: "21%" }}>

                  <Image

                    style={{ width: 75, height: 75 }}
                    source={item.image}>

                  </Image>

                </View>
                <View style={{ marginLeft: 10, width: "79%" }}>
                  <Text style={{ fontFamily: 'Lato-Bold', fontSize: 16, color: '#000000' }}>{item.name}</Text>

                  <View style={{ marginRight: 3, width: "100%" }}>
                    <Text style={{ width: "95%", fontSize: 13, flex: 1, color: '#000000', textAlign: 'left', fontFamily: 'Lato-Regular' }}>{item.short_info}</Text>
                  </View>
                </View>

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
    backgroundColor: '#000000'
  },
});
