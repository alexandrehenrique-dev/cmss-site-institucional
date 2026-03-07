export function resolveFooterTemplate(
  template: string,
  foundedYear: number,
  now: Date = new Date()
) {
  const currentYear = now.getFullYear();
  const years = Math.max(0, currentYear - foundedYear);

  return template
    .replaceAll("{years}", String(years))
    .replaceAll("{year}", String(currentYear));
}

export function resolveFooterTemplateParts(
  template: string,
  foundedYear: number,
  now: Date = new Date()
) {
  const currentYear = now.getFullYear();
  const years = Math.max(0, currentYear - foundedYear);

  const resolved = template.replaceAll("{year}", String(currentYear));
  const [before = "", after = ""] = resolved.split("{years}");

  return {
    years: String(years),
    text: `${before}${after}`,
  };
}