import React from "react";
import { Ionicons } from "@expo/vector-icons";
import { View, Text, TouchableOpacity } from "react-native";

export default function InformasiTiket() {
  return (
    <View className="m-4 p-4 bg-white rounded-lg shadow-sm">
      {/* Judul Rute Perjalanan */}
      <Text className="text-lg" style={{ fontFamily: "RobotoBold" }}>
        Bandung - Jakarta
      </Text>

      {/* Waktu Keberangkatan dan Kedatangan */}
      <View className="flex-row items-center justify-between mt-3">
        <Text
          className="mt-2 text-[#94A3B8]"
          style={{ fontFamily: "RobotoBold" }}
        >
          06:15 AM
        </Text>
        <Ionicons name="arrow-forward" size={18} color="black" />
        <Text
          className="mt-2 text-[#94A3B8]"
          style={{ fontFamily: "RobotoBold" }}
        >
          08:15 AM
        </Text>
      </View>

      {/* Nama Stasiun */}
      <View className="flex-row items-center justify-between">
        <Text
          className="mt-2 text-[#94A3B8]"
          style={{ fontFamily: "RobotoBold" }}
        >
          Stasiun Bandung
        </Text>
        <Text className="mx-2">34m</Text>
        <Text
          className="mt-2 text-[#94A3B8]"
          style={{ fontFamily: "RobotoBold" }}
        >
          Stasiun Jakarta
        </Text>
      </View>

      <View className="border-b-2 border-[#94A3B8] mt-5" />

      {/* Tombol Selengkapnya */}
      <TouchableOpacity
        activeOpacity={0.7}
        className="flex-row items-center justify-between"
      >
        <Text
          className="mt-2 text-[#1CBF8E]"
          style={{ fontFamily: "RobotoBold" }}
        >
          Lihat Selengkapnya
        </Text>
        <Ionicons name="arrow-forward" size={18} color="#1CBF8E" />
      </TouchableOpacity>
    </View>
  );
}
