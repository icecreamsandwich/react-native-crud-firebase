/* @flow */

import React, { Component } from 'react';
import {
    View,
    Text,
    StyleSheet,
    TextInput,
    TouchableHighlight
} from 'react-native';
import { db } from '../config/db';

export default class AddScreen extends Component {

  constructor(props){
    super(props);
    this.state = {
      brandName: "",
      priceRange: 200,
      brand: "",
      showBrand:false,
      isLoading:true,
      users: [],
      userDetails: [],
      name: '',
      error: false
    };
  }

  handleChange(e) {
        this.setState({
          name: e.nativeEvent.text
        });
      }
      handleSubmit() {
        addItem(this.state.name);
          AlertIOS.alert(
         'Item saved successfully'
        );
        console.log(this.state.name)
      }

      addItem =  (item) => {
          db.ref('/items').push({
              name: item
          });
      }





  render() {
    return (
      <View>
        <Text>Add Item</Text>
        
      </View>
    );
  }
}

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
