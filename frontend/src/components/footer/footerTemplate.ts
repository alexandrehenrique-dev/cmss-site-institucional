export function resolveFooterTemplate(
  template: string,
  foundedYear: number,
  now: Date = new Date()
) {
  const currentYear = now.getFullYear();
  const years = Math.max(0, currentYear - foundedYear);

  // tokens disponíveis agora:
  // {years} -> anos desde fundação
  // {year}  -> ano atual (vai te ajudar depois)
  return template
    .replaceAll("{years}", String(years))
    .replaceAll("{year}", String(currentYear));
}