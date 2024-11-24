import React from "react";
import { Ionicons } from "@expo/vector-icons";
import { View, Text, ScrollView, Image } from "react-native";

export default function Profil() {
  return (
    <View className="flex-1 bg-[#F5F5F5]">
      {/* Header */}
      <View className="h-36 bg-[#03314B] items-center justify-center">
        <Text
          className="mt-2 text-lg text-[#FFFFFF]"
          style={{ fontFamily: "RobotoBold" }}
        >
          Nama Pengguna
        </Text>
        <Text className="text-sm text-[#94A3B8]">namaPengguna@email.com</Text>
      </View>

      {/* Informasi Data Diri */}
      <ScrollView className="p-4">
        {/* Nama Depan */}
        <View className="bg-white rounded-lg p-4 flex-row items-center mb-4 shadow-md">
          <Ionicons name="person-outline" size={24} color="#03314B" />
          <View className="ml-4">
            <Text className="text-sm text-[#475569]">Nama Depan</Text>
            <Text className="text-lg text-[#0F172A] font-bold">
              Nama Depan Pengguna
            </Text>
          </View>
        </View>

        {/* Nama Belakang */}
        <View className="bg-white rounded-lg p-4 flex-row items-center mb-4 shadow-md">
          <Ionicons name="person-outline" size={24} color="#03314B" />
          <View className="ml-4">
            <Text className="text-sm text-[#475569]">Nama Belakang</Text>
            <Text className="text-lg text-[#0F172A] font-bold">
              Nama Belakang Pengguna
            </Text>
          </View>
        </View>

        {/* Nomor HP */}
        <View className="bg-white rounded-lg p-4 flex-row items-center mb-4 shadow-md">
          <Ionicons name="call-outline" size={24} color="#03314B" />
          <View className="ml-4">
            <Text className="text-sm text-[#475569]">Nomor HP</Text>
            <Text className="text-lg text-[#0F172A] font-bold">
              0812-3456-7890
            </Text>
          </View>
        </View>

        {/* Email */}
        <View className="bg-white rounded-lg p-4 flex-row items-center mb-4 shadow-md">
          <Ionicons name="mail-outline" size={24} color="#03314B" />
          <View className="ml-4">
            <Text className="text-sm text-[#475569]">Email</Text>
            <Text className="text-lg text-[#0F172A] font-bold">
              namaPengguna@email.com
            </Text>
          </View>
        </View>
      </ScrollView>
    </View>
  );
}
