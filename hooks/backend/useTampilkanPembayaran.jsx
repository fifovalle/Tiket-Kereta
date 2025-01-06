import { useState, useEffect } from "react";
import { useRouter } from "expo-router";
import auth from "@react-native-firebase/auth";
import firestore, { Timestamp } from "@react-native-firebase/firestore";

export default function useTampilkanPembayaran() {
  const [dataPembayaran, setDataPembayaran] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const router = useRouter();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const currentUser = auth().currentUser;
        if (!currentUser) {
          setError("Pengguna tidak ditemukan. Silakan login terlebih dahulu.");
          setIsLoading(false);
          return;
        }

        const pembayaranRef = firestore().collection("pembayaran");
        const querySnapshot = await pembayaranRef
          .where("id_pengguna", "==", currentUser.uid)
          .get();

        if (querySnapshot.empty) {
          setError("Data pembayaran tidak ditemukan.");
        } else {
          const pembayaranData = querySnapshot.docs.map((doc) => ({
            id: doc.id,
            ...doc.data(),
          }));
          setDataPembayaran(pembayaranData);
        }
      } catch (err) {
        console.error("Error saat mengambil data pembayaran:", err);
        setError("Terjadi kesalahan saat mengambil data pembayaran.");
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);

  return {
    dataPembayaran,
    isLoading,
    error,
  };
}
