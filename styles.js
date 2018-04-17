import { StyleSheet, PixelRatio, Dimensions } from "react-native";
import {
  responsiveHeight,
  responsiveWidth,
  responsiveFontSize
} from "react-native-responsive-dimensions";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FD9838",
    alignItems: "center",
    justifyContent: "center"
  },
  iconImage: { width: responsiveWidth(75), height: responsiveWidth(75) },
  headerText: {
    color: "#fff",
    fontSize: responsiveFontSize(6)
  }
});
