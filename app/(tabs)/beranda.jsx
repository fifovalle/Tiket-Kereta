import React from "react";
import { useRouter } from "expo-router";
import { Snackbar } from "react-native-paper";
import { Ionicons } from "@expo/vector-icons";
import FormulirPencarian from "@/components/formulirPencarian";
import KontenRutePopuler from "@/components/kontenRutePopuler";
import { View, Text, ScrollView, TouchableOpacity } from "react-native";
import useMasukanKeKeranjang from "@/hooks/backend/useMasukanKeKeranjang";
import useTampilkanKeranjang from "@/hooks/backend/useTampilkanKeranjang";

export default function Beranda() {
  const pengarah = useRouter();

  const { jumlahKeranjang } = useTampilkanKeranjang();
  const {
    pesanSnackbar,
    tampilkanSnackbar,
    masukkanKeKeranjang,
    setTampilkanSnackbar,
  } = useMasukanKeKeranjang();

  return (
    <ScrollView className="flex-1 bg-[#FFFFFF]">
      {/* Bagian Kepala */}
      <View className="h-60 -mb-8 bg-[#03314B] p-4">
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
              Naik Kereta yuk !!, Agar tidak Macet !
            </Text>
          </View>
        </View>

        {/* Bagian Filter */}
        <View className="flex-row my-4 px-4 gap-2">
          <TouchableOpacity
            activeOpacity={0.7}
            className="flex-1 items-center py-2 bg-[#FFCD33] w-20 rounded-lg"
          >
            <Text className="text-black" style={{ fontFamily: "RobotoBold" }}>
              Pergi
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            activeOpacity={0.7}
            className="flex-1 items-center py-2 bg-[#FFF] rounded-lg"
          >
            <Text
              className="text-[#03314B]"
              style={{ fontFamily: "RobotoBold" }}
            >
              Pulang Pergi
            </Text>
          </TouchableOpacity>
        </View>
      </View>

      <Snackbar
        visible={tampilkanSnackbar}
        onDismiss={() => setTampilkanSnackbar(false)}
        className="mb-20 z-10"
        duration={3000}
      >
        <Text
          className="text-center text-white"
          style={{ fontFamily: "RobotoBold" }}
        >
          {pesanSnackbar}
        </Text>
      </Snackbar>

      {/* Formulir Pencarian */}
      <FormulirPencarian />

      {/* Rute Perjalanan Populer */}
      <KontenRutePopuler masukkanKeKeranjang={masukkanKeKeranjang} />
    </ScrollView>
  );
}
