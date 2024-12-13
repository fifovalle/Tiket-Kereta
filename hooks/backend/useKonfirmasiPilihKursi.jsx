import { useState } from "react";
import auth from "@react-native-firebase/auth";
import firestore from "@react-native-firebase/firestore";

const useKonfirmasiPilihKursi = () => {
  const [pesanSnackbar, setPesanSnackbar] = useState("");
  const [tampilkanSnackbar, setTampilkanSnackbar] = useState(false);
  const [sedangMemuatPilihKursi, setSedangMemuatPilihKursi] = useState(false);

  const idPengguna = auth().currentUser?.uid;

  const konfirmasiPilihKursi = async (kursiTerpilih, idKursiYangDiPilih) => {
    try {
      setSedangMemuatPilihKursi(true);

      const querySnapshot = await firestore()
        .collection("keranjang")
        .where("ID_Pengguna", "==", idPengguna)
        .get();

      if (!querySnapshot.empty) {
        const keranjangRef = querySnapshot.docs[0].ref;

        await keranjangRef.update({
          Kursi: kursiTerpilih,
          Tanggal_Pemesanan: firestore.FieldValue.serverTimestamp(),
        });

        const kursiRef = firestore()
          .collection("kursi")
          .doc(idKursiYangDiPilih[0]);
        const kursiDoc = await kursiRef.get();

        if (kursiDoc.exists) {
          const kursiData = kursiDoc.data();
          const kursiArray = kursiData?.Kursi || [];

          const kursiIndex = kursiArray.findIndex(
            (k) => `${k.Kolom}` === kursiTerpilih.slice(1)
          );

          if (kursiIndex !== -1) {
            kursiArray[kursiIndex].Status = "Tidak Tersedia";

            await kursiRef.update({
              Kursi: kursiArray,
            });

            setPesanSnackbar("Kursi berhasil dikonfirmasi!");
            setTampilkanSnackbar(true);
          } else {
            setPesanSnackbar("Kursi tidak ditemukan.");
            setTampilkanSnackbar(true);
          }
        } else {
          setPesanSnackbar("Dokumen kursi tidak ditemukan.");
          setTampilkanSnackbar(true);
        }
      } else {
        setPesanSnackbar("Tidak ada data keranjang yang ditemukan.");
        setTampilkanSnackbar(true);
      }
    } catch (error) {
      console.error("Error saat konfirmasi kursi:", error);
      setPesanSnackbar("Terjadi kesalahan saat mengonfirmasi kursi.");
      setTampilkanSnackbar(true);
    } finally {
      setSedangMemuatPilihKursi(false);
    }
  };

  return {
    pesanSnackbar,
    setPesanSnackbar,
    tampilkanSnackbar,
    setTampilkanSnackbar,
    konfirmasiPilihKursi,
    sedangMemuatPilihKursi,
  };
};

export default useKonfirmasiPilihKursi;
