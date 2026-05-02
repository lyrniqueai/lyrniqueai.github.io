export interface ContactPayload {
  name: string;
  email: string;
  company?: string;
  service: string;
  message: string;
}

/**
 * Submits a contact enquiry to Formspree.
 * Falls back silently when VITE_FORMSPREE_CONTACT is not configured (local dev).
 */
export async function submitContactForm(data: ContactPayload): Promise<void> {
  const formspreeId = import.meta.env.VITE_FORMSPREE_CONTACT as string | undefined;
  if (!formspreeId) return; // local dev — no-op

  const res = await fetch(`https://formspree.io/f/${formspreeId}`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      ...data,
      _subject: `Project Enquiry from ${data.name}`,
    }),
  });

  if (!res.ok) throw new Error(`Formspree error: ${res.status}`);
}
