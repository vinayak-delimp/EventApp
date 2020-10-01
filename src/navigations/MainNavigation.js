import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Login from '../auth/Login';
import Register from '../auth/Register';
import HomeScreen from '../TabsScreen/HomeScreen';
import AuthCheck from '../auth/AuthCheck';
import Notification from '../TabsScreen/Notification';
import Icon from 'react-native-vector-icons/FontAwesome';
import Profile from '../TabsScreen/Profile';
import EventInfo from '../TabsScreen/EventInfo';
//import TabNavigator from '../tabs/TabNavigator';
// import { createAppContainer } from 'react-navigation';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import AsyncStorage from '@react-native-community/async-storage';
import ThankyouScreen from '../TabsScreen/ThankyouScreen';
import AwardsNominee from '../TabsScreen/AwardsNominee';
import AwardsCats from '../TabsScreen/AwardsCats';
import ViewMapfloor from '../TabsScreen/ViewMapfloor';
import Sponser from '../TabsScreen/Sponsers';
import Agenda from '../TabsScreen/Agenda';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { DrawerContent } from '../DrawerContent';
import SponsersInfolead from '../TabsScreen/SponserInfolead';
import Speakers from '../TabsScreen/Speakers';
import Splash from '../Splash';
import NomineeDetail from '../TabsScreen/NomineeDetail';


//const login = false;
const Stack = createStackNavigator();

function SignInScreen() {
  return (
    // <NavigationContainer>
    <Stack.Navigator initialRouteName="Login">

      <Stack.Screen
        name="Login"
        component={Login}
        options={{
          title: 'Login',
          headerStyle: {
            backgroundColor: '#e85b3d',
          },
          headerTintColor: '#fff',
          headerTitleAlign: 'center',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }}
      />

      <Stack.Screen
        name="Register"
        component={Register}
        options={{
          title: 'Register',
          headerStyle: {
            backgroundColor: '#e85b3d',
          },
          headerTitleAlign: 'center',
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }}
      />

      {/* <Stack.Screen name='TabNavigator' component={}
        /> */}
    </Stack.Navigator>
    // </NavigationContainer>
  );
}



const HomeStack = createStackNavigator();

function MainNavigation1() {
  return (

    <HomeStack.Navigator initialRouteName="HomeScreen">



      <HomeStack.Screen name='HomeScreen' component={HomeScreen} options={{
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


      <HomeStack.Screen name='EventInfo' component={EventInfo} options={{
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


      <HomeStack.Screen name='ThankyouScreen' component={ThankyouScreen} options={{
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


      <HomeStack.Screen name='AwardsNominee' component={AwardsNominee} options={{
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


<HomeStack.Screen name='NomineeDetail' component={NomineeDetail} options={{
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


      <HomeStack.Screen name='AwardsCats' component={AwardsCats} options={{
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


      <HomeStack.Screen name='ViewMapfloor' component={ViewMapfloor} options={{
        title: 'Map Floor',
        headerStyle: {
          backgroundColor: '#e85b3d',

        },
        headerTitleAlign: 'center',
        headerTintColor: '#fff',
        headerTitleStyle: {
          fontWeight: 'bold',
        },
      }} />

      <HomeStack.Screen name='Sponsers' component={Sponser} options={{
        title: 'Map Floor',
        headerStyle: {
          backgroundColor: '#e85b3d',

        },
        headerTitleAlign: 'center',
        headerTintColor: '#fff',
        headerTitleStyle: {
          fontWeight: 'bold',
        },
      }} />


      <HomeStack.Screen name='Speakers' component={Speakers} options={{
        title: 'Map Floor',
        headerStyle: {
          backgroundColor: '#e85b3d',

        },
        headerTitleAlign: 'center',
        headerTintColor: '#fff',
        headerTitleStyle: {
          fontWeight: 'bold',
        },
      }} />




      <HomeStack.Screen name='SponserInfolead' component={SponsersInfolead} options={{
        title: 'Map Floor',
        headerStyle: {
          backgroundColor: '#e85b3d',

        },
        headerTitleAlign: 'center',
        headerTintColor: '#fff',
        headerTitleStyle: {
          fontWeight: 'bold',
        },
      }} />


      <HomeStack.Screen name='Agenda' component={Agenda} options={{
        title: 'Map Floor',
        headerStyle: {
          backgroundColor: '#e85b3d',

        },
        headerTitleAlign: 'center',
        headerTintColor: '#fff',
        headerTitleStyle: {
          fontWeight: 'bold',
        },
      }} />

    </HomeStack.Navigator>

  );
}


const Tab = createBottomTabNavigator();

function TabNavigator() {
  return (
    <Tab.Navigator initialRouteName="Home" appearance='noIndicator' tabBarOptions={{
      activeTintColor: '#FFFFFF',
       inactiveTintColor: "#d7d7d7",
        activeBackgroundColor: '#000000',
         inactiveBackgroundColor: '#000000',
         style: {borderTopWidth:0,height:65},
         tabStyle:{        paddingVertical: 8
         },
         labelStyle:{fontFamily:'Lato-Bold',paddingTop:2,fontSize:13},
         
    }} >
      {/* <Tab.Screen name="Notification" component={Notification} options={{
        tabBarLabel: 'Notification',

        tabBarIcon: ({ color, size }) => (
          <Icon name="bell" color={color} size={size} />
        ),
        tabBarStyle: { backgroundColor: '#e85b3d' },
      }} /> */}
      <Tab.Screen name="Home" component={MainNavigation1} options={{
        tabBarLabel: 'Home',




        tabBarIcon: ({ color, size }) => (
          <Icon name="home" color={color} size={28} />
        ),

      }} />

      <Tab.Screen name="Profile" component={Profile} options={{
        tabBarLabel: 'Profile',
        tabBarIcon: ({ color, size }) => (
          <Icon name="user" color={color} size={size} />
        ),
      }} />
    </Tab.Navigator>
  );
}


const Drawer = createDrawerNavigator();
function MyDrawer() {
  return (
    <Drawer.Navigator drawerContent={props => <DrawerContent {...props} />}>
      <Drawer.Screen name="Home1" component={TabNavigator} />
      <Drawer.Screen name="Home2" component={EventInfo} />
    </Drawer.Navigator>
  );
}


const MainNavigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator headerMode={false} >
        <Stack.Screen name="AuthCheck" component={AuthCheck} />
        <Stack.Screen name="Auth" component={SignInScreen} />
        <Stack.Screen name="Home" component={MyDrawer} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default MainNavigation;
