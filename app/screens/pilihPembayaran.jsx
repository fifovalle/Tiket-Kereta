import React from "react";
import { useRouter } from "expo-router";
import { Snackbar } from "react-native-paper";
import { Ionicons } from "@expo/vector-icons";
import { formatRupiah } from "@/constants/formatRupiah";
import { View, Text, ActivityIndicator, TouchableOpacity } from "react-native";
import useMasukanPembayaran from "@/hooks/backend/useMasukanPembayaran";
import useTampilkanKeranjang from "@/hooks/backend/useTampilkanKeranjang";

export default function PilihPembayaran() {
  const pengarah = useRouter();

  const {
    banks,
    selectedBank,
    setSelectedBank,
    isLoading,
    isDropdownOpen,
    setIsDropdownOpen,
    pesanSnackbar,
    tampilkanSnackbar,
    setTampilkanSnackbar,
    masukanPembayaran,
  } = useMasukanPembayaran();

  const { keranjang } = useTampilkanKeranjang();

  const totalHarga = keranjang.reduce((total, item) => {
    return total + item.tiket.Harga;
  }, 0);

  return (
    <View className="flex-1 bg-white">
      {/* Header */}
      <View className="flex-row items-center justify-between px-4 pt-12 bg-white shadow-sm">
        <TouchableOpacity activeOpacity={0.7} onPress={() => pengarah.back()}>
          <Ionicons name="arrow-back" size={24} color="black" />
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
            Pilih Bank
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
                  selectedBank?.id === bank.id ? "border border-[#94A3B8]" : ""
                }`}
                onPress={() => setSelectedBank(bank)}
              >
                <View className="flex-row items-center">
                  <Ionicons name={bank.icon} size={24} color="#6B7280" />
                  <Text className="ml-4 text-gray-800 text-base">
                    {bank.name}
                  </Text>
                </View>
                {selectedBank?.id === bank.id && (
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
          <Text className="text-[#03314B] font-bold">
            {formatRupiah(totalHarga)}
          </Text>
        </View>
        {/* Bank selection section */}
        <View className="flex-row justify-between items-center mt-2">
          <Text className="text-[#94A3B8]">Bank yang dipilih</Text>
          <Text className="text-[#03314B] font-bold">
            {selectedBank ? selectedBank.name : "-"}
          </Text>
        </View>
        <TouchableOpacity
          activeOpacity={0.8}
          className="bg-[#03314B] py-3 rounded-lg mt-4"
          onPress={() => {
            if (!selectedBank) {
              setPesanSnackbar("Silakan pilih bank terlebih dahulu.");
              setTampilkanSnackbar(true);
              return;
            }

            masukanPembayaran();
          }}
        >
          <Text className="text-white text-center font-bold">
            {isLoading ? (
              <ActivityIndicator color="#ffffff" />
            ) : (
              "Masukan Pembayaran"
            )}
          </Text>
        </TouchableOpacity>

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
      </View>
    </View>
  );
}
