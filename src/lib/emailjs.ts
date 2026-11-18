import emailjs from "@emailjs/browser";

/**
 * EmailJS settings. These IDs are public by design (they ship to the browser);
 * protect the inbox by restricting "Allowed origins" in the EmailJS dashboard.
 * Override per environment with NEXT_PUBLIC_EMAILJS_* (see .env.example).
 */
const config = {
  serviceId: process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID || "service_717pbtd",
  templateId: process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID || "template_u4r95ni",
  publicKey: process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY || "VcLdRZQVWmNq5N3Ea",
};

export interface ContactMessage {
  name: string;
  email: string;
  subject: string;
  message: string;
}

/** Sends the contact form through EmailJS. Field names match the EmailJS template. */
export function sendContactMessage({ name, email, subject, message }: ContactMessage) {
  return emailjs.send(
    config.serviceId,
    config.templateId,
    { from_name: name, from_email: email, subject, message, current_time: new Date().toLocaleString() },
    config.publicKey
  );
}
