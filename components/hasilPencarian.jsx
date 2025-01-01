import React from "react";
import { Ionicons } from "@expo/vector-icons";
import { formatRupiah } from "@/constants/formatRupiah";
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  ActivityIndicator,
} from "react-native";
import useTampilkanTiketPopuler from "@/hooks/backend/useTampilkanTiketPopuler";

export default function HasilPencarian({
  hasilPencarian,
  masukkanKeKeranjang,
}) {
  const { sedangMemuatTiketPopuler } = useTampilkanTiketPopuler();

  if (sedangMemuatTiketPopuler) {
    return (
      <View className="flex-1 mt-10 justify-center items-center">
        <ActivityIndicator size="large" color="#03314B" />
        <Text
          className="mt-4 text-lg text-black"
          style={{ fontFamily: "RobotoBold" }}
        >
          Memuat Rute Perjalanan Populer...
        </Text>
      </View>
    );
  }

  return (
    <View className="mt-6 px-4">
      {/* Judul */}
      <Text className="text-lg font-semibold text-black mb-4">
        Hasil Pencarian
      </Text>
      {/* Kartu Tiket */}
      {hasilPencarian.map((tiket) => {
        const {
          id,
          Harga,
          Gambar,
          Ulasan,
          Estimasi,
          Kota_Tujuan,
          Kota_Keberangkatan,
        } = tiket;

        return (
          <TouchableOpacity
            key={id}
            onPress={() => masukkanKeKeranjang(id)}
            activeOpacity={0.7}
            className="bg-white rounded-lg shadow-md overflow-hidden mb-4"
          >
            {/* Gambar */}
            <Image
              source={{
                uri: Gambar,
              }}
              className="w-full h-40"
            />
            {/* Konten Tiket */}
            <View className="p-4 flex-row justify-between items-center">
              <View className="flex-1">
                <Text
                  className="text-lg text-black"
                  style={{ fontFamily: "RobotoBlack" }}
                >
                  {Kota_Keberangkatan} - {Kota_Tujuan}
                </Text>
                <Text
                  className="text-[#94A3B8] mt-1"
                  style={{ fontFamily: "RobotoBold" }}
                >
                  Harga {formatRupiah(Harga)}
                </Text>
                <View className="flex-row items-center mt-2">
                  <Ionicons name="time" size={14} color="#94A3B8" />
                  <Text className="text-[#94A3B8] text-xs ml-2">
                    {Estimasi}
                  </Text>
                </View>
              </View>
              <View className="items-end">
                <Text className="text-[#FFCD33] text-lg font-semibold">
                  {Ulasan} ⭐
                </Text>
              </View>
            </View>
          </TouchableOpacity>
        );
      })}
    </View>
  );
}
