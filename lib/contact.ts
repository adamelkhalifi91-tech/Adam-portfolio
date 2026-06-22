import { cvData } from "@/lib/cv-data";

export const contactEmail = cvData.identity.email;

/**
 * Standard mailto link. Opens whichever mail client the visitor uses (Gmail,
 * Outlook, Apple Mail, mobile, ...) with the recipient pre-filled, with no
 * dependency on being signed into any webmail.
 */
export const contactHref = `mailto:${contactEmail}`;
