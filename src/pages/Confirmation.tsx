import { useNavigation, useRoute } from "@react-navigation/native";
import React from "react";
import { SafeAreaView, StyleSheet, Text, View } from "react-native";
import { MainButton } from "../components/MainButton";
import colors from "../styles/colors";
import fonts from "../styles/fonts";

interface Params {
  title: string;
  subtitle: string;
  buttonTitle: string;
  icon: "smile" | "hug";
  nextScreen: string;
}

const emojis = {
  hug: "🤗",
  smile: "😃",
};

export function Confirmation() {
  const navigation = useNavigation();
  const routes = useRoute();

  const {
    title,
    subtitle,
    buttonTitle,
    icon,
    nextScreen,
  } = routes.params as Params;

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.emoji}>{emojis[icon]}</Text>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.text}>{subtitle}</Text>
        <MainButton
          title={buttonTitle}
          onPress={() => navigation.navigate(nextScreen)}
        />
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
