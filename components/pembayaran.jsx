import React from "react";
import { useRouter } from "expo-router";
import { Ionicons } from "@expo/vector-icons";
import { View, Text, TouchableOpacity } from "react-native";
import useTampilkanKeranjang from "@/hooks/backend/useTampilkanKeranjang";

export default function Pembayaran({ namaBank }) {
  const pengarah = useRouter();

  const { keranjang } = useTampilkanKeranjang();

  return (
    <View className="m-4 bg-white rounded-lg shadow-md">
      <Text
        className="px-4 pt-4 text-lg text-gray-700"
        style={{ fontFamily: "RobotoBold" }}
      >
        Pilih Pembayaran
      </Text>
      <TouchableOpacity
        activeOpacity={0.8}
        onPress={() => pengarah.push("/screens/pilihPembayaran")}
        className="m-4 p-4 border rounded-lg border-gray-300 flex-row items-center justify-between bg-white shadow-sm"
      >
        <Text
          className="text-gray-500 text-sm"
          style={{ fontFamily: "RobotoBold" }}
        >
          Pilih Pembayaran
        </Text>
        <View className="flex-row items-center">
          <Text
            className="text-gray-500 text-sm"
            style={{ fontFamily: "RobotoBold" }}
          >
            {namaBank == "" ? "-" : namaBank}
          </Text>
          <Ionicons
            name="chevron-forward"
            size={18}
            color="#94A3B8"
            style={{ marginLeft: 8 }}
          />
        </View>
      </TouchableOpacity>
    </View>
  );
}
