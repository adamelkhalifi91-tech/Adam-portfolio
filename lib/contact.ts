import { cvData } from "@/lib/cv-data";

export const contactEmail = cvData.identity.email;

/**
 * Opens Gmail's compose window with the recipient pre-filled, instead of the
 * OS default mail client. Visitors not signed into Gmail are sent through the
 * Google login first. Use with an external link so it opens in a new tab.
 */
export const contactHref = `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(
  contactEmail,
)}`;
