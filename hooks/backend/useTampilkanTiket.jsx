import { useState, useEffect } from "react";
import firestore from "@react-native-firebase/firestore";

export default function useTampilkanTiket() {
  const [tiketPopuler, setTiketPopuler] = useState([]);
  const [sedangMemuatTiket, setSedangMemuatTiket] = useState(false);

  useEffect(() => {
    async function ambilTiket() {
      setSedangMemuatTiket(true);
      try {
        const tiketRef = await firestore().collection("tiket").get();

        const tiket = tiketRef.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));

        setTiketPopuler(tiket);
      } catch (error) {
        console.error("Gagal mengambil tiket populer:", error);
      } finally {
        setSedangMemuatTiket(false);
      }
    }

    ambilTiket();
  }, []);

  return { tiketPopuler, sedangMemuatTiket };
}
