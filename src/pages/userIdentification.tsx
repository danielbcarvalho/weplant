import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  SafeAreaView,
  TextInput,
  View,
  Keyboard,
  TouchableWithoutFeedback,
  Alert,
} from "react-native";
import colors from "../styles/colors";
import fonts from "../styles/fonts";
import { MainButton } from "../components/MainButton";
import { useNavigation } from "@react-navigation/core";
import AsyncStorage from "@react-native-async-storage/async-storage";

export function UserIdentification() {
  const navigation = useNavigation();

  const [input, setInput] = useState("");
  const [focused, setFocused] = useState(false);
  const [filled, setFilled] = useState(false);

  function handleInputChange(value: string) {
    setFilled(!!value); //!! transforma em booleano, se tiver valor true, senão false
    setInput(value);
  }

  function handleInputFocus() {
    setFocused(true);
  }

  function handleInputBlur() {
    console.log("log -> bluer");
    setFocused(false);
    setFilled(!!input);
  }

  async function handleSubmit() {
    if (!input) return Alert.alert("Me diz como chamar você 😥");

    await AsyncStorage.setItem("@weplant:user", input);

    navigation.navigate("Confirmation");
  }
  return (
    <SafeAreaView style={styles.container}>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={styles.content}>
          <View style={styles.form}>
            <Text style={styles.emoji}>{filled ? "😄" : "😀"}</Text>
            <Text style={styles.title}>Como podemos {"\n"} chamar você?</Text>
            <TextInput
              style={[
                styles.input,
                (focused || filled) && { borderColor: colors.green },
              ]}
              placeholder="Digite um nome"
              onBlur={handleInputBlur}
              onFocus={handleInputFocus}
              onChangeText={handleInputChange}
              value={input}
            />
            <MainButton title={"Confirmation"} onPress={handleSubmit} />
          </View>
        </View>
      </TouchableWithoutFeedback>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    justifyContent: "space-around",
    alignItems: "center",
  },
  content: {
    flex: 1,
    width: "100%",
  },
  form: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },

  input: {
    height: 40,
    width: "70%",
    fontSize: 18,
    marginTop: 50,
    padding: 10,
    textAlign: "center",
    borderBottomWidth: 1,
    borderColor: colors.gray,
    color: colors.heading,
  },
  emoji: {
    fontSize: 50,
  },
  title: {
    fontSize: 24,
    lineHeight: 32,
    textAlign: "center",
    color: colors.heading,
    fontFamily: fonts.heading,
    marginTop: 20,
  },
});
