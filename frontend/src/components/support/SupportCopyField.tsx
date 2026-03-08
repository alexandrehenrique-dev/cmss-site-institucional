"use client";

import { useState } from "react";
import { Copy, Check } from "lucide-react";
import { Text } from "@/components/Typography";

export function SupportCopyField({
  label,
  value,
  className = "",
}: {
  label?: string;
  value: string;
  className?: string;
}) {
  const [copied, setCopied] = useState(false);

  async function handleCopy() {
    try {
      await navigator.clipboard.writeText(value);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 1600);
    } catch {
      setCopied(false);
    }
  }

  return (
    <div className={["flex flex-col gap-1", className].join(" ")}>
      {label ? (
        <Text variant="small" className="m-0 opacity-75">
          {label}
        </Text>
      ) : null}

      <div className="flex items-center gap-2">
        <Text
          variant="muted"
          className="m-0 break-all text-[var(--fg)]"
        >
          {value}
        </Text>

        <button
          type="button"
          onClick={handleCopy}
          aria-label={copied ? "Copiado" : "Copiar"}
          title={copied ? "Copiado" : "Copiar"}
          className={[
            "inline-flex h-7 w-7 items-center justify-center rounded-sm",
            "text-[var(--gold-base)] hover:text-[var(--gold-light)]",
            "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--gold-base)]",
          ].join(" ")}
        >
          {copied ? (
            <Check className="h-4 w-4" />
          ) : (
            <Copy className="h-4 w-4" />
          )}
        </button>
      </div>
    </div>
  );
}