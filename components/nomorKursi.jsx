import React from "react";
import { useRouter } from "expo-router";
import { View, Text, TouchableOpacity } from "react-native";

export default function NomorKursi() {
  const pengarah = useRouter();

  return (
    <View className="m-4 bg-white rounded-lg shadow-sm">
      <Text className="px-4 pt-4" style={{ fontFamily: "RobotoBold" }}>
        Nomor Kursi
      </Text>
      <TouchableOpacity
        activeOpacity={0.7}
        onPress={() => pengarah.push("/screens/pilihKursi")}
        className="m-4 p-4 border rounded-lg border-gray-300 flex-row items-center justify-between"
      >
        <Text className="text-[#94A3B8]" style={{ fontFamily: "RobotoBold" }}>
          Nomor Kursi
        </Text>
        <Text className="text-[#94A3B8]" style={{ fontFamily: "RobotoBold" }}>
          Pilih Nomor Kursi
        </Text>
      </TouchableOpacity>
    </View>
  );
}
