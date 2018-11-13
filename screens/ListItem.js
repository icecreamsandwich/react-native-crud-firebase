// ListItem.js

import React, { Component } from 'react';
import { View, Text, StyleSheet} from 'react-native';
// import ItemComponent from '../components/ItemComponent';

import { db } from '../config/db';

let itemsRef = db.ref('/items');



export default class ListItem extends Component {
    state = {
        items: []
    }

    componentDidMount() {
        itemsRef.on('value', (snapshot) => {
            let data = snapshot.val();
            let items = Object.values(data);
            this.setState({items});
         });
    }

    render() {
        return (
            <View>
              <Text>List Screen</Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      backgroundColor: 'green',
    }
  })
