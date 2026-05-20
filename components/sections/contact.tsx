"use client";

import { useState, type FormEvent } from "react";
import { contact, site } from "@/lib/content";
import { DiamondGlyph } from "../diamond-motif";
import { SectionChapter } from "../section-chapter";

type Status = "idle" | "submitting" | "success" | "error";

export function Contact() {
  const [status, setStatus] = useState<Status>("idle");
  const [errors, setErrors] = useState<Record<string, string>>({});

  const formspreeId = process.env.NEXT_PUBLIC_FORMSPREE_ID;

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const data = new FormData(form);

    // Honeypot. If filled, silently succeed without alerting the bot.
    if (data.get("company_website")) {
      setStatus("success");
      return;
    }

    const next: Record<string, string> = {};
    if (!String(data.get("name") ?? "").trim()) next.name = "Please tell us your name.";
    const email = String(data.get("email") ?? "").trim();
    if (!email) next.email = "We need an email to reply to.";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email))
      next.email = "That doesn't look like a valid email.";
    if (!String(data.get("message") ?? "").trim())
      next.message = "Tell David what's on your mind.";

    setErrors(next);
    if (Object.keys(next).length > 0) return;

    setStatus("submitting");

    if (!formspreeId) {
      // Fallback: open user's mail client with the message pre-filled.
      const subject = encodeURIComponent("Enquiry via DW Advisory website");
      const lines = [
        `Name: ${data.get("name")}`,
        `Email: ${data.get("email")}`,
        `Phone: ${data.get("phone") || "(not provided)"}`,
        `Stage: ${data.get("stage") || "(not provided)"}`,
        "",
        String(data.get("message") ?? ""),
      ].join("\n");
      window.location.href = `mailto:${site.contact.email}?subject=${subject}&body=${encodeURIComponent(lines)}`;
      setStatus("success");
      return;
    }

    try {
      const res = await fetch(`https://formspree.io/f/${formspreeId}`, {
        method: "POST",
        headers: { Accept: "application/json" },
        body: data,
      });
      if (!res.ok) throw new Error("send failed");
      setStatus("success");
      form.reset();
    } catch {
      setStatus("error");
    }
  }

  return (
    <section
      id="contact"
      className="relative py-16 md:py-32 bg-[var(--color-cream-warm)] overflow-hidden"
    >
      <div className="container-page relative grid md:grid-cols-[1fr_1.2fr] gap-14 md:gap-20 items-start">
        <div className="md:sticky md:top-32">
          <SectionChapter numeral="VI" />
          <span className="kicker">{contact.kicker}</span>
          <h2 className="display mt-5 text-[clamp(2rem,4.4vw,3.5rem)] leading-[1.06] [text-wrap:balance]">
            {contact.heading.pre}
            <span className="display-italic">{contact.heading.accent}</span>
            {contact.heading.post}
          </h2>
          <p className="mt-6 text-[17px] leading-relaxed text-[var(--color-ink-muted)] max-w-md">
            {contact.body}
          </p>

          <ul className="mt-8 space-y-3">
            {contact.promises.map((line) => (
              <li key={line} className="flex items-start gap-3 text-[15px] text-[var(--color-ink)]">
                <span className="mt-1.5 shrink-0">
                  <DiamondGlyph size={9} color="#0088a8" />
                </span>
                {line}
              </li>
            ))}
          </ul>

          <div className="mt-10 p-6 rounded-2xl bg-white ring-1 ring-[var(--color-line)]">
            <div className="text-[10px] tracking-[0.22em] uppercase text-[var(--color-ink-muted)]">
              Or skip the form
            </div>
            <a
              href={`mailto:${site.contact.email}`}
              className="mt-3 block font-display text-xl text-[var(--color-navy)] hover:text-[var(--color-teal)] transition-colors break-all"
            >
              {site.contact.email}
            </a>
            <a
              href={site.contact.phoneHref}
              className="mt-2 block font-display text-xl text-[var(--color-navy)] hover:text-[var(--color-teal)] transition-colors"
            >
              {site.contact.phone}
            </a>
            <div className="mt-4 text-[13px] text-[var(--color-ink-muted)] italic">
              {site.contact.responseTime}
            </div>
          </div>
        </div>

        <div>
          {status === "success" ? (
            <SuccessState />
          ) : (
            <form
              onSubmit={handleSubmit}
              noValidate
              className="rounded-3xl bg-white ring-1 ring-[var(--color-line)] p-7 md:p-10 shadow-[var(--shadow-card)]"
            >
              <div className="grid sm:grid-cols-2 gap-5">
                <Field label="Your name" name="name" required error={errors.name} />
                <Field label="Email" name="email" type="email" required error={errors.email} />
                <Field label="Phone (optional)" name="phone" type="tel" />
                <SelectField
                  label="Business stage"
                  name="stage"
                  options={contact.businessStages}
                />
              </div>

              <div className="mt-5">
                <Field
                  label="What's on your mind?"
                  name="message"
                  textarea
                  required
                  placeholder="A line or two on what you're working on, what you're stuck on, or what you'd like to talk through."
                  error={errors.message}
                />
              </div>

              {/* Honeypot */}
              <div className="hidden" aria-hidden>
                <label>
                  Company website
                  <input type="text" name="company_website" tabIndex={-1} autoComplete="off" />
                </label>
              </div>

              {status === "error" && (
                <div className="mt-5 rounded-xl bg-red-50 text-red-700 text-sm p-4 ring-1 ring-red-200">
                  Something went wrong sending your message. Please email{" "}
                  <a className="underline" href={`mailto:${site.contact.email}`}>
                    {site.contact.email}
                  </a>{" "}
                  directly.
                </div>
              )}

              <div className="mt-7 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <p className="text-[12px] text-[var(--color-ink-muted)] max-w-xs">
                  We&rsquo;ll only use your details to reply. No newsletters, no lists, no spam.
                </p>
                <button
                  type="submit"
                  disabled={status === "submitting"}
                  className="inline-flex items-center gap-2 rounded-full bg-[var(--color-navy)] text-[var(--color-cream)] px-7 py-3.5 text-[15px] font-medium hover:bg-[var(--color-navy-deep)] disabled:opacity-60 transition-colors"
                >
                  {status === "submitting" ? "Sending…" : "Send enquiry"}
                  <span aria-hidden>→</span>
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}

function SuccessState() {
  return (
    <div className="rounded-3xl bg-[var(--color-navy)] text-white p-10 md:p-14 ring-1 ring-black/5 shadow-[var(--shadow-card)]">
      <div className="flex items-center justify-center w-14 h-14 rounded-2xl bg-white/10 ring-1 ring-white/15">
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden>
          <path d="M4 12.5L9 17.5L20 6.5" stroke="#5cc6dc" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </div>
      <h3 className="font-display text-3xl mt-6 text-white">Thanks, it&rsquo;s landed.</h3>
      <p className="mt-4 text-white/75 leading-relaxed">
        I&rsquo;ll read this myself and reply within one working day. If
        it&rsquo;s urgent, give me a call on{" "}
        <a href={site.contact.phoneHref} className="underline decoration-[var(--color-teal-300)] underline-offset-4">
          {site.contact.phone}
        </a>
        .
      </p>
    </div>
  );
}

function Field({
  label,
  name,
  type = "text",
  textarea,
  required,
  placeholder,
  error,
}: {
  label: string;
  name: string;
  type?: string;
  textarea?: boolean;
  required?: boolean;
  placeholder?: string;
  error?: string;
}) {
  const baseClasses =
    "mt-2 block w-full rounded-xl bg-[var(--color-cream)] border border-[var(--color-line)] px-4 py-3 text-[15px] text-[var(--color-ink)] placeholder:text-[var(--color-ink-muted)]/70 focus:outline-none focus:border-[var(--color-teal)] focus:ring-2 focus:ring-[var(--color-teal)]/30 transition";

  return (
    <label className="block">
      <span className="text-[12px] tracking-[0.14em] uppercase text-[var(--color-ink-muted)] font-medium">
        {label}
        {required && <span className="text-[var(--color-teal)]"> *</span>}
      </span>
      {textarea ? (
        <textarea
          name={name}
          required={required}
          placeholder={placeholder}
          rows={5}
          className={baseClasses}
        />
      ) : (
        <input
          type={type}
          name={name}
          required={required}
          placeholder={placeholder}
          className={baseClasses}
        />
      )}
      {error && (
        <span className="mt-1.5 block text-xs text-red-600">{error}</span>
      )}
    </label>
  );
}

function SelectField({
  label,
  name,
  options,
}: {
  label: string;
  name: string;
  options: readonly string[];
}) {
  return (
    <label className="block">
      <span className="text-[12px] tracking-[0.14em] uppercase text-[var(--color-ink-muted)] font-medium">
        {label}
      </span>
      <select
        name={name}
        defaultValue=""
        className="mt-2 block w-full rounded-xl bg-[var(--color-cream)] border border-[var(--color-line)] px-4 py-3 text-[15px] text-[var(--color-ink)] focus:outline-none focus:border-[var(--color-teal)] focus:ring-2 focus:ring-[var(--color-teal)]/30 appearance-none transition"
      >
        <option value="" disabled>
          Select one…
        </option>
        {options.map((opt) => (
          <option key={opt} value={opt}>
            {opt}
          </option>
        ))}
      </select>
    </label>
  );
}
