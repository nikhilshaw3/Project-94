import React, { Component } from "react";
import {View,Text,TouchableOpacity,TextInput,Modal,Image,Alert,StyleSheet,ScrollView} from "react-native";
import db from "../config";
import firebase from "firebase";
import {RFValue} from 'react-native-responsive-fontsize';
import MyHeader from '../components/MyHeader.js'

export default class ExerciseScreen extends Component{
render(){
return(
<View style={styles.view}>
<MyHeader title="Important Terms" navigation={this.props.navigation}/>

<Image
source={require('../assets/e.png')}
style={styles.santaImage}
/>

<ScrollView> 
<Text style={{fontWeight: 'bold',fontSize: 18,marginLeft: 10,marginTop: -5}}>This is a Fitness Guide App .
This app contains most of the exercise pose . You all can see the steps of the exercise and follow the steps .
 If you want to see the images for the exercise you can see the images where the steps are written for each exercise . You all 
 should do exercise every-day minimum for 30 minutes . Note that you all need to do warm - up before doing
 main exercise.You can also add an exercise to this app .</Text>

</ScrollView>

</View>
)
}

}

const styles = StyleSheet.create({
    subContainer: {
      flex: 1,
      fontSize: 20,
      justifyContent: "center",
      alignItems: "center",
    },
    button: {
      width: 100,
      height: 30,
      justifyContent: "center",
      alignItems: "center",
      backgroundColor: "#32867d",
      shadowColor: "#000",
      shadowOffset: {
        width: 0,
        height: 8,
      },
    },
    view:{
      flex: 1,
      backgroundColor: "#fff"
    },
    santaImage:{
        width:"50%",
        height:"40%",
        resizeMode:"stretch",
        marginTop : 100,
        alignItems: 'center',
        justifyContent: 'center',
    marginLeft: 90,
    marginTop: 10
      },
  });