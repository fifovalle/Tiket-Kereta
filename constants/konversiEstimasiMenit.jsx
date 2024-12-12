export const konversiEstimasiMenit = (estimasi) => {
  const jam = estimasi.match(/(\d+)\s*Jam/);
  const menit = estimasi.match(/(\d+)\s*Menit/);

  const jamDalamMenit = jam ? parseInt(jam[1]) * 60 : 0;
  const menitDalamMenit = menit ? parseInt(menit[1]) : 0;

  return jamDalamMenit + menitDalamMenit;
};
