import { View, Text, TouchableOpacity, ScrollView } from "react-native";
import React, { useState } from "react";
import { Ionicons } from "@expo/vector-icons";

export default function PilihPembayaran() {
  const banks = [
    { id: 1, name: "Bank Mandiri", icon: "card" },
    { id: 2, name: "Bank BNI", icon: "card" },
    { id: 3, name: "Bank BCA", icon: "card" },
    { id: 4, name: "Bank CIMB Niaga", icon: "card" },
    { id: 5, name: "Bank BRI", icon: "card" },
  ];

  const [selectedBank, setSelectedBank] = useState(null);
  const [isDropdownOpen, setIsDropdownOpen] = useState(true);

  return (
    <View className="flex-1 bg-white">
      {/* Header */}
      <View className="flex-row items-center justify-between px-4 pt-12 bg-white shadow-sm">
        <TouchableOpacity activeOpacity={0.7} onPress={() => pengarah.back()}>
          <Text className="text-lg text-gray-800">
            <Ionicons name="arrow-back" size={24} color="black" />
          </Text>
        </TouchableOpacity>
        <Text className="text-lg" style={{ fontFamily: "RobotoBlack" }}>
          Pilih Pembayaran
        </Text>
        <View className="w-6" />
      </View>

      {/* Dropdown Section */}
      <View style={{ margin: 20 }}>
        {/* Dropdown Header */}
        <TouchableOpacity
          activeOpacity={0.8}
          className="flex-row items-center justify-between bg-white border border-gray-300 rounded-lg p-4"
          onPress={() => setIsDropdownOpen(!isDropdownOpen)}
        >
          <Text className="text-gray-800 text-base font-semibold">
            Mobile Banking
          </Text>
          <Ionicons
            name={isDropdownOpen ? "chevron-up" : "chevron-down"}
            size={20}
            color="#03314B"
          />
        </TouchableOpacity>

        {/* Dropdown Content */}
        {isDropdownOpen && (
          <View
            style={{
              backgroundColor: "#F9FAFB",
              borderColor: "#E5E7EB",
              borderWidth: 1,
              borderRadius: 8,
              marginTop: 8,
              padding: 8,
            }}
          >
            {banks.map((bank) => (
              <TouchableOpacity
                key={bank.id}
                activeOpacity={0.8}
                className={`flex-row items-center justify-between bg-white p-4 rounded-lg mb-2 ${
                  selectedBank === bank.id ? "border border-[#94A3B8]" : ""
                }`}
                onPress={() => setSelectedBank(bank.id)}
              >
                <View className="flex-row items-center">
                  <Ionicons name={bank.icon} size={24} color="#6B7280" />
                  <Text className="ml-4 text-gray-800 text-base">
                    {bank.name}
                  </Text>
                </View>
                {/* Move checkbox to the right side */}
                {selectedBank === bank.id && (
                  <Ionicons name="checkbox" size={24} color="#03314B" />
                )}
              </TouchableOpacity>
            ))}
          </View>
        )}
      </View>

      {/* Footer */}
      <View
        style={{
          position: "absolute",
          bottom: 0,
          width: "100%",
          padding: 16,
        }}
      >
        <View className="flex-row justify-between items-center">
          <Text className="text-[#94A3B8]">Total Pembayaran</Text>
          <Text className="text-[#03314B] font-bold">Rp. 200.000</Text>
        </View>
        {/* Bank selection section */}
        <View className="flex-row justify-between items-center mt-2">
          <Text className="text-[#94A3B8]">Bank yang dipilih</Text>
          <Text className="text-[#03314B] font-bold">
            {selectedBank
              ? banks.find((bank) => bank.id === selectedBank).name
              : "-"}
          </Text>
        </View>
        <TouchableOpacity
          activeOpacity={0.8}
          className="bg-[#03314B] py-3 rounded-lg mt-4"
          onPress={() =>
            alert(
              selectedBank
                ? `Anda memilih ${
                    banks.find((bank) => bank.id === selectedBank).name
                  }`
                : "Silakan pilih bank terlebih dahulu."
            )
          }
        >
          <Text className="text-white text-center font-bold">Konfirmasi</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
