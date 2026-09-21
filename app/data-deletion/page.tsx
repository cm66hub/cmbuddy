// LEGAL — DRAFT / REQUIRES OWNER REVIEW
// The in-app deletion flow described here (Settings > Delete Account) does NOT
// exist yet, and retention/window claims (30/90 days) are not policy-confirmed.
// Tracked in CONTENT_REVIEW_REQUIRED.md at the repo root.
import type { Metadata } from "next";

import MarketingNav from "../../components/site/MarketingNav";
import MarketingFooter from "../../components/site/MarketingFooter";

const APP_URL = process.env.NEXT_PUBLIC_APP_URL || "https://app.cmbuddy.pk";

export const metadata: Metadata = {
  title: "Data Deletion",
  description: "How to request deletion of your CM Buddy account and data."
};

export default function DataDeletionPage() {
  return (
    <div className="mkt">
      <MarketingNav />
      <div className="legal-page">
      <h1>Data Deletion</h1>
      <p className="subtitle">
        We respect your right to control your data. Here&apos;s how to delete your
        account and all associated information.
      </p>

      <h2>How to Delete Your Data</h2>
      <ol className="deletion-steps">
        <li>
          <h3>Log in to your account</h3>
          <p>
            Go to <a href={APP_URL}>{APP_URL}</a> and sign in
            with your credentials.
          </p>
        </li>
        <li>
          <h3>Go to Settings</h3>
          <p>
            Navigate to Settings from the sidebar menu. Select the &quot;Account&quot; or
            &quot;Workspace&quot; section.
          </p>
        </li>
        <li>
          <h3>Request Data Deletion</h3>
          <p>
            Click &quot;Delete Account&quot; or &quot;Request Data Deletion.&quot; You will be asked
            to confirm this action.
          </p>
        </li>
        <li>
          <h3>Confirmation</h3>
          <p>
            After confirmation, your account will be deactivated immediately. All
            associated data — messages, contacts, configurations, analytics — will be
            permanently deleted within 30 days.
          </p>
        </li>
      </ol>

      <h2>What Gets Deleted</h2>
      <ul>
        <li>Your account and login credentials</li>
        <li>All WhatsApp conversation data</li>
        <li>All contact information</li>
        <li>All automations and configurations</li>
        <li>All campaign data and history</li>
        <li>All analytics and reports</li>
        <li>All team member accounts under your workspace</li>
      </ul>

      <h2>What We Retain</h2>
      <p>
        We may retain minimal information required for legal compliance, fraud
        prevention, or as required by law. This typically includes transaction
        records and basic account metadata for up to 90 days.
      </p>

      <h2>Alternative: Contact Us</h2>
      <p>
        If you cannot access your account, you can request data deletion by emailing{" "}
        <a href="mailto:privacy@cmbuddy.pk">privacy@cmbuddy.pk</a> from the email
        address associated with your account. We will process your request within 30
        days.
      </p>

      <h2>Third-Party Data</h2>
      <p>
        Data previously sent via the WhatsApp Business API may be retained by Meta
        Platforms Inc. according to their own data retention policies. CM Buddy does
        not control Meta&apos;s data retention practices.
      </p>

      <h2>Questions?</h2>
      <p>
        Contact us at <a href="mailto:privacy@cmbuddy.pk">privacy@cmbuddy.pk</a>{" "}
        if you have any questions about data deletion.
      </p>
      </div>
      <MarketingFooter />
    </div>
  );
}
