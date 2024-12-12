export function formatNomorTelpon(angka) {
  if (!angka) return "";

  const hanyaAngka = angka.replace(/\D/g, "");

  if (hanyaAngka.length < 4) return hanyaAngka;

  const kodeNegara = "+62";
  const bagian1 = hanyaAngka.slice(1, 4);
  const bagian2 = hanyaAngka.slice(4, 8);
  const bagian3 = hanyaAngka.slice(8);

  return `${kodeNegara} ${bagian1}-${bagian2}-${bagian3}`;
}
