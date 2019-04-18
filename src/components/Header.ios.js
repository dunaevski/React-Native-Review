import React, { Component } from "react";
import { Text, View } from "react-native";
import HeaderStyles from "styles/HeaderStyles";

export default class Header extends Component {
  render() {
    return (
      <View>
        <Text style={HeaderStyles.iOSHeader}>Restaurant Reviews</Text>
      </View>
    );
  }
}
