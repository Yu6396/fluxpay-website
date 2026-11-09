import { Link } from "react-router-dom";
import { ArrowLeft, FileText } from "lucide-react";
import { Wordmark } from "../components/Wordmark";

const sections = [
  {
    title: "1. About FluxPay",
    content: (
      <p>
        FluxPay is a digital payment application project designed to demonstrate
        wallet management, payment processing and bill payment functionality.
        Features may include account registration, wallet funding, airtime and
        data purchases, electricity payments, transaction history and
        notifications. Features may be unavailable, restricted or subject to
        change.
      </p>
    ),
  },
  {
    title: "2. Eligibility and Account Registration",
    content: (
      <>
        <p>
          You must provide accurate and complete information when creating an
          account.
        </p>
        <p>
          You are responsible for maintaining the confidentiality of your login
          credentials and transaction PIN, protecting access to your device, and
          notifying us if you suspect unauthorised account access.
        </p>
        <p>
          You must not impersonate another person or use FluxPay for unlawful
          activities.
        </p>
      </>
    ),
  },
  {
    title: "3. Wallet and Payments",
    content: (
      <>
        <p>
          Wallet balances and transaction records displayed in the application
          are subject to the accuracy and availability of the underlying
          systems.
        </p>
        <p>
          Where wallet funding is enabled, payments may be processed through
          third-party payment providers.
        </p>
        <ul>
          <li>
            Payment processing may be subject to provider fees and limits.
          </li>
          <li>Transactions may experience delays or temporary failures.</li>
          <li>
            Initiating a payment does not always mean the transaction has been
            completed.
          </li>
          <li>
            Transactions may be subject to verification and reconciliation.
          </li>
        </ul>
        <p>
          A displayed wallet balance should not be assumed to represent a bank
          deposit or funds protected by a deposit insurance scheme.
        </p>
      </>
    ),
  },
  {
    title: "4. Bill Payments",
    content: (
      <>
        <p>
          Bill payments may depend on the availability and accuracy of external
          service providers.
        </p>
        <p>
          You are responsible for checking recipient details, account numbers,
          meter numbers, phone numbers and payment amounts before confirming a
          transaction.
        </p>
        <p>
          Where a transaction fails after a wallet debit, any applicable
          reversal or refund will be handled according to the transaction
          status, provider response and applicable refund procedures.
        </p>
      </>
    ),
  },
  {
    title: "5. Acceptable Use",
    content: (
      <>
        <p>You agree not to:</p>
        <ul>
          <li>Use FluxPay for fraudulent or illegal transactions.</li>
          <li>Attempt to gain unauthorised access to accounts or systems.</li>
          <li>Interfere with the operation or security of the application.</li>
          <li>Submit false, misleading or stolen information.</li>
          <li>Exploit technical vulnerabilities or abuse the service.</li>
        </ul>
        <p>
          We may restrict access where misuse or suspicious activity is
          identified.
        </p>
      </>
    ),
  },
  {
    title: "6. Third-Party Services",
    content: (
      <p>
        FluxPay may rely on external providers for payment processing, bill
        payments, email delivery, hosting and other infrastructure. Your use of
        those services may also be subject to their respective terms and
        policies. We cannot guarantee the availability or performance of
        services operated by third parties.
      </p>
    ),
  },
  {
    title: "7. Service Availability",
    content: (
      <p>
        We aim to maintain a reliable service but do not guarantee uninterrupted
        access. Features may be modified, suspended or discontinued for
        maintenance, security, technical or operational reasons. As a
        development and portfolio project, FluxPay may have limited availability
        and should not be relied upon for essential financial transactions
        unless the relevant service has expressly been made available for that
        purpose.
      </p>
    ),
  },
  {
    title: "8. Limitation of Liability",
    content: (
      <p>
        To the extent permitted by applicable law, FluxPay and its operators
        will not be liable for indirect or consequential losses arising from the
        use or inability to use the service. Nothing in these terms excludes
        liability that cannot legally be excluded under applicable law.
      </p>
    ),
  },
  {
    title: "9. Account Suspension and Termination",
    content: (
      <p>
        We may restrict, suspend or terminate access where these terms are
        violated, fraudulent or suspicious activity is detected, continued
        access presents a security risk, or the service is discontinued. You may
        request account closure by contacting us.
      </p>
    ),
  },
  {
    title: "10. Privacy",
    content: (
      <p>
        Your use of FluxPay is also governed by our Privacy Policy, which
        explains how we collect, use and protect personal information.
      </p>
    ),
  },
  {
    title: "11. Changes to These Terms",
    content: (
      <p>
        We may update these Terms of Service from time to time. Updated terms
        will be published on this page with a revised effective date.
      </p>
    ),
  },
  {
    title: "12. Governing Law",
    content: (
      <p>
        These terms are governed by the applicable laws of the Federal Republic
        of Nigeria, subject to applicable consumer protection and data
        protection requirements.
      </p>
    ),
  },
  {
    title: "13. Contact Us",
    content: (
      <p>
        For questions about these Terms of Service, contact us at{" "}
        <strong>twodot40@gamil.com</strong>.
      </p>
    ),
  },
];

export default function TermsOfService() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <header className="border-b border-border">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-5 sm:px-8">
          <Link
            to="/"
            className="font-display text-xl font-bold tracking-tight"
          >
            <Wordmark tone="dark" />
          </Link>

          <Link
            to="/"
            className="inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-gold"
          >
            <ArrowLeft size={16} />
            Back to home
          </Link>
        </div>
      </header>

      <main className="mx-auto max-w-4xl px-5 py-16 sm:px-8 sm:py-20">
        <div className="mb-10">
          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-gold/30 bg-gold/10 px-4 py-2 text-xs font-semibold text-foreground">
            <FileText size={15} />
            Legal information
          </div>

          <h1 className="font-display text-4xl font-bold tracking-tight sm:text-5xl">
            Terms of Service
          </h1>

          <p className="mt-4 text-sm text-muted-foreground">
            Effective date: 9 November 2026
          </p>

          <p className="mt-6 max-w-2xl leading-7 text-muted-foreground">
            These terms explain the conditions that apply when you access or use
            the FluxPay website and mobile application.
          </p>
        </div>

        <div className="space-y-9">
          {sections.map((section) => (
            <section
              key={section.title}
              className="border-b border-border pb-8 last:border-0"
            >
              <h2 className="mb-4 font-display text-xl font-semibold">
                {section.title}
              </h2>
              <div className="space-y-3 text-sm leading-7 text-muted-foreground [&_ul]:list-disc [&_ul]:space-y-2 [&_ul]:pl-6 [&_strong]:font-semibold [&_strong]:text-foreground">
                {section.content}
              </div>
            </section>
          ))}
        </div>

        <div className="mt-10 rounded-2xl border border-border bg-surface p-6">
          <p className="text-sm text-muted-foreground">
            Please also review our{" "}
            <Link
              to="/privacy-policy"
              className="font-semibold text-foreground underline decoration-gold underline-offset-4 hover:text-gold"
            >
              Privacy Policy
            </Link>
            .
          </p>
        </div>
      </main>

      <footer className="bg-ink px-5 py-8 text-center text-xs text-ink-foreground/50">
        © 2026 FluxPay. All rights reserved.
      </footer>
    </div>
  );
}
