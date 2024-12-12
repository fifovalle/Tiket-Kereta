import { useEffect } from "react";
import { useRouter } from "expo-router";
import auth from "@react-native-firebase/auth";

export default function useMengarahkanPengguna(
  apakahHurufTerpasang,
  idPengguna
) {
  const pengarah = useRouter();

  useEffect(() => {
    if (!apakahHurufTerpasang) return;

    const tidakBerlangganan = auth().onAuthStateChanged((pengguna) => {
      pengarah.replace(
        pengguna ? (idPengguna ? "/(tabs)/beranda" : "/login") : "/login"
      );
    });

    return () => {
      tidakBerlangganan();
    };
  }, [apakahHurufTerpasang, pengarah, idPengguna]);
}
