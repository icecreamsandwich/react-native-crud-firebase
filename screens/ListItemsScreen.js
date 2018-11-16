
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


  componentDidMount() {
    firebase.database().ref('/items').once('value').then(snapshot => {
      // let dataContainer = [];
      // var childData = snapshot.val();
      // dataContainer.push(childData)
      this.setState({ items: snapshot.val() });
    })
}

  render() {
    const { items } = this.state;
    return (
      <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}>
        <View style={styles.itemsList}>
          {
            Object.keys(items).length > 0
              ? <ItemComponent items={items} />
              : <Text>No items</Text>
          }

              </View>
      </ScrollView>

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
