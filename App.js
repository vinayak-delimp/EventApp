/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { Component } from 'react';
import AsyncStorage from '@react-native-community/async-storage';
import {
  
  
  View,
  
} from 'react-native';

// import {
//   Header,
//   LearnMoreLinks,
//   Colors,
//   DebugInstructions,
//   ReloadInstructions,
// } from 'react-native/Libraries/NewAppScreen';

import MainNavigation from './src/navigations/MainNavigation';
import OneSignal from 'react-native-onesignal';
import Icon from 'react-native-vector-icons/FontAwesome';


// export default function App() {
  export default class App extends Component {

    constructor(properties)
    {
      super(properties);
      Icon.loadFont();
      OneSignal.setLogLevel(6, 0);
  // Replace 'YOUR_ONESIGNAL_APP_ID' with your OneSignal App ID.
  OneSignal.init("13867e32-9561-4468-9bfa-8d3b12569066", {kOSSettingsKeyAutoPrompt : true, kOSSettingsKeyInAppLaunchURL: false, kOSSettingsKeyInFocusDisplayOption:2});
  OneSignal.inFocusDisplaying(2); // Controls what should happen if a notification is received while the app is open. 2 means that the notification will go directly to the device's notification center.
  
  // The promptForPushNotifications function code will show the iOS push notification prompt. We recommend removing the following code and instead using an In-App Message to prompt for notification permission (See step below)
  // OneSignal.promptForPushNotificationsWithUserResponse(myiOSPromptCallback);

   OneSignal.addEventListener('received', this.onReceived);
   OneSignal.addEventListener('opened', this.onOpened);
   OneSignal.addEventListener('ids', this.onIds);
  }
  

    async componentDidMount() {
      OneSignal.addEventListener('received', this.onNotificationReceived);
      OneSignal.addEventListener('opened', this.onNotificationOpened);
      OneSignal.addEventListener('ids', this.onIdsAvailable);
//        OneSignal.addEventListener('subscription', this.onSubscriptionChange);
//        OneSignal.addEventListener('permission', this.onPermissionChange);
      OneSignal.addEventListener('emailSubscription', this.onEmailSubscriptionChange);
      OneSignal.addEventListener('inAppMessageClicked', this.onInAppMessageClicked);
  }

  onReceived(notification) {
    console.log("Notification received: ", notification);
  }

  onOpened(openResult) {
    console.log('Message: ', openResult.notification.payload.body);
    console.log('Data: ', openResult.notification.payload.additionalData);
    console.log('isActive: ', openResult.notification.isAppInFocus);
    console.log('openResult: ', openResult);
  }

  onIds(device) {
    
    console.log('Device info: ', device);
    AsyncStorage.setItem("device_token",device.userId);
    // alert(JSON.stringify(device));
    
  }
  render(){
    return <MainNavigation/>
  }
  
}

