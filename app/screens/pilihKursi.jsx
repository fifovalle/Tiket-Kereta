import React, { useState } from "react";
import { useRouter } from "expo-router";
import { Ionicons } from "@expo/vector-icons";
import { View, Text, TouchableOpacity, ActivityIndicator } from "react-native";
import useTampilkanKursi from "@/hooks/backend/useTampilkanKursi";

export default function PilihKursi() {
  const pengarah = useRouter();
  const [kursiTerpilih, setKursiTerpilih] = useState(null);

  const { kursi, sedangMemuatTampilkanKursi } = useTampilkanKursi();

  const handlePilihKursi = (kursi) => {
    setKursiTerpilih(kursiTerpilih === kursi ? null : kursi);
  };

  const renderKursi = (baris, kursiData) => {
    const kursiKiri = kursiData.filter((data) => data.Kolom <= 2);
    const kursiKanan = kursiData.filter((data) => data.Kolom >= 3);

    const renderSisiKursi = (kursiSisi) => {
      return kursiSisi.map((data) => {
        const kursi = `${baris}${data.Kolom}`;
        const kursiTerpilihSaatIni = kursiTerpilih === kursi;
        const kursiTidakTersediaSaatIni = data.Status === "Tidak Tersedia";

        return (
          <TouchableOpacity
            key={kursi}
            className={`w-12 h-12 m-2 flex justify-center items-center rounded-lg shadow-md ${
              kursiTidakTersediaSaatIni
                ? "bg-gray-300"
                : kursiTerpilihSaatIni
                ? "bg-[#94A3B8] border border-[#94A3B8]"
                : "bg-white border border-gray-300"
            }`}
            disabled={kursiTidakTersediaSaatIni}
            onPress={() => handlePilihKursi(kursi)}
          >
            <Text
              className={`font-semibold ${
                kursiTidakTersediaSaatIni
                  ? "text-gray-400"
                  : kursiTerpilihSaatIni
                  ? "text-white"
                  : "text-[#94A3B8]"
              }`}
              style={{ fontFamily: "RobotoBold" }}
            >
              {kursi}
            </Text>
          </TouchableOpacity>
        );
      });
    };

    return (
      <View className="flex-row justify-between items-center mb-4">
        {/* Kursi sisi kiri */}
        <View className="flex-row">{renderSisiKursi(kursiKiri)}</View>

        {/* Lorong */}
        <View className="w-20" />

        {/* Kursi sisi kanan */}
        <View className="flex-row">{renderSisiKursi(kursiKanan)}</View>
      </View>
    );
  };

  if (sedangMemuatTampilkanKursi) {
    return (
      <View className="flex-1 mt-10 justify-center items-center">
        <ActivityIndicator size="large" color="#03314B" />
        <Text
          className="mt-4 text-lg text-black"
          style={{ fontFamily: "RobotoBold" }}
        >
          Memuat Kursi...
        </Text>
      </View>
    );
  }

  return (
    <View className="flex-1 bg-gray-100">
      {/* Kepala */}
      <View className="flex-row items-center justify-between px-4 pt-12 bg-white shadow-sm">
        <TouchableOpacity activeOpacity={0.7} onPress={() => pengarah.back()}>
          <Text className="text-lg text-gray-800">
            <Ionicons name="arrow-back" size={24} color="black" />
          </Text>
        </TouchableOpacity>
        <Text className="text-lg" style={{ fontFamily: "RobotoBlack" }}>
          Pilih Kursi
        </Text>
        <View className="w-6" />
      </View>

      {/* Grid Kursi */}
      <View className="flex-1 px-6 pt-4">
        {kursi.map((data) => (
          <View key={data.Baris} className="flex-row justify-center">
            {renderKursi(data.Baris, data.Kursi)}
          </View>
        ))}
      </View>

      {/* Status */}
      <View className="flex-row justify-evenly items-center my-4">
        <View className="flex-row items-center">
          <View className="w-5 h-5 bg-[#94A3B8] rounded-full mr-2" />
          <Text className="text-[#94A3B8]" style={{ fontFamily: "RobotoBold" }}>
            Dipilih
          </Text>
        </View>
        <View className="flex-row items-center">
          <View className="w-5 h-5 bg-white border border-gray-300 rounded-full mr-2" />
          <Text className="text-[#94A3B8]" style={{ fontFamily: "RobotoBold" }}>
            Tersedia
          </Text>
        </View>
        <View className="flex-row items-center">
          <View className="w-5 h-5 bg-[#D1D4DB] rounded-full mr-2" />
          <Text className="text-[#94A3B8]" style={{ fontFamily: "RobotoBold" }}>
            Tidak Tersedia
          </Text>
        </View>
      </View>

      {/* Konfirmasi */}
      <View className="p-6 border-t border-gray-200 bg-white shadow-lg">
        <Text className="text-[#94A3B8]" style={{ fontFamily: "RobotoBold" }}>
          Tipe Kursi: Standard
        </Text>
        <Text
          className="text-lg font-bold text-[#0F172A]"
          style={{ fontFamily: "RobotoBold" }}
        >
          {kursiTerpilih ? `Kursi ${kursiTerpilih}` : "Tidak Ada Kursi Dipilih"}
        </Text>
        <TouchableOpacity
          className={`mt-4 py-3 items-center rounded-lg shadow-lg ${
            kursiTerpilih ? "bg-[#03314B]" : "bg-gray-300"
          }`}
          disabled={!kursiTerpilih}
        >
          <Text
            className={`text-lg font-semibold ${
              kursiTerpilih ? "text-white" : "text-gray-500"
            }`}
            style={{ fontFamily: "RobotoBold" }}
          >
            Konfirmasi
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
