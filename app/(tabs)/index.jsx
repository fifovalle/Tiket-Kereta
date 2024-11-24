import React, { useState } from "react";
import { Ionicons } from "@expo/vector-icons";
import { Picker } from "@react-native-picker/picker";
import { View, Text, TextInput, TouchableOpacity } from "react-native";

export default function Beranda() {
  const [dari, setDari] = useState("");
  const [ke, setKe] = useState("");
  const [tanggalBerangkat, setTanggalBerangkat] = useState("");

  return (
    <View className="flex-1 bg-[#FFFFFF]">
      {/* Bagian Kepala */}
      <View className="h-60 -mb-14 bg-[#03314B] items-center">
        {/* Bagian Teks */}
        <View className="flex-row items-center justify-between w-full p-4">
          <View>
            <Text
              className="text-xl text-[#FFFFFF]"
              style={{ fontFamily: "RobotoBlack" }}
            >
              Tiket Kereta
            </Text>
            <Text className="text-sm text-[#94A3B8]">
              Pesan Tiket Kereta Sekarang!
            </Text>
          </View>
          <View className="rounded-full border-2 border-[#94A3B8] p-2">
            <Ionicons name="notifications-outline" size={20} color="white" />
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
      <View className="gap-y-4 w-96 mx-auto bg-white p-4 rounded-md shadow">
        {/* Judul Dengan Ikon Kereta */}
        <View className="flex-row items-center mb-4">
          <Ionicons name="train" size={24} color="#FFCD33" />
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

        {/* Tombol Pencarian dengan Ikon */}
        <TouchableOpacity
          activeOpacity={0.7}
          className="bg-[#1CBF8E] py-3 rounded-md mt-4 flex-row items-center justify-center"
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

      {/* Rute Perjalanan Populer */}
      <View className="mt-6 px-4">
        <Text className="text-lg font-semibold text-black mb-4">
          Rute Perjalanan Populer
        </Text>
        <View className="flex-row items-center bg-white p-4 rounded-md shadow">
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
        </View>
      </View>
    </View>
  );
}
