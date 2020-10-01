import React,{ Component } from "react";
import { ImageBackground ,StyleSheet} from "react-native";

export default class Splash extends Component{
    constructor(props)
    {
        super(props);

    }

    render(){
        return(

            <ImageBackground source={require('../assets/images/splash.png')}
            style={styles.image}>

            </ImageBackground>
        );
    }
}

const styles = StyleSheet.create({
    image: {
      flex: 1,
      resizeMode: 'cover',
      justifyContent: 'center',
    },
  });