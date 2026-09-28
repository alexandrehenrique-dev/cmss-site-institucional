export function formatEventDate(date?: string) {
  if (!date) return null;

  const d = new Date(date);
  if (Number.isNaN(d.getTime())) return null;

  // JSON calendar dates are parsed at midnight UTC; format in UTC on both server and browser.
  const day = d.toLocaleDateString("pt-BR", { day: "2-digit", timeZone: "UTC" });

  const month = d
    .toLocaleDateString("pt-BR", { month: "short", timeZone: "UTC" })
    .replace(".", "")
    .toUpperCase();

  const full = d.toLocaleDateString("pt-BR", {
    day: "2-digit",
    month: "long",
    year: "numeric",
    timeZone: "UTC",
  });

  return { day, month, full };
}