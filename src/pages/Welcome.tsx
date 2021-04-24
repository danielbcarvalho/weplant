import { useNavigation } from "@react-navigation/core";
import React from "react";
import {
  Text,
  SafeAreaView,
  Image,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
} from "react-native";

import {IdentificationProps} from '../../types'

import wateringImage from "../assets/watering.png";
import colors from "../styles/colors";
import fonts from "../styles/fonts";


export function Welcome() {

  const navigation = useNavigation()

  function handleStart() {
    navigation.navigate('UserIdentification')
  }

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>
        Gerencie {"\n"}
        suas plantas de {"\n"}
        forma fácil
      </Text>

      <Image style={styles.image} source={wateringImage} resizeMode="contain" />

      <Text style={styles.body}>
        Não esqueça mais de regar suas {"\n"}
        plantas. Nós cuidamos de lembrar você {"\n"}
        sempre que precisar.
      </Text>
      <TouchableOpacity
        style={styles.button}
        onPress={handleStart}
      >
        <Text style={styles.buttonText}>></Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "space-around",
    alignItems: "center",
  },

  title: {
    textAlign: "center",
    fontSize: 32,
    fontWeight: "bold",
    color: colors.heading,
    marginTop: 80,
    fontFamily: fonts.heading,
    lineHeight: 34,
  },

  image: {
    height: Dimensions.get("window").width * 0.7,
  },

  body: {
    color: colors.body_dark,
    fontSize: 19,
    textAlign: "center",
    fontFamily: fonts.text,
  },
  button: {
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: colors.green,
    borderRadius: 15,
    height: 66,
    width: 66,
    marginBottom: 20,
  },

  buttonText: {
    color: "white",
    fontSize: 30,
  },
});
