"use client";

import { useState, type ChangeEvent, type FormEvent } from "react";
import ScrambleText from "@/components/motion/ScrambleText";
import { AlertCircle, ArrowRight, Check } from "@/components/ui/Icons";
import { site } from "@/content/site";
import { sendContactMessage, type ContactMessage } from "@/lib/emailjs";
import { cn } from "@/lib/utils";

const empty: ContactMessage = { name: "", email: "", subject: "", message: "" };

type Status = "idle" | "sending" | "success" | "error";

/** Contact form (EmailJS) with floating labels and inline success/error states. */
export default function ContactForm() {
  const [form, setForm] = useState<ContactMessage>(empty);
  const [status, setStatus] = useState<Status>("idle");
  const sending = status === "sending";

  const onChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }));

  const onSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setStatus("sending");
    try {
      await sendContactMessage(form);
      setStatus("success");
      setForm(empty);
    } catch (error) {
      console.error("Error sending email:", error);
      setStatus("error");
    }
  };

  return (
    <div className="glass relative overflow-hidden rounded-[2rem] p-6 sm:p-10">
      <div aria-hidden="true" className="pointer-events-none absolute -right-24 -top-24 h-64 w-64 rounded-full bg-a1/25 blur-[80px]" />
      <h2 aria-label="Send me a message" className="relative text-3xl font-semibold tracking-tight text-white sm:text-4xl">
        <ScrambleText segments={[{ text: "Send me a" }, { text: "message", className: "font-serif font-normal italic text-gradient" }]} />
      </h2>

      <div aria-live="polite">
        {status === "success" && (
          <div className="pop-in mt-6 flex gap-3 rounded-2xl border border-emerald-400/25 bg-emerald-400/[0.08] p-4">
            <Check className="mt-0.5 h-5 w-5 flex-shrink-0 text-emerald-300" />
            <div>
              <p className="font-medium text-emerald-200">Message sent successfully!</p>
              <p className="mt-1 text-sm text-emerald-200/80">Thank you for your message. I&apos;ll get back to you {site.responseTime}.</p>
            </div>
          </div>
        )}
        {status === "error" && (
          <div className="pop-in mt-6 flex gap-3 rounded-2xl border border-rose-400/25 bg-rose-400/[0.08] p-4">
            <AlertCircle className="mt-0.5 h-5 w-5 flex-shrink-0 text-rose-300" />
            <div>
              <p className="font-medium text-rose-200">Failed to send message</p>
              <p className="mt-1 text-sm text-rose-200/80">
                There was an error sending your message. Please try again or contact me directly at {site.email}
              </p>
            </div>
          </div>
        )}
      </div>

      <form onSubmit={onSubmit} className="relative mt-8 space-y-4">
        <div className="grid gap-4 sm:grid-cols-2">
          <Field id="name" label="Name *" value={form.name} onChange={onChange} placeholder="Your name" autoComplete="name" />
          <Field id="email" label="Email *" type="email" value={form.email} onChange={onChange} placeholder="your.email@example.com" autoComplete="email" />
        </div>
        <Field id="subject" label="Subject *" value={form.subject} onChange={onChange} placeholder="What's this about?" />
        <div className="field">
          <textarea
            id="message"
            name="message"
            value={form.message}
            onChange={onChange}
            required
            rows={7}
            placeholder="Tell me about your project or opportunity..."
            className="field-input resize-none"
          />
          <label htmlFor="message" className="field-label">
            Message *
          </label>
        </div>

        <button type="submit" disabled={sending} data-magnetic="0.1" className={cn("btn btn-primary w-full", sending && "pointer-events-none")}>
          {sending ? (
            <span className="relative flex items-center gap-3">
              <svg className="h-5 w-5 animate-spin" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
              </svg>
              Sending...
            </span>
          ) : (
            <>
              <span className="relative">Send message</span>
              <ArrowRight className="btn-arrow relative h-4 w-4" />
            </>
          )}
        </button>
      </form>
    </div>
  );
}

interface FieldProps {
  id: keyof ContactMessage;
  label: string;
  value: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  placeholder: string;
  type?: string;
  autoComplete?: string;
}

/** Text input with a floating label (the placeholder is visually hidden by CSS). */
function Field({ id, label, value, onChange, placeholder, type = "text", autoComplete }: FieldProps) {
  return (
    <div className="field">
      <input
        type={type}
        id={id}
        name={id}
        value={value}
        onChange={onChange}
        required
        placeholder={placeholder}
        autoComplete={autoComplete}
        className="field-input"
      />
      <label htmlFor={id} className="field-label">
        {label}
      </label>
    </div>
  );
}
