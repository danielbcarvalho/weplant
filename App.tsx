import "react-native-gesture-handler";
import React, { useEffect } from "react";
import {
  useFonts,
  Jost_400Regular,
  Jost_600SemiBold,
} from "@expo-google-fonts/jost";
import AppLoading from "expo-app-loading";

import * as Notifications from "expo-notifications";

import Routes from "./src/routes";
import { PlantProps } from "./src/libs/storage";

export default function App() {
  const [fontsLoaded] = useFonts({
    Jost_400Regular,
    Jost_600SemiBold,
  });

  useEffect(() => {
    // const subscription = Notifications.addNotificationReceivedListener(
    //   async (notification) => {
    //     const data = notification.request.content.data.plant as PlantProps;
    //     console.log("log ->", data);
    //   }
    // );
    // return () => subscription.remove();
    Notifications.cancelAllScheduledNotificationsAsync();
    console.log("log -> sers");
  }, []);

  if (!fontsLoaded) {
    return <AppLoading />;
  }

  return <Routes />;
}
