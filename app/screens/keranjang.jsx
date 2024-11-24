import React from "react";
import { useRouter } from "expo-router";
import { Ionicons } from "@expo/vector-icons";
import NomorKursi from "@/components/nomorKursi";
import InformasiTiket from "@/components/informasiTiket";
import { View, Text, TouchableOpacity, ScrollView } from "react-native";

export default function PilihanTiket() {
  const pengarah = useRouter();

  return (
    <View className="flex-1 bg-white">
      {/* Kepala */}
      <View className="flex-row items-center justify-between px-4 py-4 bg-white shadow-sm">
        <TouchableOpacity activeOpacity={0.7} onPress={() => pengarah.back()}>
          <Text className="text-lg text-gray-800">
            <Ionicons name="arrow-back" size={24} color="black" />
          </Text>
        </TouchableOpacity>
        <Text className="text-lg" style={{ fontFamily: "RobotoBlack" }}>
          Keranjang
        </Text>
        <View className="w-6" />
      </View>

      <ScrollView showsVerticalScrollIndicator={false}>
        {/* Informasi Tiket */}
        <InformasiTiket />

        {/* Nomor Kursi */}
        <NomorKursi />
      </ScrollView>

      {/* Total Perjalanan & Tombol */}
      <View className="bg-white rounded-lg flex-row items-center justify-between">
        <View className="p-4">
          <Text className="text-[#94A3B8]" style={{ fontFamily: "RobotoBold" }}>
            Total Perjalanan
          </Text>
          <Text className="text-lg" style={{ fontFamily: "RobotoBold" }}>
            Rp 100.000
          </Text>
        </View>
        <TouchableOpacity
          activeOpacity={0.7}
          className="m-4 p-4 w-60 bg-[#1CBF8E] rounded-lg"
        >
          <Text
            className="text-center text-white"
            style={{ fontFamily: "RobotoBold" }}
          >
            Pesan
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
