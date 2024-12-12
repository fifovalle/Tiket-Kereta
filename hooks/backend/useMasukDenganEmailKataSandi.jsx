import { useState } from "react";
import { useRouter } from "expo-router";
import auth from "@react-native-firebase/auth";

const useMasukDenganEmailKataSandi = () => {
  const pengarah = useRouter();
  const [email, setEmail] = useState("");
  const [kataSandi, setKataSandi] = useState("");
  const [pesanSnackbar, setPesanSnackbar] = useState("");
  const [tampilkanSnackbar, setTampilkanSnackbar] = useState(false);
  const [perlihatkanKataSandi, setPerlihatkanKataSandi] = useState(false);
  const [
    sedangMemuatMasukDenganEmailKataSandi,
    setSedangMemuatMasukDenganEmailKataSandi,
  ] = useState(false);

  const validasiInput = () => {
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setPesanSnackbar("Format email tidak valid.");
      setTampilkanSnackbar(true);
      return false;
    }
    return true;
  };

  const masukDenganEmailKataSandi = async () => {
    if (!validasiInput()) return;

    setSedangMemuatMasukDenganEmailKataSandi(true);
    try {
      await auth().signInWithEmailAndPassword(email, kataSandi);

      setPesanSnackbar("Berhasil masuk!");
      setTampilkanSnackbar(true);
      pengarah.push("/(tabs)");
    } catch (error) {
      switch (error.code) {
        case "auth/user-not-found":
          setPesanSnackbar("Pengguna tidak tersedia, silakan daftar.");
          break;
        case "auth/wrong-password":
          setPesanSnackbar("Kata sandi salah, silakan coba lagi.");
          break;
        case "auth/invalid-email":
          setPesanSnackbar("Email tidak valid. Silakan coba lagi.");
          break;
        case "auth/too-many-requests":
          setPesanSnackbar("Terlalu banyak percobaan login. Coba lagi nanti.");
          break;
        default:
          setPesanSnackbar(`Terjadi kesalahan: ${error.message}`);
          break;
      }
      setTampilkanSnackbar(true);
    } finally {
      setSedangMemuatMasukDenganEmailKataSandi(false);
    }
  };

  return {
    email,
    setEmail,
    kataSandi,
    setKataSandi,
    pesanSnackbar,
    tampilkanSnackbar,
    perlihatkanKataSandi,
    setTampilkanSnackbar,
    setPerlihatkanKataSandi,
    masukDenganEmailKataSandi,
    sedangMemuatMasukDenganEmailKataSandi,
  };
};

export default useMasukDenganEmailKataSandi;
