"use client";

import { site } from "@/content/site";
import { useCopyToClipboard } from "@/lib/useCopyToClipboard";

/** "Copy address" link-style button; falls back to opening the mail app. */
export default function CopyEmailButton() {
  const { copied, copy } = useCopyToClipboard();
  return (
    <button type="button" onClick={() => copy(site.email, `mailto:${site.email}`)} className="link-underline text-sm font-medium text-a2">
      <span aria-live="polite">{copied ? "Copied to clipboard" : "Copy address"}</span>
    </button>
  );
}
