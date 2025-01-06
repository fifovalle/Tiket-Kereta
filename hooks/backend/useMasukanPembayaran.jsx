import { useState } from "react";
import { useRouter } from "expo-router";
import firestore from "@react-native-firebase/firestore";
import auth from "@react-native-firebase/auth";

const useMasukanPembayaran = () => {
  const [pesanSnackbar, setPesanSnackbar] = useState("");
  const [tampilkanSnackbar, setTampilkanSnackbar] = useState(false);
  const [selectedBank, setSelectedBank] = useState(null);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  const banks = [
    { id: 1, name: "Bank Mandiri", icon: "card" },
    { id: 2, name: "Bank BNI", icon: "card" },
    { id: 3, name: "Bank BCA", icon: "card" },
    { id: 4, name: "Bank CIMB Niaga", icon: "card" },
    { id: 5, name: "Bank BRI", icon: "card" },
  ];

  const masukanPembayaran = async () => {
    try {
      if (!selectedBank) {
        setPesanSnackbar("Pilih bank terlebih dahulu.");
        setTampilkanSnackbar(true);
        return;
      }

      setIsLoading(true);

      const currentUser = auth().currentUser;
      if (!currentUser) {
        setPesanSnackbar("Pengguna tidak ditemukan. Silakan login kembali.");
        setTampilkanSnackbar(true);
        return;
      }

      const data = {
        bank: selectedBank.name,
        id_pengguna: currentUser.uid, // ID pengguna
      };

      // Mengecek apakah sudah ada pembayaran dengan id_pengguna yang sama
      const pembayaranRef = firestore().collection("pembayaran");
      const querySnapshot = await pembayaranRef
        .where("id_pengguna", "==", currentUser.uid)
        .get();

      if (querySnapshot.empty) {
        // Jika tidak ada, tambah data baru
        await pembayaranRef.add(data);
        setPesanSnackbar("Pembayaran berhasil dimasukkan.");
      } else {
        // Jika sudah ada, update data pembayaran yang ada
        querySnapshot.forEach(async (doc) => {
          await doc.ref.update(data);
        });
        setPesanSnackbar("Pembayaran berhasil diperbarui.");
      }

      setTampilkanSnackbar(true);

      // Navigasi ke layar keranjang
      router.push("/screens/keranjang");
    } catch (error) {
      console.error("Error saat memasukkan pembayaran:", error);
      setPesanSnackbar("Terjadi kesalahan saat menyimpan pembayaran.");
      setTampilkanSnackbar(true);
    } finally {
      setIsLoading(false);
    }
  };

  return {
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
  };
};

export default useMasukanPembayaran;
