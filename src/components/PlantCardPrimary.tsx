import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";
import { RectButton, RectButtonProps } from "react-native-gesture-handler";
import { SvgUri } from "react-native-svg";

import colors from "../styles/colors";
import fonts from "../styles/fonts";

interface PlantsCardProps extends RectButtonProps {
  data: {
    name: string;
    photo: string;
  };
}

export function PlantCardPrimary({ data, ...rest }: PlantsCardProps) {
  return (
    <RectButton style={styles.container} {...rest}>
      <SvgUri uri={data.photo} width={103} height={112} />
      <Text style={styles.title}>{data.name}</Text>
    </RectButton>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    maxWidth: "45%",
    paddingVertical: 10,
    backgroundColor: colors.shape,
    margin: 10,
    alignItems: "center",
    borderRadius: 15,
  },
  title: {
    marginVertical: 16,
    fontFamily: fonts.heading,
    fontSize: 15,
    color: colors.green_dark,
  },
});
