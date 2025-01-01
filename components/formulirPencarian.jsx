import React from "react";
import { Ionicons } from "@expo/vector-icons";
import { Picker } from "@react-native-picker/picker";
import { View, Text, TouchableOpacity, ActivityIndicator } from "react-native";

export default function FormulirPencarian({
  ke,
  dari,
  setKe,
  setDari,
  cariTiket,
  sedangMemuatPencarianTiket,
}) {
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
          <Picker.Item label="Jogja" value="Jogja" />
        </Picker>
      </View>

      {/* Pilihan Ke */}
      <View className="border border-gray-300 rounded-md">
        <Picker
          selectedValue={ke}
          onValueChange={(pilihanNilai) => setKe(pilihanNilai)}
        >
          <Picker.Item label="Pilih Kota Tujuan" value="" />
          <Picker.Item label="Bandung" value="Bandung" />
          <Picker.Item label="Jakarta" value="Jakarta" />
          <Picker.Item label="Jogja" value="Jogja" />
        </Picker>
      </View>

      {/* Tombol Pencarian Dengan Ikon */}
      <TouchableOpacity
        activeOpacity={0.7}
        onPress={() => cariTiket()}
        className={`bg-[#03314B] py-3 rounded-md mt-4 flex-row items-center justify-center ${
          sedangMemuatPencarianTiket && "opacity-50"
        }`}
      >
        <Ionicons name="search" size={20} color="white" />
        <Text
          className="text-center text-white ml-2"
          style={{ fontFamily: "RobotoBold" }}
        >
          {sedangMemuatPencarianTiket ? (
            <ActivityIndicator color="white" size="small" />
          ) : (
            "Cari Tiket"
          )}
        </Text>
      </TouchableOpacity>
    </View>
  );
}
