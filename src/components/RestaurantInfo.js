import React, { Component } from "react";
import { Text, View, ScrollView, Image, StyleSheet, TouchableOpacity } from "react-native";

import Stars from "components/Stars";

export default class RestaurantInfo extends Component {
  static navigationOptions = {
    title: "Restaurant Info"
  };

  addReview = () => {
      this.props.navigation.navigate('AddReview')
  }

  render() {
    const restaurant = this.props.navigation.getParam("restaurant");
    return (
      <ScrollView style={styles.root}>
        <View style={styles.infoHeader}>
          <Image
            source={{
              uri: `http://localhost:3000/images/${restaurant.image}`
            }}
            style={styles.image}
            resizeMode="contain"
          />
          <View style={styles.info}>
            <Text style={styles.name}>{restaurant.name}</Text>
            <Text style={styles.address}>{restaurant.address}</Text>
            <Stars rating={restaurant.rating} />
            <TouchableOpacity style={styles.button}>
                <Text 
                style={styles.buttonText}
                    onPress={this.addReview}
                >
                    Add Review    
                </Text> 
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
    root: {
        flex: 1,
        backgroundColor: '#FFF'
    },
    infoHeader: {
        flexDirection: 'row'
    },
    info: {
        marginTop: 20
    },
    name: {
        fontSize: 24
    },
    address: {
        color:'grey',
        marginBottom: 5
    },
    image: {
        width: 100,
        height: 100,
        margin: 20
    },
    button: {
        borderWidth: 1,
        borderColor: "#06C",
        borderRadius: 14,
        paddingHorizontal: 12,
        paddingVertical: 5,
        backgroundColor: "#fff",
        marginTop: 10
      },
      buttonText: {
        color: "#06C",
        fontSize: 12,
        textAlign: 'center'
      },
})