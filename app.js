import React, { Component } from 'react';
import { AppRegistry, Text, View, StyleSheet, Image, TextInput, ImageBackground, TouchableHighlight, Alert, Dimensions, ScrollView } from 'react-native';
import Constants from 'expo-constants';

let deviceHeight = Dimensions.get('window').height;
let deviceWidth = Dimensions.get('window').width;

export default class App extends Component {
state= {
  username: 'Username',
  password: 'Password',
  enter:'block',
  signUp:'none',
}
handleEnterPagePress=()=>this.setState(state =>({
  enter:'block',
  signUp:'none',
}))
handleSignUpPagePress=()=>this.setState(state =>({
  enter:'none',
  signUp:'block',
}))
render() {
        return (
            <View style={styles.container}>
<View style={{display: this.state.enter}}>
<View style={styles.contentContainer}>
<Image 
source={{uri: 'data:image/png;base64,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'}}
style={{height: 103, width: 155, marginTop: 25, margin: 10,}}/>
<Text style={styles.title}>
Wait Up No More
</Text>
<TouchableHighlight style = {styles.button1} onPress={this.handleSignUpPagePress}>
<Text style={styles.buttonText}>
Continue
</Text>
</TouchableHighlight>
</View>
</View>
<View style={{display: this.state.signUp}}>
<View style={styles.contentContainer}>
<Image 
source={{uri: 'data:image/png;base64,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'}}
style={{height: 103, width: 155, marginTop: 25, margin: 10,}}/>

<TouchableHighlight style = {styles.button1}>
<View style={styles.center}>
<Image source={{uri: 'https://uploads-ssl.webflow.com/5bddf05642686caf6d17eb58/5e2a2266b3437b674801ea32_fb.png'}}
style={{height: 20, width: 20, margin: 5,}}/>
<Text style={styles.text1}>
Connect With Facebook
</Text>
</View>
</TouchableHighlight>
<View style={styles.center}>
<Text style={styles.text2}>
or
</Text>                                                                                   </View>                                 
<TextInput style={styles.textBar} onChangeText={(username)=> 
this.setState({username})} value={this.state.username}/>

<TextInput style={styles.textBar} onChangeText={(password)=> 
this.setState({password})} value={this.state.password}/>

<TouchableHighlight style = {styles.button1} onPress={this.handleFeedPagePress}>
<Text style={styles.text1}>
Let's Get Set Up
</Text>
</TouchableHighlight>
<TouchableHighlight style = {styles.button1} onPress={this.handleEnterPagePress}>
<Text style={styles.text1}>
See Last Page
</Text>
</TouchableHighlight>
<View style={styles.center}>
<Text style={styles.text3}>
Forgot Password?
</Text>
</View>
</View>
</View>
</View>
);
    }
}

const styles = StyleSheet.create({
container: {
  height: deviceHeight,
  width: deviceWidth,
  alignItems: 'center',
  backgroundColor:'navy',
},
contentContainer: {
  height: (deviceHeight),
  width: deviceWidth, 
  alignItems: 'center',
  justifyContent: 'center',
},
button1:{
  height: 40,
  width: 250,
  backgroundColor: 'silver',
  justifyContent:'center',
  alignItems: 'center',
  margin: 5,
},
text1:{
  color: 'white',  
  fontSize: 12,
},
textBar:{
  height: 40,
  width: 250,
   backgroundColor: '#ff6961',
  justifyContent:'center',
  borderWidth: 2,
  borderRadius: 10,
  margin: 10,
  marginBottom: 20,
},

text2:{
  color: 'darkgray',  
  fontSize: 15,
},
text3:{
  color: '#0388fc',  
  fontSize: 12,
},
center: {
    justifyContent:'center',
  alignItems: 'center',
  flexDirection:'row',
},
title:{
  color: '#ff6961',
  fontWeight: 'bold',
  fontSize: 30,
}
});
