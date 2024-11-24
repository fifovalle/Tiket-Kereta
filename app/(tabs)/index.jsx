import React from "react";
import { Ionicons } from "@expo/vector-icons";
import { View, Text, Image, TouchableOpacity } from "react-native";
import FormulirPencarian from "@/components/formulirPencarian";

export default function Beranda() {
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
          <View className="rounded-full border-2 border-[#94A3B8] p-2">
            <Ionicons name="cart-outline" size={20} color="white" />
          </View>
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
      <View className="mt-6 px-4">
        <Text className="text-lg font-semibold text-black mb-4">
          Rute Perjalanan Populer
        </Text>
        <TouchableOpacity
          activeOpacity={0.7}
          className="flex-row items-center bg-white p-4 rounded-md shadow"
        >
          <Image
            source={{
              uri: "https://ik.imagekit.io/tvlk/blog/2020/04/Bundaran-HI-Wikipedia.jpg?tr=dpr-2,w-675",
            }}
            className="w-16 h-16 rounded mr-4"
          />
          <View className="flex-1">
            <Text className="text-black" style={{ fontFamily: "RobotoBlack" }}>
              Bandung - Jakarta
            </Text>
            <Text
              className="text-[#94A3B8]"
              style={{ fontFamily: "RobotoBold" }}
            >
              Dari Rp100.000
            </Text>
          </View>
          <Text className="text-[#FFCD33] font-semibold">4.5 ⭐</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
