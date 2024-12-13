import { useState, useEffect } from "react";
import firestore from "@react-native-firebase/firestore";
import auth from "@react-native-firebase/auth";

const useTampilkanPemesanan = () => {
  const [pemesanan, setPemesanan] = useState([]);
  const [sedangMemuatTampilkanPemesanan, setSedangMemuatTampilkanPemesanan] =
    useState(true);

  useEffect(() => {
    const ambilPemesanan = async () => {
      try {
        const user = auth().currentUser;
        if (user) {
          const pemesananSnapshot = await firestore()
            .collection("pesan")
            .where("Pemesan", "==", user.uid)
            .get();

          const pemesananData = [];
          for (const doc of pemesananSnapshot.docs) {
            const data = doc.data();
            const tiketSnapshot = await firestore()
              .collection("tiket")
              .doc(data.ID_Tiket[0])
              .get();

            if (tiketSnapshot.exists) {
              pemesananData.push({
                ...data,
                id: doc.id,
                tiket: tiketSnapshot.data(),
              });
            }
          }
          setPemesanan(pemesananData);
        }
      } catch (error) {
        console.error("Error fetching pemesanan: ", error);
      } finally {
        setSedangMemuatTampilkanPemesanan(false);
      }
    };

    ambilPemesanan();
  }, []);

  return {
    pemesanan,
    sedangMemuatTampilkanPemesanan,
  };
};

export default useTampilkanPemesanan;
