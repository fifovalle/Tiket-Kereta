import React, { useState } from "react";
import { useRouter } from "expo-router";
import { Ionicons } from "@expo/vector-icons";
import {
  Text,
  View,
  Image,
  TouchableOpacity,
  ScrollView,
  TextInput,
} from "react-native";

export default function Masuk() {
  const pengarah = useRouter();
  const gambar = require("@/assets/layarMasuk.png");

  const [email, setEmail] = useState("");
  const [kataSandi, setKataSandi] = useState("");
  const [perlihatkanKataSandi, setPerlihatkanKataSandi] = useState(false);

  return (
    <ScrollView
      className="px-4"
      showsVerticalScrollIndicator={false}
      contentContainerStyle={{
        flexGrow: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      {/* Bagian Teks */}
      <View className="items-center w-full">
        <Text
          className="text-2xl text-center mb-2"
          style={{ fontFamily: "RobotoBlack" }}
        >
          Selamat Datang Di
        </Text>
        <Text
          className="text-2xl text-center mb-2"
          style={{ fontFamily: "RobotoBold" }}
        >
          Aplikasi Tiket Kereta
        </Text>
      </View>

      {/* Bagian Gambar */}
      <Image source={gambar} className="w-80 h-80 mb-5" />

      {/* Bagian Teks */}
      <View className="items-center w-full">
        <Text
          className="text-2xl text-center mb-2"
          style={{ fontFamily: "RobotoBlack" }}
        >
          Masuk Email dan Kata Sandi
        </Text>
      </View>

      {/* Bagian Formulir */}
      <View className="w-full">
        <View className="bg-white rounded-lg flex-row items-center mb-4 shadow-md px-4 py-3">
          <Ionicons name="mail-outline" size={24} color="#03314B" />
          <TextInput
            placeholder="Masukkan Email"
            value={email}
            onChangeText={setEmail}
            className="ml-4 flex-1 text-lg text-[#0F172A]"
            placeholderTextColor="#94A3B8"
          />
        </View>

        <View className="bg-white rounded-lg flex-row items-center shadow-md px-4 mb-4 py-3">
          <Ionicons name="lock-closed-outline" size={24} color="#03314B" />
          <TextInput
            placeholder="Masukkan Kata Sandi"
            value={kataSandi}
            onChangeText={setKataSandi}
            secureTextEntry={!perlihatkanKataSandi}
            className="ml-4 flex-1 text-lg text-[#0F172A]"
            placeholderTextColor="#94A3B8"
          />
          <TouchableOpacity
            activeOpacity={0.7}
            onPress={() => setPerlihatkanKataSandi(!perlihatkanKataSandi)}
          >
            <Ionicons
              name={perlihatkanKataSandi ? "eye-off-outline" : "eye-outline"}
              size={24}
              color="#03314B"
            />
          </TouchableOpacity>
        </View>
      </View>

      {/* Bagian Tombol */}
      <TouchableOpacity
        activeOpacity={0.7}
        onPress={() => pengarah.push("/(tabs)")}
        className="mt-4 w-full"
      >
        <View className="bg-[#03314B] h-12 rounded-lg items-center justify-center shadow-lg">
          <Text
            className="text-lg text-white ml-2"
            style={{ fontFamily: "RobotoBold" }}
          >
            Lanjutkan
          </Text>
        </View>
      </TouchableOpacity>

      {/* Bagian Belum Punya Akun */}
      <View className="flex-row justify-center items-center w-full mt-3">
        <Text
          className="text-sm text-center text-[#94A3B8]"
          style={{ fontFamily: "Roboto" }}
        >
          Belum punya akun?
        </Text>
        <TouchableOpacity
          activeOpacity={0.7}
          onPress={() => pengarah.push("/daftar")}
        >
          <Text
            className="text-[#03314B] ml-1"
            style={{ fontFamily: "RobotoBold" }}
          >
            Daftar
          </Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}
