import React, { Component } from "react";
import { Text, View, StyleSheet } from "react-native";

import Icon from "react-native-vector-icons/FontAwesome5";

export default class About extends Component {
  render() {
    return (
      <View style={{ flex: 1, padding: 40 }}>
        <Text style={styles.header}> About Restaurant Review </Text>

        <Icon name="utensils" color="#06C" size={100} style={styles.icon} />

        <Text style={styles.text}>
          Et est culpa ea sunt ex. Non est ea officia ad sint ut tempor amet
          dolore mollit dolor laboris minim minim. Esse cillum cupidatat
          proident aliquip eu.
        </Text>

        <Text style={styles.text}>
          Do incididunt eiusmod culpa nulla tempor nostrud aliqua voluptate
          reprehenderit sint nisi est. Officia labore ad do magna non ipsum
          anim. Exercitation ad excepteur velit ad exercitation sint.
          Adipisicing exercitation ex labore sit proident nulla duis nulla id
          tempor magna adipisicing consequat. Ea laboris esse mollit qui ad
          nisi.
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  header: {
    marginVertical: 20,
    textAlign: "center",
    fontSize: 20
  },
  icon: {
    marginVertical: 20,
    alignSelf: "center"
  },
  text: {
    fontSize: 14,
    color: "#444",
    marginTop: 20
  }
});
