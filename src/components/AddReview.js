import React, { Component } from "react";
import {
  Text,
  View,
  TouchableOpacity,
  StyleSheet,
  TextInput
} from "react-native";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import Icon from "react-native-vector-icons/FontAwesome";

export default class AddReview extends Component {
  state = {
    name: "",
    rating: 0,
    comment: ""
  };

  submitReview = () => {
    fetch("http://localhost:3000/review", {
      method: "POST",
      body: JSON.stringify({
        name: this.state.name,
        rating: this.state.rating,
        comment: this.state.comment
      })
    });
  };

  render() {
    const { goBack } = this.props.navigation;
    return (
      <KeyboardAwareScrollView style={{ flex: 1, backgroundColor: "#FFF" }}>
        <View style={styles.root}>
          <TouchableOpacity onPress={() => goBack()} style={styles.button}>
            <Icon name="close" size={30} color="#06C" />
          </TouchableOpacity>

          <Text style={styles.addReview}> AddReview </Text>

          <TextInput
            style={styles.input}
            placeholder="Name (optional)"
            value={this.state.name}
            onChangeText={name => this.setState({ name })}
          />

          <Text style={styles.rating}>Your Rating:</Text>
          <View style={styles.stars}>
            {[1, 2, 3, 4, 5].map(i => {
              return (
                <TouchableOpacity
                  onPress={() => this.setState({ rating: i })}
                  style={styles.starButton}
                  key={i}
                >
                  <Icon
                    name={"star"}
                    color={this.state.rating >= i ? "#FFD64C" : "#CCC"}
                    size={40}
                  />
                </TouchableOpacity>
              );
            })}
          </View>

          <TextInput
            style={[styles.input, { height: 100 }]}
            placeholder="Review"
            value={this.state.review}
            onChangeText={review => this.setState({ review })}
            multiline={true}
            numberOfLines={6}
          />

          <TouchableOpacity
            onPress={this.submitReview}
            style={styles.submitButton}
          >
            <Text style={styles.submitButtonText}>Submit Review</Text>
          </TouchableOpacity>
        </View>
      </KeyboardAwareScrollView>
    );
  }
}

const styles = StyleSheet.create({
  root: {
    flex: 1
  },
  button: {
    paddingHorizontal: 10,
    paddingVertical: 30
  },
  addReview: {
    fontSize: 25,
    color: "#444",
    textAlign: "center",
    margin: 20
  },
  input: {
    padding: 10,
    marginVertical: 10,
    marginHorizontal: 20,
    borderColor: "#CCC",
    borderWidth: 1,
    borderRadius: 7
  },
  rating: {
    fontSize: 20,
    color: "grey",
    textAlign: "center",
    marginVertical: 40
  },
  stars: {
    marginBottom: 80,
    flexDirection: "row",
    justifyContent: "center"
  },
  starButton: {
    padding: 5
  },
  submitButton: {
    paddingVertical: 10,
    paddingHorizontal: 20,
    backgroundColor: "#06C",
    borderRadius: 7,
    marginVertical: 10,
    marginHorizontal: 20
  },
  submitButtonText: {
    fontSize: 18,
    color: "#FFF",
    textAlign: "center"
  }
});
