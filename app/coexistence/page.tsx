import Link from "next/link";
import { Icon } from "../../components/ui/icons";
import MarketingNav from "../../components/site/MarketingNav";
import MarketingFooter from "../../components/site/MarketingFooter";

const KEY_POINTS = [
  "WhatsApp Coexistence is an official Meta-supported capability that allows the WhatsApp Business App and WhatsApp Business Platform (API) to run on the same phone number.",
  "Businesses can upgrade their existing Business App number to API without losing chats or contacts (some feature limitations may apply).",
  "You can continue using the Business App for manual conversations while using the API for automation, CRM, and multi-agent chat — both work side by side.",
  "Coexistence works within WhatsApp's rules, as long as you onboard via Meta's Embedded Signup flow or a verified BSP (Business Solution Provider) such as CM Buddy.",
  "Currently rolling out gradually — availability depends on your country, BSP, and number eligibility.",
  "Certain functions like disappearing messages, broadcast lists, or view-once media may not fully work when coexistence is enabled.",
];

const BENEFITS = [
  {
    title: "Seamless Transition Without Data Loss",
    body: "Previously, upgrading to the WhatsApp Business Platform meant deactivating your existing WhatsApp Business account and risking data loss. With Coexistence, businesses can retain most recent chats (up to six months), contacts, and key information. However, some message types like disappearing messages, broadcast lists, and group chats are not synchronized. This is especially critical for businesses that rely on trust, such as medical and healthcare providers, education institutions, home service businesses, and financial consultants.",
  },
  {
    title: "Unified Chat Management",
    body: "Messages received on WhatsApp are synchronized across both the Business app and API interfaces. This synchronization allows teams to manage conversations through their preferred platforms — whether it's the mobile app or a desktop-based CRM system. This flexibility is vital for businesses with distributed teams or hybrid work setups.",
  },
  {
    title: "Access to Advanced Features",
    body: "Integrating the WhatsApp Business Platform unlocks a suite of advanced tools, including automated messaging and chatbots, CRM integrations for streamlined customer data management, multi-agent support for handling higher volumes of inquiries, and broadcast messaging capabilities for marketing campaigns. A verified sender badge builds trust and increases message open rates. Together, these features make businesses more responsive, more organized, and better prepared to deliver an excellent customer experience.",
  },
  {
    title: "Cost-Effective Scaling",
    body: "By enabling the use of existing phone numbers, Coexistence eliminates the costs associated with acquiring new numbers and the potential loss of customer trust linked to changing contact information. For small and medium-sized businesses, this means scaling like a big brand, without spending like one.",
  },
];

const COMPARISON = [
  { feature: "Individual (1:1) chats", change: "Message Edit/Revoke is no longer supported.", api: "Supported. All chat messages in the most recent 6 months can be synchronized. Messages sent and received are mirrored between the Cloud API and the WhatsApp Business app." },
  { feature: "Contacts", change: "No change.", api: "Supported. All contacts with a WhatsApp number can be synchronized." },
  { feature: "Group chats", change: "No change.", api: "Not supported. Group chats will not be synchronized." },
  { feature: "Disappearing messages", change: "Disappearing messages will be turned off for all individual (1:1) chats.", api: "Not supported." },
  { feature: "View once message", change: "View once messages will be disabled for all individual (1:1) chats.", api: "Not supported." },
  { feature: "Live location message", change: "Live location messages will be disabled for all individual (1:1) chats.", api: "Not supported." },
  { feature: "Broadcast lists", change: "Broadcast lists will be disabled; businesses cannot create new ones and existing lists become read-only.", api: "Not supported." },
  { feature: "Voice and video calls", change: "No change.", api: "Not supported." },
  { feature: "Business tools (e.g. catalog, orders, status)", change: "No change.", api: "Not supported." },
  { feature: "Messaging tools (marketing message, greeting, away message, quick replies, labels)", change: "No change.", api: "Not supported." },
  { feature: "Business profile (name, address, website)", change: "No change.", api: "Not supported." },
];

const USE_CASES = [
  { title: "Retail & Boutiques", body: "Use the app for personalized styling suggestions; use the API for order confirmations, shipping updates, and promotions." },
  { title: "Healthcare & Clinics", body: "Schedule appointments manually via the app; send automated appointment reminders or FAQs via the API." },
  { title: "Educational Institutions", body: "Counsel students and parents on the app; share class schedules, fee reminders, or notices automatically through the API." },
  { title: "Salons & Spas", body: "Take bookings through the app; send festive offers or appointment reminders with automation." },
  { title: "Logistics & Delivery", body: "Handle urgent customer queries via the app; automate dispatch messages, live tracking links, and delivery confirmations." },
  { title: "Financial Services", body: "Personal consultations through the app; automated loan status updates, EMI reminders, and KYC alerts via the API." },
];

const FAQS = [
  { q: "Q1. Can I use the WhatsApp Business App and WhatsApp API at the same time?", a: "Yes, you can use both under Coexistence mode. It allows your Business App and API (Cloud or Platform) to coexist on the same phone number, provided your number is eligible and you go through the supported onboarding flow." },
  { q: "Q2. How to use the WhatsApp Business App and API on the same phone number?", a: "Use the Coexistence onboarding (via Embedded Signup) to link the same number currently on the Business App into the API/Platform. You don't switch to a new number. However, you must ensure your number is eligible, meets region requirements, and is not already bound to another API setup." },
  { q: "Q3. Can I keep using the WhatsApp Business App after switching to API?", a: "Yes, under Coexistence you can keep using the Business App and the API. The number remains active in the App while the API is enabled. Some features of the App may change or be limited though." },
  { q: "Q4. Can sales use the WhatsApp Business App while support uses the API?", a: "Yes — that setup is consistent with Coexistence: one team uses the Business App for manual chats, another uses the API side for automation/support. Both use the same number in a properly-onboarded Coexistence setup." },
  { q: "Q5. How to avoid getting blocked when using the WhatsApp Business App and API together?", a: "Use the same policies you would normally: ensure proper opt-in from users, use approved templates via the API, follow messaging best practices (avoid spam, repetition), and maintain healthy number quality. Coexistence itself doesn't change Meta's policy about message quality." },
  { q: "Q6. How do I avoid getting blocked when sending WhatsApp broadcast messages?", a: "Use the API for large-scale broadcast campaigns (with template messages) rather than the App's broadcast lists for very large audiences. Ensure recipients have opted in, avoid repetition and low-quality messages, and monitor your number's quality rating." },
  { q: "Q7. What are the limitations of the WhatsApp Cloud API compared to BSP solutions?", a: "The Cloud API is Meta's native interface; BSPs (Business Solution Providers) like CM Buddy often add dashboards, templates, analytics, integrations, and support. Limitations depend on your provider rather than Meta specifying a fixed comparison." },
  { q: "Q8. What is WhatsApp Business Coexistence?", a: "Coexistence is the feature whereby the Business App and Business Platform/API can operate simultaneously on the same phone number, allowing businesses to keep manual chat capability in the App while scaling through the API." },
  { q: "Q9. Can I send bulk broadcasts without getting blocked?", a: "Bulk messaging must still comply with Meta policies. Using the API with approved templates and opt-in recipients is the safer route. The App's broadcast is less appropriate for large-scale outreach." },
  { q: "Q10. Can I use the same business number on two phones?", a: "For the Business App you can use companion devices (WhatsApp Web/Desktop), but the number cannot be simultaneously active on two independent App installations in violation of WhatsApp's device rules. With the API side, multiple team members can respond via a shared inbox — one of the advantages of the API." },
  { q: "Q11. How do I use the WhatsApp Business App and WhatsApp API simultaneously without technical issues?", a: "Use the Coexistence onboarding path, ensure number eligibility, keep the Business App updated, work with a supported BSP, and confirm your number is not bound to a separate legacy API setup. Proper setup prevents technical conflicts." },
  { q: "Q12. What happens if I switch from the App to the API too often?", a: "Switching frequently may reduce eligibility or trigger cooldowns, especially if the number has previously been connected to API or changed status. It's best practice to decide on the Coexistence path and avoid unnecessary re-registrations or number changes." },
  { q: "Q13. Is it possible to link the WhatsApp API and Business App to the same Meta Business Account?", a: "Yes. Your Meta Business Manager or WhatsApp Business Account can support both the App and the API number (especially under Coexistence) within the same business asset structure, provided your provider supports it and the number is eligible." },
  { q: "Q14. Can I use the WhatsApp API for chatbots without losing my business number and chat history?", a: "Yes — with Coexistence you can keep your business number and retain much of your chat history (Meta docs cite up to ~6 months) when onboarding. However, group chats and some message types may not fully sync." },
];

const TOC = [
  { href: "#what", label: "What is WhatsApp Coexistence?" },
  { href: "#benefits", label: "Key Benefits" },
  { href: "#comparison", label: "Feature Comparison" },
  { href: "#devices", label: "Linked Devices" },
  { href: "#implementing", label: "Implementing WhatsApp Coexistence" },
  { href: "#impact", label: "Real-World Impact" },
  { href: "#usecases", label: "Common Use Cases" },
  { href: "#limitations", label: "Limitations & Feature Adjustments" },
  { href: "#onboarding", label: "Integration & Onboarding" },
  { href: "#best-practices", label: "Operational Best Practices" },
  { href: "#faq", label: "FAQs" },
];

export default function CoexistencePage() {
  return (
    <div className="mkt">
      <MarketingNav />
      <main>
        <section className="mkt-post-hero">
          <div className="mkt-container">
            <span className="mkt-legal-crumb">CM Buddy &gt; Insights &gt; Coexistence</span>
            <h1>WhatsApp Coexistence — Use the WhatsApp Business App & API on the Same Number</h1>
          </div>
        </section>

        <section className="mkt-post">
          <div className="mkt-container mkt-post-body">
            <p className="mkt-post-lead">
              With Coexistence, businesses can now use both interfaces on the <strong>same phone number</strong> — keeping
              their existing number, chats, and contacts intact.
            </p>

            <div className="mkt-kp">
              <h2>Key Points</h2>
              <ul>
                {KEY_POINTS.map((k) => (
                  <li key={k}><Icon name="check-circle" size={16} /> {k}</li>
                ))}
              </ul>
            </div>

            <nav className="mkt-toc" aria-label="Table of contents">
              <h2>Table of Contents</h2>
              <ol>
                {TOC.map((t) => (
                  <li key={t.href}><a href={t.href}>{t.label}</a></li>
                ))}
              </ol>
            </nav>

            <p>
              In 2020, when the world hit pause due to COVID-19, businesses had no choice but to go digital. From cozy cafes
              to local boutiques, everyone scrambled to stay connected with customers — and WhatsApp became the lifeline,
              especially in countries like Pakistan where it is often the go-to communication tool for business.
            </p>
            <p>
              But soon, cracks began to show. Small retailers and service providers using the WhatsApp Business app found it
              limiting. They couldn't manage multiple agents, automate messages, or handle large volumes of chats. Some looked
              toward the WhatsApp Business Platform (previously known as the WhatsApp Business API), which came with powerful
              features — and a major catch: switching to the API often meant changing your number and losing your chat history.
            </p>
<p>
              That&apos;s when Meta stepped in with a smarter solution: <strong>WhatsApp Coexistence</strong>. This official Meta
              feature now allows eligible businesses to use both the WhatsApp Business App and the WhatsApp Business Platform
              (API) <strong>on the same phone number</strong>, at the same time, through Meta&apos;s Coexistence or Embedded Signup
              process. No more &quot;either-or&quot; choices — keep your trusted numbers, hold on to old chats, and still unlock all the
              advanced capabilities the API offers.
            </p>

            <figure className="mkt-post-figure">
              <img src="https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&w=1200&q=70" alt="A smartphone being held in one hand — the same number now works with both the WhatsApp Business App and the API" />
              <figcaption>The WhatsApp Business App and the API working together on one number.</figcaption>
            </figure>

            <h2 id="what">What is WhatsApp Coexistence?</h2>
            <p>
              WhatsApp Coexistence is a feature that enables businesses to operate the WhatsApp Business app and the WhatsApp
              Business Platform concurrently on the same phone number. This dual functionality allows for seamless integration
              of manual and automated communication strategies, enhancing customer engagement without disrupting existing
              workflows. It's available through Meta's Embedded Signup flow and is currently being rolled out gradually,
              depending on country, BSP, and phone number eligibility.
            </p>
            <p>Think of it as having the best of both worlds:</p>
            <ul>
              <li>The WhatsApp Business app — for personalized, human interaction via mobile.</li>
              <li>The WhatsApp Business API — for large-scale, automated, and professional communication through platforms like CM Buddy.</li>
            </ul>

            <h2 id="benefits">Key Benefits of WhatsApp Coexistence</h2>
            <ol className="mkt-post-list">
              {BENEFITS.map((b, i) => (
                <li key={b.title}>
                  <h3>{i + 1}. {b.title}</h3>
                  <p>{b.body}</p>
                </li>
              ))}
            </ol>

            <h2 id="comparison">WhatsApp Business App → Cloud API — Feature Comparison</h2>
            <div className="mkt-table-wrap">
              <table className="mkt-table">
                <thead>
                  <tr>
                    <th>Existing feature on the WhatsApp Business App</th>
                    <th>Changes AFTER onboarding to Cloud API</th>
                    <th>Supported on Cloud API?</th>
                  </tr>
                </thead>
                <tbody>
                  {COMPARISON.map((row) => (
                    <tr key={row.feature}>
                      <td><strong>{row.feature}</strong></td>
                      <td>{row.change}</td>
                      <td>{row.api}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

<h2 id="devices">Linked Devices</h2>
            <p>
              Businesses can link up to four WhatsApp &quot;companion&quot; clients to their WhatsApp Business App account on other
              devices. All companion clients are supported, except for WhatsApp for Windows and WhatsApp for WearOS. Once a
              business onboards to Cloud API with an existing Business App account and number, all companion apps are unlinked
              from the account, and the business can then re-link any supported companion apps.
            </p>
            <figure className="mkt-post-figure">
              <img src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=1200&q=70" alt="Multiple devices on a desk — your team stays connected across the app and the API" loading="lazy" />
              <figcaption>Several linked devices, one conversation thread.</figcaption>
            </figure>

            <h2 id="implementing">Implementing WhatsApp Coexistence</h2>
            <p>
              WhatsApp Coexistence is enabled only through Meta-approved Business Solution Providers (BSPs) such as CM Buddy.
              To leverage Coexistence, businesses need an active WhatsApp Business account. The feature is currently being
              gradually rolled out by Meta and may be limited to select numbers and regions.
            </p>
            <p>To get started, here's what businesses need:</p>
            <ol>
              <li>An active WhatsApp Business account on the phone number</li>
              <li>A WhatsApp Business Solution Provider (BSP) — such as CM Buddy</li>
              <li>A brief onboarding process (usually handled by the BSP)</li>
              <li>Access to the beta version of WhatsApp Coexistence (currently being rolled out gradually)</li>
            </ol>
            <p>The BSP plays a critical role — they handle setup and configuration, ensure smooth migration with minimal downtime, offer training on using API dashboards, and provide troubleshooting and customer support.</p>

            <h2 id="impact">Real-World Impact</h2>
            <p>
              In Pakistan, where WhatsApp is a primary communication tool for businesses, Coexistence has been transformative.
              Retailers, educational institutions, and service providers can now enhance their customer engagement strategies
              without overhauling their existing systems. For example, a local clothing boutique can continue personal
              interactions via the WhatsApp Business app while simultaneously deploying automated order confirmations and
              promotional messages through the API.
            </p>

            <h2 id="usecases">Common Use Cases for WhatsApp Coexistence</h2>
            <p>Coexistence is not just a technical upgrade — it's a practical tool that enhances everyday operations across industries:</p>
            <div className="mkt-mini-grid">
              {USE_CASES.map((u) => (
                <div key={u.title} className="mkt-mini-card">
                  <h3>{u.title}</h3>
                  <p>{u.body}</p>
                </div>
              ))}
            </div>

            <h2 id="limitations">Limitations and Feature Adjustments with Coexistence</h2>
            <p>While Coexistence enables powerful new flexibility, some app features will behave differently once your number is linked to the API:</p>
            <ul>
              <li><strong>Template Messaging Restrictions:</strong> Template messages can only be sent through the API interface, not via the WhatsApp Business App.</li>
              <li><strong>Profile Management Constraints:</strong> Business profile updates must be managed through the WhatsApp Business App; the API interface does not support profile modifications.</li>
              <li><strong>Feature Disabling:</strong> Message editing, disappearing messages, view-once messages, live location sharing, and broadcast lists are disabled when Coexistence is enabled.</li>
              <li>Group message sync and some message types (view once, disappearing, live location) are not supported.</li>
            </ul>

            <h2 id="onboarding">Integration Requirements and Onboarding Process</h2>
            <ul>
              <li><strong>Latest App Version:</strong> Ensure the WhatsApp Business App is updated to version 2.24.17 or newer to support Coexistence.</li>
              <li><strong>Facebook Page Linking:</strong> Linking your WhatsApp Business account to a Facebook Page is a necessary step in the integration process.</li>
              <li><strong>Embedded Signup Process:</strong> The onboarding uses an embedded signup that connects your existing WhatsApp Business App to the Cloud API, facilitating seamless integration without data loss.</li>
            </ul>

            <h2 id="best-practices">Operational Considerations and Best Practices</h2>
            <ul>
              <li><strong>Team Training:</strong> Educate your team on the functionalities and limitations of both the WhatsApp Business App and the API to ensure effective use.</li>
              <li><strong>Monitoring and Analytics:</strong> Use analytics to monitor messaging performance across both platforms, enabling data-driven decision-making.</li>
              <li><strong>Regular Updates:</strong> Stay informed about changes to WhatsApp's policies and features to maintain compliance and leverage new capabilities.</li>
              <li>If your business later wants to deactivate Coexistence or migrate fully to API, contact your BSP — switching repeatedly between modes isn't recommended.</li>
            </ul>

            <h2 id="faq">FAQs</h2>
            <div className="mkt-acc">
              {FAQS.map((f) => (
                <details key={f.q} className="mkt-acc-item">
                  <summary>{f.q} <span className="mkt-acc-chev"><Icon name="chevron-down" size={16} /></span></summary>
                  <p>{f.a}</p>
                </details>
              ))}
            </div>

            <h2>Conclusion</h2>
            <p>
              WhatsApp Coexistence represents a significant advancement for businesses seeking to balance personalized customer
              service with the efficiencies of automation. By maintaining existing communication channels and enhancing them
              with advanced features, businesses can improve customer satisfaction and operational effectiveness.
            </p>
            <p>
              This capability was introduced by Meta in 2024 and continues to expand to new regions through official Business
              Solution Providers. As the feature becomes more widely available, it stands to benefit a diverse range of
              industries — particularly in regions where WhatsApp is integral to daily business operations.
            </p>

            <div className="mkt-post-cta">
              <h3>Ready to explore WhatsApp Coexistence for your business?</h3>
              <p>CM Buddy can help you combine personal service with smart automation — without disrupting your current setup.</p>
              <Link href="/register" className="mkt-btn-primary big">
                Start Free Trial <Icon name="arrow-right" size={16} />
              </Link>
            </div>

            <div className="mkt-tags">
              <span>Meta WhatsApp update</span>
              <span>use WhatsApp API and app together</span>
              <span>WhatsApp API integration</span>
              <span>WhatsApp Automation</span>
              <span>whatsapp business api</span>
              <span>whatsapp business app</span>
              <span>WhatsApp chat retention</span>
              <span>WhatsApp Coexistence</span>
              <span>WhatsApp number migration</span>
            </div>
          </div>
        </section>
      </main>
      <MarketingFooter />
    </div>
  );
}