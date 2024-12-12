export const tambahWaktu = (waktu, durasiMenit) => {
  const [jam, menit] = waktu.split(":").map(Number);
  const waktuDate = new Date(0);
  waktuDate.setHours(jam, menit);
  waktuDate.setMinutes(waktuDate.getMinutes() + durasiMenit);

  const jamBaru = String(waktuDate.getHours()).padStart(2, "0");
  const menitBaru = String(waktuDate.getMinutes()).padStart(2, "0");
  return `${jamBaru}:${menitBaru}`;
};
