import type { ReactNode } from "react";
import MarketingNav from "../../components/site/MarketingNav";
import MarketingFooter from "../../components/site/MarketingFooter";

const SECTIONS: { num: string; title: string; body: ReactNode }[] = [
  {
    num: "1",
    title: "Acceptance of Terms",
    body: (
      <>
        <p>
          By accessing, subscribing to, or using the Service, the Subscriber agrees to be bound by these Terms and
          Conditions, together with all applicable third-party platform terms, policies, standards, and guidelines that
          govern the use of the Service and its integrations.
        </p>
        <p>
          The Subscriber expressly acknowledges and agrees that use of the Service includes the use of services, APIs,
          messaging channels, and infrastructure provided by Meta Platforms, Inc. and its affiliates, including but not
          limited to WhatsApp, Facebook, and Instagram.
        </p>
        <p>Accordingly, the Subscriber further agrees to be bound by, and comply with, the following third-party terms and policies, as amended, replaced, or updated from time to time:</p>
        <ul>
          <li><strong>WhatsApp Business Terms:</strong> <a href="https://www.whatsapp.com/legal/business-terms/" target="_blank" rel="noopener noreferrer">https://www.whatsapp.com/legal/business-terms/</a></li>
          <li><strong>Meta Terms of Service:</strong> <a href="https://www.facebook.com/terms/" target="_blank" rel="noopener noreferrer">https://www.facebook.com/terms/</a></li>
          <li><strong>Meta Community Standards:</strong> <a href="https://transparency.meta.com/policies/community-standards/" target="_blank" rel="noopener noreferrer">https://transparency.meta.com/policies/community-standards/</a></li>
          <li><strong>Meta Commerce Policies:</strong> <a href="https://www.facebook.com/policies_center/commerce/" target="_blank" rel="noopener noreferrer">https://www.facebook.com/policies_center/commerce/</a></li>
          <li><strong>Meta Platform Terms:</strong> <a href="https://developers.facebook.com/terms/" target="_blank" rel="noopener noreferrer">https://developers.facebook.com/terms/</a></li>
        </ul>
        <p>
          The Subscriber acknowledges that acceptance of these Terms shall constitute deemed acceptance of all the above
          Meta and WhatsApp terms, policies, and standards, and the Subscriber shall remain solely responsible for
          ensuring continued compliance with the same.
        </p>
        <p>If the Subscriber does not agree to these Terms or any applicable Meta / WhatsApp policies, the Service must not be used.</p>
      </>
    ),
  },
  {
    num: "2",
    title: "Subscription and Access",
    body: (
      <ul>
        <li>2.1 CM Buddy grants the Subscriber a <strong>non-exclusive, non-transferable license</strong> to access and use the Service in accordance with the selected subscription plan.</li>
        <li>2.2 The Service is for <strong>internal business use only</strong> and may not be transferred, resold, or shared without prior written consent from CM Buddy.</li>
        <li>2.3 The Service includes integrations with:
          <ul>
            <li>WhatsApp Business API</li>
            <li>Facebook Messenger API</li>
            <li>Instagram Messaging API</li>
          </ul>
        </li>
        <li>2.4 The Subscriber is solely responsible for maintaining the confidentiality and security of its account credentials and for all activities conducted under its account. Any actions performed through the Subscriber's account shall be deemed to have been authorized by the Subscriber.</li>
        <li>2.5 The Subscriber agrees to immediately notify CM Buddy of any unauthorized access or security breach.</li>
      </ul>
    ),
  },
  {
    num: "3",
    title: "Fees and Payment",
    body: (
      <ul>
        <li>3.1 Subscription fees are payable <strong>in advance</strong> and are <strong>non-refundable</strong>, unless expressly stated otherwise.</li>
        <li>3.2 Monthly subscription fees must be paid <strong>on or before the first day of each month</strong> via the available payment methods.</li>
        <li>3.3 Failure to make timely payment may result in <strong>suspension or termination</strong> of access to the Service.</li>
        <li>3.4 Restoration of Services may be subject to full settlement of outstanding dues along with any applicable reconnection or administrative fees.</li>
        <li>3.5 All fees, charges, and prices stated under these Terms or any applicable subscription plan are exclusive of all applicable taxes, duties, levies, or governmental charges, including but not limited to sales tax, value-added tax (VAT), withholding tax, or similar taxes.</li>
        <li>3.6 The Subscriber shall be solely responsible for the payment of all such taxes, except for taxes imposed on CM Buddy's income. Where applicable, CM Buddy reserves the right to charge and collect such taxes in addition to the stated fees.</li>
      </ul>
    ),
  },
  {
    num: "4",
    title: "Refund Policy",
    body: (
      <>
        <p><strong>4.1 General Policy.</strong> All payments made to CM Buddy are <strong>non-refundable</strong> unless expressly approved in writing by CM Buddy. Submission of a refund request does not guarantee approval.</p>
        <p><strong>4.2 Refund Requests.</strong> Refund requests may be submitted by emailing <a href="mailto:support@cmbuddy.pk">support@cmbuddy.pk</a> and must include: account information, payment reference, reason for the request, and supporting documentation (if applicable). All requests are reviewed at <strong>CM Buddy's sole discretion</strong>.</p>
        <p><strong>4.3 Approval and Processing.</strong> If approved, refunds will be processed within <strong>a minimum of fifteen (15) working days</strong> from the date of written approval. Refunds will be processed through the original mode of payment, service credits, or subscription extension, as determined solely by CM Buddy. Approved refunds may be provided as a monetary refund, service credits, or an extension of subscription through additional service days.</p>
        <p>
          For clarity: <strong>Refund does not necessarily imply monetary reimbursement and may be fulfilled through service
          extensions or credits of equivalent value.</strong> CM Buddy reserves the right to determine the most appropriate
          refund method based on the nature of the request. Service credits or subscription extensions may be considered the
          preferred refund method unless otherwise approved.
        </p>
        <p><strong>4.4 Non-Refundable Charges.</strong> The following are <strong>strictly non-refundable</strong> under all circumstances: one-time setup or onboarding fees, initial configuration fees, development fees, customization charges, integration fees, third-party costs incurred on behalf of the Subscriber, any other one-time professional service charges, Meta onboarding or verification related costs, and technical consulting services.</p>
        <p><strong>4.5 Early Termination.</strong> If the Subscriber terminates the Service before the end of the subscription term, <strong>no refunds</strong> will be issued for any unused portion.</p>
        <p><strong>4.6 Time Limitation.</strong> Refund requests must be submitted <strong>within seven (7) days</strong> of the relevant payment date.</p>
        <p><strong>4.7 Deductions.</strong> Approved refunds may be subject to deductions for payment gateway charges, transaction processing fees, currency conversion costs, banking charges, administrative costs, and applicable taxes.</p>
        <p><strong>4.8 Chargebacks.</strong> Initiating a chargeback without first contacting CM Buddy constitutes a <strong>breach of these Terms</strong>. CM Buddy reserves the right to suspend services and recover associated costs.</p>
        <p><strong>4.9 No Refund for Breach or Suspension.</strong> No refunds will be provided where services are suspended or terminated due to breach of these Terms, violation of Meta Platform Policies, non-compliance with applicable laws, misuse of the Service, security violations, or payment default.</p>
        <p><strong>4.10 Third-Party Platform Limitations.</strong> Refunds will not be issued due to disruptions, suspensions, or policy changes imposed by Meta, WhatsApp, Facebook, Instagram, or other third-party providers.</p>
      </>
    ),
  },
  {
    num: "5",
    title: "Term and Renewal",
    body: (
      <ul>
        <li>The initial subscription term begins upon registration and payment and continues for the selected duration.</li>
        <li>Subscriptions automatically renew unless written notice of non-renewal is provided <strong>at least 30 days prior</strong> to the end of the current term.</li>
        <li>Early termination does not entitle the Subscriber to any refund.</li>
        <li>The Subscriber acknowledges that access to and use of the Service is <strong>dependent on the Subscriber maintaining an active, compliant, and approved account</strong> with Meta and its affiliated platforms (including WhatsApp, Facebook, and Instagram).</li>
        <li>If the Service is unavailable, delayed, restricted, or cannot be fully utilized due to suspension, restriction, review, or disablement of the Subscriber's Meta account; failure by the Subscriber to complete Meta verification, compliance, or policy requirements; or actions, investigations, or decisions taken by Meta or its affiliates, such unavailability shall <strong>not be considered a failure of the Service</strong>, shall <strong>not constitute downtime</strong>, and shall <strong>not entitle the Subscriber to refunds, service credits, or SLA remedies</strong>.</li>
      </ul>
    ),
  },
  {
    num: "6",
    title: "Termination",
    body: (
      <ul>
        <li>6.1 Either party may terminate the subscription by providing at least thirty (30) days' written notice prior to the end of the current subscription term. Termination during an active subscription period shall not entitle the Subscriber to any refund.</li>
        <li>6.2 CM Buddy may suspend or terminate access immediately for material breach.</li>
        <li>6.3 Upon termination, access ceases and all unused fees are <strong>non-refundable</strong>.</li>
      </ul>
    ),
  },
  {
    num: "7",
    title: "Data Privacy and Security",
    body: (
      <ul>
        <li>The Client owns all data uploaded and generated via the Service. CM Buddy will store and process data securely and only for service-related purposes. Backups are performed regularly; data is accessible for export if requested within 15 days post-termination.</li>
        <li>CM Buddy implements reasonable security measures to protect the Subscriber's data within the Service.</li>
        <li>The Subscriber retains ownership of all data uploaded to the Service. CM Buddy will only access or use the Subscriber's data as necessary to provide the Service.</li>
        <li>CM Buddy is compliant with Meta data sharing policies.</li>
        <li>All data remains your exclusive property, no intellectual rights are transferred, and industry standard security measures (e.g. encryption, access controls, regular audits) are applied to prevent breaches.</li>
      </ul>
    ),
  },
  {
    num: "8",
    title: "Meta Platform Compliance",
    body: (
      <>
        <p>
          The Subscriber acknowledges that the Service operates through and depends upon third-party platforms and
          services provided by Meta Platforms, Inc. and its affiliates, including WhatsApp, Facebook, and Instagram.
        </p>
        <p>
          The Subscriber expressly agrees that continued use of the Service is conditional upon compliance with all
          applicable Meta policies, terms, platform rules, and messaging standards, including those referenced in Section 1.
        </p>
        <p>
          Any suspension, restriction, disablement, or enforcement action taken by Meta, WhatsApp, Facebook, or Instagram
          due to the Subscriber's conduct, business model, content, messaging activity, or policy violations shall be the
          sole responsibility of the Subscriber. Such action shall not constitute a failure, breach, or downtime of the
          Service by CM Buddy and shall not give rise to any refund, service credit, damages, or SLA claim.
        </p>
        <p>By using Meta integrations, the Subscriber agrees to:</p>
        <ul>
          <li>Comply with Meta Platform Terms, Developer Policies, and Community Standards</li>
          <li>Obtain proper user consent</li>
          <li>Use messaging only for legitimate business purposes</li>
          <li>Respect user privacy</li>
          <li>Avoid spam, harassment, or prohibited activities</li>
        </ul>
      </>
    ),
  },
  {
    num: "9",
    title: "Confidentiality",
    body: (
      <p>Both parties agree to maintain the confidentiality of proprietary information. This obligation survives termination of the subscription.</p>
    ),
  },
  {
    num: "10",
    title: "Limitation of Liability",
    body: (
      <ul>
        <li>10.1 CM Buddy is not liable for indirect, incidental, special, or consequential damages.</li>
        <li>10.2 Total liability shall not exceed the amount paid by the Subscriber in the <strong>month preceding the claim</strong>.</li>
        <li>10.3 CM Buddy is not responsible for disruptions caused by third-party platforms or services.</li>
      </ul>
    ),
  },
  {
    num: "11",
    title: "Indemnification",
    body: (
      <p>
        The Subscriber agrees to indemnify, defend, and hold harmless CM Buddy, its directors, officers, employees, and
        affiliates from and against any and all claims, damages, losses, liabilities, costs, and expenses (including
        reasonable legal fees) arising out of or related to: (a) the Subscriber's use or misuse of the Service; (b)
        violation of these Terms; (c) violation of applicable laws or regulations; (d) breach of third-party rights,
        including privacy or intellectual property rights; (e) any content, messages, or data transmitted by the
        Subscriber using the Service; or (f) violation of Meta Platform policies or messaging regulations. This obligation
        shall survive termination or expiration of the Agreement.
      </p>
    ),
  },
  {
    num: "12",
    title: "Compliance and Acceptable Use",
    body: (
      <ul>
        <li>Comply with all applicable laws</li>
        <li>Not transmit prohibited or unlawful content</li>
        <li>Obtain proper consent from end users before messaging</li>
      </ul>
    ),
  },
  {
    num: "13",
    title: "Governing Law",
    body: (
      <p>These Terms are governed by the <strong>laws of the Islamic Republic of Pakistan</strong>.</p>
    ),
  },
  {
    num: "14",
    title: "Dispute Resolution",
    body: (
      <p>
        Any dispute, claim, or controversy arising out of or in connection with these Terms shall be resolved through
        amicable negotiations between the parties. If the dispute is not resolved within thirty (30) days, it shall be
        referred to and finally resolved by arbitration in accordance with the applicable laws of the Islamic Republic of
        Pakistan. The seat of arbitration shall be Lahore, and proceedings shall be conducted in English. The decision of
        the arbitrator shall be final and binding on both parties.
      </p>
    ),
  },
  {
    num: "15",
    title: "Prohibited Organizations and Use",
    body: (
      <>
        <p>Use of the Service is prohibited for:</p>
        <ul>
          <li>Terrorist or organized criminal activity</li>
          <li>Illegal goods or services</li>
          <li>Gambling, payday loans, MLM schemes, or adult products</li>
          <li>Discriminatory content</li>
          <li>Spam or unsolicited messaging</li>
          <li>Violations of Meta policies</li>
        </ul>
      </>
    ),
  },
  {
    num: "16",
    title: "Proprietary Rights",
    body: (
      <ul>
        <li>16.1 All rights, title, and interest in the Service remain with CM Buddy.</li>
        <li>16.2 All intellectual property related to the Service remains the property of CM Buddy.</li>
        <li>16.3 The Subscriber grants CM Buddy a limited, non-exclusive right to use the Subscriber's name and logo for marketing and promotional purposes.</li>
      </ul>
    ),
  },
  {
    num: "17",
    title: "Miscellaneous",
    body: (
      <ul>
        <li><strong>Entire Agreement</strong>: This Contract supersedes all prior agreements.</li>
        <li><strong>Amendments</strong>: CM Buddy may modify these Terms at any time.</li>
        <li><strong>Severability</strong>: Invalid provisions do not affect enforceability of remaining terms.</li>
        <li><strong>Assignment</strong>: Rights and obligations may not be assigned without prior consent.</li>
      </ul>
    ),
  },
  {
    num: "18",
    title: "Service Level Agreement (SLA)",
    body: (
      <>
        <p>
          This Service Level Agreement ("<strong>SLA</strong>") defines the service availability commitments, support
          response targets, and remedies applicable to the CM Buddy Service, based on the Subscriber's selected
          subscription tier. This SLA applies only during an active, paid subscription period and is subject to the
          limitations and exclusions set forth herein.
        </p>
        <p><strong>18.1 Definitions</strong></p>
        <ul>
          <li><strong>"Uptime"</strong> means the percentage of time the core CM Buddy platform is operational and accessible, excluding Permitted Downtime.</li>
          <li><strong>"Permitted Downtime"</strong> includes scheduled maintenance, emergency maintenance, third-party platform outages (including Meta platforms), and events beyond CM Buddy's reasonable control.</li>
          <li><strong>"Business Hours"</strong> means Monday to Friday, 9:00 AM to 6:00 PM (Pakistan Standard Time), excluding public holidays.</li>
          <li><strong>"Incident"</strong> means a material disruption to the core functionality of the Service.</li>
        </ul>
        <p><strong>18.2 Service Availability Commitment</strong></p>
        <table>
          <thead>
            <tr><th>Subscription Tier</th><th>Monthly Uptime Target</th></tr>
          </thead>
          <tbody>
            <tr><td>Starter</td><td>99.0%</td></tr>
            <tr><td>Scale</td><td>99.5%</td></tr>
            <tr><td>Enterprise</td><td>99.9%</td></tr>
          </tbody>
        </table>
        <p>
          <strong>Important Notes:</strong> Uptime applies <strong>only to the CM Buddy platform</strong>, not to Meta,
          WhatsApp, Facebook, Instagram, telecom providers, or internet service providers. API throttling, rate limits, or
          suspensions imposed by Meta are <strong>explicitly excluded</strong> from uptime calculations.
        </p>
        <p><strong>18.3 Scheduled Maintenance.</strong> Scheduled maintenance may be performed to ensure system stability, security, or feature upgrades. CM Buddy will use reasonable efforts to provide <strong>advance notice</strong> for planned maintenance that may impact availability. Scheduled maintenance does <strong>not count</strong> toward downtime.</p>
        <p><strong>18.4 Support Coverage & Response Targets.</strong> Support availability and response times vary by subscription tier:</p>
        <ul>
          <li><strong>Starter Plan</strong> — Support Channel: Email; Support Hours: Business Hours.</li>
          <li><strong>Scale Plan</strong> — Support Channels: Email + Phone; Support Hours: Business Hours.</li>
          <li><strong>Enterprise Plan</strong> — Support Channels: Email, Phone, Priority Escalation; Support Hours: Extended Business Hours; Dedicated Account or Technical Manager (if contracted).</li>
        </ul>
        <p><strong>Response time</strong> means acknowledgment of the issue, not resolution.</p>
        <table>
          <thead>
            <tr><th>Priority</th><th>Definition</th><th>Starter</th><th>Scale</th><th>Enterprise</th></tr>
          </thead>
          <tbody>
            <tr><td>Critical</td><td>System Down</td><td>4 hrs</td><td>4 hrs</td><td>1 hr</td></tr>
            <tr><td>High</td><td>Feature issue</td><td>24 hrs</td><td>8 hrs</td><td>2 hrs</td></tr>
            <tr><td>Medium</td><td>Partial issue</td><td>48 hrs</td><td>24 hrs</td><td>8 hrs</td></tr>
            <tr><td>Low</td><td>Questions</td><td>72 hrs</td><td>48 hrs</td><td>24 hrs</td></tr>
          </tbody>
        </table>
        <p>
          A <strong>"Feature Issue"</strong> means a malfunction, degradation, or failure of a specific non-core feature or
          functionality of the Service that does not result in a complete service outage and for which a reasonable
          workaround may exist. A <strong>"Partial Issue"</strong> means a limited or intermittent impairment of the Service
          that affects some, but not all, functionality, users, channels, or use cases, while the Service remains
          substantially operational.
        </p>
        <p><strong>Resolution time targets:</strong></p>
        <table>
          <thead>
            <tr><th>Priority</th><th>Definition</th><th>Starter</th><th>Scale</th><th>Enterprise</th></tr>
          </thead>
          <tbody>
            <tr><td>Critical</td><td>System Down</td><td>6 hrs</td><td>6 hrs</td><td>4 hrs</td></tr>
            <tr><td>High</td><td>Feature issue</td><td>24 hrs</td><td>24 hrs</td><td>12 hrs</td></tr>
            <tr><td>Medium</td><td>Partial issue</td><td>48 hrs</td><td>48 hrs</td><td>24 hrs</td></tr>
            <tr><td>Low</td><td>Questions</td><td>24 hrs</td><td>24 hrs</td><td>12 hrs</td></tr>
          </tbody>
        </table>
        <p><strong>18.5 Incident Severity Classification:</strong> Critical — Complete service outage affecting core messaging functionality; High — Major degradation with no reasonable workaround; Medium — Partial degradation or non-critical feature impact; Low — Cosmetic issues, questions, or enhancement requests.</p>
        <p>
          <strong>18.6 Service Credits (Enterprise Only).</strong> Service credits may be available <strong>only for
          Enterprise Subscribers</strong>, subject to a separate written agreement. Credits are the <strong>sole and
          exclusive remedy</strong> for failure to meet uptime targets, are applied against future invoices only, and are
          <strong>not refundable</strong>. Credits do not apply if the downtime was caused by third-party platforms
          (including Meta), Subscriber misuse or misconfiguration, force majeure events, or beta or experimental features.
          No service credits are provided for Starter or Scale plans unless expressly agreed in writing.
        </p>
        <p>
          <strong>18.7 Subscriber Responsibilities.</strong> The Subscriber is responsible for maintaining secure access
          credentials, ensuring compliance with Meta platform rules, providing accurate configuration details, and promptly
          reporting incidents with sufficient diagnostic information. Failure to meet these responsibilities may void SLA
          eligibility.
        </p>
        <p>
          <strong>18.8 SLA Exclusions.</strong> This SLA does <strong>not apply</strong> to free trials, beta features, or
          promotional services; issues caused by third-party APIs or infrastructure; suspensions due to policy violations,
          non-payment, or legal compliance; or performance issues caused by Subscriber data volume spikes beyond plan limits.
        </p>
        <p><strong>18.9 SLA Modifications.</strong> CM Buddy may update this SLA from time to time. Any material reduction in SLA commitments will apply <strong>only on renewal</strong>, not during an active subscription term.</p>
        <p>
          <strong>18.10 SLA Disclaimer.</strong> Except as expressly stated in this SLA, the Service is provided <strong>"as
          is" and "as available"</strong>, and CM Buddy disclaims all other service level warranties to the maximum extent
          permitted by law.
        </p>
        <p>
          <strong>18.11 Force Majeure and Third-Party Dependency Disclaimer.</strong> CM Buddy shall <strong>not be
          responsible or liable</strong>, and no Service Credits or other remedies shall apply, for any failure, delay,
          interruption, or degradation of the Service resulting from events or circumstances beyond CM Buddy's reasonable
          control, including but not limited to: outages of third-party databases, cloud infrastructure, hosting providers,
          or external service providers; failures or disruptions of third-party platforms, APIs, or systems including Meta,
          WhatsApp, Facebook, Instagram, or their underlying infrastructure; acts of war, armed conflict, terrorism, civil
          unrest, riots, strikes, embargoes, or governmental actions; natural disasters including earthquakes, floods,
          fires, storms, pandemics, epidemics, or other acts of God; and power outages, telecommunications failures, ISP
          failures, or data center outages not caused by CM Buddy. Such events shall be deemed <strong>Permitted
          Downtime</strong> and excluded from uptime calculations and SLA obligations.
        </p>
      </>
    ),
  },
  {
    num: "19",
    title: "Customization, Change Requests, and Professional Services",
    body: (
      <>
        <p>
          The Service is provided as a <strong>standard cloud-based SaaS offering</strong> based on the Subscriber's
          selected subscription plan. Any request by the Subscriber for <strong>customization, enhancement, configuration
          beyond standard functionality, or complex development</strong> that falls outside the standard Service scope
          shall require a formal <strong>Change Request ("CR")</strong> or a separate written agreement.
        </p>
        <p>
          Each approved CR shall be subject to technical and commercial assessment by CM Buddy, follow CM Buddy's internal
          software development lifecycle (SDLC) processes, and be executed <strong>only upon mutual written agreement</strong>
          on scope, timelines, and fees. Unless expressly stated otherwise in writing, all customization, development, or
          professional services are <strong>not included</strong> in subscription fees and shall be <strong>billed
          separately</strong> at the applicable agreed rates. CM Buddy reserves the right, at its sole discretion, to
          <strong>accept or decline</strong> any Change Request.
        </p>
      </>
    ),
  },
  {
    num: "20",
    title: "Out of Scope Services",
    body: (
      <p>
        Unless expressly included in the Subscriber's selected subscription plan, Statement of Work, or an approved Change
        Request, the following items are <strong>explicitly excluded</strong> from the scope of the Service: custom API
        development beyond publicly documented or standard APIs; modification of out-of-the-box platform functionality or
        core system behavior; integration with third-party systems not expressly supported by the Service; development of
        custom features outside the standard product capabilities or published roadmap; data migration, data cleansing, or
        data transformation services; support for third-party hardware, software, networks, or infrastructure outside the
        Service environment; on-premise deployment, self-hosting, or private hosting arrangements (the Service is provided
        as SaaS only); performance tuning, throughput guarantees, or scaling beyond the standard SLA commitments, unless
        separately agreed in writing; end-user training beyond standard documentation or expressly agreed sessions; and
        regulatory, compliance, or jurisdiction-specific customizations unless mutually agreed in writing. Any request for
        the above shall require a <strong>separate agreement or approved Change Request</strong> and may be subject to
        additional fees, timelines, and conditions.
      </p>
    ),
  },
  {
    num: "21",
    title: "AI Features",
    body: (
      <>
        <p>
          The Services may include features that use artificial intelligence ("<strong>AI Features</strong>") to automate
          replies, workflows, or other functions. AI Features are provided on an <strong>"as-is" and "as-available"
          basis</strong>. Outputs generated by AI Features may be incomplete, inaccurate, outdated, or otherwise unsuitable
          for a particular purpose, and CM Buddy makes no warranty, express or implied, as to the accuracy, reliability, or
          completeness of any AI-generated content.
        </p>
        <p>The Customer is solely responsible for:</p>
        <ul>
          <li>(a) reviewing and validating any AI-generated content before relying on it or acting on it;</li>
          <li>(b) determining when human review or approval is required before AI-generated content is used, published, sent, or acted upon;</li>
          <li>(c) the instructions, data, knowledge sources, pricing, product information, and business rules the Customer provides to or configures within the AI Features; and</li>
          <li>(d) ensuring its use of AI Features complies with all applicable laws, regulations, and industry-specific requirements.</li>
        </ul>
        <p>
          AI Features must not be used as the sole or final decision-maker in connection with legal, medical, financial,
          employment, safety, or other decisions that carry a material risk of harm to any person, without appropriate
          human oversight and compliance with applicable law. The Customer assumes all risk arising from its use of, or
          reliance on, AI-generated content, and agrees to indemnify and hold CM Buddy harmless from any claims, losses, or
          damages arising from (i) the Customer's failure to review AI-generated content as required above, or (ii) the
          Customer's use of AI Features in violation of this section. CM Buddy is not liable for any decision made by AI.
        </p>
      </>
    ),
  },
  {
    num: "22",
    title: "Contact Us",
    body: (
      <p>
        If you have any questions about these Terms, please contact us at <strong>Email</strong>:{" "}
        <a href="mailto:support@cmbuddy.pk">support@cmbuddy.pk</a> — or visit our website:{" "}
        <a href="https://www.cmbuddy.pk" target="_blank" rel="noopener noreferrer">www.cmbuddy.pk</a>.
      </p>
    ),
  },
];

export default function TermsPage() {
  return (
    <div className="mkt">
      <MarketingNav />
      <main>
        <section className="mkt-legal-hero">
          <div className="mkt-container">
            <span className="mkt-legal-crumb">CM Buddy &gt; Terms of Service</span>
            <h1>Subscription Contract for CM Buddy</h1>
            <div className="mkt-legal-meta">
              <span><strong>Effective Date:</strong> February 1, 2026</span>
              <span><strong>Last Updated:</strong> September 18, 2026</span>
            </div>
          </div>
        </section>

        <section className="mkt-legal">
          <div className="mkt-container mkt-legal-inner">
            <p className="mkt-legal-intro">
              These Subscription Terms and Conditions ("<strong>Terms</strong>") govern access to and use of the software
              and services (collectively, the "<strong>Service</strong>") provided by CM Buddy. In these Terms, "
              <strong>CM Buddy</strong>", "<strong>we</strong>", "<strong>us</strong>", and "<strong>our</strong>" refer to
              the service provider. "<strong>Subscriber</strong>", "<strong>you</strong>", and "<strong>your</strong>"
              refer to the entity using the Service.
            </p>
            <p>The Subscriber acknowledges and agrees to be bound by:</p>
            <ul>
              <li>CM Buddy Terms and Conditions</li>
              <li><a href="https://www.whatsapp.com/legal/business-terms/" target="_blank" rel="noopener noreferrer">WhatsApp Business Terms</a></li>
              <li><a href="https://www.facebook.com/terms/" target="_blank" rel="noopener noreferrer">Meta Terms of Service</a></li>
              <li><a href="https://transparency.meta.com/policies/community-standards/" target="_blank" rel="noopener noreferrer">Meta Community Standards</a></li>
              <li><a href="https://www.facebook.com/policies_center/commerce/" target="_blank" rel="noopener noreferrer">Meta Commerce Policies</a></li>
              <li><a href="https://developers.facebook.com/terms/" target="_blank" rel="noopener noreferrer">Meta Platform Terms</a></li>
            </ul>
            <p>as amended from time to time. The above policies are available on the official WhatsApp and Meta websites and may be updated from time to time.</p>

            {SECTIONS.map((s) => (
              <div key={`${s.num}-${s.title}`} className="mkt-legal-section">
                <h2>{s.num}. {s.title}</h2>
                {s.body}
              </div>
            ))}
          </div>
        </section>
      </main>
      <MarketingFooter />
    </div>
  );
}