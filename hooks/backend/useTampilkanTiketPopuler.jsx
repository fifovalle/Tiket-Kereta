import { useState, useEffect } from "react";
import firestore from "@react-native-firebase/firestore";

export default function useTampilkanTiketPopuler() {
  const [tiketPopuler, setTiketPopuler] = useState([]);
  const [sedangMemuatTiketPopuler, setSedangMemuatTiketPopuler] =
    useState(false);

  useEffect(() => {
    async function ambilTiketPopuler() {
      setSedangMemuatTiketPopuler(true);
      try {
        const tiketRef = firestore().collection("tiket");
        const tiketDocs = await tiketRef
          .orderBy("Ulasan", "desc")
          .limit(2)
          .get();

        const tiket = await Promise.all(
          tiketDocs.docs.map(async (doc) => {
            const docSnapshot = await doc.ref.get();
            return {
              id: docSnapshot.id,
              ...docSnapshot.data(),
            };
          })
        );

        setTiketPopuler(tiket);
      } catch (error) {
        console.error("Gagal mengambil tiket populer:", error);
      } finally {
        setSedangMemuatTiketPopuler(false);
      }
    }

    ambilTiketPopuler();
  }, []);

  return { tiketPopuler, sedangMemuatTiketPopuler };
}
