export const formatTanggal = (timestamp) => {
  const date = new Date(timestamp.seconds * 1000);
  const options = { day: "2-digit", month: "short", year: "numeric" };
  return date.toLocaleDateString("id-ID", options);
};
