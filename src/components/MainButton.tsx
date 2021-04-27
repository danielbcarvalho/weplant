import React from "react";
import {
  Text,
  TouchableOpacity,
  StyleSheet,
  TouchableOpacityProps,
} from "react-native";
import colors from "../styles/colors";
import { ConfirmationProps } from "../../types";

// estende as características do botão
interface ButtonProps extends TouchableOpacityProps {
  title: string;
}

export function MainButton({ title, ...rest }: ButtonProps) {
  return (
    //{...rest} -> outras propriedades do botão. ex: onPress={}
    <TouchableOpacity style={styles.button} {...rest}>
      <Text style={styles.text}> {title} </Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    marginTop: 30,
    backgroundColor: colors.green,
    borderRadius: 15,
    paddingVertical: 15,
    paddingHorizontal: 40,
  },
  text: {
    fontSize: 24,
    color: colors.white,
    textAlign: "center",
  },
});
