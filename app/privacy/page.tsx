import type { ReactNode } from "react";
import MarketingNav from "../../components/site/MarketingNav";
import MarketingFooter from "../../components/site/MarketingFooter";

const SECTIONS: { num: string; title: string; body: ReactNode }[] = [
  {
    num: "1",
    title: "Interpretation & Definitions",
    body: (
      <>
        <p><strong>Interpretation.</strong> Words with capitalized initials have defined meanings below, whether used in singular or plural.</p>
        <p><strong>Definitions.</strong></p>
        <ul>
          <li><strong>Company</strong> refers to CM Buddy.</li>
          <li><strong>Service</strong> refers to all services offered by CM Buddy including but not limited to our WhatsApp API platform, Facebook/Instagram messaging integrations, dashboard, and related features.</li>
          <li><strong>Personal Data</strong> means any data that identifies or could identify You directly or indirectly.</li>
          <li><strong>Usage Data</strong> refers to technical and behavioral data collected during the use of Our Service.</li>
          <li><strong>Device</strong> means any device that can access Our Service, such as a mobile phone, tablet, or computer.</li>
          <li><strong>You</strong> means the individual or entity accessing or using the Service.</li>
          <li><strong>Service Providers</strong> are third parties We use to support Our services (e.g., hosting, analytics, support).</li>
          <li><strong>Meta</strong> refers to Meta Platforms Inc., the parent company of WhatsApp, Facebook, and Instagram.</li>
        </ul>
      </>
    ),
  },
  {
    num: "2",
    title: "Personal Data We Collect",
    body: (
      <>
        <p>We may collect the following <strong>Personal Data</strong> directly from you:</p>
        <ul>
          <li>Full Name</li>
          <li>Email Address</li>
          <li>Phone Number (especially for WhatsApp messaging)</li>
          <li>IP address and device information</li>
          <li>Business details (company name, sector, size)</li>
        </ul>
        <p>We may also collect:</p>
        <ul>
          <li>User interaction patterns</li>
          <li>Encrypted chat logs and broadcast records</li>
          <li>Support interactions and submitted requests</li>
        </ul>
        <p><strong>From Meta Platforms APIs (Facebook Pages & Instagram Business Accounts), upon your explicit consent:</strong></p>
        <ul>
          <li><strong>Basic Account Info</strong>: Page name, Page ID, Instagram username, profile picture, account IDs.</li>
          <li><strong>Messaging Data</strong>: Direct messages (DMs), comments, and posts necessary for messaging functionality (pages_messaging, instagram_manage_messages).</li>
          <li><strong>Page & Account Metadata</strong>: Subscription status and event configurations (pages_manage_metadata).</li>
          <li><strong>Business Asset Data</strong>: Required for validating and managing linked business assets (business_management).</li>
        </ul>
      </>
    ),
  },
  {
    num: "3",
    title: "How We Use Your Data",
    body: (
      <ul>
        <li>To provide and maintain Our Service</li>
        <li>To facilitate WhatsApp API messaging and chatbot flows</li>
        <li>To enable Facebook Page and Instagram Direct messaging through our platform</li>
        <li>To manage user registration and authentication</li>
        <li>To set up webhook event subscriptions for Pages and Instagram accounts (messages, comments, feed updates)</li>
        <li>To perform obligations under contracts or legal regulations</li>
        <li>To communicate important product updates or support</li>
        <li>To send promotional messages only where consent is provided</li>
        <li>To detect, prevent and resolve technical issues or abuse</li>
      </ul>
    ),
  },
  {
    num: "4",
    title: "WhatsApp, Facebook & Instagram Data Handling",
    body: (
      <>
        <p>CM Buddy operates in full compliance with <strong>Meta's Platform Terms, Developer Policies, and Data Processing Terms</strong>.</p>
        <p><strong>WhatsApp Business API</strong></p>
        <ul>
          <li>Message content is end-to-end encrypted and stored only in encrypted format when required for performance tracking or support.</li>
          <li>We never share message content or contact lists with third parties for advertising purposes.</li>
        </ul>
        <p><strong>Facebook & Instagram APIs</strong></p>
        <ul>
          <li>Messaging content accessed via pages_messaging or instagram_manage_messages is used solely to deliver, display, and manage conversations inside our platform.</li>
          <li>pages_manage_metadata is used to subscribe Pages/Instagram accounts to events for real-time updates.</li>
          <li>business_management is used only as a dependency to support messaging permissions and verify business asset ownership.</li>
          <li>No collected data from Facebook or Instagram is sold, rented, or used for unrelated advertising.</li>
        </ul>
      </>
    ),
  },
  {
    num: "5",
    title: "Legal Basis for Processing (for GDPR Regions)",
    body: (
      <>
        <p>If You are from the European Economic Area (EEA), our legal basis for collecting and using Your personal information depends on the data and context. We may process Your data because:</p>
        <ul>
          <li>You have given consent</li>
          <li>Processing is necessary to perform a contract</li>
          <li>Processing is necessary to comply with legal obligations</li>
          <li>Processing is necessary for legitimate business interests</li>
        </ul>
      </>
    ),
  },
  {
    num: "6",
    title: "Data Storage & Security",
    body: (
      <ul>
        <li>Data is hosted securely via third-party providers.</li>
        <li>Access is limited via strict authorization protocols.</li>
        <li>All sensitive information, such as chat logs and personal identifiers, is stored in encrypted formats.</li>
        <li>We retain data only for as long as necessary to fulfill its intended purpose unless otherwise required by law.</li>
      </ul>
    ),
  },
  {
    num: "7",
    title: "User Consent and Control",
    body: (
      <ul>
        <li>You can opt-out of marketing communications at any time.</li>
        <li>Consent is collected prior to connecting any WhatsApp, Facebook, or Instagram account.</li>
        <li>You can disconnect connected Pages, Instagram accounts, or WhatsApp numbers via our dashboard at any time.</li>
        <li>If You wish to withdraw consent or delete data, contact: <a href="mailto:support@cmbuddy.pk">support@cmbuddy.pk</a></li>
        <li>Deletion requests will be honored within <strong>7 business days</strong>.</li>
      </ul>
    ),
  },
  {
    num: "8",
    title: "Your Rights (Data Subject Rights)",
    body: (
      <ul>
        <li>Access, correct, or delete Your data</li>
        <li>Object to or restrict processing</li>
        <li>Withdraw consent at any time</li>
        <li>File a complaint with a supervisory authority (GDPR regions)</li>
      </ul>
    ),
  },
  {
    num: "9",
    title: "Cookies & Tracking",
    body: (
      <p>
        We use limited cookies and tracking tools to improve performance, such as analytics platforms. These may collect anonymized usage patterns. You may disable cookies via your browser.
      </p>
    ),
  },
  {
    num: "10",
    title: "Third-Party Services",
    body: (
      <p>
        We may engage third-party services to support Our infrastructure. These providers process data strictly under Our instructions and are bound by confidentiality agreements.
      </p>
    ),
  },
  {
    num: "11",
    title: "Children's Privacy",
    body: (
      <p>
        Our Service is not intended for children under the age of 13 (or 18, depending on jurisdiction). We do not knowingly collect Personal Data from minors. If You believe a minor has submitted personal data, please contact us immediately.
      </p>
    ),
  },
  {
    num: "12",
    title: "Islamic Ethical Compliance",
    body: (
      <>
        <p>In accordance with Islamic values, CM Buddy commits to:</p>
        <ul>
          <li>Treating user data with <strong>Amanah</strong> (trust) and <strong>Adl</strong> (justice)</li>
          <li>Ensuring no data is exploited, misused, or used for harm</li>
          <li>Avoiding deceptive practices and prioritizing <strong>Maslahah</strong> (public interest)</li>
          <li>Maintaining transparency, accountability, and mutual respect in all dealings</li>
        </ul>
        <p>We recognize data privacy as both a legal and moral obligation.</p>
      </>
    ),
  },
  {
    num: "13",
    title: "Changes to This Privacy Policy",
    body: (
      <p>
        We may update this Privacy Policy from time to time. Updates will be posted on this page with a revised "Last Updated" date. We encourage You to review this Policy periodically.
      </p>
    ),
  },
  {
    num: "14",
    title: "Meta Platforms Integration",
    body: (
      <p>
        We use Meta Platforms, Inc. services (including WhatsApp Business API, Facebook Pages API, and Instagram Graph API) to facilitate communication and engagement.
        By interacting with our platform, users may share data that is processed by Meta in accordance with{" "}
        <a href="https://developers.facebook.com/terms/dfc_platform_terms/" target="_blank" rel="noopener noreferrer">Meta's Platform Terms</a>.
        We adhere strictly to Meta's policies regarding user data collection, sharing, retention, and lawful usage.
        Users retain all applicable rights under data protection laws and can manage their preferences directly through Meta-owned platforms.
      </p>
    ),
  },
  {
    num: "15",
    title: "Contact Us",
    body: (
      <p>
        If you have questions about this Privacy Policy or wish to exercise any rights, please contact:
        <br /><strong>Email</strong>: <a href="mailto:support@cmbuddy.pk">support@cmbuddy.pk</a>
        <br /><strong>Website</strong>: <a href="https://www.cmbuddy.pk">www.cmbuddy.pk</a>
      </p>
    ),
  },
];

export default function PrivacyPage() {
  return (
    <div className="mkt">
      <MarketingNav />
      <main>
        <section className="mkt-legal-hero">
          <div className="mkt-container">
            <span className="mkt-legal-crumb">CM Buddy &gt; Privacy Policy</span>
            <h1>Privacy Policy</h1>
            <div className="mkt-legal-meta">
              <span><strong>Effective Date:</strong> February 1, 2026</span>
              <span><strong>Last Updated:</strong> September 18, 2026</span>
            </div>
          </div>
        </section>

        <section className="mkt-legal">
          <div className="mkt-container mkt-legal-inner">
            <p className="mkt-legal-intro">
              CM Buddy ("<strong>Company</strong>", "<strong>We</strong>", "<strong>Us</strong>", or "
              <strong>Our</strong>") respects Your privacy and is committed to protecting Your personal data.
              This Privacy Policy describes how We collect, use, store, and share Your information when You interact
              with Our websites, applications, services, advertisements, or integrations through{" "}
              <strong>WhatsApp API, Facebook Pages API, Instagram Graph API</strong>, and other Meta services.
            </p>
            <p>By using Our Services, You agree to the collection and use of information in accordance with this Privacy Policy.</p>

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