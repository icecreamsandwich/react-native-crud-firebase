// ItemComponent.js

import React, {Component} from 'react';
import {  View, ScrollView, Text, StyleSheet} from 'react-native';
import PropTypes from 'prop-types';

const styles = StyleSheet.create({
    itemsList: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'space-around',
    },
    itemtext: {
        fontSize: 24,
        fontWeight: 'bold',
        textAlign: 'center',
    }
});

export default class ItemComponent extends Component {

  static propTypes = {
      items: PropTypes.array.isRequired
  };

  render() {
    alert(JSON.stringify(this.props.items))
    return (
      <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}>
        <View style={styles.itemsList}>
          {/* {this.props.items.map((item, index) => {
            return (
              <View key={index}>
            <Text style={styles.itemtext}>{item.firstname}</Text>
            <Text style={styles.itemtext}>{item.lastname}</Text>
            <Text style={styles.itemtext}>{item.classn}</Text>
            <Text style={styles.itemtext}>{item.grade}</Text>
              </View>
            )
          })} */}
        </View>
      </ScrollView>
    );
  }
}
