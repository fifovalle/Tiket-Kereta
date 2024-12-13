import { useState } from "react";
import firestore from "@react-native-firebase/firestore";

const usePencarianTiket = () => {
  const [ke, setKe] = useState("");
  const [dari, setDari] = useState("");
  const [hasilPencarian, setHasilPencarian] = useState([]);
  const [sedangMemuatPencarianTiket, setSedangMemuatPencarianTiket] =
    useState(false);

  const cariTiket = async () => {
    setSedangMemuatPencarianTiket(true);

    try {
      const tiketSnapshot = await firestore()
        .collection("tiket")
        .where("Kota_Tujuan", "==", ke)
        .where("Kota_Keberangkatan", "==", dari)
        .get();

      if (!tiketSnapshot.empty) {
        const tiketData = tiketSnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setHasilPencarian(tiketData);
      } else {
        setHasilPencarian([]);
      }
    } catch (err) {
      console.error("Kesalahan saat mencari tiket:", err.message);
    } finally {
      setSedangMemuatPencarianTiket(false);
    }
  };

  return {
    ke,
    dari,
    setKe,
    setDari,
    cariTiket,
    hasilPencarian,
    sedangMemuatPencarianTiket,
  };
};

export default usePencarianTiket;
