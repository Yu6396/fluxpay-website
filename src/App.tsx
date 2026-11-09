import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import TermsOfService from "./pages/TermsOfService";
import {
  Zap,
  Smartphone,
  Wifi,
  Tv,
  Receipt,
  ShieldCheck,
  Wallet,
  LineChart,
  ArrowRight,
  ArrowDownLeft,
  Check,
  Star,
} from "lucide-react";

import "./index.css";
import type { ReactNode } from "react";
import { Wordmark } from "./components/Wordmark";



function ComingSoonButton({ dark = false }: { dark?: boolean }) {
  return (
    <span
      className={
        "inline-flex items-center gap-3 rounded-2xl px-5 h-14 cursor-default " +
        (dark
          ? "bg-white/10 text-white border border-white/15"
          : "bg-surface text-foreground border border-border")
      }
    >
      <Smartphone size={22} />
      <span className="text-left leading-tight">
        <span className="block text-[10px] uppercase tracking-wider opacity-70">
          Available soon
        </span>
        <span className="block font-display font-bold text-[15px]">
          Android app
        </span>
      </span>
    </span>
  );
}

function PhoneMockup() {
  return (
    <div className="relative mx-auto w-75 sm:w-[320px]">
      {/* glow */}
      <div className="absolute -inset-8 bg-primary/20 blur-3xl rounded-full pointer-events-none" />
      <div className="relative rounded-[44px] bg-ink p-2.5 shadow-elegant">
        <div className="rounded-[36px] bg-background overflow-hidden">
          {/* status bar */}
          <div className="flex items-center justify-between px-6 pt-4 pb-2">
            <span className="text-[12px] font-semibold" data-numeric>
              9:41
            </span>
            <div className="w-20 h-5 bg-ink rounded-full" />
            <div className="flex gap-1 items-center">
              <div className="w-4 h-2.5 bg-foreground/70 rounded-sm" />
              <div className="w-2.5 h-2.5 rounded-full border-2 border-foreground/70" />
            </div>
          </div>

          {/* header */}
          <div className="px-5 pt-2 flex items-center justify-between">
            <div className="flex items-center gap-2.5">
              <div className="w-9 h-9 rounded-full bg-primary-soft grid place-items-center font-display font-bold text-[13px] text-primary">
                AB
              </div>
              <div>
                <div className="text-[10px] text-muted-foreground">
                  Good morning
                </div>
                <div className="text-[13px] font-bold font-display">
                  Adunni Bello
                </div>
              </div>
            </div>
            <div className="w-9 h-9 rounded-full bg-surface border border-border grid place-items-center">
              <span className="w-2 h-2 rounded-full bg-warning" />
            </div>
          </div>

          {/* balance card */}
          <div className="mx-4 mt-4 rounded-2xl bg-hero p-4 text-white relative overflow-hidden">
            <div className="absolute -right-6 -top-8 w-28 h-28 rounded-full bg-white/10" />
            <div className="text-[10px] uppercase tracking-[0.14em] text-white/60">
              Total balance
            </div>
            <div
              className="mt-1 font-display font-extrabold text-[26px] tracking-tight"
              data-numeric
            >
              ₦2,450,800
            </div>
            <div className="mt-1 text-[10px] text-white/60" data-numeric>
              Flux Wallet ·•••• 4821
            </div>
            <div className="mt-3 flex gap-2">
              <div className="flex-1 h-9 rounded-full bg-gold-grad text-gold-foreground grid place-items-center text-[12px] font-bold font-display">
                + Add money
              </div>
              <div className="flex-1 h-9 rounded-full bg-white/15 grid place-items-center text-[12px] font-bold font-display">
                Pay bills
              </div>
            </div>
          </div>

          {/* quick actions */}
          <div className="mx-4 mt-4 rounded-2xl bg-surface border border-border p-3">
            <div className="grid grid-cols-4 gap-2">
              {[
                { icon: Smartphone, label: "Airtime", tone: true },
                { icon: Wifi, label: "Data", tone: false },
                { icon: Zap, label: "Power", tone: false },
                { icon: Tv, label: "TV", tone: false },
              ].map((a) => (
                <div
                  key={a.label}
                  className="flex flex-col items-center gap-1.5 py-1"
                >
                  <div
                    className={
                      "w-11 h-11 rounded-xl grid place-items-center " +
                      (a.tone
                        ? "bg-primary text-primary-foreground"
                        : "bg-primary-soft text-primary")
                    }
                  >
                    <a.icon size={19} />
                  </div>
                  <span className="text-[9px] font-semibold text-muted-foreground">
                    {a.label}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* transactions */}
          <div className="mx-4 mt-4 mb-6 rounded-2xl bg-surface border border-border p-3 space-y-2.5">
            {[
              { icon: Zap, name: "Ikeja Electric", amt: "-₦12,500", in: false },
              {
                icon: ArrowDownLeft,
                name: "Kemi Adebayo",
                amt: "+₦45,000",
                in: true,
              },
              {
                icon: Smartphone,
                name: "MTN Airtime",
                amt: "-₦2,000",
                in: false,
              },
            ].map((t) => (
              <div key={t.name} className="flex items-center gap-2.5">
                <div
                  className={
                    "w-8 h-8 rounded-full grid place-items-center " +
                    (t.in
                      ? "bg-success/15 text-success"
                      : "bg-primary-soft text-primary")
                  }
                >
                  <t.icon size={14} />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="text-[11px] font-semibold truncate">
                    {t.name}
                  </div>
                  <div className="text-[9px] text-muted-foreground">Today</div>
                </div>
                <div
                  className={
                    "text-[11px] font-bold " +
                    (t.in ? "text-success" : "text-foreground")
                  }
                  data-numeric
                >
                  {t.amt}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      {/* floating cards */}
      <div className="absolute -left-10 sm:-left-16 top-24 rounded-2xl bg-surface border border-border shadow-elegant px-4 py-3 hidden sm:block animate-none">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-full bg-success/15 text-success grid place-items-center">
            <Check size={15} />
          </div>
          <div>
            <div className="text-[11px] font-bold font-display">Bill paid</div>
            <div className="text-[9px] text-muted-foreground">
              Ikeja Electric · 2s ago
            </div>
          </div>
        </div>
      </div>
      <div className="absolute -right-8 sm:-right-14 bottom-28 rounded-2xl bg-ink text-ink-foreground shadow-elegant px-4 py-3 hidden sm:block">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-full bg-gold-grad text-gold-foreground grid place-items-center">
            <Star size={15} />
          </div>
          <div>
            <div className="text-[11px] font-bold font-display">
              ₦1,200 cashback
            </div>
            <div className="text-[9px] opacity-60">This month</div>
          </div>
        </div>
      </div>
    </div>
  );
}

const features = [
  {
    icon: Receipt,
    title: "Every bill, one app",
    body: "Airtime, data, electricity, TV,  and more — pay any Nigerian biller in under 10 seconds.",
  },
  {
    icon: Wallet,
    title: "A wallet that works",
    body: "Fund your wallet securely, pay your everyday bills from one balance, and keep track of every naira.",
  },
  {
    icon: LineChart,
    title: "Your payments, organised",
    body: "View your payment history and keep track of your everyday bills.",
  },
];

const bills = [
  { icon: Smartphone, label: "Airtime" },
  { icon: Wifi, label: "Data" },
  { icon: Zap, label: "Electricity" },
  { icon: Tv, label: "Cable TV" },
  // { icon: Droplet, label: "Water" },
  // { icon: GraduationCap, label: "Education" },
];

const steps = [
  {
    n: "01",
    title: "Create your account",
    body: "Sign up with your phone number or email and verify in seconds — no paperwork, no branch visits.",
  },
  {
    n: "02",
    title: "Fund your wallet",
    body: "Top up by bank transfer, card or USSD through our secure Paystack-powered checkout.",
  },
  {
    n: "03",
    title: "Pay anything, anywhere",
    body: "Bills, airtime, data and more — confirmed instantly with a digital receipt every time.",
  },
];

// const testimonials = [
//   {
//     name: "Chinedu Okafor",
//     role: "Lagos · Small business owner",
//     quote:
//       "I used to queue at the bank to buy tokens. Now I pay NEPA and DStv before my keke arrives. FluxPay is genuinely life-changing.",
//   },
//   {
//     name: "Fatima Yusuf",
//     role: "Abuja · Doctor",
//     quote:
//       "The app is beautiful and fast. My whole family's airtime, data and electricity run through it — I haven't visited a bank app in months.",
//   },
//   {
//     name: "Kemi Adebayo",
//     role: "Ibadan · Student",
//     quote:
//       "Data top-ups take two taps and the receipts mean I always know what I spent. The cashback is a lovely bonus.",
//   },
// ];

function SectionTag({
  children,
  light = false,
}: {
  children: ReactNode;
  light?: boolean;
}) {
  return (
    <div
      className={
        "text-[11px] font-semibold uppercase tracking-[0.16em] mb-3 " +
        (light ? "text-gold" : "text-primary")
      }
    >
      {children}
    </div>
  );
}

function HomePage() {
  return (
    <div className="min-h-screen bg-background text-foreground font-body">
      {/* Nav */}
      <header className="sticky top-0 z-50 bg-background/85 backdrop-blur-md border-b border-border">
        <div className="max-w-6xl mx-auto px-5 sm:px-8 h-16 flex items-center justify-between">
          <Wordmark />
          <nav className="hidden md:flex items-center gap-8 text-[14px] font-medium text-muted-foreground">
            <a
              href="#features"
              className="hover:text-foreground transition-colors"
            >
              Features
            </a>
            <a
              href="#bills"
              className="hover:text-foreground transition-colors"
            >
              Bills
            </a>
            <a href="#how" className="hover:text-foreground transition-colors">
              How it works
            </a>
            <a
              href="#security"
              className="hover:text-foreground transition-colors"
            >
              Security
            </a>
          </nav>
          <a
            href="#download"
            className="inline-flex items-center gap-2 h-10 px-5 rounded-full bg-primary text-primary-foreground text-[13px] font-semibold font-display shadow-glow hover:brightness-110 transition-all"
          >
            Get the app <ArrowRight size={15} />
          </a>
        </div>
      </header>

      {/* Hero */}
      <section className="relative overflow-hidden">
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "radial-gradient(60% 50% at 80% 10%, var(--primary-soft) 0%, transparent 70%), radial-gradient(40% 40% at 10% 90%, var(--primary-soft) 0%, transparent 70%)",
          }}
        />
        <div className="relative max-w-6xl mx-auto px-5 sm:px-8 pt-14 pb-16 md:pt-24 md:pb-24 grid md:grid-cols-2 gap-14 md:gap-8 items-center">
          <div className="max-w-xl">
            <h1 className="font-display font-extrabold tracking-tight text-[40px] leading-[1.05] sm:text-[56px] md:text-[64px]">
              Pay bills.
              <br />
              Move money.
              <br />
              <span
                className="bg-hero bg-clip-text text-transparent"
                style={{ WebkitBackgroundClip: "text", backgroundClip: "text" }}
              >
                Effortlessly.
              </span>
            </h1>
            <p className="mt-6 text-[17px] leading-relaxed text-muted-foreground max-w-md">
              FluxPay is the modern Nigerian fintech app for airtime, data,
              electricity, TV and everything in between — fast, secure and
              beautifully simple.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <ComingSoonButton />
            </div>
            {/* <div className="mt-10 flex items-center gap-8">
              {[
                { v: "500k+", l: "Nigerians" },
                { v: "₦12B+", l: "Processed" },
                { v: "4.9★", l: "App rating" },
              ].map((s) => (
                <div key={s.l}>
                  <div
                    className="font-display font-extrabold text-[22px] tracking-tight"
                    data-numeric
                  >
                    {s.v}
                  </div>
                  <div className="text-[12px] text-muted-foreground">{s.l}</div>
                </div>
              ))}
            </div> */}
          </div>
          <div className="md:justify-self-end">
            <PhoneMockup />
          </div>
        </div>
      </section>

      {/* Trust bar */}
      {/* <section className="border-y border-border bg-surface">
        <div className="max-w-6xl mx-auto px-5 sm:px-8 py-5 flex flex-wrap items-center justify-center md:justify-between gap-x-10 gap-y-3">
          {[
            // "PCI-DSS certified",
            "Paystack secured",
            "NDIC insured deposits",
            "256-bit encryption",
          ].map((t) => (
            <div
              key={t}
              className="flex items-center gap-2 text-[13px] font-semibold text-muted-foreground"
            >
              <Check size={14} className="text-primary" />
              {t}
            </div>
          ))}
        </div>
      </section> */}

      {/* Features */}
      <section
        id="features"
        className="max-w-6xl mx-auto px-5 sm:px-8 py-20 md:py-28"
      >
        <div className="max-w-2xl">
          <SectionTag>Why FluxPay</SectionTag>
          <h2 className="font-display font-extrabold tracking-tight text-[30px] sm:text-[40px] leading-tight">
            Everything your money needs. Nothing it doesn't.
          </h2>
          <p className="mt-4 text-[16px] text-muted-foreground">
            We stripped banking apps down to what actually matters and rebuilt
            each piece around speed and clarity.
          </p>
        </div>
        <div className="mt-12 grid sm:grid-cols-2 gap-4">
          {features.map((f, i) => (
            <div
              key={f.title}
              className={
                "rounded-2xl p-7 border transition-all hover:-translate-y-1 hover:shadow-elegant " +
                (i === 0
                  ? "bg-hero text-white border-transparent md:col-span-2"
                  : "bg-surface border-border")
              }
            >
              <div
                className={
                  "w-12 h-12 rounded-xl grid place-items-center mb-5 " +
                  (i === 0
                    ? "bg-white/15 text-white"
                    : "bg-primary-soft text-primary")
                }
              >
                <f.icon size={22} />
              </div>
              <h3
                className={
                  "font-display font-bold text-[19px] tracking-tight " +
                  (i === 0 && "text-white")
                }
              >
                {f.title}
              </h3>
              <p
                className={
                  "mt-2 text-[14px] leading-relaxed " +
                  (i === 0 ? "text-white/75" : "text-muted-foreground")
                }
              >
                {f.body}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Bills */}
      <section id="bills" className="bg-ink text-ink-foreground">
        <div className="max-w-6xl mx-auto px-5 sm:px-8 py-20 md:py-28 grid md:grid-cols-2 gap-12 items-center">
          <div>
            <SectionTag light>Bills & top-ups</SectionTag>
            <h2 className="font-display font-extrabold tracking-tight text-[30px] sm:text-[40px] leading-tight">
              Every biller in Nigeria.
              <br />
              One thumb, ten seconds.
            </h2>
            <p className="mt-4 text-[15px] leading-relaxed text-ink-foreground/70 max-w-md">
              From NEPA tokens to DStv renewals, from MTN data to MTN airtime —
              pick a biller, enter the details, confirm. Your receipt lands
              instantly.
            </p>
            <div className="mt-8 grid grid-cols-2 sm:grid-cols-3 gap-3 max-w-md">
              {bills.map((b) => (
                <div
                  key={b.label}
                  className="flex items-center gap-2.5 rounded-2xl bg-white/5 border border-white/10 px-4 py-3"
                >
                  <b.icon size={17} className="text-gold" />
                  <span className="text-[13px] font-semibold">{b.label}</span>
                </div>
              ))}
            </div>
            <a
              href="#download"
              className="mt-8 inline-flex items-center gap-2 h-12 px-6 rounded-full bg-gold-grad text-gold-foreground text-[14px] font-bold font-display shadow-gold hover:brightness-105 transition-all"
            >
              Start paying bills <ArrowRight size={16} />
            </a>
          </div>
          <div className="grid gap-3">
            {[
              {
                icon: Zap,
                title: "Ikeja Electric",
                meta: "Prepaid · Meter 4501234",
                amt: "₦12,500",
                tone: "gold",
              },
              {
                icon: Tv,
                title: "DStv Compact",
                meta: "Renews 24 Sep",
                amt: "₦15,700",
                tone: "plain",
              },
              {
                icon: Wifi,
                title: "MTN 10GB",
                meta: "0803 123 4567",
                amt: "₦3,500",
                tone: "gold",
              },
            ].map((r) => (
              <div
                key={r.title}
                className="flex items-center gap-4 rounded-2xl bg-white/5 border border-white/10 p-5"
              >
                <div
                  className={
                    "w-12 h-12 rounded-xl grid place-items-center shrink-0 " +
                    (r.tone === "gold"
                      ? "bg-gold-grad text-gold-foreground"
                      : "bg-white/10 text-ink-foreground")
                  }
                >
                  <r.icon size={20} />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="font-display font-bold text-[15px]">
                    {r.title}
                  </div>
                  <div className="text-[12px] text-ink-foreground/60">
                    {r.meta}
                  </div>
                </div>
                <div
                  className="font-display font-extrabold text-[16px] text-gold"
                  data-numeric
                >
                  {r.amt}
                </div>
              </div>
            ))}
            {/* <div className="rounded-2xl border border-dashed border-white/15 p-5 text-center text-[13px] text-ink-foreground/50">
              + 40 more billers including water, waste, taxes and school fees
            </div> */}
          </div>
        </div>
      </section>

      {/* How it works */}
      <section
        id="how"
        className="max-w-6xl mx-auto px-5 sm:px-8 py-20 md:py-28"
      >
        <div className="max-w-2xl">
          <SectionTag>How it works</SectionTag>
          <h2 className="font-display font-extrabold tracking-tight text-[30px] sm:text-[40px] leading-tight">
            Up and running in three minutes.
          </h2>
        </div>
        <div className="mt-12 grid md:grid-cols-3 gap-4">
          {steps.map((s) => (
            <div
              key={s.n}
              className="rounded-2xl bg-surface border border-border p-7 relative overflow-hidden"
            >
              <div
                className="font-display font-extrabold text-[44px] leading-none text-primary/15 absolute top-4 right-6"
                data-numeric
              >
                {s.n}
              </div>
              <h3 className="font-display font-bold text-[18px] tracking-tight">
                {s.title}
              </h3>
              <p className="mt-2.5 text-[14px] leading-relaxed text-muted-foreground">
                {s.body}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Security */}
      <section
        id="security"
        className="max-w-6xl mx-auto px-5 sm:px-8 pb-20 md:pb-28"
      >
        <div className="rounded-3xl bg-surface border border-border p-8 md:p-14 grid md:grid-cols-2 gap-10 items-center">
          <div>
            <SectionTag>Security</SectionTag>
            <h2 className="font-display font-extrabold tracking-tight text-[28px] sm:text-[36px] leading-tight">
              Your money, locked down properly.
            </h2>
            <p className="mt-4 text-[15px] leading-relaxed text-muted-foreground max-w-md">
              Security isn't an afterthought — it's built into FluxPay from the
              ground up. Your account and transactions are protected at every
              step.
            </p>
            <div className="mt-7 flex flex-wrap gap-3">
              <ComingSoonButton dark />
            </div>
          </div>
          <div className="grid sm:grid-cols-2 gap-3">
            {[
              // { icon: Fingerprint, t: "Biometric sign-in", d: "Face & fingerprint unlock" },
              {
                icon: ShieldCheck,
                t: "Transaction PIN",
                d: "Every payment confirmed",
              },
              {
                icon: Check,
                t: "Trusted devices",
                d: "See and revoke sessions",
              },
              {
                icon: Receipt,
                t: "Transaction notifications",
                d: "Stay informed about your transactions",
              },
              {
                icon: Zap,
                t: "Secure connections",
                d: "Your data is protected in transit",
              },
            ].map((s) => (
              <div
                key={s.t}
                className="rounded-2xl bg-background border border-border p-5"
              >
                <div className="w-10 h-10 rounded-xl bg-primary-soft text-primary grid place-items-center mb-3">
                  <s.icon size={18} />
                </div>
                <div className="font-display font-bold text-[14px]">{s.t}</div>
                <div className="text-[12px] text-muted-foreground mt-0.5">
                  {s.d}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Download CTA */}
      <section
        id="download"
        className="bg-hero text-white relative overflow-hidden"
      >
        <div className="absolute -top-24 -right-24 w-96 h-96 rounded-full bg-white/10 blur-2xl pointer-events-none" />
        <div className="relative max-w-6xl mx-auto px-5 sm:px-8 py-20 md:py-28 text-center">
          <div className="inline-grid place-items-center w-16 h-16 rounded-2xl bg-white/15 mb-6">
            <Zap size={30} strokeWidth={2.2} />
          </div>
          <h2 className="font-display font-extrabold tracking-tight text-[34px] sm:text-[48px] leading-tight max-w-2xl mx-auto">
            The effortless way to pay is one download away.
          </h2>
          <p className="mt-4 text-[16px] text-white/75 max-w-lg mx-auto">
            Your everyday bill payments, made simple with FluxPay. Free to
            download, easy to use.
          </p>
          <div className="mt-9 flex flex-wrap justify-center gap-3">
            <ComingSoonButton />
          </div>
          <div className="mt-8 text-[12px] text-white/55">
            © 2026 FluxPay. All rights reserved.
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-ink text-ink-foreground">
        <div className="max-w-6xl mx-auto px-5 sm:px-8 py-14">
          <div className="grid md:grid-cols-4 gap-10">
            <div className="md:col-span-2">
              <Wordmark tone="light" />
              <p className="mt-4 text-[13px] leading-relaxed text-ink-foreground/60 max-w-xs">
                Pay bills. Move money. Effortlessly. The modern fintech app
                built for Nigeria.
              </p>
            </div>
            <div>
              <div className="text-[11px] font-semibold uppercase tracking-[0.14em] text-ink-foreground/50 mb-4">
                Product
              </div>
              <ul className="space-y-2.5 text-[13px] text-ink-foreground/70">
                <li>
                  <a
                    href="#features"
                    className="hover:text-gold transition-colors"
                  >
                    Features
                  </a>
                </li>
                <li>
                  <a
                    href="#bills"
                    className="hover:text-gold transition-colors"
                  >
                    Bills
                  </a>
                </li>
                <li>
                  <a
                    href="#security"
                    className="hover:text-gold transition-colors"
                  >
                    Security
                  </a>
                </li>
                <li>
                  <a
                    href="#download"
                    className="hover:text-gold transition-colors"
                  >
                    Download
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <div className="text-[11px] font-semibold uppercase tracking-[0.14em] text-ink-foreground/50 mb-4">
                Legal
              </div>
              <ul className="space-y-2.5 text-[13px] text-ink-foreground/70">
                <li>
                  <Link
                    to="/privacy-policy"
                    className="hover:text-gold transition-colors"
                  >
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link
                    to="/terms"
                    className="hover:text-gold transition-colors"
                  >
                    Terms of Service
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="mt-12 pt-6 border-t border-white/10 flex flex-col sm:flex-row justify-between gap-3 text-[12px] text-ink-foreground/45">
            <span>© 2026 FluxPay. All rights reserved.</span>
          </div>
        </div>
      </footer>
    </div>
  );
}
export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/terms" element={<TermsOfService />} />
      </Routes>
    </BrowserRouter>
  );
}
