"use client";

import { Text } from "@/components/Typography";

type BaseProps = {
  id: string;
  label: string;
  placeholder?: string;
  value: string;
  error?: string;
  required?: boolean;
  disabled?: boolean;
  className?: string;
  onChange: (value: string) => void;
};

type InputProps = BaseProps & {
  type?: "text" | "email";
  multiline?: false;
};

type TextareaProps = BaseProps & {
  multiline: true;
  rows?: number;
};

export type ContactFormFieldProps = InputProps | TextareaProps;

export function ContactFormField(props: ContactFormFieldProps) {
  const {
    id,
    label,
    placeholder,
    value,
    error,
    required = false,
    disabled = false,
    className = "",
    onChange,
  } = props;

  const commonClassName = [
    "w-full rounded-md border bg-[var(--surface-1)] text-[var(--fg)]",
    "border-[var(--border)]",
    "px-4 py-3",
    "font-[var(--font-body)]",
    "placeholder:text-[var(--muted)]",
    "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--gold-base)]",
    "disabled:cursor-not-allowed disabled:opacity-60",
  ].join(" ");

  return (
    <div className={["flex flex-col gap-2", className].join(" ")}>
      <label
        htmlFor={id}
        className="text-sm font-medium text-[var(--fg)]"
      >
        {label}
        {required ? <span className="ml-1 text-[var(--primary)]">*</span> : null}
      </label>

      {props.multiline ? (
        <textarea
          id={id}
          name={id}
          rows={props.rows ?? 6}
          value={value}
          placeholder={placeholder}
          required={required}
          disabled={disabled}
          aria-invalid={error ? "true" : "false"}
          aria-describedby={error ? `${id}-error` : undefined}
          className={[commonClassName, "resize-y min-h-[140px]"].join(" ")}
          onChange={(e) => onChange(e.target.value)}
        />
      ) : (
        <input
          id={id}
          name={id}
          type={props.type ?? "text"}
          value={value}
          placeholder={placeholder}
          required={required}
          disabled={disabled}
          aria-invalid={error ? "true" : "false"}
          aria-describedby={error ? `${id}-error` : undefined}
          className={commonClassName}
          onChange={(e) => onChange(e.target.value)}
        />
      )}

      {error ? (
        <Text
          as="span"
          variant="small"
          className="m-0 text-[var(--primary)]"
          id={`${id}-error`}
        >
          {error}
        </Text>
      ) : null}
    </div>
  );
}