import { useState, useEffect } from "react";
import firestore from "@react-native-firebase/firestore";
import auth from "@react-native-firebase/auth";

const useTampilkanKeranjang = () => {
  const [keranjang, setKeranjang] = useState([]);
  const [sedangMemuatTampilkanKeranjang, setSedangMemuatTampilkanKeranjang] =
    useState(true);

  useEffect(() => {
    const ambilKeranjang = async () => {
      try {
        const user = auth().currentUser;
        if (user) {
          const keranjangSnapshot = await firestore()
            .collection("keranjang")
            .where("ID_Pengguna", "==", user.uid)
            .get();

          const keranjangData = [];
          for (const doc of keranjangSnapshot.docs) {
            const data = doc.data();
            const tiketSnapshot = await firestore()
              .collection("tiket")
              .doc(data.ID_Tiket)
              .get();

            if (tiketSnapshot.exists) {
              keranjangData.push({
                ...data,
                id: doc.id,
                tiket: tiketSnapshot.data(),
              });
            }
          }
          setKeranjang(keranjangData);
        }
      } catch (error) {
        console.error("Error fetching keranjang: ", error);
      } finally {
        setSedangMemuatTampilkanKeranjang(false);
      }
    };

    ambilKeranjang();
  }, []);

  const jumlahKeranjang = keranjang.length;

  return {
    keranjang,
    jumlahKeranjang,
    sedangMemuatTampilkanKeranjang,
  };
};

export default useTampilkanKeranjang;
