import { useState, useEffect } from "react";
import firestore from "@react-native-firebase/firestore";

const useTampilkanKursi = () => {
  const [kursi, setKursi] = useState([]);
  const [sedangMemuatTampilkanKursi, setSedangMemuatTampilkanKursi] =
    useState(true);

  useEffect(() => {
    const ambilKursi = async () => {
      try {
        const kursiSnapshot = await firestore().collection("kursi").get();

        const kursiData = kursiSnapshot.docs.map((doc) => {
          const data = doc.data();
          return {
            id: doc.id,
            Baris: data.Baris,
            Kursi: data.Kursi.map((k) => ({
              Kolom: k.Kolom,
              Status: k.Status,
            })),
          };
        });

        kursiData.sort((a, b) => {
          if (a.Baris < b.Baris) return -1;
          if (a.Baris > b.Baris) return 1;
          return 0;
        });

        setKursi(kursiData);
      } catch (error) {
        console.error("Error mengambil data kursi:", error);
      } finally {
        setSedangMemuatTampilkanKursi(false);
      }
    };

    ambilKursi();
  }, []);

  return { kursi, sedangMemuatTampilkanKursi };
};

export default useTampilkanKursi;
