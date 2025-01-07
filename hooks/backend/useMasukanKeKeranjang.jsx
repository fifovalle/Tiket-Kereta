import { useState } from "react";
import { useRouter } from "expo-router";
import auth from "@react-native-firebase/auth";
import firestore from "@react-native-firebase/firestore";

const useMasukanKeKeranjang = () => {
  const pengarah = useRouter();
  const [pesanSnackbar, setPesanSnackbar] = useState("");
  const [tampilkanSnackbar, setTampilkanSnackbar] = useState(false);

  const masukkanKeKeranjang = async (idTiket) => {
    const pengguna = auth().currentUser;

    try {
      const keranjangQuery = await firestore()
        .collection("keranjang")
        .where("ID_Pengguna", "==", pengguna.uid)
        .get();

      if (!keranjangQuery.empty) {
        setPesanSnackbar("Hanya satu tiket yang dapat ada dalam keranjang.");
        setTampilkanSnackbar(true);
        return;
      }

      const keranjangRef = firestore().collection("keranjang").doc();
      const tiketData = {
        ID_Tiket: idTiket,
        ID_Pengguna: pengguna.uid,
      };

      await keranjangRef.set(tiketData);

      pengarah.push("/screens/keranjang");
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
