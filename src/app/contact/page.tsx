"use client";

import { useState } from "react";
import emailjs from '@emailjs/browser';
import PageHero from "../components/ui/PageHero";
import Reveal from "../components/motion/Reveal";
import SocialLinks from "../components/ui/SocialLinks";
import { AlertCircle, ArrowRight, ArrowUpRight, Check, Clock, Download, FileText, Mail, MapPin, Phone } from "../components/ui/Icons";
import { site } from "../lib/site";
import { cn } from "../lib/utils";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [copied, setCopied] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      // EmailJS configuration - Your actual EmailJS values
      const serviceId = 'service_717pbtd';
      const templateId = 'template_u4r95ni';
      const publicKey = 'VcLdRZQVWmNq5N3Ea'; // Your EmailJS Public Key

      // Send email using EmailJS
      await emailjs.send(
        serviceId,
        templateId,
        {
          from_name: formData.name,
          from_email: formData.email,
          subject: formData.subject,
          message: formData.message,
          current_time: new Date().toLocaleString(),
        },
        publicKey
      );

      setSubmitStatus('success');
      setFormData({ name: "", email: "", subject: "", message: "" });
    } catch (error) {
      console.error('Error sending email:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(site.email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      window.location.href = `mailto:${site.email}`;
    }
  };

  const info = [
    {
      Icon: Mail,
      label: "Email",
      value: site.email,
      action: (
        <button type="button" onClick={copyEmail} className="link-underline text-sm font-medium text-a2">
          {copied ? "Copied to clipboard" : "Copy address"}
        </button>
      ),
    },
    { Icon: Phone, label: "Phone", value: "+91 *******303" },
    { Icon: MapPin, label: "Location", value: site.location },
  ];

  return (
    <>
      <PageHero
        eyebrow="Get in touch"
        title="Let's work"
        accent="together"
        description="Ready to build something amazing? I'm always interested in new opportunities and exciting projects. Let's discuss how we can bring your ideas to life."
      />

      <section className="pb-10">
        <div className="container-x grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
          {/* Info column */}
          <div className="space-y-5">
            <Reveal>
              <p className="text-lg leading-relaxed text-muted">
                Feel free to reach out through any of these channels. I typically respond within 24 hours.
              </p>
            </Reveal>

            {info.map(({ Icon, label, value, action }, i) => (
              <Reveal key={label} delay={100 + i * 90}>
                <div className="spotlight group flex items-center gap-5 p-5">
                  <span className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl border border-white/10 bg-gradient-to-br from-a1/25 to-a2/10 text-white transition-transform duration-700 ease-[var(--ease)] group-hover:-rotate-6">
                    <Icon className="h-5 w-5" />
                  </span>
                  <div className="min-w-0 flex-1">
                    <p className="text-xs uppercase tracking-[0.14em] text-subtle">{label}</p>
                    <p className="truncate font-medium text-white">{value}</p>
                  </div>
                  {action}
                </div>
              </Reveal>
            ))}

            <Reveal delay={400}>
              <div className="spotlight p-6">
                <p className="text-xs uppercase tracking-[0.14em] text-subtle">Connect with me</p>
                <SocialLinks className="mt-4" />
              </div>
            </Reveal>

            {/* Resume */}
            <Reveal delay={500}>
              <div className="ring-conic rounded-[1.25rem] p-px">
                <div className="rounded-[calc(1.25rem-1px)] bg-[#0b0b12] p-6">
                  <div className="flex items-start gap-4">
                    <span className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl bg-white text-black">
                      <FileText className="h-5 w-5" />
                    </span>
                    <div>
                      <h3 className="text-lg font-semibold text-white">Download Resume</h3>
                      <p className="mt-1 text-sm leading-relaxed text-muted">
                        Get a copy of my detailed resume with all my experience and skills
                      </p>
                    </div>
                  </div>
                  <div className="mt-6 flex flex-col gap-3 sm:flex-row">
                    <a href={site.resumeViewUrl} target="_blank" rel="noopener noreferrer" className="btn btn-primary !h-11 flex-1">
                      <span className="relative">View resume</span>
                      <ArrowUpRight className="btn-arrow relative h-4 w-4" />
                    </a>
                    <a href={site.resumeDownloadUrl} download="Yash_Carpenter_Resume.pdf" className="btn btn-ghost !h-11 flex-1">
                      <Download className="h-4 w-4" /> Download PDF
                    </a>
                  </div>
                  <p className="mt-4 flex items-center gap-1.5 text-xs text-subtle">
                    <Clock className="h-3.5 w-3.5" /> Last updated: August 2025
                  </p>
                </div>
              </div>
            </Reveal>
          </div>

          {/* Form */}
          <Reveal variant="right" delay={150}>
            <div className="glass relative overflow-hidden rounded-[2rem] p-6 sm:p-10">
              <div aria-hidden="true" className="pointer-events-none absolute -right-24 -top-24 h-64 w-64 rounded-full bg-a1/25 blur-[80px]" />
              <h2 className="relative text-3xl font-semibold tracking-tight text-white sm:text-4xl">
                Send me a <span className="font-serif font-normal italic text-gradient">message</span>
              </h2>

              <div aria-live="polite">
                {submitStatus === 'success' && (
                  <div className="pop-in mt-6 flex gap-3 rounded-2xl border border-emerald-400/25 bg-emerald-400/[0.08] p-4">
                    <Check className="mt-0.5 h-5 w-5 flex-shrink-0 text-emerald-300" />
                    <div>
                      <p className="font-medium text-emerald-200">Message sent successfully!</p>
                      <p className="mt-1 text-sm text-emerald-200/80">
                        Thank you for your message. I&apos;ll get back to you within 24 hours.
                      </p>
                    </div>
                  </div>
                )}
                {submitStatus === 'error' && (
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

              <form onSubmit={handleSubmit} className="relative mt-8 space-y-4">
                <div className="grid gap-4 sm:grid-cols-2">
                  <div className="field">
                    <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} required placeholder="Your name" autoComplete="name" className="field-input" />
                    <label htmlFor="name" className="field-label">Name *</label>
                  </div>
                  <div className="field">
                    <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} required placeholder="your.email@example.com" autoComplete="email" className="field-input" />
                    <label htmlFor="email" className="field-label">Email *</label>
                  </div>
                </div>
                <div className="field">
                  <input type="text" id="subject" name="subject" value={formData.subject} onChange={handleChange} required placeholder="What's this about?" className="field-input" />
                  <label htmlFor="subject" className="field-label">Subject *</label>
                </div>
                <div className="field">
                  <textarea id="message" name="message" value={formData.message} onChange={handleChange} required rows={7} placeholder="Tell me about your project or opportunity..." className="field-input resize-none" />
                  <label htmlFor="message" className="field-label">Message *</label>
                </div>

                <button type="submit" disabled={isSubmitting} data-magnetic="0.1" className={cn("btn btn-primary w-full", isSubmitting && "pointer-events-none")}>
                  {isSubmitting ? (
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
          </Reveal>
        </div>
      </section>
    </>
  );
}
