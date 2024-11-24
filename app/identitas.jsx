import React, { useState } from "react";
import { useRouter } from "expo-router";
import {
  Text,
  View,
  Image,
  TouchableOpacity,
  TextInput,
  ScrollView,
} from "react-native";

export default function Identitas() {
  const pengarah = useRouter();
  const gambar = require("@/assets/layarIdentitas.png");

  const [namaDepan, setNamaDepan] = useState("");
  const [namaBelakang, setNamaBelakang] = useState("");
  const [nomorTelepon, setNomorTelepon] = useState("");

  return (
    <ScrollView
      contentContainerStyle={{
        alignItems: "center",
        flexGrow: 1,
        justifyContent: "center",
        paddingHorizontal: 16,
      }}
      showsVerticalScrollIndicator={false}
    >
      {/* Bagian Gambar */}
      <Image source={gambar} className="w-80 h-80 mb-5" />

      {/* Bagian Teks */}
      <View className="items-center w-full">
        <Text
          className="text-3xl text-center mb-2"
          style={{ fontFamily: "RobotoBlack" }}
        >
          Konfirmasi Identitas
        </Text>
        <Text
          className="text-lg text-center text-[#94A3B8] mb-4"
          style={{ fontFamily: "RobotoBold" }}
        >
          Untuk melanjutkan, silahkan masukkan identitas Anda
        </Text>
      </View>

      {/* Bagian Formulir */}
      <View className="w-full gap-y-4">
        <TextInput
          placeholder="Nama Depan"
          value={namaDepan}
          onChangeText={setNamaDepan}
          className="w-full border border-gray-300 rounded-lg px-4 py-3 text-base"
          style={{ fontFamily: "RobotoRegular" }}
        />

        <TextInput
          placeholder="Nama Belakang"
          value={namaBelakang}
          onChangeText={setNamaBelakang}
          className="w-full border border-gray-300 rounded-lg px-4 py-3 text-base"
          style={{ fontFamily: "RobotoRegular" }}
        />

        <TextInput
          placeholder="Nomor Telepon"
          value={nomorTelepon}
          onChangeText={setNomorTelepon}
          keyboardType="phone-pad"
          className="w-full border border-gray-300 rounded-lg px-4 py-3 text-base"
          style={{ fontFamily: "RobotoRegular" }}
        />
      </View>

      {/* Bagian Tombol */}
      <TouchableOpacity
        activeOpacity={0.7}
        onPress={() => pengarah.push("/(tabs)")}
        className="w-full bg-[#03314B] mt-6 py-3 rounded-lg items-center"
      >
        <Text
          className="text-white text-lg"
          style={{ fontFamily: "RobotoBold" }}
        >
          Konfirmasi
        </Text>
      </TouchableOpacity>
    </ScrollView>
  );
}
