import { useEffect } from "react";
import * as layarPercikan from "expo-splash-screen";
import {
  useFonts,
  Roboto_400Regular,
  Roboto_700Bold,
  Roboto_900Black,
} from "@expo-google-fonts/roboto";

export const useGayaHuruf = () => {
  const [apakahHurufTerpasang] = useFonts({
    Roboto: Roboto_400Regular,
    RobotoBold: Roboto_700Bold,
    RobotoBlack: Roboto_900Black,
  });

  useEffect(() => {
    apakahHurufTerpasang && layarPercikan.hideAsync();
  }, [apakahHurufTerpasang]);

  return { apakahHurufTerpasang };
};
