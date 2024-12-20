import React from "react";
import * as Print from "expo-print";
import { useRouter } from "expo-router";
import { shareAsync } from "expo-sharing";
import { Ionicons } from "@expo/vector-icons";
import * as FileSystem from "expo-file-system";
import { formatTanggal } from "@/constants/formatTanggal";
import useTampilkanKeranjang from "@/hooks/backend/useTampilkanKeranjang";
import useTampilkanPemesanan from "@/hooks/backend/useTampilkanPemesanan";
import {
  TouchableOpacity,
  View,
  Text,
  Alert,
  ActivityIndicator,
  ScrollView,
} from "react-native";

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

  const buatPDF = async (item) => {
    try {
      const { tiket } = item;
      const {
        Nama,
        Kelas,
        Tanggal,
        Kota_Tujuan,
        Kota_Keberangkatan,
        Waktu_Keberangkatan,
      } = tiket;

      const htmlContent = `
      <html>
        <head>
          <style>
            body {
              font-family: 'Arial', sans-serif;
              margin: 0;
              padding: 0;
              background-color: #eef2f7;
              display: flex;
              justify-content: center;
              align-items: center;
              height: 100vh;
            }
            .ticket-container {
              width: 100%;
              max-width: 650px;
              margin: 30px auto;
              background-color: #fff;
              border-radius: 20px;
              box-shadow: 0 6px 12px rgba(0, 0, 0, 0.1);
              padding: 40px;
              overflow: hidden;
              font-size: 16px;
            }
            .ticket-header {
              text-align: center;
              margin-bottom: 30px;
            }
            .ticket-header h1 {
              color: #2c3e50;
              font-size: 32px;
              font-weight: bold;
              margin: 0;
              letter-spacing: 1px;
            }
            .ticket-header p {
              color: #7f8c8d;
              font-size: 16px;
            }
            .ticket-details {
              display: grid;
              grid-template-columns: 1fr 1fr;
              gap: 20px;
              margin-top: 20px;
            }
            .ticket-details div {
              background-color: #ecf0f1;
              padding: 20px;
              border-radius: 12px;
              box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
              font-size: 16px;
              transition: background-color 0.3s ease;
            }
            .ticket-details div:hover {
              background-color: #dfe6e9;
            }
            .ticket-details strong {
              color: #2c3e50;
              font-weight: bold;
            }
            .ticket-status {
              text-align: center;
              margin-top: 40px;
              font-size: 18px;
              padding: 15px;
              background-color: #3498db;
              border-radius: 50px;
              color: #fff;
              font-weight: bold;
              text-transform: uppercase;
            }
            .ticket-footer {
              text-align: center;
              margin-top: 40px;
              font-size: 14px;
              color: #7f8c8d;
            }
            .ticket-footer p {
              margin: 0;
              font-style: italic;
            }
            .ticket-footer a {
              text-decoration: none;
              color: #3498db;
              font-weight: bold;
            }
            .ticket-footer a:hover {
              text-decoration: underline;
            }
          </style>
        </head>
        <body>
          <div class="ticket-container">
            <div class="ticket-header">
              <h1>Tiket Kereta: ${Nama || "Nama Tiket"}</h1>
              <p>Booking ID: #${Math.floor(Math.random() * 100000)}</p>
            </div>

            <div class="ticket-details">
              <div>
                <strong>Kelas:</strong> ${Kelas}
              </div>
              <div>
                <strong>Tanggal:</strong> ${formatTanggal(Tanggal)}
              </div>
              <div>
                <strong>Rute:</strong> ${Kota_Keberangkatan} - ${Kota_Tujuan}
              </div>
              <div>
                <strong>Waktu Keberangkatan:</strong> ${
                  Waktu_Keberangkatan || "10:00"
                }
              </div>
            </div>

            <div class="ticket-status">
              <strong>Status:</strong> ${
                statusAktif(Tanggal) ? "Aktif" : "Tidak Aktif"
              }
            </div>

            <div class="ticket-footer">
              <p>Terima kasih telah memesan tiket dengan kami. Semoga perjalanan Anda menyenangkan!</p>
              <p><a href="#">Lihat detail lebih lanjut</a></p>
            </div>
          </div>
        </body>
      </html>
    `;

      const { uri } = await Print.printToFileAsync({ html: htmlContent });

      const folderDownload = FileSystem.documentDirectory + "Download";
      const fileUri = folderDownload + `/${Nama || "tiket"}.pdf`;

      await FileSystem.makeDirectoryAsync(folderDownload, {
        intermediates: true,
      });

      await FileSystem.moveAsync({ from: uri, to: fileUri });

      await shareAsync(fileUri);

      await FileSystem.deleteAsync(fileUri);
    } catch (error) {
      Alert.alert("Gagal membuat PDF", error.message);
    }
  };

  const statusAktif = (Tanggal) => {
    const tanggalPemesanan = new Date(Tanggal.seconds * 1000);
    const tanggalSekarang = new Date();
    return tanggalPemesanan > tanggalSekarang;
  };

  return (
    <View className="flex-1 bg-[#F5F5F5]">
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

          return (
            <TouchableOpacity
              key={id}
              activeOpacity={0.7}
              className="bg-white rounded-lg p-4 shadow-md mb-4"
              onPress={() => buatPDF(item)}
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
                  Status: {statusAktif(Tanggal) ? "Aktif" : "Tidak Aktif"}
                </Text>
              </View>
            </TouchableOpacity>
          );
        })}
      </ScrollView>
    </View>
  );
}
