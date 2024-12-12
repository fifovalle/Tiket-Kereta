import { useState } from "react";
import auth from "@react-native-firebase/auth";
import firestore from "@react-native-firebase/firestore";

const useMasukanKeKeranjang = () => {
  const [pesanSnackbar, setPesanSnackbar] = useState("");
  const [tampilkanSnackbar, setTampilkanSnackbar] = useState(false);

  const masukkanKeKeranjang = async (idTiket) => {
    const pengguna = auth().currentUser;

    if (!pengguna) {
      setPesanSnackbar("Pengguna tidak terautentikasi.");
      setTampilkanSnackbar(true);
      return;
    }

    try {
      const keranjangQuery = await firestore()
        .collection("keranjang")
        .where("ID_Tiket", "==", idTiket)
        .where("ID_Pengguna", "==", pengguna.uid)
        .get();

      if (!keranjangQuery.empty) {
        setPesanSnackbar("Tiket ini sudah ada di dalam keranjang.");
        setTampilkanSnackbar(true);
        return;
      }

      const keranjangRef = firestore().collection("keranjang").doc();

      const tiketData = {
        ID_Tiket: idTiket,
        ID_Pengguna: pengguna.uid,
      };

      await keranjangRef.set(tiketData);

      setPesanSnackbar("Tiket berhasil dimasukkan ke keranjang.");
      setTampilkanSnackbar(true);
    } catch (err) {
      setPesanSnackbar("Terjadi kesalahan saat memasukkan ke keranjang.");
      setTampilkanSnackbar(true);
      console.error("Error memasukkan ke keranjang:", err);
    }
  };

  return {
    pesanSnackbar,
    tampilkanSnackbar,
    masukkanKeKeranjang,
    setTampilkanSnackbar,
  };
};

export default useMasukanKeKeranjang;
