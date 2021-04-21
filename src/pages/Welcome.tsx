import React, { useState } from "react";
import {
  Text,
  SafeAreaView,
  Image,
  TouchableOpacity,
  StyleSheet,
} from "react-native";

import wateringImage from "../assets/watering.png";
import { Button } from "../components/Button";
import colors from "../styles/colors";

export function Welcome() {
  const [showImage, setShowImage] = useState(true);
  console.log("log ->", showImage);

  function image() {
    if (showImage) {
      return <Image style={styles.image} source={wateringImage} />;
    } else {
      return <Text>Imagem ocultada</Text>;
    }
  }

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>
        Gerencie {"\n"}
        suas plantas de {"\n"}
        forma fácil
      </Text>

      <Image style={styles.image} source={wateringImage} />

      <Text style={styles.body}>
        Não esqueça mais de regar suas {"\n"}
        plantas. Nós cuidamos de lembrar você {"\n"}
        sempre que precisar.
      </Text>
      <Button title=">" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "space-between",
    alignItems: "center",
  },

  title: {
    textAlign: "center",
    fontSize: 32,
    fontWeight: "bold",
    color: colors.heading,
    marginTop: 80,
  },

  image: {
    height: 285,
    width: 292,
  },

  body: {
    color: colors.body_dark,
    fontSize: 17,
    textAlign: "center",
  },
});