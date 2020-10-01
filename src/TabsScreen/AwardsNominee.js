import React, { Component } from "react";
import { TouchableOpacity, FlatList, Image, ImageBackground, StyleSheet, Text, View, Alert } from 'react-native';
import { ApiCommon } from "../Apicommon";
import AsyncStorage from '@react-native-community/async-storage';
import Icon from 'react-native-vector-icons/FontAwesome';
export default class AwardsNominee extends Component {
    awardid;
    awardName;
    constructor(props) {
        super(props);
        const user_name = this.props.route.params.id_;
        this.awardid = user_name.id;
        this.awardName = user_name.name;
        this.state = {
            dataSource: [], selectedId: null
        };
    }

    componentDidMount() {

        try {
            AsyncStorage.getItem('login').then(val => {
                if (val !== null)
                    var jjbody = JSON.parse(val);
                this.access_token = jjbody.token

                this.getAwardsNominee(this.access_token);
            });

        } catch (error) {
            // Error retrieving data
        }

    }



    handleSelection = (item) => {

        this.props.navigation.navigate('NomineeDetail',{param1: item,param2:this.awardid});
        // var selectedId = this.state.selectedId

        // if (selectedId === id)
        //     this.setState({ selectedId: null })
        // else
        //     this.setState({ selectedId: id })
    }



    getAwardsNominee(access_token) {
       // this.props.navigation.navigate('ThankyouScreen');

        const options = {
            'method': 'POST',
            //   'headers': {
            //     'Content-Type': 'application/x-www-form-urlencoded'
            //   }
        };
        const url = ApiCommon.base_url + "getallnomineebycategory?token=" + access_token + "&catid=" + this.awardid;
        fetch(url, options)
            .then(response => response.json())
            .then((responseJson) => {

                //alert(JSON.stringify(responseJson));
                this.state.dataSource = responseJson.data.categories;
                this.setState(this.state);

            })
            .catch(error => console.log(error)) //to catch the errors if any   

    }


    onVoteNow = (id) => {
        // this.props.navigation.navigate('AwardsNominee',{id_ : id});
        if (this.state.selectedId == null) {
            alert("Please select one nominee");
            return;
        }
        this.state.selectedId = id;
        this.setState();

    }

    onVote = () => {
        const options = {
            'method': 'POST',
            //   'headers': {
            //     'Content-Type': 'application/x-www-form-urlencoded'
            //   }
        };
        const url = ApiCommon.base_url + "castyourvote?token=" + this.access_token + "&category_id=" + this.awardid + "&nominee_id=" + this.state.selectedId;
        console.log(url);
        fetch(url, options)
            .then(response => response.json())
            .then((responseJson) => {
                // alert(JSON.stringify(responseJson));
                if (responseJson.status === '1') {
                    this.props.navigation.navigate('ThankyouScreen');
                }
                else {
                    alert(responseJson.data.error[0]);
                }
            })
            .catch(error => console.log(error)) //to catch the errors if any   

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

            <>
                <ImageBackground imageStyle={{ borderBottomLeftRadius: 30, borderBottomRightRadius: 30 }}
                    source={require('../../assets/images/app_background.png')} style={styles.image}>
                    <View style={{ flexDirection: 'row', borderBottomWidth: 0, width: '100%', height: 56, justifyContent: 'center' }}>

                        <View style={{ alignSelf: 'center', flex: 1 }}>
                            <Icon style={[{ marginLeft: 16, color: '#FFFFFF' }]} size={18} name={'bars'} onPress={() => this.onBack()} />
                        </View>
                        <View style={{ flex: 2, justifyContent: 'center', alignItems: 'center', textAlign: 'center', alignContent: 'center' }}>
                            <Text style={{ color: '#FFFFFF', fontSize: 22, alignSelf: 'center', marginTop: 12, fontFamily: 'Lato-Bold', flex: 2 }}>Awards</Text>
                        </View>
                        <TouchableOpacity style={{ alignSelf: 'center', flex: 1, justifyContent: 'center', width: 90, alignItems: "center" }} onPress={() => this.signout()}>
                            <Icon style={{ alignSelf: 'flex-end', marginRight: 16 }} name="sign-out" color={'#ffffff'} size={18} />
                        </TouchableOpacity>

                    </View>
                    <View style={{
                        flex: 1, borderWidth: 1,
                        borderTopWidth: 7,
                        borderColor: '#000000',
                        borderTopLeftRadius: 30,
                        borderTopRightRadius: 30,
                        backgroundColor: 'rgba(255, 255, 255, 0.8)',
                        borderRadius: 30,
                        marginTop: 10,
                    }}>


                        <View style={{
                            flexDirection: 'row',
                            marginTop: 25, height: 60, justifyContent: 'center', paddingLeft: 10, paddingRight: 10, backgroundColor: 'rgba(190, 64, 58,0.9)'
                            , marginLeft: 16, marginRight: 16, borderRadius: 1
                        }}>
                            <Text style={{ flex: 1, color: '#ffffff', fontFamily: 'Lato-Regular', fontSize: 16, alignSelf: 'center' }}>Award Name: </Text>
                            <Text style={{ flex: 2, color: '#FFFFFF', fontSize: 16, fontFamily: 'Lato-Regular', alignSelf: 'center' }}>{this.awardName}</Text>
                        </View>

                        <Text style={{ marginLeft: 20, marginTop: 20, color: '#000000', fontFamily: 'Lato-Bold', fontSize: 18 }}>Nominees are:</Text>

                        <FlatList
                            style={{ marginLeft: 16, marginRight: 16, marginBottom: 16, marginTop: 10 }}
                            data={this.state.dataSource}

                            renderItem={({ item }) =>
                                <TouchableOpacity

                                    // for single item
                                    onPress={() => this.handleSelection(item)}
                                    style={item.id === this.state.selectedId ? styles.selected : styles.default}

                                >
                                    <View style={{

                                        elevation: 5, flexDirection: 'row', justifyContent: 'center'
                                    }}>
                                        <View style={{ flex: 1 }}>
                                            <Image

                                                style={{ resizeMode: 'cover', width: '100%', height: '100%' }}
                                                defaultSource={{ uri: 'https://i2.wp.com/www.winhelponline.com/blog/wp-content/uploads/2017/12/user.png?fit=256%2C256&quality=100&ssl=1' }}
                                                source={{ uri: item.image ? item.image : 'https://i2.wp.com/www.winhelponline.com/blog/wp-content/uploads/2017/12/user.png?fit=256%2C256&quality=100&ssl=1' }} />

                                        </View>

                                        <View style={{ flex: 2.5, paddingBottom: 5 }}>
                                            <Text style={item.id === this.state.selectedId ? styles.selectedText : styles.defaultText} >{item.name}</Text>
                                            <Text numberOfLines={5} style={item.id === this.state.selectedId ? styles.selectedDescText : styles.defaultDescText} >{item.description}</Text>

                                        </View>


                                    </View>
                                </TouchableOpacity>
                            } />


                        {/* <TouchableOpacity style={{ justifyContent: 'center', marginBottom: 30, backgroundColor: '#ffffff', height: 50, width: 120, borderRadius: 50, alignSelf: 'center' }}
                            onPress={() => this.onVote()}>
                            <Text style={{ color: '#000000', fontSize: 16, fontWeight: 'bold', alignSelf: "center" }}>Vote now</Text>
                        </TouchableOpacity> */}


                    </View>



                </ImageBackground>
            </>
        );
    }
}


const styles = StyleSheet.create({
    image: {
        flex: 1,
        resizeMode: "cover",
        justifyContent: "center",
        backgroundColor: '#000000'
    },
    selected: {
        backgroundColor: 'rgba(190, 64, 58,0.9)',
        width: '100%',
        paddingRight: 16,

        justifyContent: 'center', flex: 1, margin: 5, alignSelf: 'center'
    },
    default: {
        backgroundColor: '#ffffff',
        paddingRight: 16,
        width: '100%',
        justifyContent: 'center', backgroundColor: '#ffffff', flex: 1, margin: 5, alignSelf: 'center'

    },
    selectedText: {
        color: '#FFFFFF',
        fontSize: 16, flex: 1,
        paddingRight: 10,
        paddingLeft: 10,
        fontFamily: 'Lato-Bold'


    }

    ,
    defaultText: {
        color: '#000000',
        fontSize: 16,
        flex: 1,
        fontFamily: 'Lato-Bold',
        paddingRight: 10,
        paddingLeft: 10,



    },

    selectedDescText: {
        color: '#FFFFFF',
        fontSize: 14, flex: 1,
        paddingRight: 16,
        paddingLeft: 16,
        fontFamily: 'Lato-Regular',


    }

    ,
    defaultDescText: {
        color: '#000000',
        fontSize: 14,
        flex: 1,
        fontFamily: 'Lato-Regular',
        paddingRight: 10,
        paddingLeft: 10,



    }
});