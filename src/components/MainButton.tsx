import React from "react";
import { Text, TouchableOpacity, StyleSheet } from "react-native";
import colors from "../styles/colors";

interface ButtonProps {
  text: string;
}

export function MainButton({ text }: ButtonProps) {
  return (
    <TouchableOpacity style={styles.button}>
      <Text style={styles.text}> {text} </Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    marginTop: 50,
    backgroundColor: colors.green,
    borderRadius: 15,
    paddingVertical: 15,
    paddingHorizontal: 60,
  },
  text: {
    fontSize: 24,
    color: colors.white,
    textAlign: "center",
  },
});
