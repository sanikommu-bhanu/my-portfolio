"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  Mail, Github, Linkedin, Copy, Send, Check,
  MessageSquare, Sparkles, ArrowUpRight, MapPin
} from "lucide-react";
import { toast } from "sonner";

const socials = [
  {
    icon: Mail,
    label: "Email",
    value: "sanikommu.bhanu@gmail.com",
    href: "mailto:sanikommu.bhanu@gmail.com",
    description: "Best way to reach me",
    accent: "#0ea5e9",
  },
  {
    icon: Github,
    label: "GitHub",
    value: "github.com/sanikommu-bhanu",
    href: "https://github.com/sanikommu-bhanu",
    description: "See all my code",
    accent: "#8b5cf6",
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    value: "linkedin.com/in/Bhanu-Sanikommu",
    href: "https://linkedin.com/in/Bhanu-Sanikommu",
    description: "Connect professionally",
    accent: "#0ea5e9",
  },
];

export default function Contact() {
  const [copied, setCopied] = useState(false);
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [sending, setSending] = useState(false);

  const copyEmail = async () => {
    await navigator.clipboard.writeText("sanikommu.bhanu@gmail.com");
    setCopied(true);
    toast.success("Email copied to clipboard!");
    setTimeout(() => setCopied(false), 2500);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSending(true);
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formState),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data?.error || "Failed to send message.");
      }

      toast.success("Message sent! I'll get back to you soon.", {
        description: "Typically respond within 24 hours.",
      });
      setFormState({ name: "", email: "", subject: "", message: "" });
    } catch (error) {
      const message = error instanceof Error ? error.message : "Failed to send message.";
      toast.error("Message could not be sent.", {
        description: message,
      });
    } finally {
      setSending(false);
    }
  };

  return (
    <section id="contact" className="relative py-24 sm:py-32">
      {/* Background */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-px bg-gradient-to-r from-transparent via-border to-transparent" />
        <div className="absolute top-1/2 left-1/4 w-64 h-64 bg-sky-500/5 rounded-full blur-3xl" />
        <div className="absolute top-1/3 right-1/4 w-64 h-64 bg-violet-500/5 rounded-full blur-3xl" />
      </div>

      <div className="section-container">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <div className="section-tag mx-auto w-fit">
            <MessageSquare size={12} />
            Contact
          </div>
          <h2 className="section-title max-w-2xl mx-auto">
            Let&apos;s build something{" "}
            <span className="gradient-text">great together</span>
          </h2>
          <p className="mt-4 text-muted-foreground max-w-lg mx-auto">
            Open to internships, collaborations, freelance work, and just great
            conversations about tech and design.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Left: Contact Info */}
          <div className="space-y-5">
            {/* Status banner */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="glass-card p-5 border border-emerald-400/20"
            >
              <div className="flex items-start gap-3">
                <div className="relative flex-shrink-0 mt-0.5">
                  <div className="w-3 h-3 rounded-full bg-emerald-400" />
                  <div className="absolute inset-0 rounded-full bg-emerald-400 animate-ping opacity-40" />
                </div>
                <div>
                  <p className="font-semibold text-sm text-foreground">
                    Available for Internships
                  </p>
                  <p className="text-xs text-muted-foreground mt-0.5">
                    Actively seeking Full Stack, AI/ML, and Design roles. Open to
                    remote, hybrid, or on-site across India.
                  </p>
                  <div className="flex items-center gap-1 mt-2 text-xs text-muted-foreground">
                    <MapPin size={11} />
                    India · Open to Remote
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Social cards */}
            {socials.map((social, i) => (
              <motion.a
                key={social.label}
                href={social.href}
                target={social.href.startsWith("http") ? "_blank" : undefined}
                rel="noopener noreferrer"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                whileHover={{ x: 4 }}
                className="glass-card p-5 flex items-center gap-4 group no-underline"
              >
                <div
                  className="w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0 transition-colors"
                  style={{ backgroundColor: `${social.accent}20` }}
                >
                  <social.icon size={20} style={{ color: social.accent }} />
                </div>
                <div className="min-w-0 flex-1">
                  <div className="text-xs text-muted-foreground mb-0.5">{social.description}</div>
                  <div className="text-sm font-medium text-foreground group-hover:text-primary transition-colors truncate">
                    {social.value}
                  </div>
                </div>
                <ArrowUpRight
                  size={15}
                  className="text-muted-foreground group-hover:text-primary transition-all group-hover:translate-x-0.5 group-hover:-translate-y-0.5 flex-shrink-0"
                />
              </motion.a>
            ))}

            {/* Copy email */}
            <motion.button
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.35 }}
              onClick={copyEmail}
              className="w-full flex items-center justify-center gap-2 p-3 rounded-xl border border-dashed border-border/50 text-sm text-muted-foreground hover:text-foreground hover:border-primary/40 transition-all duration-200"
            >
              {copied ? (
                <>
                  <Check size={14} className="text-emerald-400" />
                  <span className="text-emerald-400">Email copied!</span>
                </>
              ) : (
                <>
                  <Copy size={14} />
                  Click to copy email address
                </>
              )}
            </motion.button>
          </div>

          {/* Right: Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <form onSubmit={handleSubmit} className="glass-card p-6 sm:p-8 space-y-4">
              <h3 className="font-display font-bold text-lg text-foreground mb-2">
                Send a message
              </h3>

              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="text-xs font-medium text-muted-foreground mb-1.5 block">
                    Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={formState.name}
                    onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                    placeholder="Your name"
                    className="w-full px-3 py-2.5 rounded-xl bg-secondary border border-border/50 text-sm text-foreground placeholder:text-muted-foreground/60 focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/20 transition-all"
                  />
                </div>
                <div>
                  <label className="text-xs font-medium text-muted-foreground mb-1.5 block">
                    Email *
                  </label>
                  <input
                    type="email"
                    required
                    value={formState.email}
                    onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                    placeholder="your@email.com"
                    className="w-full px-3 py-2.5 rounded-xl bg-secondary border border-border/50 text-sm text-foreground placeholder:text-muted-foreground/60 focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/20 transition-all"
                  />
                </div>
              </div>

              <div>
                <label className="text-xs font-medium text-muted-foreground mb-1.5 block">
                  Subject
                </label>
                <input
                  type="text"
                  value={formState.subject}
                  onChange={(e) => setFormState({ ...formState, subject: e.target.value })}
                  placeholder="Internship opportunity / Collaboration / Hi!"
                  className="w-full px-3 py-2.5 rounded-xl bg-secondary border border-border/50 text-sm text-foreground placeholder:text-muted-foreground/60 focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/20 transition-all"
                />
              </div>

              <div>
                <label className="text-xs font-medium text-muted-foreground mb-1.5 block">
                  Message *
                </label>
                <textarea
                  required
                  rows={5}
                  value={formState.message}
                  onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                  placeholder="Tell me about your project, opportunity, or just say hello..."
                  className="w-full px-3 py-2.5 rounded-xl bg-secondary border border-border/50 text-sm text-foreground placeholder:text-muted-foreground/60 focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/20 transition-all resize-none"
                />
              </div>

              <button
                type="submit"
                disabled={sending}
                className="btn-primary w-full justify-center py-3 disabled:opacity-50 disabled:cursor-not-allowed group"
              >
                {sending ? (
                  <>
                    <div className="w-4 h-4 border-2 border-primary-foreground/30 border-t-primary-foreground rounded-full animate-spin" />
                    Sending...
                  </>
                ) : (
                  <>
                    <Send size={15} className="group-hover:translate-x-0.5 transition-transform" />
                    Send Message
                  </>
                )}
              </button>

              <p className="text-xs text-muted-foreground text-center">
                Typically respond within 24 hours ✓
              </p>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
