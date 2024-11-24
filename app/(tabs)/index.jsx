import React from "react";
import { useRouter } from "expo-router";
import { Ionicons } from "@expo/vector-icons";
import { View, Text, TouchableOpacity } from "react-native";
import FormulirPencarian from "@/components/formulirPencarian";
import KontenRutePopuler from "@/components/kontenRutePopuler";

export default function Beranda() {
  const pengarah = useRouter();

  return (
    <View className="flex-1 bg-[#FFFFFF]">
      {/* Bagian Kepala */}
      <View className="h-60 -mb-14 bg-[#03314B] items-center">
        <View className="flex-row items-center justify-between w-full p-4">
          <View>
            <Text
              className="text-xl text-[#FFFFFF]"
              style={{ fontFamily: "RobotoBlack" }}
            >
              Tiket Kereta
            </Text>
            <Text className="text-sm text-[#94A3B8]">
              Ayo Naik Kereta Agar Tidak Macet
            </Text>
          </View>

          <TouchableOpacity
            activeOpacity={0.7}
            onPress={() => pengarah.push("/screens/keranjang")}
            className="rounded-full border-2 border-[#94A3B8] p-2"
          >
            <Ionicons name="cart-outline" size={20} color="white" />
          </TouchableOpacity>
        </View>

        {/* Bagian Filter */}
        <View className="flex-row mb-4 px-4 gap-2 mt-8">
          <TouchableOpacity
            activeOpacity={0.7}
            className="flex-1 items-center py-2 bg-[#FFCD33] rounded w-20"
          >
            <Text className="text-black" style={{ fontFamily: "RobotoBold" }}>
              Pergi
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            activeOpacity={0.7}
            className="flex-1 items-center py-2 border border-gray-300 rounded"
          >
            <Text className="text-gray-500">Pulang Pergi</Text>
          </TouchableOpacity>
        </View>
      </View>

      {/* Formulir Pencarian */}
      <FormulirPencarian />

      {/* Rute Perjalanan Populer */}
      <KontenRutePopuler />
    </View>
  );
}
