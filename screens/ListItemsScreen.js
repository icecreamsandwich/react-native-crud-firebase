
import React, {Component} from 'react';
import { View, ScrollView, Text, StyleSheet} from 'react-native';

import firebase from 'firebase';
import ItemComponent from '../components/ItemComponent';

export default class ListItemsScreen extends Component {

  constructor(props) {
    super(props);
    this.state = {
		 items: []
    }
  }


  componentWillMount() {
    // Initialize Firebase
     var config = {
       apiKey: "AIzaSyBu7u1NXsPTLkjEV4NGRtxGqLt9BcgiQt0",
       authDomain: "react-native-crud-firebase.firebaseapp.com",
       databaseURL: "https://react-native-crud-firebase.firebaseio.com",
       projectId: "react-native-crud-firebase",
       storageBucket: "react-native-crud-firebase.appspot.com",
       messagingSenderId: "620823788564"
     };
    var db = firebase.initializeApp(config);
    var dbRef = db.database().ref('/items');
    dbRef.once('value').then(snapshot => {
      this.setState({ items: snapshot.val() })
    })
}

  render() {
    return (
      // <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}>
        <View style={styles.getStartedContainer}>
          {
            this.state.items.length > 0
              ? <ItemComponent items={this.state.items} />
              : <Text>No items</Text>
          }

        </View>
      // </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
      flex: 1,
      backgroundColor: '#fff',
    },
  getStartedContainer: {
      alignItems: 'center',
      marginHorizontal: 50,
    },
  });
