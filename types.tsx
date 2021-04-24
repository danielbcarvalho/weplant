import { StackScreenProps } from "@react-navigation/stack";

export type RootStackParamList = {
  Welcome: undefined;
  Identification: { name: string } | undefined;
  Confirmation: { name: string } | undefined;
};

export type WelcomeProps = StackScreenProps<RootStackParamList, "Welcome">;
export type IdentificationProps = StackScreenProps<
  RootStackParamList,
  "Identification"
>;
export type ConfirmationProps = StackScreenProps<
  RootStackParamList,
  "Confirmation"
>;
