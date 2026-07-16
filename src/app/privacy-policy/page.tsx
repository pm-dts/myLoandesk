"use client";

import React from "react";
import {
  Shield,
  ArrowUpRight,
  FileText,
  Settings,
  Lock,
  AlertCircle,
  Link as LinkIcon,
  MapPin,
  Edit3,
  MessageSquare,
} from "lucide-react";

export default function PrivacyPolicy() {
  const effectiveDate = "01/01/2025";

  // Smooth scroll handler for the Table of Contents
  const handleSmoothScroll = (
    e: React.MouseEvent<HTMLAnchorElement>,
    targetId: string,
  ) => {
    e.preventDefault();
    const target = document.getElementById(targetId);
    if (target) {
      target.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <main className="min-h-screen bg-primary-bg pt-32 pb-24">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        {/* Header Section - Now Centered */}
        <div className="max-w-4xl mx-auto mb-16 lg:mb-24 flex flex-col items-center">
          <div className="text-[10px] uppercase tracking-[0.25em] text-brand-orange font-semibold mb-6 flex items-center justify-center gap-2">
            <Shield size={14} strokeWidth={2.5} />
            Legal & Compliance
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-display text-ink leading-[1.05] tracking-tight mb-6">
            Privacy Policy
          </h1>
          <div className="text-lg text-ink-2 leading-relaxed space-y-4">
            <p>
              The Privacy Policy on myloandesk.com (“Website”, “Site” “we”,
              “us”, “our”, “ours”,) is the formal document, which determines and
              explains how the information of the user (“you”, “your”, “yours”,
              “User”, “Users”) is collected, stored, shared, and used on the
              Website.
            </p>
            <p>
              This Privacy Policy determines the implication of the information,
              both personal and non-personal, used on the Website. If you have
              already shared your information on the Website and want to
              eliminate your details from any records associated with the
              Website under our regulation and control, you can contact us
              directly using the contact details we provide on the Website.
            </p>
            <p>
              The services provided on the Website can be used only by the legal
              residents of the United States over 18 years old. The operation of
              the Website is aligned with federal, state, and local laws of the
              USA. Thus, once you willingly register on the Website by
              submitting your information via our online loan request form and
              accepting this Privacy Policy and the Website Terms and Conditions
              of Use, you confirm that You understand that the use of the
              information you submit on the Site is governed by these documents.
              We encourage you to study these documents carefully prior to
              submitting your information on the Website.
            </p>
            <p className="font-medium text-ink">
              If You disagree with or misunderstand the clauses of the Terms and
              Conditions of Use and Privacy Policy of this Website and/or refuse
              to accept the provisions of the documents stated above, you should
              cease using the services of the Website and should not provide
              your information on the Website via online form or in any other
              way submit and share your information on the Website.
            </p>
          </div>
          <div className="mt-8 flex items-center justify-center gap-2 text-sm text-ink-2 font-medium">
            <span className="w-2 h-2 rounded-full bg-moss-deep"></span>
            Effective Date: {effectiveDate}
          </div>
        </div>

        {/* Content Layout */}
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-20 items-start">
          {/* Left Column: Sticky Table of Contents */}
          <aside className="lg:col-span-4 sticky top-32 hidden lg:block">
            <div className="bg-cream/50 border border-line rounded-2xl p-6">
              <div className="text-xs font-semibold text-ink uppercase tracking-wider mb-5">
                Contents
              </div>
              <nav className="flex flex-col gap-3 text-sm font-medium">
                <a
                  href="#section-1"
                  onClick={(e) => handleSmoothScroll(e, "section-1")}
                  className="text-ink-2 hover:text-moss-deep transition-colors py-1"
                >
                  I. PII & NPII
                </a>
                <a
                  href="#section-2"
                  onClick={(e) => handleSmoothScroll(e, "section-2")}
                  className="text-ink-2 hover:text-moss-deep transition-colors py-1"
                >
                  II. Privacy Management
                </a>
                <a
                  href="#section-3"
                  onClick={(e) => handleSmoothScroll(e, "section-3")}
                  className="text-ink-2 hover:text-moss-deep transition-colors py-1"
                >
                  III. PII Security
                </a>
                <a
                  href="#section-4"
                  onClick={(e) => handleSmoothScroll(e, "section-4")}
                  className="text-ink-2 hover:text-moss-deep transition-colors py-1"
                >
                  IV. Information from Children
                </a>
                <a
                  href="#section-5"
                  onClick={(e) => handleSmoothScroll(e, "section-5")}
                  className="text-ink-2 hover:text-moss-deep transition-colors py-1"
                >
                  V. E-consent
                </a>
                <a
                  href="#section-6"
                  onClick={(e) => handleSmoothScroll(e, "section-6")}
                  className="text-ink-2 hover:text-moss-deep transition-colors py-1"
                >
                  VI. Third Party Websites
                </a>
                <a
                  href="#section-7"
                  onClick={(e) => handleSmoothScroll(e, "section-7")}
                  className="text-ink-2 hover:text-moss-deep transition-colors py-1"
                >
                  VII. State Notifications
                </a>
                <a
                  href="#section-8"
                  onClick={(e) => handleSmoothScroll(e, "section-8")}
                  className="text-ink-2 hover:text-moss-deep transition-colors py-1"
                >
                  VIII. Modifications and Changes
                </a>
                <a
                  href="#section-9"
                  onClick={(e) => handleSmoothScroll(e, "section-9")}
                  className="text-ink-2 hover:text-moss-deep transition-colors py-1"
                >
                  IX. Inquiries and Complaints
                </a>
              </nav>
            </div>

            {/* Quick Contact Card */}
            <div className="mt-6 p-6 border border-line rounded-2xl bg-moss-deep text-primary-bg">
              <div className="text-sm font-semibold mb-2">
                Inquiries and Complaints
              </div>
              <p className="text-xs text-primary-bg/70 leading-relaxed mb-4">
                Users are within their rights to modify, amend and withdraw
                their PII. Reach out directly to our privacy desk.
              </p>
              <a
                href="mailto:privacy@myloandesk.com"
                className="inline-flex items-center gap-1.5 text-sm font-medium hover:text-brand-orange transition-colors focus-ring"
              >
                privacy@myloandesk.com
                <ArrowUpRight size={16} />
              </a>
            </div>
          </aside>

          {/* Right Column: Legal Prose */}
          <div className="lg:col-span-8 space-y-16">
            {/* SECTION I */}
            <section id="section-1" className="scroll-mt-32">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-xl bg-moss-deep/10 flex items-center justify-center text-moss-deep shrink-0">
                  <FileText size={20} strokeWidth={2} />
                </div>
                <h2 className="font-display text-2xl lg:text-3xl text-ink">
                  I. Personally and Non-Personally Identifiable Information
                </h2>
              </div>
              <div className="prose prose-lg text-ink-2 leading-relaxed max-w-none space-y-4">
                <p>
                  To use the Website and its service, you need to provide your
                  personally identifiable information (“PII”) via the online
                  loan request form on the Website. The way this information is
                  collected, stored, shared, and used is determined by the
                  provisions of this Privacy Policy. This information is
                  essential to provide you with the service you request by using
                  the Website. If you do not need to use the service of the
                  Website or for some reason decide to cease the use of the
                  Website, you should not submit Your PII information on the
                  Website. PII includes but is not limited to the following
                  information: Your first and last names, address, email
                  address, telephone number, date of birth, employment
                  information, Social Security number, other ID information,
                  banking information.
                </p>
                <p>
                  Social Security number and banking information are used only
                  to connect you with lenders in our network and never shared
                  with any third-party marketers and other third parties unless
                  the opposite is determined by the law or required according to
                  special orders from the authorized parties (including but not
                  limited national security issues or alike).
                </p>
                <p>
                  In addition to your PII, we collect your non-personally
                  identifiable information (“NPII”) available upon your using
                  the Website regardless of submitting any personal information
                  on the Website. NPII includes but is not limited to the user’s
                  behavioral data, such as Internet Protocol (IP) data, browser
                  details, geo position, user’s operating system, the pages of
                  referral and exiting, date and time details, Internet service
                  provider details etc. The NPII we collect from you can be
                  transmitted to the third parties we contract with unless you
                  exploit the means to hide Your NPII or express Your request to
                  stop using Your NPII directly.
                </p>

                <h3 className="text-xl font-display text-ink mt-8 mb-3">
                  i. The Use of Your PII
                </h3>
                <p>
                  We collect, store, share and use your PII information under
                  the provisions of this Privacy Policy. All the information you
                  provide is protected by our top security means and encryption
                  methods. The information you submit on our loan request form
                  is used to connect you with one or more lenders in our network
                  with who can provide you with the loan product you expressed
                  your interest in. Your submission of the information is
                  considered as an expressed will to be connected with a lender
                  or financial service provider.
                </p>
                <p>
                  Additionally, the information we collect can be used to
                  contact you in order to provide with the marketing information
                  on the products you expressed your interest in. Moreover, we
                  can use this information to provide protection from potential
                  malicious activity and fraud in the Internet. We will collect,
                  store, share and use your information only upon your expressed
                  consent you give while clicking the respective button or
                  ticking the box of consent, which authorizes us to use your
                  information as set herein.
                </p>
                <p>
                  Some of your PII (excluding Social Security number and other
                  sensitive information such as banking information) can be
                  shared with some third parties we contract with in case
                  technical support is needed. These authorized third parties
                  are liable for keeping your information secure and in no way
                  can use it for any other purpose, but the purposes authorized
                  according to the agreement we make, as well as are in no way
                  authorized to share your information with other third parties.
                  All the activity performed with your PII is bounded by the
                  provisions of this Privacy Policy and respective formal
                  documents on this Website, as well as the provisions of
                  applicable international laws and the legislation of the USA.
                  Additionally, PII can be shared for consumer reporting with
                  credit bureaus upon your prior authorization. However, this
                  procedure is performed by the lenders in a prerogative way,
                  thus, regulated by the legal documents concerning your
                  communication with your lender and other financial providers
                  and has nothing to do with this agreement and the use of this
                  Site and its services.
                </p>
                <p>
                  Your PII can be shared with governmental entities, disclosed
                  completely or partially upon request from any authority or
                  authorized organization if such disclosure is lawful and
                  considered necessary for these reasons:
                </p>
                <ul className="list-disc pl-5 space-y-2 marker:text-moss-deep">
                  <li>
                    It is ordered or required to comply with the legal
                    processes;
                  </li>
                  <li>
                    It is obligatory to protect the property of the owner of the
                    Website or its affiliates and in no way contradicts
                    applicable laws;
                  </li>
                  <li>
                    It is necessary to prevent crime and/or protect national
                    security;
                  </li>
                  <li>It is necessary to protect personal or public safety.</li>
                </ul>
                <p>
                  In case of merging, acquisition, consolidation or purchase of
                  the owning company and its assets, it is possible that your
                  PII may be transferred and, thus, disclosed to the receiving
                  party on the course of the stated actions. According to the
                  court’s decision on insolvency proceeding, if it takes place,
                  in case of liquidation of the owning company, the liquidating
                  party or the authorized representatives of the company can
                  transfer, sell, dispose, or license your PII within the
                  provisions stated by this court’s decision. In this case, it
                  is possible that the owners of the PII shared on the Website
                  will be notified of the forthcoming procedures and
                  modifications upfront or the notification will be published
                  openly on the Website. It is possible that acquisition,
                  merging and other stated modifications are associated with a
                  non-US company.
                </p>

                <h3 className="text-xl font-display text-ink mt-8 mb-3">
                  ii. Third Party Marketing
                </h3>
                <p>
                  It is possible that your PII can partially (excluding such
                  sensitive information as Social Security number and banking
                  and financial data) be shared for the marketing purposes with
                  some of third-party marketers, lenders, and advertisers, we
                  contract with. In this case, the receiving parties, as third
                  part marketers, may use this information and share it with
                  other third-party marketers who may initiate marketing
                  activity towards you in the way of presenting you the products
                  you have expressed your interest previously while submitting
                  your information.
                </p>
                <p>
                  In case you decide to opt out from receiving such marketing
                  messages and/or offers, you can easily unsubscribe and
                  eliminate your information from the lists compiled by these
                  third-party marketers to send you messages simply by using an
                  unsubscribe option (button or link) in the respective message.
                  The means for marketing activity include but are not limited
                  to direct mail, short messages, online banner ads,
                  telemarketing calls, emails etc.). Apart from that, your
                  information can be used to track your online activity and
                  collect your online behavioral and searching information. This
                  activity is usually performed to improve the quality of the
                  services presented to you online and adjust marketing activity
                  to your requirements and needs.
                </p>
                <p>
                  Keep in mind that the way third party marketers use your
                  information is subject to the provisions of their legal
                  documentation and regulations, including but not limited to
                  the privacy policies and the terms of use of their websites
                  and services. For this reason, since we take no obligations
                  for the manner your information can be used by these parties,
                  we encourage you to acknowledge how your information is to be
                  used according to the provisions of the legal documentation of
                  these third-party marketers. If you wish to eliminate your
                  information from any of the lists or databases of these
                  third-party marketers, you should contact them directly.
                </p>
                <p>
                  By continuous use of the Website and attempt to use the
                  service presented on the Website, you expressly agree that you
                  have read and understand the provisions of the legal
                  documents, which control the use of your information on the
                  Website, and the terms of collecting, storing, sharing, and
                  using of your PII and the way your shared PII can be used by
                  third party lenders and third-party marketers.
                </p>
                <p>
                  To discontinue contacting with us and receiving more
                  information from us, you need to close this and all other
                  Website pages. If you have already shared Your personal
                  information with us and want to opt out from further
                  communication and remove your information from our lists and
                  database, you can contact us directly with respective request
                  using the email address listed at the bottom of this document.
                  Your request will be processed, and the information removed
                  from our database. As soon as your information is removed from
                  out database, you can be sure it will not be shared with any
                  third party, used for any secondary purposes, or used for
                  marketing activities. Still, since the information has already
                  been shared with third party marketers, we cannot take any
                  responsibility for the communication sent to you by these
                  third parties. you should contact third party marketers
                  directly to remove your information from their databases.
                </p>

                <h3 className="text-xl font-display text-ink mt-8 mb-3">
                  iii. Credit Implication of the Use of PII
                </h3>
                <p>
                  The information shared with our third-party lenders can be
                  used to verify your identity (via Social Security number
                  and/or driving license number, for example) and your
                  information against national databases. Additionally, the
                  lenders in our network may need to perform credit verification
                  and use your PII to request a credit report from one or more
                  credit organizations, including but not limited to the major
                  credit bureaus, to determine your credibility and assess the
                  risks associated with providing credit products to you. Credit
                  report request may lower your credit score. If you continue
                  using the Website and submit your information via the online
                  form on the Website, you give your express consent to have
                  your information verified and your credibility checked
                  according to the provisions of these third-party lenders’
                  legal documents used to govern and regulate their practices
                  and communication with you.
                </p>

                <h3 className="text-xl font-display text-ink mt-8 mb-3">
                  iv. Email and Telemarketing
                </h3>
                <p>
                  By agreeing to the Terms and Conditions of Use and this
                  Privacy Policy, you confirm that we and third-party lenders
                  and marketers with whom your information is shared according
                  to the provisions of this Privacy Policy can use your PII for
                  advertising purposes, including but not limited to email and
                  telemarketing advertising.
                </p>
                <p>
                  Your PII can be used for direct and indirect communication,
                  including but not limited to telemarketing calls, assistance
                  calls and credit product and service offers via the telephone
                  number you have provided in the online form. Either we or
                  third-party lenders and marketers can use this number even
                  though it is listed in any corporate, state, or federal
                  Do-Not-Contact registry, suppression lists or the like. Since
                  your submitting of the information via online form is
                  determined as an attempt to make a purchase or receive a
                  service, the processing and application of your request is
                  performed according to the provisions of Amended Telemarketing
                  Sales Rule, 16 CFR §310 et seq. (the “ATSR”). According to
                  ATSR, even if Your telephone number is listed in FTC
                  Do-Not-Call List, we are authorized to contact you upon your
                  given consent using telemarketing. Since your inquiry to third
                  party marketers and request for the service on the Website are
                  also considered as an attempt to make a purchase, according to
                  ATSR these third-party marketers are also authorized to
                  contact you using telemarketing.
                </p>
                <p>
                  By giving your consent to use the Website and provide your
                  information to use our service, you confirm that you are at
                  least 18 years old and legally authorized to own and use a
                  mobile device. you also confirm that you realize and
                  understand the liabilities and possible charges associated
                  with your participation in telemarketing campaigns. Your
                  service provider may also collect your information. These
                  procedures and interaction with your service provider are
                  regulated by the policies and terms stated by these
                  organizations and have nothing to do with this Privacy Policy
                  and other regulating documents on this Website.
                </p>

                <h3 className="text-xl font-display text-ink mt-8 mb-3">
                  v. The Means to Collect Non-Personally Identifiable
                  Information
                </h3>
                <p>
                  If you opt to use the Website or the Websites of third-party
                  lenders and marketers, you may encounter the use of cookies,
                  web beacons, pixel tags, browser analysis tools and web server
                  logs. These are small files or parts of code, used to monitor
                  and record the features of your online activity, such as your
                  geographical position, IP address, language preferences, click
                  history, browsing history, online behavior, your operating
                  system, and browser specifications set. All this data is
                  considered as your non-personally identifiable information
                  (NPII) and collected and stored to provide the customization
                  of your online activity.
                </p>

                <h3 className="text-xl font-display text-ink mt-8 mb-3">
                  vi. SMS Communications Consent
                </h3>
                <p>
                  The information Phone Numbers obtained as part of the SMS
                  consent process will not be shared with third parties for
                  marketing purposes.
                </p>

                <h4 className="font-semibold text-ink mt-4">
                  Types of SMS Communications:
                </h4>
                <p>
                  If you have consented to receive text messages from
                  myloandesk, you may receive messages related to the following:
                </p>
                <ul className="list-disc pl-5 space-y-1 marker:text-line">
                  <li>Appointment reminders</li>
                  <li>Follow-up messages</li>
                  <li>Billing inquiries</li>
                  <li>Updates</li>
                </ul>

                <h4 className="font-semibold text-ink mt-4">
                  Message Frequency:
                </h4>
                <p>
                  Message frequency may vary depending on the type of
                  communication. For example, you may receive up to [X] SMS
                  messages per week related to your appointments/billing, etc.
                </p>

                <h4 className="font-semibold text-ink mt-4">
                  Potential Fees for SMS Messaging:
                </h4>
                <p>
                  Please note that standard message and data rates may apply,
                  depending on your carrier’s pricing plan. These fees may vary
                  if the message is sent domestically or internationally.
                </p>

                <h4 className="font-semibold text-ink mt-4">Opt-In Method:</h4>
                <p>
                  You may opt-in to receive SMS messages from myloandesk in the
                  following ways:
                </p>
                <ul className="list-disc pl-5 space-y-1 marker:text-line">
                  <li>By submitting an online form</li>
                </ul>

                <h4 className="font-semibold text-ink mt-4">Opt-Out Method:</h4>
                <p>
                  You can opt out of receiving SMS messages at any time. To do
                  so, simply reply "STOP" to any SMS message you receive.
                  Alternatively, you can contact us directly to request removal
                  from our messaging list.
                </p>

                <h4 className="font-semibold text-ink mt-4">Help:</h4>
                <p>
                  If you are experiencing any issues, you can reply with the
                  keyword HELP. Or, you can get help directly from us at{" "}
                  <a
                    href="mailto:privacy@myloandesk.com"
                    className="text-moss-deep ulink"
                  >
                    privacy@myloandesk.com
                  </a>
                  .
                </p>

                <h4 className="font-semibold text-ink mt-4">
                  Standard Messaging Disclosures:
                </h4>
                <ul className="list-disc pl-5 space-y-1 marker:text-line mb-6">
                  <li>Message and data rates may apply.</li>
                  <li>You can opt-out at any time by texting "STOP."</li>
                  <li>
                    For assistance, text "HELP" or visit our Privacy Policy and
                    Terms and Conditions pages.
                  </li>
                  <li>Message frequency may vary.</li>
                </ul>

                <h4 className="font-semibold text-ink mt-6">Cookies</h4>
                <p>
                  These are small unique files assigned by a Website server to
                  the users of this Website when these users make visit and
                  perform activity on the Website (such as linking and
                  clicking). Once installed on the user’s computer, these
                  cookies collect the information about the user’s online
                  behavior, browsing and user experience details, and send it to
                  us or third parties authorized to collect this information
                  from you. Cookies are used to enable user’s recognition, to
                  analyze user’s preferences and adjust the services provided
                  online according to the collected information. Additionally,
                  these small files are able to detect fraudulent activity and
                  prevent security breach.
                </p>
                <p>
                  Cookies are of different size and length (temporary or
                  permanent ones). Session or temporary cookies are used for a
                  single operation on the Website and erased shortly after the
                  user exits browser or website. Permanent or persistent cookies
                  are stored longer and survive the exit from webpage or
                  browser. You can manually manage your cookies preference in
                  your browser’s options and delete these small files if you
                  consider it is necessary.
                </p>

                <h4 className="font-semibold text-ink mt-6">
                  Pixel tags and web beacons
                </h4>
                <p>
                  These small images are placed on webpages and emails to
                  monitor the activity of users. These features record the
                  activity of the user during the session, thus, enabling
                  further adjustment and improvement of marketing campaigns and
                  promotions.
                </p>
                <p>
                  Log files are collected files, which store the information on
                  IP address, browser type, Internet service provider, platform
                  type, date/time stamp, click records, referring and exiting
                  pages etc. These files are also used to provide adjustment and
                  improve user experience online and on websites.
                </p>
              </div>
            </section>

            <div className="w-full h-px bg-line"></div>

            {/* SECTION II */}
            <section id="section-2" className="scroll-mt-32">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-xl bg-brand-orange/10 flex items-center justify-center text-brand-orange shrink-0">
                  <Settings size={20} strokeWidth={2} />
                </div>
                <h2 className="font-display text-2xl lg:text-3xl text-ink">
                  II. Privacy Management
                </h2>
              </div>
              <div className="prose prose-lg text-ink-2 leading-relaxed max-w-none space-y-4">
                <p>
                  To perform effective privacy management, we establish
                  different practices on how we use your information. Apart from
                  the techniques to upgrade the level of your online experience
                  and the use of our service and the Website, we provide the
                  options to limit the volume of information you share or
                  eliminate your information from our records upon your request.
                </p>
                <p>
                  If you do not want your NPII information to be collected,
                  stored, shared, or used, you should exit the Website
                  immediately. Still, it is possible that cookies, beacons, and
                  other tracing files are automatically installed. In this case,
                  you can use your browser preferences to delete the existing
                  cookies manually, to adjust the default settings and request
                  notification for cookies, accept or reject cookies, remove
                  cookies from Your computer.
                </p>
                <p>
                  Since the Do-Not-Track protocol has not been established yet,
                  information security and privacy management are aligned with
                  the provisions of this Privacy Policy and related documents
                  governing the use of this Website despite any Do-Not-Track
                  signals. You can opt out from tracking your online behavior by
                  third party marketers by unsubscribing from their email lists
                  via corresponding links.
                </p>
              </div>
            </section>

            <div className="w-full h-px bg-line"></div>

            {/* SECTION III */}
            <section id="section-3" className="scroll-mt-32">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-xl bg-[#D4A574]/20 flex items-center justify-center text-[#D4A574] shrink-0">
                  <Lock size={20} strokeWidth={2} />
                </div>
                <h2 className="font-display text-2xl lg:text-3xl text-ink">
                  III. PII Security
                </h2>
              </div>
              <div className="prose prose-lg text-ink-2 leading-relaxed max-w-none space-y-4">
                <p>
                  Your PII is collected, stored, shared and used under strict
                  compliance with security and privacy protection regulations
                  and practices. We shield your PII, and all the activity
                  performed on the Website from any attempt of malicious
                  activity, fraud, unauthorized use and other jeopardizing
                  online practices. We exploit electronic, physical and
                  managerial security measures to provide overall protection for
                  the users of the Website and Website assets to avoid loss,
                  misuse, unauthorized modification or deformation of any
                  information.
                </p>
                <p>
                  We limit access to the information and share your PII strictly
                  to the limit set by your consent on the provisions of this
                  Privacy Policy and other regulative means of the Website, as
                  well as applicable laws. Within the company, your PII can be
                  accessed only by the authorized users and is never used
                  publically. All the employees and other parties who have
                  access to your PII are obliged and liable to provide its
                  protection and security to the extent reasonably possible.
                  Non-compliance is subject to the disciplinary actions.
                </p>
                <p>
                  Nevertheless, no entity can unconditionally guarantee that
                  your online experience will be 100% secured and no violation
                  and/or illegal intervention can take place. The owner of the
                  Website cannot take responsibility for any illegal activity,
                  security breach, stolen or modified information, which happen
                  beyond the owner’s control. To guarantee protection from any
                  malicious activity from the outside, you can request to erase
                  your data from any listing or database you consider insecure.
                  At the same time, third party marketers who receive your PII
                  are contractually responsible for protecting your information
                  to the extent reasonably possible. We provide verification on
                  the diligence of our partners via multiple means and
                  regulatory contracts and check their information security
                  policies. In case any violation takes place, applicable laws
                  and regulations are applied to manage the situation and
                  eliminate possible negative consequences.
                </p>
              </div>
            </section>

            <div className="w-full h-px bg-line"></div>

            {/* SECTION IV */}
            <section id="section-4" className="scroll-mt-32">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-xl bg-moss-deep/10 flex items-center justify-center text-moss-deep shrink-0">
                  <AlertCircle size={20} strokeWidth={2} />
                </div>
                <h2 className="font-display text-2xl lg:text-3xl text-ink">
                  IV. Information Collection from Children
                </h2>
              </div>
              <div className="prose prose-lg text-ink-2 leading-relaxed max-w-none">
                <p>
                  The information from children under 18 years old is strictly
                  banned and will not be performed on the Website. We provide
                  filters, which enable anyone of illegal age to provide
                  information on the Website. In case we detect any PII received
                  from a user under 18 years old, we will immediately delete
                  this information. According to the fact that we do not
                  voluntarily collect, store, share or use any PII from the
                  users under 18 years old, we follow and comply with the
                  Children’s Privacy Protection Act (“COPPA”) and this Privacy
                  Policy is built in consideration with the provisions of this
                  Act.
                </p>
              </div>
            </section>

            <div className="w-full h-px bg-line"></div>

            {/* SECTION V */}
            <section id="section-5" className="scroll-mt-32">
              <h2 className="font-display text-2xl lg:text-3xl text-ink mb-6">
                V. E-consent
              </h2>
              <div className="prose prose-lg text-ink-2 leading-relaxed max-w-none space-y-4">
                <p>
                  According to Federal Electronic Signatures in Global and
                  national Commerce Act, the users who give their consent and
                  e-sign electronic documents thus agree to receive documents,
                  disclosures, and notification in electronic format, provide
                  the information via electronic means and allow sharing of this
                  information according to the provisions of privacy policies,
                  terms of use and other applicable laws and regulations and
                  conduct business electronically. Once a user submits
                  information through the Website, one gives consent to receive
                  electronic notifications, documents, and disclosures as well
                  as the information provided directly on the Website and
                  electronic communications with third party marketers and
                  lenders we contract with. Any of such electronic communication
                  received after providing your e-consent should be considered
                  “in writing” and have the same force and effect. The copy
                  should be printed for records.
                </p>
                <p>
                  We and third-party marketers we contract with reserve the
                  right to discontinue the provisions of electronic
                  documentation, notifications, and other forms of
                  e-communication. In this case, the concerning users may be
                  provided with prior notification of the case of termination in
                  accordance with the provisions state in the policies and
                  terms, regulating business relationship between the parts, as
                  well as other applicable laws and regulations. The hard copies
                  of the documents and records originated in the electronic form
                  are not necessary to be produced and/or stored for the purpose
                  of facilitation and expense reduction. All electronic records,
                  disclosures and documents are to be destroyed according to the
                  routine schedule and procedural practices as it is determined
                  by regulatory requirements. Any of such electronic records can
                  be considered and recognized as legitimate evidence to
                  validate rights, agreements, and obligations, related to the
                  parties bounded by the provisions of these e-documents or
                  pursuant to these records. The time for validation, legal
                  force and providing of such e-communication may differ.
                </p>
              </div>
            </section>

            <div className="w-full h-px bg-line"></div>

            {/* SECTION VI */}
            <section id="section-6" className="scroll-mt-32">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-xl bg-brand-orange/10 flex items-center justify-center text-brand-orange shrink-0">
                  <LinkIcon size={20} strokeWidth={2} />
                </div>
                <h2 className="font-display text-2xl lg:text-3xl text-ink">
                  VI. Links to Third Party Websites
                </h2>
              </div>
              <div className="prose prose-lg text-ink-2 leading-relaxed max-w-none">
                <p>
                  The Website may contain links to third-party websites and may
                  connect the users of the Website to third party lenders via
                  links. The privacy of the information provided by the users on
                  external websites are subject to the regulations stated on
                  these sites and has nothing to do with this Website.
                  Additionally, these third parties have their own privacy
                  policies and regulative documents on their websites, and it is
                  highly recommended to review these legal documents and
                  disclosures individually prior to sharing any PII on their
                  websites.
                </p>
              </div>
            </section>

            <div className="w-full h-px bg-line"></div>

            {/* SECTION VII */}
            <section id="section-7" className="scroll-mt-32">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-xl bg-[#D4A574]/20 flex items-center justify-center text-[#D4A574] shrink-0">
                  <MapPin size={20} strokeWidth={2} />
                </div>
                <h2 className="font-display text-2xl lg:text-3xl text-ink">
                  VII. Notifications for the Residents of Different States
                </h2>
              </div>
              <div className="prose prose-lg text-ink-2 leading-relaxed max-w-none">
                <p>
                  We strictly follow the regulations and codes, both federal and
                  state. The way PII can be used is regulated in states
                  differently. Some state regulations require the party, which
                  collects personal information, to disclose the complete
                  information on how and in what periods the collected
                  information will be shared and what other parties it will be
                  transmitted to (individually and exclusively). Additionally,
                  it may be required to disclose what types of personal
                  information will be shared and in what manner it is supposed
                  to be used by these third parties. In case the user of the
                  Website is the resident of the state, where specific
                  regulations are in force, we recommend contacting us directly
                  using the contacts we provide on the Website to get all the
                  necessary information in details. In this case, each request
                  will be processed individually. We reserve the right to deny
                  the processing of such request if the enquiry was sent from
                  the user who legally reside in the state where such specific
                  regulations are not in force.
                </p>
              </div>
            </section>

            <div className="w-full h-px bg-line"></div>

            {/* SECTION VIII */}
            <section id="section-8" className="scroll-mt-32">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-xl bg-moss-deep/10 flex items-center justify-center text-moss-deep shrink-0">
                  <Edit3 size={20} strokeWidth={2} />
                </div>
                <h2 className="font-display text-2xl lg:text-3xl text-ink">
                  VIII. Modifications and Changes
                </h2>
              </div>
              <div className="prose prose-lg text-ink-2 leading-relaxed max-w-none">
                <p>
                  The owner of the Website reserves the right to apply changes
                  to this Privacy Policy at own discretion and without prior
                  notice. In case changes or modifications take place, the
                  renewed information will be posted on the Website and the
                  effective date of the document will be changed to the date of
                  the most recent update of the Privacy Policy. By default, all
                  the information is to be used according to the version of the
                  Privacy Policy enforced at the time this information was
                  collected. The user has right to determine individually if
                  this rule is acceptable or not. Nevertheless, we encourage all
                  the users of the Website to revise the Privacy Policy
                  information and follow the dates of modifications to keep up
                  to date and react in case it is deemed reasonable.
                </p>
              </div>
            </section>

            <div className="w-full h-px bg-line"></div>

            {/* SECTION IX */}
            <section id="section-9" className="scroll-mt-32">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-xl bg-brand-orange/10 flex items-center justify-center text-brand-orange shrink-0">
                  <MessageSquare size={20} strokeWidth={2} />
                </div>
                <h2 className="font-display text-2xl lg:text-3xl text-ink">
                  IX. Inquiries and Complaints
                </h2>
              </div>
              <div className="prose prose-lg text-ink-2 leading-relaxed max-w-none">
                <p>
                  The users of the Website are within their rights to modify,
                  amend and withdraw their PII collected on the Website. In case
                  it is necessary, the user who decides to make changes to their
                  own information should contact us via the email address listed
                  at the bottom of this document and provide inquiry regarding
                  the modifications to be made. Similarly, if any user of the
                  Website has any complaint regarding the operation on the
                  Website and/or any of its service, this user should use the
                  stated email address and provide the details of complaint. We
                  will review all requests and complaints in the shortest time
                  possible and reply as soon as we can.
                </p>
              </div>
            </section>
          </div>
        </div>
      </div>
    </main>
  );
}
