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
        const keranjangData = querySnapshot.docs[0].data();
        const kursiSebelumnya = keranjangData.Kursi;
        const idKursiLama = keranjangData.ID_Kursi;

        if (kursiSebelumnya || idKursiLama !== kursiTerpilih) {
          const kursiRefSebelumnya = firestore()
            .collection("kursi")
            .doc(idKursiYangDiPilih[0]);
          const kursiDocSebelumnya = await kursiRefSebelumnya.get();

          if (kursiDocSebelumnya.exists) {
            const kursiDataSebelumnya = kursiDocSebelumnya.data();
            const kursiArraySebelumnya = kursiDataSebelumnya?.Kursi || [];

            if (kursiSebelumnya && typeof kursiSebelumnya === "string") {
              const kursiIndexSebelumnya = kursiArraySebelumnya.findIndex(
                (k) => `${k.Kolom}` === kursiSebelumnya.slice(1)
              );

              if (kursiIndexSebelumnya !== -1) {
                kursiArraySebelumnya[kursiIndexSebelumnya].Status = "Tersedia";
                await kursiRefSebelumnya.update({
                  Kursi: kursiArraySebelumnya,
                });
              }
            } else {
              const kursiIndexSebelumnya = kursiArraySebelumnya.findIndex(
                (k) => `${k.Kolom}` === kursiSebelumnya
              );

              if (kursiIndexSebelumnya !== -1) {
                kursiArraySebelumnya[kursiIndexSebelumnya].Status = "Tersedia";
                await kursiRefSebelumnya.update({
                  Kursi: kursiArraySebelumnya,
                });
              }
            }
          }
        }

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
