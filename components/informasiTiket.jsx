import React, { useState } from "react";
import { Ionicons } from "@expo/vector-icons";
import { tambahWaktu } from "@/constants/tambahWaktu";
import useTampilkanKeranjang from "@/hooks/backend/useTampilkanKeranjang";
import { konversiEstimasiMenit } from "@/constants/konversiEstimasiMenit";
import { View, Text, TouchableOpacity, ActivityIndicator } from "react-native";

export default function InformasiTiket() {
  const { keranjang, sedangMemuatTampilkanKeranjang } = useTampilkanKeranjang();
  const [selengkapnya, setSelengkapnya] = useState(null);

  const toggleSelengkapnya = (id) => {
    setSelengkapnya((prevId) => (prevId === id ? null : id));
  };

  if (sedangMemuatTampilkanKeranjang) {
    return (
      <View className="flex-1 mt-10 justify-center items-center">
        <ActivityIndicator size="large" color="#03314B" />
        <Text
          className="mt-4 text-lg text-black"
          style={{ fontFamily: "RobotoBold" }}
        >
          Memuat Keranjang...
        </Text>
      </View>
    );
  }

  return (
    <>
      {keranjang.map((keranjang) => {
        const { tiket, id } = keranjang;
        const {
          Estimasi,
          Kota_Tujuan,
          Kota_Keberangkatan,
          Waktu_Keberangkatan,
        } = tiket;

        const estimasiMenit = konversiEstimasiMenit(Estimasi);
        const waktuKedatangan = tambahWaktu(Waktu_Keberangkatan, estimasiMenit);

        const isTerbuka = selengkapnya === id;

        return (
          <View key={id} className="m-4 p-4 bg-white rounded-lg shadow-sm">
            {/* Judul Rute Perjalanan */}
            <Text className="text-lg" style={{ fontFamily: "RobotoBold" }}>
              {Kota_Keberangkatan} - {Kota_Tujuan}
            </Text>

            {/* Waktu Keberangkatan dan Kedatangan */}
            <View className="flex-row items-center justify-between mt-3">
              <Text
                className="mt-2 text-[#94A3B8]"
                style={{ fontFamily: "RobotoBold" }}
              >
                {Waktu_Keberangkatan}
              </Text>
              <Ionicons name="arrow-forward" size={18} color="black" />
              <Text
                className="mt-2 text-[#94A3B8]"
                style={{ fontFamily: "RobotoBold" }}
              >
                {waktuKedatangan}
              </Text>
            </View>

            {/* Nama Stasiun */}
            <View className="flex-row items-center justify-between">
              <Text
                className="mt-2 text-[#94A3B8]"
                style={{ fontFamily: "RobotoBold" }}
              >
                Stasiun {Kota_Keberangkatan}
              </Text>
              <Text
                className="mx-2 text-sm"
                style={{ fontFamily: "RobotoBold" }}
              >
                {Estimasi}
              </Text>
              <Text
                className="mt-2 text-[#94A3B8]"
                style={{ fontFamily: "RobotoBold" }}
              >
                Stasiun {Kota_Tujuan}
              </Text>
            </View>

            {/* Detail Tambahan */}
            {isTerbuka && (
              <View className="mt-4">
                <Text
                  className="text-[#475569]"
                  style={{ fontFamily: "RobotoBold" }}
                >
                  Detail Tambahan:
                </Text>
                <Text className="mt-2 text-[#64748B]">
                  Perjalanan dimulai dari Stasiun {Kota_Keberangkatan} menuju
                  Stasiun {Kota_Tujuan} dengan estimasi waktu perjalanan{" "}
                  {Estimasi}. Tiket ini berlaku untuk keberangkatan pada{" "}
                  {Waktu_Keberangkatan}.
                </Text>
              </View>
            )}

            <View className="border-b-2 border-[#94A3B8] mt-5" />

            {/* Tombol Selengkapnya */}
            <TouchableOpacity
              activeOpacity={0.7}
              className="flex-row items-center justify-between mt-4"
              onPress={() => toggleSelengkapnya(id)}
            >
              <Text
                className="text-[#000]"
                style={{ fontFamily: "RobotoBold" }}
              >
                {isTerbuka ? "Tutup" : "Lihat Selengkapnya"}
              </Text>
              <Ionicons
                name={isTerbuka ? "chevron-up" : "chevron-down"}
                size={18}
                color="#000"
              />
            </TouchableOpacity>
          </View>
        );
      })}
    </>
  );
}
