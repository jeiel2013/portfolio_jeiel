// TODO: troque pelo seu número real (código do país + DDD + número, sem espaços/símbolos)
export const WHATSAPP_NUMBER = "5533984334504";

export function getWhatsAppLink(
  message = "Olá, Jeiel! Vi seu portfólio e quero conversar sobre um projeto."
) {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}
