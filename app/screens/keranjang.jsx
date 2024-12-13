import React, { useEffect, useState } from "react";
import { useRouter } from "expo-router";
import { Snackbar } from "react-native-paper";
import { Ionicons } from "@expo/vector-icons";
import auth from "@react-native-firebase/auth";
import usePesan from "@/hooks/backend/usePesan";
import NomorKursi from "@/components/nomorKursi";
import { formatRupiah } from "@/constants/formatRupiah";
import firestore from "@react-native-firebase/firestore";
import InformasiTiket from "@/components/informasiTiket";
import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  ActivityIndicator,
} from "react-native";
import useTampilkanKeranjang from "@/hooks/backend/useTampilkanKeranjang";

export default function PilihanTiket() {
  const pengarah = useRouter();
  const { keranjang } = useTampilkanKeranjang();
  const {
    pesanSnackbar,
    kirimPesanBooking,
    tampilkanSnackbar,
    sedangMemuatPesan,
  } = usePesan();

  const totalHarga = keranjang.map((keranjang) => {
    return keranjang.tiket.Harga;
  });

  const idTiket = keranjang.map((keranjang) => {
    return keranjang.ID_Tiket;
  });

  const kursi = keranjang.map((keranjang) => {
    return keranjang.Kursi;
  });

  const [kursiTersedia, setKursiTersedia] = useState(true);

  useEffect(() => {
    const checkKursiAvailability = async () => {
      try {
        const keranjangRef = firestore()
          .collection("keranjang")
          .where("ID_Pengguna", "==", auth().currentUser.uid);

        const snapshot = await keranjangRef.get();

        if (!snapshot.empty) {
          const keranjangData = snapshot.docs[0].data();
          if (keranjangData.Kursi) {
            setKursiTersedia(true);
          } else {
            setKursiTersedia(false);
          }
        } else {
          setKursiTersedia(false);
        }
      } catch (error) {
        console.error("Error mengecek kursi:", error);
        setKursiTersedia(false);
      }
    };

    checkKursiAvailability();
  }, [idTiket]);

  return (
    <View className="flex-1 bg-white">
      {/* Kepala */}
      <View className="flex-row items-center justify-between px-4 pt-12 bg-white shadow-sm">
        <TouchableOpacity activeOpacity={0.7} onPress={() => pengarah.back()}>
          <Text className="text-lg text-gray-800">
            <Ionicons name="arrow-back" size={24} color="black" />
          </Text>
        </TouchableOpacity>
        <Text className="text-lg" style={{ fontFamily: "RobotoBlack" }}>
          Keranjang
        </Text>
        <View className="w-6" />
      </View>

      {keranjang.length === 0 ? (
        <View className="flex-1 justify-center items-center">
          <Text
            className="text-lg text-black"
            style={{ fontFamily: "RobotoBold" }}
          >
            Keranjang Kosong
          </Text>
        </View>
      ) : (
        <>
          <ScrollView showsVerticalScrollIndicator={false}>
            {/* Informasi Tiket */}
            <InformasiTiket />

            {/* Nomor Kursi */}
            <NomorKursi />
          </ScrollView>

          {/* Total Perjalanan & Tombol */}
          <View className="bg-white rounded-lg flex-row items-center justify-between">
            <View className="p-4">
              <Text
                className="text-[#94A3B8]"
                style={{ fontFamily: "RobotoBold" }}
              >
                Total Perjalanan
              </Text>
              <Text className="text-lg" style={{ fontFamily: "RobotoBold" }}>
                {formatRupiah(totalHarga)}
              </Text>
            </View>
            <TouchableOpacity
              activeOpacity={0.7}
              disabled={sedangMemuatPesan || !kursiTersedia}
              onPress={() => kirimPesanBooking(idTiket, kursi, totalHarga)}
              className={`m-4 p-4 w-60 bg-[#03314B] rounded-lg ${
                sedangMemuatPesan || !kursiTersedia ? "opacity-50" : ""
              }`}
            >
              <Text
                className="text-center text-white"
                style={{ fontFamily: "RobotoBold" }}
              >
                {sedangMemuatPesan ? (
                  <ActivityIndicator size="small" color="white" />
                ) : (
                  "Pesan Tiket"
                )}
              </Text>
            </TouchableOpacity>
          </View>
        </>
      )}

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
  );
}
