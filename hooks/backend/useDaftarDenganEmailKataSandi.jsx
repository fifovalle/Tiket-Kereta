import { useState } from "react";
import { useRouter } from "expo-router";
import auth from "@react-native-firebase/auth";
import firestore, { Timestamp } from "@react-native-firebase/firestore";

const useDaftarDenganEmailKataSandi = () => {
  const pengarah = useRouter();
  const [email, setEmail] = useState("");
  const [namaDepan, setNamaDepan] = useState("");
  const [kataSandi, setKataSandi] = useState("");
  const [namaBelakang, setNamaBelakang] = useState("");
  const [nomorTelepon, setNomorTelepon] = useState("");
  const [pesanSnackbar, setPesanSnackbar] = useState("");
  const [tampilkanSnackbar, setTampilkanSnackbar] = useState(false);
  const [perlihatkanKataSandi, setPerlihatkanKataSandi] = useState(false);
  const [
    sedangMemuatDaftarDenganEmailKataSandi,
    setSedangMemuatDaftarDenganEmailKataSandi,
  ] = useState(false);

  const daftarDenganEmailKataSandi = async () => {
    setSedangMemuatDaftarDenganEmailKataSandi(true);
    try {
      const { user } = await auth().createUserWithEmailAndPassword(
        email,
        kataSandi
      );

      await firestore().collection("pengguna").doc(user.uid).set({
        Email: email,
        Nama_Depan: namaDepan,
        Kata_Sandi: kataSandi,
        Nama_Belakang: namaBelakang,
        Nomor_Telepon: nomorTelepon,
        Tanggal_Pembuatan_Akun: Timestamp.now(),
      });

      setPesanSnackbar("Pendaftaran berhasil!");
      setTampilkanSnackbar(true);
      pengarah.push("/(tabs)");
    } catch (error) {
      setPesanSnackbar(`Terjadi kesalahan: ${error.message}`);
      setTampilkanSnackbar(true);
      console.error("Terjadi kesalahan:", error.message);
    } finally {
      setSedangMemuatDaftarDenganEmailKataSandi(false);
    }
  };

  return {
    email,
    setEmail,
    kataSandi,
    namaDepan,
    setNamaDepan,
    setKataSandi,
    nomorTelepon,
    namaBelakang,
    pesanSnackbar,
    setNamaBelakang,
    setNomorTelepon,
    tampilkanSnackbar,
    setTampilkanSnackbar,
    perlihatkanKataSandi,
    setPerlihatkanKataSandi,
    daftarDenganEmailKataSandi,
    sedangMemuatDaftarDenganEmailKataSandi,
  };
};

export default useDaftarDenganEmailKataSandi;
