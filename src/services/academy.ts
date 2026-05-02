export interface LeadPayload {
  name: string;
  email: string;
  phone?: string;
  organization?: string;
  interest?: string;
  type: "syllabus" | "workshop";
  courseName?: string;
}

/**
 * Submits a lead-capture form (syllabus request or workshop request) to Formspree.
 * Falls back silently when VITE_FORMSPREE_LEAD is not configured (local dev).
 */
export async function submitLeadForm(payload: LeadPayload): Promise<void> {
  const formspreeId = import.meta.env.VITE_FORMSPREE_LEAD as string | undefined;
  if (!formspreeId) return; // local dev — no-op

  const subject =
    payload.type === "syllabus"
      ? `Syllabus Request${payload.courseName ? ` — ${payload.courseName}` : ""}`
      : "Workshop Request";

  const res = await fetch(`https://formspree.io/f/${formspreeId}`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ ...payload, _subject: subject }),
  });

  if (!res.ok) throw new Error(`Formspree error: ${res.status}`);
}
