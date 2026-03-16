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
    "w-full px-4 py-2.5 bg-gray-50 border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-primary-500/30 focus:border-primary-400 focus:bg-white transition-all text-gray-800 placeholder:text-gray-400";

  return (
    <SectionWrapper id="contact" className="mesh-bg-1">
      <SectionHeading
        title="Get In Touch"
        subtitle="Ready to find your perfect loan? Let's talk."
      />

      <div className="grid lg:grid-cols-5 gap-10 max-w-5xl mx-auto">
        {/* Form */}
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="lg:col-span-3"
        >
          {submitted ? (
            <div className="bg-white rounded-2xl border border-gray-100 p-10 text-center">
              <div className="w-14 h-14 mx-auto mb-4 rounded-full bg-emerald-50 flex items-center justify-center">
                <Send className="h-6 w-6 text-emerald-600" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-1">Thank you!</h3>
              <p className="text-sm text-gray-500">
                We&apos;ll get back to you within 24 hours.
              </p>
            </div>
          ) : (
            <form
              onSubmit={handleSubmit}
              className="bg-white rounded-2xl border border-gray-100 p-7 shadow-sm space-y-4"
              noValidate
            >
              <div>
                <input type="text" placeholder="Full Name" className={inputCls} value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} />
                {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name}</p>}
              </div>

              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <input type="email" placeholder="Email" className={inputCls} value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} />
                  {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
                </div>
                <div>
                  <input type="tel" placeholder="Phone" className={inputCls} value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })} />
                  {errors.phone && <p className="text-red-500 text-xs mt-1">{errors.phone}</p>}
                </div>
              </div>

              <div>
                <select className={`${inputCls} ${!form.loanType ? "text-gray-400" : ""}`} value={form.loanType} onChange={(e) => setForm({ ...form, loanType: e.target.value })}>
                  <option value="">Loan Type</option>
                  {LOAN_TYPES.map((t) => (<option key={t} value={t}>{t}</option>))}
                </select>
                {errors.loanType && <p className="text-red-500 text-xs mt-1">{errors.loanType}</p>}
              </div>

              <div>
                <textarea placeholder="Tell us about your needs..." rows={3} className={inputCls} value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })} />
                {errors.message && <p className="text-red-500 text-xs mt-1">{errors.message}</p>}
              </div>

              <Button type="submit" className="w-full !bg-primary-600 hover:!bg-primary-700" disabled={submitting}>
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
          className="lg:col-span-2 space-y-4"
        >
          {[
            { icon: Mail, label: "Email", value: "hello@loanconnect.com" },
            { icon: Phone, label: "Phone", value: "(555) 123-4567" },
            { icon: MapPin, label: "Office", value: "123 Finance St, NY 10001" },
            { icon: Clock, label: "Hours", value: "Mon–Fri: 9AM–6PM EST" },
          ].map(({ icon: Icon, label, value }) => (
            <div key={label} className="flex items-start gap-3 p-4 bg-white rounded-xl border border-gray-100">
              <div className="w-9 h-9 rounded-lg bg-primary-50 flex items-center justify-center shrink-0">
                <Icon className="h-4 w-4 text-primary-600" />
              </div>
              <div>
                <p className="font-semibold text-gray-900 text-sm">{label}</p>
                <p className="text-gray-500 text-xs">{value}</p>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </SectionWrapper>
  );
}
