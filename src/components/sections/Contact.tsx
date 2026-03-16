"use client";

import { useState, type FormEvent } from "react";
import { Mail, Phone, MapPin, Clock, Send } from "lucide-react";
import SectionWrapper from "@/components/ui/SectionWrapper";
import SectionHeading from "@/components/ui/SectionHeading";
import Button from "@/components/ui/Button";
import { LOAN_TYPES } from "@/lib/constants";
import { motion } from "framer-motion";
import { fadeInUp } from "@/lib/animations";

type FormData = {
  name: string;
  email: string;
  phone: string;
  loanType: string;
  message: string;
};

type Errors = Partial<Record<keyof FormData, string>>;

export default function Contact() {
  const [form, setForm] = useState<FormData>({
    name: "",
    email: "",
    phone: "",
    loanType: "",
    message: "",
  });
  const [errors, setErrors] = useState<Errors>({});
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  function validate(): Errors {
    const errs: Errors = {};
    if (!form.name.trim()) errs.name = "Name is required";
    if (!form.email.trim()) errs.email = "Email is required";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email))
      errs.email = "Invalid email address";
    if (!form.phone.trim()) errs.phone = "Phone is required";
    if (!form.loanType) errs.loanType = "Please select a loan type";
    if (!form.message.trim()) errs.message = "Message is required";
    return errs;
  }

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    const errs = validate();
    setErrors(errs);
    if (Object.keys(errs).length > 0) return;

    setSubmitting(true);
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (res.ok) {
        setSubmitted(true);
        setForm({ name: "", email: "", phone: "", loanType: "", message: "" });
      }
    } catch {
      // silently handle
    } finally {
      setSubmitting(false);
    }
  }

  const inputCls =
    "w-full px-4 py-3.5 bg-neutral-50 border border-neutral-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary-500/40 focus:border-primary-400 focus:bg-white transition-all duration-200 text-neutral-800 placeholder:text-neutral-400";

  return (
    <SectionWrapper id="contact" className="relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary-950 via-primary-900 to-primary-800 pointer-events-none" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_20%_50%,rgba(14,165,233,0.15),transparent_50%)] pointer-events-none" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_80%_80%,rgba(34,211,238,0.1),transparent_50%)] pointer-events-none" />

      <div className="relative">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-3 mb-4">
            <span className="h-[2px] w-8 bg-gradient-to-r from-transparent to-primary-400" />
            <span className="text-sm font-semibold text-primary-300 uppercase tracking-wider">
              Get In Touch
            </span>
            <span className="h-[2px] w-8 bg-gradient-to-l from-transparent to-primary-400" />
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white font-[var(--font-heading)]">
            Get In Touch
          </h2>
          <p className="mt-5 text-lg text-primary-200/70 max-w-2xl mx-auto leading-relaxed">
            Ready to find the perfect loan? Send us a message and we&apos;ll be
            in touch.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Form */}
          <motion.div
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
          >
            {submitted ? (
              <div className="glass rounded-2xl p-10 text-center">
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-emerald-500/20 flex items-center justify-center">
                  <Send className="h-8 w-8 text-emerald-400" />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">
                  Thank you!
                </h3>
                <p className="text-primary-200/70">
                  We&apos;ve received your message and will get back to you
                  within 24 hours.
                </p>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="bg-white rounded-2xl p-8 shadow-2xl shadow-black/20 space-y-5"
                noValidate
              >
                <div>
                  <input
                    type="text"
                    placeholder="Full Name"
                    className={inputCls}
                    value={form.name}
                    onChange={(e) =>
                      setForm({ ...form, name: e.target.value })
                    }
                  />
                  {errors.name && (
                    <p className="text-red-500 text-sm mt-1">{errors.name}</p>
                  )}
                </div>

                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <input
                      type="email"
                      placeholder="Email Address"
                      className={inputCls}
                      value={form.email}
                      onChange={(e) =>
                        setForm({ ...form, email: e.target.value })
                      }
                    />
                    {errors.email && (
                      <p className="text-red-500 text-sm mt-1">
                        {errors.email}
                      </p>
                    )}
                  </div>
                  <div>
                    <input
                      type="tel"
                      placeholder="Phone Number"
                      className={inputCls}
                      value={form.phone}
                      onChange={(e) =>
                        setForm({ ...form, phone: e.target.value })
                      }
                    />
                    {errors.phone && (
                      <p className="text-red-500 text-sm mt-1">
                        {errors.phone}
                      </p>
                    )}
                  </div>
                </div>

                <div>
                  <select
                    className={`${inputCls} ${!form.loanType ? "text-neutral-400" : ""}`}
                    value={form.loanType}
                    onChange={(e) =>
                      setForm({ ...form, loanType: e.target.value })
                    }
                  >
                    <option value="">Select Loan Type</option>
                    {LOAN_TYPES.map((t) => (
                      <option key={t} value={t}>
                        {t}
                      </option>
                    ))}
                  </select>
                  {errors.loanType && (
                    <p className="text-red-500 text-sm mt-1">
                      {errors.loanType}
                    </p>
                  )}
                </div>

                <div>
                  <textarea
                    placeholder="Tell us about your loan needs..."
                    rows={4}
                    className={inputCls}
                    value={form.message}
                    onChange={(e) =>
                      setForm({ ...form, message: e.target.value })
                    }
                  />
                  {errors.message && (
                    <p className="text-red-500 text-sm mt-1">
                      {errors.message}
                    </p>
                  )}
                </div>

                <Button
                  type="submit"
                  size="lg"
                  className="w-full"
                  disabled={submitting}
                >
                  {submitting ? "Sending..." : "Send Message"}
                </Button>
              </form>
            )}
          </motion.div>

          {/* Contact details */}
          <motion.div
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            custom={1}
            className="space-y-8"
          >
            <div>
              <h3 className="text-2xl font-bold text-white mb-4">
                Contact Information
              </h3>
              <p className="text-primary-200/60 leading-relaxed">
                Have a question or ready to start? Reach out to us through any
                of the channels below, or fill out the form.
              </p>
            </div>

            <div className="space-y-5">
              {[
                { icon: Mail, label: "Email", value: "hello@loanconnect.com" },
                { icon: Phone, label: "Phone", value: "(555) 123-4567" },
                {
                  icon: MapPin,
                  label: "Office",
                  value: "123 Finance Street, New York, NY 10001",
                },
                {
                  icon: Clock,
                  label: "Hours",
                  value: "Mon–Fri: 9AM–6PM EST",
                },
              ].map(({ icon: Icon, label, value }) => (
                <div key={label} className="flex items-start gap-4 glass rounded-xl p-4">
                  <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-primary-500 to-accent-500 flex items-center justify-center shrink-0 shadow-lg shadow-primary-500/30">
                    <Icon className="h-5 w-5 text-white" />
                  </div>
                  <div>
                    <p className="font-semibold text-white">{label}</p>
                    <p className="text-primary-200/60 text-sm">{value}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </SectionWrapper>
  );
}
