"use client";

import { useCallback, useEffect, useRef, useState } from "react";

/**
 * Copies text and flips `copied` to true for `resetMs`.
 * Falls back to `fallbackHref` (e.g. a mailto: link) if the Clipboard API is unavailable.
 */
export function useCopyToClipboard(resetMs = 2000) {
  const [copied, setCopied] = useState(false);
  const timer = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => () => {
    if (timer.current) clearTimeout(timer.current);
  }, []);

  const copy = useCallback(
    async (text: string, fallbackHref?: string) => {
      try {
        await navigator.clipboard.writeText(text);
        setCopied(true);
        if (timer.current) clearTimeout(timer.current);
        timer.current = setTimeout(() => setCopied(false), resetMs);
      } catch {
        if (fallbackHref) window.location.href = fallbackHref;
      }
    },
    [resetMs]
  );

  const reset = useCallback(() => setCopied(false), []);

  return { copied, copy, reset };
}
