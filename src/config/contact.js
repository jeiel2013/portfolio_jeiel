export const CONTACT_EMAIL = "contatojeiel2013@gmail.com";

export function getMailtoLink(subject = "Contato via portfólio") {
  return `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(subject)}`;
}
