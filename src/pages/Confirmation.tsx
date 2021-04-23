import React from "react";
import { SafeAreaView, StyleSheet, Text, View } from "react-native";
import { MainButton } from "../components/MainButton";
import colors from "../styles/colors";
import fonts from "../styles/fonts";

export function Confirmation() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.emoji}>😄</Text>
        <Text style={styles.title}>Prontinho</Text>
        <Text style={styles.text}>
          Agora vamos começar a cuidar das suas {"\n"} plantinhas com muito
          cuidado.
        </Text>
        <MainButton text="Começar" />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "space-around",
  },
  content: {},
  emoji: {
    fontSize: 50,
    textAlign: "center",
  },
  title: {
    fontSize: 32,
    fontFamily: fonts.heading,
    textAlign: "center",
    color: colors.heading,
    lineHeight: 38,
    marginTop: 15,
  },
  text: {
    fontFamily: fonts.text,
    textAlign: "center",
    fontSize: 17,
    paddingVertical: 20,
    color: colors.heading,
  },
});
