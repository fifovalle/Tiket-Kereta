import React from "react";
import { useRouter } from "expo-router";
import { Ionicons } from "@expo/vector-icons";
import { formatRupiah } from "@/constants/formatRupiah";
import useTampilkanTiket from "@/hooks/backend/useTampilkanTiket";
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  ActivityIndicator,
  ScrollView,
} from "react-native";

export default function Jelajahi() {
  const pengarah = useRouter();

  const { tiketPopuler, sedangMemuatTiket } = useTampilkanTiket();

  if (sedangMemuatTiket) {
    return (
      <View className="flex-1 mt-10 justify-center items-center">
        <ActivityIndicator size="large" color="#03314B" />
        <Text
          className="mt-4 text-lg text-black"
          style={{ fontFamily: "RobotoBold" }}
        >
          Memuat Rute Perjalanan...
        </Text>
      </View>
    );
  }

  return (
    <View className="bg-[#FFFFFF]">
      {/* Bagian Kepala */}
      <View className="h-36 -mb-8 bg-[#03314B] p-4 z-10">
        <TouchableOpacity
          activeOpacity={0.7}
          onPress={() => pengarah.push("/screens/keranjang")}
          className="p-2 mt-4 items-end"
        >
          <Ionicons name="cart-outline" size={28} color="white" />
        </TouchableOpacity>

        <View className="flex items-center justify-between w-full">
          <View>
            <Text
              className="text-xl text-center text-[#FFFFFF]"
              style={{ fontFamily: "RobotoBlack" }}
            >
              Jelajahi
            </Text>
            <Text className="text-sm text-center text-[#94A3B8]">
              Kumpulan Rute Perjalanan
            </Text>
          </View>
        </View>
      </View>

      {/* Pilih Rute Perjalanan */}
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 100 }}
        className="mt-6 px-4"
      >
        <Text
          className="text-lg text-black text-center mt-4 mb-2"
          style={{ fontFamily: "RobotoBlack" }}
        >
          Pilih Rute Perjalanan
        </Text>
        {/* Kartu Tiket */}
        {tiketPopuler.map((tiket) => {
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
      </ScrollView>
    </View>
  );
}
