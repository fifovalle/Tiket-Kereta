import React from "react";
import { useRouter } from "expo-router";
import { Ionicons } from "@expo/vector-icons";
import { View, Text, ScrollView, TouchableOpacity } from "react-native";

export default function TiketKereta() {
  const pengarah = useRouter();

  return (
    <View className="flex-1 bg-[#F5F5F5]">
      {/* Bagian Kepala */}
      <View className="h-24 bg-[#03314B] items-center justify-center">
        <View className="flex-row items-center justify-between w-full px-4">
          <View>
            <Text
              className="text-xl text-[#FFFFFF]"
              style={{ fontFamily: "RobotoBlack" }}
            >
              Tiket Kereta
            </Text>
            <Text className="text-sm text-[#94A3B8]">
              Kumpulan Tiket Kereta Anda
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
      </View>

      {/* Daftar Tiket */}
      <ScrollView className="p-4">
        {/* Tiket */}
        <TouchableOpacity
          activeOpacity={0.7}
          className="bg-white rounded-lg p-4 shadow-md mb-4"
        >
          <View className="flex-row items-center justify-between">
            <View>
              <Text className="text-lg font-bold text-[#03314B] mb-1">
                Kereta Argo Bromo Anggrek
              </Text>
              <Text className="text-sm text-[#475569]">
                Rute: Jakarta - Surabaya
              </Text>
              <Text className="text-sm text-[#475569]">Kelas: Eksekutif</Text>
            </View>
            <Ionicons name="train" size={50} color="#475569" />
          </View>
          <View className="flex-row justify-between items-center mt-4">
            <View>
              <Text className="text-sm text-[#475569]">
                Keberangkatan: 10:00
              </Text>
              <Text className="text-sm text-[#475569]">
                Tanggal: 24 Nov 2024
              </Text>
            </View>
            <Text className="text-sm text-[#94A3B8]">Status: Aktif</Text>
          </View>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
}
