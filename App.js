/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import { View,
  Text,
  StyleSheet,
  TextInput,
  TouchableHighlight,
  Alert,
  YellowBox} from 'react-native';
import { createMaterialTopTabNavigator  } from 'react-navigation';
//import {Firebase} from 'firebase';
//import firebase from 'react-native-firebase';

class HomeScreen extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>This is Home! ok goof nextt!! ok </Text>
      </View>
    );
  }
}

class SettingsScreen extends React.Component {
  constructor(props) {
    super(props);
	
    this.state = {
		 firstname: '',
         lastname: '',
         classn: '',
         grade: '',
		 error: false
    }
  }

  componentDidMount(){
     /*let config = {
      apiKey: "AIzaSyBu7u1NXsPTLkjEV4NGRtxGqLt9BcgiQt0",
      authDomain: "",
      databaseURL: "https://react-native-crud-firebase.firebaseio.com/",
      projectId: "react-native-crud-firebase",
      storageBucket: "",
      messagingSenderId: "620823788564"
    };

    let app = Firebase.initializeApp(config);
    this.db = app.database();*/
	//this.ref = firebase.firestore().collection('items');
  }
 
  handleSubmit = () => {
     this.addItem(this.state.firstname,
       this.state.lastname,
       this.state.classn,
       this.state.grade);
       Alert.alert(
       'Item saved successfully'
     );

  }

  addItem =  (firstname,lastname,classn,grade) => {
	/*  this.ref.add({
      title: 'Added post by random button',
      likes: Math.floor((Math.random() * 10) + 1),
      uri: `https://picsum.photos/200/300?image=${Math.floor((Math.random() * 100) + 1)}`,
    }); */
	
     this.db.ref('/items').push({
         firstname: firstname,
         lastname: lastname,
         classn: classn,
         grade: grade,
       });
  }

  render() {
    return (
      <View style={styles.main}>
      <Text style={styles.title}>First Name</Text>
      <TextInput
        name='firstname'
        style={styles.itemInput}
        onChangeText={(text) => this.setState({firstname:text})}
        value={this.state.firstname}
      />
      <Text style={styles.title}>Last Name</Text>
      <TextInput
        name='lastname'
        style={styles.itemInput}
        onChangeText={(text) => this.setState({lastname:text})}
        value={this.state.lastname}
      />
      <Text style={styles.title}>Class</Text>
      <TextInput
        name='classn'
        style={styles.itemInput}
        onChangeText={(text) => this.setState({classn:text})}
        value={this.state.classn}
      />
      <Text style={styles.title}>Grade</Text>
      <TextInput
        name='grade'
        style={styles.itemInput}
        onChangeText={(text) => this.setState({grade:text})}
        value={this.state.grade}
      />
      <TouchableHighlight
        style = {styles.button}
        underlayColor= "white"
        onPress = {this.handleSubmit}
      >
        <Text
          style={styles.buttonText}>
          Add
        </Text>
      </TouchableHighlight>
    </View>
    );
  }
}

export default createMaterialTopTabNavigator ({
  Home: HomeScreen,
  Settings: SettingsScreen,
});

const styles = StyleSheet.create({
  main: {
    flex: 1,
    padding: 30,
    flexDirection: 'column',
    justifyContent: 'center',
    backgroundColor: '#2a8ab7'
  },
  title: {
    marginBottom: 20,
    fontSize: 25,
    textAlign: 'center'
  },
  itemInput: {
    height: 50,
    padding: 4,
    marginRight: 5,
    fontSize: 23,
    borderWidth: 1,
    borderColor: 'white',
    borderRadius: 8,
    color: 'white'
  },
  buttonText: {
    fontSize: 18,
    color: '#111',
    alignSelf: 'center'
  },
  button: {
    height: 45,
    flexDirection: 'row',
    backgroundColor:'white',
    borderColor: 'white',
    borderWidth: 1,
    borderRadius: 8,
    marginBottom: 10,
    marginTop: 10,
    alignSelf: 'stretch',
    justifyContent: 'center'
  }
});