import React, { Component } from "react";
import {View,Text,TouchableOpacity,TextInput,Modal,Image,Alert,StyleSheet,ScrollView} from "react-native";
import db from "../config";
import firebase from "firebase";
import {RFValue} from 'react-native-responsive-fontsize';
import MyHeader from '../components/MyHeader.js'
import { SearchBar, ListItem, Input } from "react-native-elements";
import * as ImagePicker from "expo-image-picker";
import {SafeAreaProvider} from 'react-native-safe-area-context'

export default class ExerciseScreen extends Component{

constructor(){
super()

this.state = {
userId : firebase.auth().currentUser.email,
poseName : "",
steps: "",
requestId: "",
userDocId: "",
docId: "",
image: "",
name: "",
}
}

createUniqueId() {
return Math.random().toString(36).substring(7);
}

addExercise = async (poseName,steps,image) =>{
var userId = this.state.userId;
var randomRequestId = this.createUniqueId();

db.collection('all_exercise').add({
user_Id: userId,
pose_name: poseName,
steps: steps,
request_id: randomRequestId,
date: firebase.firestore.FieldValue.serverTimestamp(),
image:image
})

this.setState({
poseName: "",
steps: "",
requestId: randomRequestId,
image:""
});

return Alert.alert("Exercise Added Successfully");

}

render(){
return(

<SafeAreaProvider style={{ flex: 1 }}>
<View style={{ flex: 0.1 }}>

<MyHeader title="Add an Exercise" navigation={this.props.navigation}/>

</View>



<SafeAreaProvider style={{ flex: 0.9 }}>
<ScrollView>
<Input

style={styles.formTextInput}
label={"Name of Exercise or Yoga pose"}
placeholder={"Name of Exercise"}
containerStyle={{ marginTop: RFValue(60) }}

onChangeText={(text) => {

this.setState({
poseName: text,
});
}}

value={this.state.poseName}

/>

<View style={{ alignItems: "center" }}>

<Input

style={styles.formTextInput}
containerStyle={{ marginTop: RFValue(30) }}
multiline
numberOfLines={5}
label={"Steps of this Exercise"}
placeholder={"Steps of this Exercise"}

onChangeText={(text) => {

this.setState({
steps: text,
});
}}

value={this.state.steps}

/>

<Input

style={styles.formTextInput}
containerStyle={{ marginTop: RFValue(30) }}
label={"Link for Image"}
placeholder={"Link for image"}

onChangeText={(text) => {

this.setState({
image: text,
});
}}

value={this.state.image}

/>

<TouchableOpacity
style={[styles.button, { marginTop: RFValue(30) }]}

onPress={() => {
this.addExercise(this.state.poseName,this.state.steps,this.state.image);

}}
>

<Text style={styles.requestbuttontxt}>Add Exercise</Text>

</TouchableOpacity>
</View>
</ScrollView>
</SafeAreaProvider>

</SafeAreaProvider>

)
}

}

const styles = StyleSheet.create({
  keyBoardStyle: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  formTextInput: {
    width: "75%",
    height: RFValue(35),
    borderWidth: 1,
    padding: 10,
    
   
  },
  ImageView:{
    flex: 0.3,
    justifyContent: "center",
    alignItems: "center",
    marginTop:20
  },
  imageStyle:{
    height: RFValue(150),
    width: RFValue(150),
    alignSelf: "center",
    borderWidth: 5,
    borderRadius: RFValue(10),
  },
  bookstatus:{
    flex: 0.4,
    alignItems: "center",

  },
  requestedbookName:{
    fontSize: RFValue(30),
    fontWeight: "500",
    padding: RFValue(10),
    fontWeight: "bold",
    alignItems:'center',
    marginLeft:RFValue(60)
  },
  status:{
    fontSize: RFValue(20),
    marginTop: RFValue(30),
  },
  bookStatus:{
    fontSize: RFValue(30),
    fontWeight: "bold",
    marginTop: RFValue(10),
  },
  buttonView:{
    flex: 0.2,
    justifyContent: "center",
    alignItems: "center",
  },
  buttontxt:{
    fontSize: RFValue(18),
    fontWeight: "bold",
    color: "#fff",
  },
  touchableopacity:{
    alignItems: "center",
    backgroundColor: "#DDDDDD",
    padding: 10,
    width: "90%",
  },
  requestbuttontxt:{
    fontSize: RFValue(20),
    fontWeight: "bold",
    color: "#fff",
  },
  button: {
    width: "75%",
    height: RFValue(60),
    justifyContent: "center",
    alignItems: "center",
    borderRadius: RFValue(50),
    backgroundColor: "#32867d",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 8,
    },
    shadowOpacity: 0.44,
    shadowRadius: 10.32,
    elevation: 16,
  },
});
