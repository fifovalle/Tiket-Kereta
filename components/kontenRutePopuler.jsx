import React from "react";
import { View, Text, TouchableOpacity, Image } from "react-native";

export default function KontenRutePopuler() {
  return (
    <View className="mt-6 px-4">
      {/* Judul */}
      <Text className="text-lg font-semibold text-black mb-4">
        Rute Perjalanan Populer
      </Text>
      {/* Kartu Tiket */}
      <TouchableOpacity
        activeOpacity={0.7}
        className="flex-row items-center bg-white p-4 rounded-md shadow"
      >
        <Image
          source={{
            uri: "https://ik.imagekit.io/tvlk/blog/2020/04/Bundaran-HI-Wikipedia.jpg?tr=dpr-2,w-675",
          }}
          className="w-16 h-16 rounded mr-4"
        />
        <View className="flex-1">
          <Text className="text-black" style={{ fontFamily: "RobotoBlack" }}>
            Bandung - Jakarta
          </Text>
          <Text className="text-[#94A3B8]" style={{ fontFamily: "RobotoBold" }}>
            Dari Rp100.000
          </Text>
        </View>
        <Text className="text-[#FFCD33] font-semibold">4.5 ⭐</Text>
      </TouchableOpacity>
    </View>
  );
}
