import React from 'react';
import { TouchableOpacity, Image, StyleSheet, Text, View, ScrollView } from 'react-native';
import { createBottomTabNavigator, createAppContainer } from 'react-navigation';
import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs';
import Icon from 'react-native-vector-icons/FontAwesome';
// import LinearGradient from 'react-native-linear-gradient';
import HomeScreen from '../TabsScreen/HomeScreen';
import Notification from '../TabsScreen/Notification';
import Profile from '../TabsScreen/Profile';
import EventInfo from '../TabsScreen/EventInfo';
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import ViewMapfloor from '../TabsScreen/ViewMapfloor';
import AwardsNominee from '../TabsScreen/AwardsNominee';
import AwardsCats from '../TabsScreen/AwardsCats';
import ThankyouScreen from '../TabsScreen/ThankyouScreen';

const Stack = createStackNavigator();

function MainNavigation() {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="HomeScreen">
                <Stack.Screen name='HomeScreen' component={HomeScreen} options={{
                    title: 'Home',
                    headerStyle: {
                        backgroundColor: '#e85b3d',

                    },
                    headerTintColor: '#fff',
                    headerTitleAlign: 'center',
                    headerTitleStyle: {
                        fontWeight: 'bold',
                    },
                }} />


                <Stack.Screen name='EventInfo' component={EventInfo} options={{
                    title: 'Register',
                    headerStyle: {
                        backgroundColor: '#e85b3d',

                    },
                    headerTitleAlign: 'center',
                    headerTintColor: '#fff',
                    headerTitleStyle: {
                        fontWeight: 'bold',
                    },
                }} />


                <Stack.Screen name='ThankyouScreen' component={ThankyouScreen} options={{
                    title: 'Register',
                    headerStyle: {
                        backgroundColor: '#e85b3d',

                    },
                    headerTitleAlign: 'center',
                    headerTintColor: '#fff',
                    headerTitleStyle: {
                        fontWeight: 'bold',
                    },
                }} />


                <Stack.Screen name='AwardsNominee' component={AwardsNominee} options={{
                    title: 'Nominees',
                    headerStyle: {
                        backgroundColor: '#e85b3d',

                    },
                    headerTitleAlign: 'center',
                    headerTintColor: '#fff',
                    headerTitleStyle: {
                        fontWeight: 'bold',
                    },
                }} />


                <Stack.Screen name='AwardsCats' component={AwardsCats} options={{
                    title: 'Awards',
                    headerStyle: {
                        backgroundColor: '#e85b3d',

                    },
                    headerTitleAlign: 'center',
                    headerTintColor: '#fff',
                    headerTitleStyle: {
                        fontWeight: 'bold',
                    },
                }} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}

class FavoriteScreen extends React.Component {
    render() {
        return (

            <View>

            </View>

        );
    };
}









const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },

    text: {
        color: '#a62180',
        fontSize: 18,
        marginLeft: 20,
        fontWeight: "bold"
    },
    text1: {
        color: '#FFFFFF',
        textAlign: "center",
        fontSize: 18,
        marginLeft: 20,
        fontWeight: "bold"
    },
    simple_button: {
        width: '100%',
        height: 60,
        borderBottomWidth: .5,
        borderBottomColor: '#622570',
        alignSelf: "center",
        borderRadius: 10,
        justifyContent: 'center'


    },
    button2: {
        borderRadius: 10,
        alignItems: "center",
        height: 100,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.8,
        shadowRadius: 2,
        elevation: 5,

        marginTop: 20,
        flex: 1,
        justifyContent: "center",
        marginLeft: 5,
        marginRight: 5,
        backgroundColor: "#a62180",

    },
    button3: {
        borderRadius: 10,
        alignItems: "center",
        height: 100,
        marginTop: 20,
        flex: 1,
        justifyContent: "center",
        marginLeft: 5,
        marginRight: 5,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.8,
        shadowRadius: 2,
        elevation: 5,

        backgroundColor: "#622572",

    },
    button1: {
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.8,
        shadowRadius: 2,
        elevation: 5,

        borderRadius: 10,
        alignItems: "center",
        height: 100,
        marginTop: 20,
        flex: 1,
        justifyContent: "center",
        marginLeft: 5,
        marginRight: 5,
        backgroundColor: "#d91088",

    },
    viewPager: {

        position: "absolute",
        height: '50%',
        top: '25%',
        width: '90%',
        borderRadius: 15,

        alignSelf: "center",


    }
});

const TabNavigator = createMaterialBottomTabNavigator(
    {



        Home: {
            screen: MainNavigation,
            navigationOptions: {
                tabBarLabel: 'Home',
                tabBarIcon: ({ tintColor }) => (
                    <View>
                        <Icon style={[{ color: tintColor }]} size={25} name={'home'} />
                    </View>),
                activeColor: '#f60c0d',
                inactiveColor: '#f65a22',
                barStyle: { backgroundColor: '#622572' },
            }
        },
        Notification: {
            screen: Notification,
            navigationOptions: {
                tabBarLabel: 'Wallet',
                tabBarIcon: ({ tintColor }) => (
                    <View>
                        <Icon style={[{ color: tintColor }]} size={25} name={'notification'} />
                    </View>),
                activeColor: '#615af6',
                inactiveColor: '#46f6d7',
                barStyle: { backgroundColor: '#622572' },
            }
        },
        ProfileScreen: {
            screen: Profile,
            navigationOptions: {
                tabBarLabel: 'Profile',
                tabBarIcon: ({ tintColor }) => (
                    <View>
                        <Icon style={[{ color: tintColor }]} size={25} name={'user'} />

                    </View>),
            }
        },
    },

    {
        initialRouteName: "Home",
        activeColor: '#f0edf6',
        inactiveColor: '#226557',
        barStyle: { backgroundColor: '#e85b3d' },
    },
);

export default createAppContainer(TabNavigator);  