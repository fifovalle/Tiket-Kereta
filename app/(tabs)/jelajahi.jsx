import React from "react";
import { useRouter } from "expo-router";
import { Ionicons } from "@expo/vector-icons";
import { View, Text, Image, TouchableOpacity } from "react-native";

export default function Jelajahi() {
  const pengarah = useRouter();

  return (
    <View className="flex-1 bg-[#FFFFFF]">
      {/* Bagian Kepala */}
      <View className="h-36 -mb-8 bg-[#03314B] p-4">
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
      <View className="mt-6 px-4">
        <Text className="text-lg text-black text-center mt-4 mb-2" style={{ fontFamily: "RobotoBlack" }}>
          Pilih Rute Perjalanan
        </Text>
        {/* Kartu Tiket */}
        <TouchableOpacity
          activeOpacity={0.7}
          className="bg-white rounded-lg shadow-md overflow-hidden mb-4"
        >
          {/* Gambar */}
          <Image
            source={{
              uri: "https://ik.imagekit.io/tvlk/blog/2020/04/Bundaran-HI-Wikipedia.jpg?tr=dpr-2,w-675",
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
                Bandung - Jakarta
              </Text>
              <Text
                className="text-[#94A3B8] mt-1"
                style={{ fontFamily: "RobotoBold" }}
              >
                Dari Rp100.000
              </Text>
              <View className="flex-row items-center mt-2">
                <Ionicons name="time" size={14} color="#94A3B8" />
                <Text className="text-[#94A3B8] text-xs ml-2">
                  3 jam 45 menit
                </Text>
              </View>
            </View>
            <View className="items-end">
              <Text className="text-[#FFCD33] text-lg font-semibold">
                4.5 ⭐
              </Text>
            </View>
          </View>
        </TouchableOpacity>

        <TouchableOpacity
          activeOpacity={0.7}
          className="bg-white rounded-lg shadow-md overflow-hidden mb-4"
        >
          {/* Gambar */}
          <Image
            source={{
              uri: "https://d5vna1c75x8sk.cloudfront.net/wp-content/uploads/2023/07/gedung-sate.jpg",
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
                Jakarta - Bandung
              </Text>
              <Text
                className="text-[#94A3B8] mt-1"
                style={{ fontFamily: "RobotoBold" }}
              >
                Dari Rp100.000
              </Text>
              <View className="flex-row items-center mt-2">
                <Ionicons name="time" size={14} color="#94A3B8" />
                <Text className="text-[#94A3B8] text-xs ml-2">
                  3 jam 45 menit
                </Text>
              </View>
            </View>
            <View className="items-end">
              <Text className="text-[#FFCD33] text-lg font-semibold">
                4.5 ⭐
              </Text>
            </View>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
}
