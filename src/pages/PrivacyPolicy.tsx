import { Link } from "react-router-dom";
import { ArrowLeft, ShieldCheck } from "lucide-react";
import { Wordmark } from "../components/Wordmark";

const sections = [
  {
    title: "1. Information We Collect",
    content: (
      <>
        <p>
          Depending on how you use FluxPay, we may collect the following
          information:
        </p>
        <ul>
          <li>
            <strong>Personal information:</strong> Full name, email address,
            phone number and account registration details.
          </li>
          <li>
            <strong>Account and transaction information:</strong> Wallet
            balances, transaction history, payment references and account
            security information.
          </li>
          <li>
            <strong>Device information:</strong> Device type, operating system,
            application version, technical logs and push notification tokens.
          </li>
        </ul>
      </>
    ),
  },
  {
    title: "2. How We Use Your Information",
    content: (
      <>
        <p>We may use your information to:</p>
        <ul>
          <li>Create and manage user accounts.</li>
          <li>Verify accounts through one-time passwords (OTPs).</li>
          <li>Authenticate users and protect account access.</li>
          <li>Process wallet funding and bill payment requests.</li>
          <li>Display wallet balances and transaction histories.</li>
          <li>Send transaction alerts and service notifications.</li>
          <li>Detect suspicious activity and improve application security.</li>
        </ul>
      </>
    ),
  },
  {
    title: "3. Payment and Third-Party Services",
    content: (
      <>
        <p>
          FluxPay may rely on third-party providers to deliver certain features.
          These may include:
        </p>
        <ul>
          <li>
            <strong>Paystack:</strong> Payment processing and wallet funding.
          </li>
          <li>
            <strong>VTPass:</strong> Airtime, data, electricity and other bill
            payment services.
          </li>
          <li>
            <strong>Brevo:</strong> Transactional email delivery, including
            verification messages.
          </li>
          <li>
            <strong>Hosting and infrastructure providers:</strong> Application
            hosting and database services.
          </li>
          <li>
            <strong>Push notification providers:</strong> Delivery of mobile
            application notifications.
          </li>
        </ul>
        <p>
          These providers may process information necessary to perform their
          services and are subject to their own privacy policies and terms.
        </p>
        <p>
          Payment card details are handled by the relevant payment processor.
          FluxPay does not intend to store full payment card details on its own
          servers.
        </p>
      </>
    ),
  },
  {
    title: "4. Data Storage and Security",
    content: (
      <p>
        We use reasonable technical and organisational measures to protect
        personal information against unauthorised access, alteration, disclosure
        or destruction. These may include encrypted communication, access
        controls and secure authentication. However, no internet-based system
        can be guaranteed to be completely secure.
      </p>
    ),
  },
  {
    title: "5. Data Sharing",
    content: (
      <>
        <p>
          We do not sell personal information. We may share relevant information
          with:
        </p>
        <ul>
          <li>Payment and bill payment service providers.</li>
          <li>Technology, hosting and infrastructure providers.</li>
          <li>Authorities where disclosure is required by applicable law.</li>
          <li>
            Other parties where necessary to protect the security or integrity
            of FluxPay.
          </li>
        </ul>
      </>
    ),
  },
  {
    title: "6. Data Retention",
    content: (
      <p>
        We retain information for as long as reasonably necessary to provide the
        service, maintain transaction records, meet applicable legal obligations
        and resolve disputes. Where information is no longer required, we will
        take reasonable steps to delete or anonymise it, subject to applicable
        retention requirements.
      </p>
    ),
  },
  {
    title: "7. Your Privacy Rights",
    content: (
      <>
        <p>Subject to applicable law, you may have the right to:</p>
        <ul>
          <li>Request access to your personal information.</li>
          <li>Request correction of inaccurate information.</li>
          <li>Request deletion of personal information where applicable.</li>
          <li>Object to or restrict certain processing.</li>
          <li>Withdraw consent where processing is based on consent.</li>
          <li>Raise a privacy complaint with the relevant authority.</li>
        </ul>
        <p>To exercise these rights, contact us using the details below.</p>
      </>
    ),
  },
  {
    title: "8. Children's Privacy",
    content: (
      <p>
        FluxPay is not intended for children under the age of 18. We do not
        knowingly collect personal information from children.
      </p>
    ),
  },
  {
    title: "9. Changes to This Policy",
    content: (
      <p>
        We may update this Privacy Policy when our services or data practices
        change. Updates will be published on this page with a revised effective
        date.
      </p>
    ),
  },
  {
    title: "10. Contact Us",
    content: (
      <p>
        For privacy-related questions or requests, contact us at{" "}
        <strong>twodot40@gmail.com</strong>.
      </p>
    ),
  },
];

export default function PrivacyPolicy() {
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
            <ShieldCheck size={15} />
            Legal information
          </div>

          <h1 className="font-display text-4xl font-bold tracking-tight sm:text-5xl">
            Privacy Policy
          </h1>

          <p className="mt-4 text-sm text-muted-foreground">
            Effective date: 9 November 2026
          </p>

          <p className="mt-6 max-w-2xl leading-7 text-muted-foreground">
            Your privacy matters. This policy explains how FluxPay collects,
            uses, stores and shares information when you visit our website or
            use our mobile application.
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
            You can also read our{" "}
            <Link
              to="/terms"
              className="font-semibold text-foreground underline decoration-gold underline-offset-4 hover:text-gold"
            >
              Terms of Service
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
