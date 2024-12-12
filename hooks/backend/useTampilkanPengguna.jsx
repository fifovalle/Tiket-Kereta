import { useState, useEffect } from "react";
import auth from "@react-native-firebase/auth";
import firestore from "@react-native-firebase/firestore";

export const useTampilkanPengguna = () => {
  const [pengguna, setPengguna] = useState(null);
  const [sedangMemuatTampilkanPengguna, setSedangMemuatTampilkanPengguna] =
    useState(true);

  useEffect(() => {
    const penggunaSaatIni = auth().currentUser;

    if (penggunaSaatIni) {
      firestore()
        .collection("pengguna")
        .doc(penggunaSaatIni.uid)
        .get()
        .then((doc) => {
          if (doc.exists) {
            setPengguna(doc.data());
          }
        })
        .catch((err) => {
          console.error("Error mendapatkan data pengguna:", err);
        })
        .finally(() => {
          setSedangMemuatTampilkanPengguna(false);
        });
    } else {
      setPengguna(null);
      setSedangMemuatTampilkanPengguna(false);
    }
  }, []);

  return { pengguna, sedangMemuatTampilkanPengguna };
};
