import { useState } from "react";
import { useRouter } from "expo-router";
import auth from "@react-native-firebase/auth";
import firestore, { Timestamp } from "@react-native-firebase/firestore";

const usePesan = () => {
  const pengarah = useRouter();
  const [pesanSnackbar, setPesanSnackbar] = useState("");
  const [tampilkanSnackbar, setTampilkanSnackbar] = useState(false);
  const [sedangMemuatPesan, setSedangMemuatPesan] = useState(false);

  const kirimPesanBooking = async (idTiket, kursi, totalHarga) => {
    try {
      setSedangMemuatPesan(true);

      const pemesan = auth().currentUser?.uid;

      await firestore().collection("pesan").add({
        Pemesan: pemesan,
        ID_Tiket: idTiket,
        Kursi: kursi,
        Total_Harga: totalHarga,
        Tanggal_Pemesanan: Timestamp.now(),
      });

      const keranjangRef = firestore()
        .collection("keranjang")
        .where("ID_Pengguna", "==", pemesan);
      const keranjangSnapshot = await keranjangRef.get();

      if (!keranjangSnapshot.empty) {
        const batch = firestore().batch();
        keranjangSnapshot.forEach((doc) => {
          batch.delete(doc.ref);
        });

        await batch.commit();
      }

      setPesanSnackbar(
        "Pesan booking tiket berhasil dikirim dan keranjang dikosongkan"
      );
      pengarah.push("/(tabs)/tiket");
      setTampilkanSnackbar(true);
      setSedangMemuatPesan(false);
    } catch (error) {
      console.error("Error mengirim pesan booking tiket:", error);
      setPesanSnackbar("Terjadi kesalahan saat mengirim pesan");
      setTampilkanSnackbar(true);
      setSedangMemuatPesan(false);
    }
  };

  return {
    pesanSnackbar,
    kirimPesanBooking,
    tampilkanSnackbar,
    sedangMemuatPesan,
  };
};

export default usePesan;
