import React from "react";
import { useRouter } from "expo-router";
import { Ionicons } from "@expo/vector-icons";
import { Text, View, Image, TouchableOpacity } from "react-native";

export default function Masuk() {
  const pengarah = useRouter();
  const gambar = require("@/assets/layarMasuk.png");

  return (
    <View className="flex-1 items-center justify-center px-4">
      {/* Bagian Gambar */}
      <Image source={gambar} className="w-80 h-80 mb-5" />

      {/* Bagian Teks */}
      <View className="items-center w-full">
        <Text
          className="text-3xl text-center mb-2"
          style={{ fontFamily: "RobotoBlack" }}
        >
          Selamat Datang
        </Text>
        <Text
          className="text-lg text-[#94A3B8]"
          style={{ fontFamily: "RobotoBold" }}
        >
          Di Aplikasi Tiket Kereta
        </Text>
      </View>

      {/* Bagian Tombol */}
      <TouchableOpacity
        activeOpacity={0.7}
        onPress={() => pengarah.push("/identitas")}
        className="mt-10 w-full"
      >
        <View className="bg-[#03314B] h-12 rounded-lg flex-row items-center justify-center shadow-lg">
          <Ionicons name="logo-google" size={20} color="white" />
          <Text
            className="text-lg text-white ml-2"
            style={{ fontFamily: "RobotoBold" }}
          >
            Lanjutkan Dengan Google
          </Text>
        </View>
      </TouchableOpacity>

      {/* Bagian Keterangan */}
      <Text
        className="text-sm w-full text-center text-[#94A3B8] mt-3"
        style={{ fontFamily: "Roboto" }}
      >
        Dengan melanjutkan, Anda menyetujui syarat dan ketentuan kami.
      </Text>
    </View>
  );
}
