import { Fraunces } from "next/font/google";
import { cn } from "@/lib/utils";

export const metadata = {
  title: "Email & Communication Policy | MyLoanDesk",
  description:
    "This Email & Communication Policy outlines how MyLoanDesk uses email to communicate with clients and business partners, including security, limitations, and best practices.",
  openGraph: {
    title: "Email & Communication Policy | MyLoanDesk",
    description:
      "This Email & Communication Policy outlines how MyLoanDesk uses email to communicate with clients and business partners, including security, limitations, and best practices.",
    type: "website",
    url: "https://www.myloandesk.com/email-communication",
  },
};

const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
});

export default function EmailCommunicationPage() {
  return (
    <main className="min-h-screen bg-cream py-24 px-6">
      <div className="max-w-4xl mx-auto bg-primary-bg rounded-[32px] p-8 sm:p-12 lg:p-16 shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-line">
        <h1
          className={cn(
            "text-3xl sm:text-4xl lg:text-5xl font-display font-semibold text-ink tracking-tight mb-8 pb-8 border-b border-line",
            fraunces.className,
          )}
        >
          Email & Communication Policy
        </h1>

        <div className="text-sm md:text-base text-ink-2 space-y-8 leading-relaxed">
          <div className="space-y-4">
            <p>
              MyLoanDesk.com (“us,” “we,” or “our”) uses email to communicate
              efficiently with clients and business partners. This Policy
              outlines our practices regarding email use, security, and
              limitations.
            </p>
            <p>
              By providing your email address or engaging with us
              electronically, you consent to the terms of this Policy, as well
              as our Privacy Policy and Terms of Use.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-ink mb-4">
              1. Nature of Email Communication
            </h2>
            <ul className="list-disc list-outside ml-5 space-y-2">
              <li>
                Email can be convenient, but messages may be brief, informal, or
                delayed.
              </li>
              <li>
                Emails do not always reflect the full scope of our
                communications with you.
              </li>
              <li>
                All official loan matters must be confirmed in signed writing
                (electronically or physically).
              </li>
            </ul>
          </div>

          <div>
            <h2 className="text-xl font-bold text-ink mb-4">
              2. Receipt of Your Email
            </h2>
            <ul className="list-disc list-outside ml-5 space-y-2">
              <li>
                Sending us an email does not constitute notice of any urgent
                matter.
              </li>
              <li>
                Spam filters or system errors may delay or block receipt of your
                email.
              </li>
              <li>
                For time-sensitive issues, call us directly and follow up with a
                written confirmation.
              </li>
            </ul>
          </div>

          <div>
            <h2 className="text-xl font-bold text-ink mb-4">
              3. Security & Monitoring
            </h2>
            <ul className="list-disc list-outside ml-5 space-y-2">
              <li>
                Email is transmitted over the internet, which is not fully
                secure.
              </li>
              <li>Emails may be lost, intercepted, delayed, or altered.</li>
              <li>
                Avoid sending personal information (SSN, account numbers) by
                email.
              </li>
            </ul>
          </div>

          <div>
            <h2 className="text-xl font-bold text-ink mb-4">
              4. Viruses & Liability
            </h2>
            <ul className="list-disc list-outside ml-5 space-y-2">
              <li>
                While we take steps to prevent viruses, we cannot guarantee our
                emails are virus-free.
              </li>
              <li>
                It is your responsibility to scan all emails and attachments
                before opening.
              </li>
              <li>
                We disclaim liability for any loss or damage caused by malicious
                code, viruses, or altered email content.
              </li>
            </ul>
          </div>

          <div>
            <h2 className="text-xl font-bold text-ink mb-4">
              5. Electronic Signature Disclaimer
            </h2>
            <ul className="list-disc list-outside ml-5 space-y-2">
              <li>
                Emails from us do not constitute an electronic signature or
                legally binding agreement unless explicitly stated.
              </li>
              <li>
                Emails are not an offer of loan approval, interest rate lock, or
                commitment unless you receive a formal, signed agreement from
                us.
              </li>
            </ul>
          </div>

          <div>
            <h2 className="text-xl font-bold text-ink mb-4">
              6. Confidentiality
            </h2>
            <ul className="list-disc list-outside ml-5 space-y-2">
              <li>
                Emails involving our Legal or Compliance teams may contain
                privileged information.
              </li>
              <li>
                If you receive an email in error, notify us immediately and
                delete it.
              </li>
              <li>
                Unauthorized use, reproduction, or distribution of confidential
                information is prohibited.
              </li>
            </ul>
          </div>

          <div>
            <h2 className="text-xl font-bold text-ink mb-4">
              7. Unsubscribe or Opt-Out
            </h2>
            <ul className="list-disc list-outside ml-5 space-y-2">
              <li>
                You may opt out of promotional or marketing emails at any time
                by clicking the “Unsubscribe” link provided in the message.
              </li>
              <li>
                Transactional or informational emails related to your loan or
                account cannot be unsubscribed from, as they are necessary for
                providing our services.
              </li>
            </ul>
          </div>

          <div>
            <h2 className="text-xl font-bold text-ink mb-4">
              8. General Provisions
            </h2>
            <div className="space-y-4">
              <p>
                <span className="font-bold text-ink">Governing Law:</span> This
                policy is governed by the laws of the State of California. All
                disputes must be resolved exclusively in the state or federal
                courts located in Santa Clara, California.
              </p>
              <p>
                <span className="font-bold text-ink">
                  Equal Housing Lender:
                </span>{" "}
                We comply with the Equal Credit Opportunity Act (ECOA) and do
                not discriminate based on race, color, religion, national
                origin, sex, marital status, military status, age, or public
                assistance status.
              </p>
              <p>
                <span className="font-bold text-ink">
                  Reservation of Rights:
                </span>{" "}
                All content in our emails, calls, and text messages is
                proprietary. Reproduction or distribution requires our prior
                written consent.
              </p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
