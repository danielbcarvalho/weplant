import React from "react";

import { StyleSheet, Text, Image, View } from "react-native";

import { getStatusBarHeight } from "react-native-iphone-x-helper";

import userPng from "../assets/daniel.png";
import colors from "../styles/colors";
import fonts from "../styles/fonts";

export function Header() {
  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.ola}>Olá,</Text>
        <Text style={styles.userName}>Daniel</Text>
      </View>
      <Image style={styles.image} source={userPng} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: 20,
    marginTop: getStatusBarHeight(),
  },
  ola: {
    fontSize: 34,
    fontFamily: fonts.text,
    color: colors.heading,
  },
  userName: {
    fontSize: 34,
    fontFamily: fonts.heading,
    color: colors.heading,
    lineHeight: 40,
  },
  image: {
    width: 70,
    height: 70,
    borderRadius: 40,
  },
});
