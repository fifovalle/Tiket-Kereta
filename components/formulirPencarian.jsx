import React, { useState } from "react";
import { Ionicons } from "@expo/vector-icons";
import { Picker } from "@react-native-picker/picker";
import { View, Text, TextInput, TouchableOpacity } from "react-native";

export default function FormulirPencarian() {
  const [ke, setKe] = useState("");
  const [dari, setDari] = useState("");
  const [tanggalBerangkat, setTanggalBerangkat] = useState("");

  return (
    <View className="gap-y-4 w-[23rem] mx-auto bg-white p-4 rounded-xl shadow">
      {/* Judul */}
      <View className="flex-row items-center mb-4">
        <View className="bg-[#FFCD33] rounded-full p-2">
          <Ionicons name="train" size={24} color="#03314B" />
        </View>
        <Text
          className="ml-2 text-lg font-bold"
          style={{ fontFamily: "RobotoBold" }}
        >
          Formulir Pencarian Tiket Kereta
        </Text>
      </View>

      {/* Pilihan Dari */}
      <View className="border border-gray-300 rounded-md">
        <Picker
          selectedValue={dari}
          onValueChange={(pilihanNilai) => setDari(pilihanNilai)}
        >
          <Picker.Item label="Pilih Kota Keberangkatan" value="" />
          <Picker.Item label="Bandung" value="Bandung" />
          <Picker.Item label="Jakarta" value="Jakarta" />
          <Picker.Item label="Surabaya" value="Surabaya" />
        </Picker>
      </View>

      {/* Pilihan Ke */}
      <View className="border border-gray-300 rounded-md">
        <Picker
          selectedValue={ke}
          onValueChange={(pilihanNilai) => setKe(pilihanNilai)}
        >
          <Picker.Item label="Pilih Kota Tujuan" value="" />
          <Picker.Item label="Jakarta" value="Jakarta" />
          <Picker.Item label="Surabaya" value="Surabaya" />
          <Picker.Item label="Bali" value="Bali" />
        </Picker>
      </View>

      {/* Pilihan Tanggal */}
      <TextInput
        className="border border-gray-300 rounded-md px-4 py-2"
        placeholder="Tanggal Berangkat (Contoh: 2023-06-01)"
        style={{ fontFamily: "RobotoBold" }}
        value={tanggalBerangkat}
        onChangeText={setTanggalBerangkat}
        keyboardType="default"
      />

      {/* Tombol Pencarian Dengan Ikon */}
      <TouchableOpacity
        activeOpacity={0.7}
        className="bg-[#03314B] py-3 rounded-md mt-4 flex-row items-center justify-center"
      >
        <Ionicons name="search" size={20} color="white" />
        <Text
          className="text-center text-white ml-2"
          style={{ fontFamily: "RobotoBold" }}
        >
          Cari Tiket
        </Text>
      </TouchableOpacity>
    </View>
  );
}
