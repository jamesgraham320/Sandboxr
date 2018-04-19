import React from "react";
import { Text, View, StatusBar, Image } from "react-native";
import { styles } from "./styles.js";
import { LinearGradient } from "expo";

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <LinearGradient colors={["FD9838", "#FC4E1F"]}>
          <StatusBar hidden={true} />
          <Text style={styles.headerText}>Teleportante</Text>
          <Image
            style={styles.iconImage}
            source={require("./Teleportante_Assets/App_Icon.png")}
          />
        </LinearGradient>
      </View>
    );
  }
}
