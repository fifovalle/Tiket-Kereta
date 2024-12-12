import { useState } from "react";
import { useRouter } from "expo-router";
import auth from "@react-native-firebase/auth";

const useKeluar = () => {
  const pengarah = useRouter();
  const [sedangMemuatKeluar, setSedangMemuatKeluar] = useState(false);

  const keluar = async () => {
    setSedangMemuatKeluar(true);
    try {
      await auth().signOut();
      pengarah.push("/login");
    } catch (error) {
      console.error("Gagal logout:", error);
    } finally {
      setSedangMemuatKeluar(false);
    }
  };

  return {
    keluar,
    sedangMemuatKeluar,
  };
};

export default useKeluar;
