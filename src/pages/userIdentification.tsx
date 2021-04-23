import React, { useState } from "react";
import { StyleSheet, Text, SafeAreaView, TextInput, View } from "react-native";
import colors from "../styles/colors";
import fonts from "../styles/fonts";
import { MainButton } from "../components/MainButton";

export function UserIdentification() {
  const [input, setInput] = useState("");
  const [focused, setFocused] = useState(false);
  const [filled, setFilled] = useState(false);

  function handleInputChange(value: string) {
    setFilled(!!value); //!! transforma em booleano, se tiver valor true, senão false
    setInput(value);
  }

  function handleInputFocus() {
    console.log("log -> focuses", focused);
    setFocused(true);
  }

  function handleInputBlur() {
    console.log("log -> bluer");
    setFocused(false);
    setFilled(!!input);
  }
  console.log("log -> filled", filled);
  console.log("log -> focused", focused);
  console.log("log -> input", input);
  return (
    <SafeAreaView style={styles.container}>
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
          <MainButton text={"Confirmar"} />
        </View>
      </View>
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
