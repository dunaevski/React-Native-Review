import React, { Component } from "react";
import { Text, View, StyleSheet, TouchableOpacity, Image } from "react-native";

import Stars from "components/Stars";

export default class RestaurantRow extends Component {
  state = {
    showInfo: false
  };

  infoPressed = () => {
    // this.setState({ showInfo: !this.state.showInfo });
    this.props.navigation.navigate('Info', {
      place: this.props.place
    })
  };

  render() {
    const { restaurant, index } = this.props;
    return (
      <View
        key={restaurant.name}
        style={{ backgroundColor: index % 2 === 0 ? "white" : "#F3F3F7" }}
      >
        <View style={styles.row}>
          <View style={styles.stars}>
            <Stars rating={restaurant.rating} />
          </View>

          <View style={styles.nameAddress}>
            <Text>{restaurant.name}</Text>
            <Text style={styles.addressText}>{restaurant.address}</Text>
          </View>

          <View style={styles.edges}>
            <TouchableOpacity onPress={this.infoPressed} style={styles.button}>
              <Text style={styles.buttonText}>Info</Text>
            </TouchableOpacity>
          </View>
        </View>
        {this.state.showInfo && (
          <View style={styles.info}>
            <Text>Restaurant Info</Text>
            <Image
              source={{
                uri: `http://localhost:3000/images/${restaurant.image}`
              }}
              style={{ flex: 1, height: 100 }}
              resizeMode="contain"
            />
          </View>
        )}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  row: {
    flexDirection: "row"
  },
  edges: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: 5,
    minWidth: 50
  },
  stars: {
    flex: 1,
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "flex-start",
    padding: 5,
    minWidth: 50
  },
  nameAddress: {
    flexDirection: "column",
    flex: 8,
    padding: 5
  },
  addressText: {
    color: "grey"
  },
  button: {
    borderWidth: 1,
    borderColor: "#06C",
    borderRadius: 14,
    paddingHorizontal: 12,
    paddingVertical: 5,
    backgroundColor: "#fff"
  },
  buttonText: {
    color: "#06C",
    fontSize: 12
  },
  info: {
    marginHorizontal: 40,
    marginVertical: 10,
    padding: 10,
    backgroundColor: "#fff",
    borderWidth: 1,
    borderColor: "#ddd",
    borderRadius: 4
  }
});
