import React from "react";
import { useRouter } from "expo-router";
import { Ionicons } from "@expo/vector-icons";
import { formatTanggal } from "@/constants/formatTanggal";
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  ActivityIndicator,
} from "react-native";
import useTampilkanKeranjang from "@/hooks/backend/useTampilkanKeranjang";
import useTampilkanPemesanan from "@/hooks/backend/useTampilkanPemesanan";

export default function TiketKereta() {
  const pengarah = useRouter();

  const { jumlahKeranjang } = useTampilkanKeranjang();

  const { pemesanan, sedangMemuatTampilkanPemesanan } = useTampilkanPemesanan();

  if (sedangMemuatTampilkanPemesanan) {
    return (
      <View className="flex-1 mt-10 justify-center items-center">
        <ActivityIndicator size="large" color="#03314B" />
        <Text
          className="mt-4 text-lg text-black"
          style={{ fontFamily: "RobotoBold" }}
        >
          Memuat Tiket Kereta...
        </Text>
      </View>
    );
  }

  if (pemesanan.length === 0) {
    return (
      <View className="flex-1 mt-10 justify-center items-center">
        <Text
          className="mt-4 text-lg text-black"
          style={{ fontFamily: "RobotoBold" }}
        >
          Belum Ada Tiket Kereta
        </Text>
      </View>
    );
  }

  return (
    <View className="flex-1 bg-[#F5F5F5]">
      {/* Bagian Kepala */}
      <View className="h-36 bg-[#03314B] p-4">
        <TouchableOpacity
          activeOpacity={0.7}
          onPress={() => pengarah.push("/screens/keranjang")}
          className="p-2 mt-4 items-end"
        >
          <Ionicons name="cart-outline" size={28} color="white" />

          {jumlahKeranjang > 0 && (
            <View className="absolute bg-red-500 rounded-full h-5 w-5 items-center justify-center top-0 right-0">
              <Text className="text-white text-xs">{jumlahKeranjang}</Text>
            </View>
          )}
        </TouchableOpacity>

        <View className="flex items-center justify-between w-full">
          <View>
            <Text
              className="text-xl text-center text-[#FFFFFF]"
              style={{ fontFamily: "RobotoBlack" }}
            >
              Tiket Kereta
            </Text>
            <Text className="text-sm text-center text-[#94A3B8]">
              Kumpulan Tiket Kereta Anda
            </Text>
          </View>
        </View>
      </View>

      {/* Daftar Tiket */}
      <ScrollView className="p-4">
        {pemesanan.map((item) => {
          const { tiket, id } = item;
          const {
            Nama,
            Kelas,
            Tanggal,
            Kota_Tujuan,
            Kota_Keberangkatan,
            Waktu_Keberangkatan,
          } = tiket;

          const statusAktif = (Tanggal) => {
            const tanggalPemesanan = new Date(Tanggal.seconds * 1000);
            const tanggalSekarang = new Date();

            return tanggalPemesanan > tanggalSekarang;
          };

          return (
            <TouchableOpacity
              key={id}
              activeOpacity={0.7}
              className="bg-white rounded-lg p-4 shadow-md mb-4"
            >
              <View className="flex-row items-center justify-between">
                <View>
                  <Text className="text-lg font-bold text-[#03314B] mb-1">
                    {Nama || "Nama Tiket"}
                  </Text>
                  <Text className="text-sm text-[#475569]">
                    Rute: {Kota_Keberangkatan} - {Kota_Tujuan}
                  </Text>
                  <Text className="text-sm text-[#475569]">Kelas: {Kelas}</Text>
                </View>
                <Ionicons name="train" size={50} color="#475569" />
              </View>
              <View className="flex-row justify-between items-center mt-4">
                <View>
                  <Text className="text-sm text-[#475569]">
                    Keberangkatan: {Waktu_Keberangkatan || "10:00"}
                  </Text>
                  <Text className="text-sm text-[#475569]">
                    Tanggal: {formatTanggal(Tanggal)}
                  </Text>
                </View>
                <Text className="text-sm text-[#94A3B8]">
                  Status: {statusAktif ? "Aktif" : "Tidak Aktif"}
                </Text>
              </View>
            </TouchableOpacity>
          );
        })}
      </ScrollView>
    </View>
  );
}
