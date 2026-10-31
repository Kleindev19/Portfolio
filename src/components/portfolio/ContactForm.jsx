
import { useState } from "react";
import { ArrowUpRight, Check } from "lucide-react";
import { PROFILE } from "@/lib/portfolio-data";

const EMPTY_FORM = { name: "", email: "", message: "" };

const FIELD_CLASS =
  "w-full border-b border-border bg-transparent py-3 text-[15px] text-foreground placeholder:text-muted-foreground/50 transition-colors focus:border-primary focus:outline-none";

export default function ContactForm() {
  const [form, setForm] = useState(EMPTY_FORM);
  const [status, setStatus] = useState("idle");

  const update = (field) => (event) => {
    setForm((current) => ({
      ...current,
      [field]: event.target.value,
    }));
  };

  const onSubmit = (event) => {
    event.preventDefault();

    const subject = encodeURIComponent(
      `Portfolio inquiry from ${form.name}`
    );

    const body = encodeURIComponent(
      `Name: ${form.name}\nEmail: ${form.email}\n\nMessage:\n${form.message}`
    );

    const email = PROFILE.email;

    if (!email || email === "hello@example.com") {
      alert("Please configure your email in portfolio-data.js first.");
      return;
    }

    window.location.href = `mailto:${email}?subject=${subject}&body=${body}`;

    setStatus("sent");
  };

  if (status === "sent") {
    return (
      <div className="flex h-full flex-col justify-center border border-primary/30 bg-primary/[0.03] p-8 md:p-10">
        <span className="flex h-11 w-11 items-center justify-center border border-primary text-primary">
          <Check className="h-5 w-5" />
        </span>

        <h3 className="mt-6 font-heading text-2xl font-semibold tracking-[-0.02em]">
          Email draft opened.
        </h3>

        <p className="mt-3 max-w-sm text-sm leading-relaxed text-muted-foreground">
          Your email application should open with your message ready. Review it and press Send.
        </p>

        <button
          type="button"
          onClick={() => {
            setStatus("idle");
            setForm(EMPTY_FORM);
          }}
          className="mt-6 inline-flex w-fit items-center gap-2 border-b border-primary/40 pb-1 font-mono text-[10px] uppercase tracking-[0.2em] text-primary"
        >
          Send another message
          <ArrowUpRight className="h-3 w-3" />
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} className="space-y-7">
      <div className="grid gap-7 sm:grid-cols-2">
        <div>
          <label htmlFor="contact-name" className="font-mono text-[10px] uppercase tracking-[0.22em] text-muted-foreground">
            Name
          </label>
          <input
            id="contact-name"
            name="name"
            type="text"
            required
            minLength={2}
            maxLength={80}
            placeholder="Your name"
            value={form.name}
            onChange={update("name")}
            className={FIELD_CLASS}
          />
        </div>

        <div>
          <label htmlFor="contact-email" className="font-mono text-[10px] uppercase tracking-[0.22em] text-muted-foreground">
            Email
          </label>
          <input
            id="contact-email"
            name="email"
            type="email"
            required
            maxLength={120}
            placeholder="you@company.com"
            value={form.email}
            onChange={update("email")}
            className={FIELD_CLASS}
          />
        </div>
      </div>

      <div>
        <label htmlFor="contact-message" className="font-mono text-[10px] uppercase tracking-[0.22em] text-muted-foreground">
          Message
        </label>
        <textarea
          id="contact-message"
          name="message"
          required
          minLength={10}
          maxLength={2000}
          rows={4}
          placeholder="Tell me about the role, project or idea."
          value={form.message}
          onChange={update("message")}
          className={`${FIELD_CLASS} resize-none`}
        />
      </div>

      <button
        type="submit"
        className="group inline-flex items-center justify-center gap-2 bg-primary px-6 py-3.5 font-mono text-[10px] uppercase tracking-[0.2em] text-primary-foreground transition-colors hover:bg-primary/90"
      >
        Send message
        <ArrowUpRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
      </button>
    </form>
  );
}
