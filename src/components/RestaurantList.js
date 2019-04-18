import React, { Component } from "react";
import axios from "axios";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  ScrollView,
  Image,
  FlatList
} from "react-native";

import Header from "components/Header";
import RestaurantRow from "components/RestaurantRow";

import PizzaImage from "images/pizza.png";

export default class RestaurantList extends Component {
  
  static navigationOptions = {
    header: null
  };

  state = {
    search: null,
    restaurants: []
  };

  componentDidMount() {
    axios
      .get("http://localhost:3000/restaurants")
      .then(result => this.setState({ restaurants: result.data }));
  }

  render() {
    return (
      <View
        style={{
          flex: 1,
          backgroundColor: "#FFFFFF"
        }}
      >
        <View
          style={{
            marginTop: 35,
            alignItems: "center"
          }}
        >
          <Image source={PizzaImage} />
        </View>

        <Header />

        <TextInput
          style={styles.input}
          placeholder="Live Search"
          onChangeText={text => {
            this.setState({ search: text });
          }}
          value={this.state.search}
        />

        <FlatList
          data={this.state.restaurants.filter(restaurant => {
            return (
              !this.state.search ||
              restaurant.name
                .toLowerCase()
                .indexOf(this.state.search.toLowerCase()) > -1
            );
          })}
          renderItem={({ item, index }) => (
            <RestaurantRow
              restaurant={item}
              index={index}
              navigation={this.props.navigation}
            />
          )}
          keyExtractor={item => item.name}
          initialNumToRender={16}
          ListHeaderComponent={<View style={{ height: 30 }} />}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  input: {
    padding: 10,
    paddingHorizontal: 20,
    fontSize: 16,
    color: "#444",
    borderBottomWidth: 1,
    borderColor: "#ddd",
    backgroundColor: "#F5F5F5"
  }
});
