import "@/global.css";
import React from "react";
import { Slot } from "expo-router";
import { ActivityIndicator, View } from "react-native";
import { useGayaHuruf } from "@/hooks/frontend/useGayaHuruf";
import { useTampilkanPengguna } from "@/hooks/backend/useTampilkanPengguna";
import useMengarahkanPengguna from "@/hooks/backend/useMengarahkanPengguna";

export default function TataLetakUtama() {
  const { apakahHurufTerpasang } = useGayaHuruf();
  const { pengguna } = useTampilkanPengguna();
  useMengarahkanPengguna(apakahHurufTerpasang, pengguna?.id);

  if (!apakahHurufTerpasang) {
    return (
      <View className="flex-1 items-center justify-center">
        <ActivityIndicator size="large" color="#000" />
      </View>
    );
  }

  return <Slot />;
}
