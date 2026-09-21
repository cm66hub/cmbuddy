import Link from "next/link";
import { Icon } from "../../../components/ui/icons";
import MarketingNav from "../../../components/site/MarketingNav";
import MarketingFooter from "../../../components/site/MarketingFooter";

const BENEFITS = [
  { title: "Enhanced Patient Engagement", body: "Reach patients on a platform they use daily, ensuring timely communication and improved responsiveness." },
  { title: "Operational Efficiency", body: "Automate routine tasks such as appointment scheduling and reminders, freeing up staff to focus on critical care activities." },
  { title: "Personalized Communication", body: "Deliver tailored messages to patients, fostering a more personalized healthcare experience." },
];

const USE_CASES = [
  {
    title: "Appointment Scheduling and Reminders",
    body: (
      <>
        Reduce no-shows by automating appointment bookings and sending timely reminders via WhatsApp. Patients can easily
        confirm, reschedule, or cancel appointments, leading to better time management and resource utilization.
      </>
    ),
    img: {
      src: "https://images.unsplash.com/photo-1506784983877-45594efa4cbe?auto=format&fit=crop&w=900&q=70",
      alt: "A calendar and planner — automated appointment bookings and reminders reduce no-shows",
    },
  },
  {
    title: "Prescription Refills and Medication Reminders",
    body: (
      <>
        Ensure medication adherence by sending automated reminders for prescription refills and dosage times. This proactive
        approach supports better health outcomes and reduces hospital readmissions.
      </>
    ),
    img: {
      src: "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?auto=format&fit=crop&w=900&q=70",
      alt: "Pills and medication — automated refill and dosage reminders keep patients on track",
    },
  },
  {
    title: "Lab Results and Medical Reports Delivery",
    body: (
      <>
        Deliver lab results and medical reports directly to patients through WhatsApp, providing timely access to important
        health information while maintaining confidentiality.
      </>
    ),
    img: {
      src: "https://images.unsplash.com/photo-1579684453423-f84349ef60b0?auto=format&fit=crop&w=900&q=70",
      alt: "Laboratory vials — lab results delivered securely and directly to the patient's phone",
    },
  },
  {
    title: "Telemedicine and Virtual Consultations",
    body: (
      <>
        Facilitate virtual healthcare by scheduling and conducting consultations via WhatsApp. Share video call links,
        pre-consultation instructions, and follow-up care details seamlessly.
      </>
    ),
    img: {
      src: "https://images.unsplash.com/photo-1529139574466-a303027c1d8b?auto=format&fit=crop&w=900&q=70",
      alt: "A provider on a laptop — video consultations and follow-up care over WhatsApp",
    },
  },
  {
    title: "Health Education and Preventive Care Campaigns",
    body: (
      <>
        Promote wellness by sending personalized health tips, preventive care advice, and educational content. This empowers
        patients to take proactive steps toward maintaining their health.
      </>
    ),
    img: {
      src: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?auto=format&fit=crop&w=900&q=70",
      alt: "A woman jogging — wellness tips and preventive care campaigns keep patients engaged",
    },
  },
  {
    title: "Patient Support and Query Resolution",
    body: (
      <>
        Provide 24/7 support by addressing patient inquiries through automated responses or live chat. This ensures patients
        receive timely assistance, enhancing their overall experience.
      </>
    ),
    img: {
      src: "https://images.unsplash.com/photo-1587825140708-dfaf72ae4b04?auto=format&fit=crop&w=900&q=70",
      alt: "A support agent wearing a headset — patient questions answered around the clock",
    },
  },
  {
    title: "Emergency Alerts and Critical Notifications",
    body: (
      <>
        Communicate urgent health alerts, such as disease outbreaks or emergency guidelines, directly to patients.
        WhatsApp&apos;s high open rates ensure that critical information is promptly received and acted upon.
      </>
    ),
    img: {
      src: "https://images.unsplash.com/photo-1583417319070-4a69db38a482?auto=format&fit=crop&w=900&q=70",
      alt: "Emergency responders — critical alerts delivered instantly with WhatsApp's high open rates",
    },
  },
  {
    title: "Patient Feedback and Satisfaction Surveys",
    body: (
      <>
        Gather valuable insights by sending automated feedback requests after appointments or treatments. This helps in
        assessing patient satisfaction and identifying areas for improvement.
      </>
    ),
    img: {
      src: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&w=900&q=70",
      alt: "A phone in hand — quick satisfaction surveys right after the appointment",
    },
  },
  {
    title: "Staff Communication and Coordination",
    body: (
      <>
        Enhance internal communication among healthcare professionals by sharing updates, shift schedules, and patient
        information securely.
      </>
    ),
    img: {
      src: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=900&q=70",
      alt: "Multiple devices — care teams stay coordinated across shift updates and schedules",
    },
  },
  {
    title: "Health Insurance Assistance",
    body: (
      <>
        Assist patients with insurance queries, policy details, and claim statuses via WhatsApp, simplifying the often complex
        insurance processes.
      </>
    ),
    img: {
      src: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&w=900&q=70",
      alt: "Signing documents — insurance queries, policies, and claim statuses handled over WhatsApp",
    },
  },
];

const TOC = [
  { href: "#benefits", label: "Key Benefits" },
  { href: "#use-cases", label: "10 Healthcare Use Cases" },
  { href: "#start", label: "Start Using WhatsApp API" },
];

export default function HealthcareUseCasePage() {
  return (
    <div className="mkt">
      <MarketingNav />
      <main>
        <section className="mkt-post-hero">
          <div className="mkt-container">
            <span className="mkt-legal-crumb">CM Buddy &gt; Use Cases &gt; Healthcare</span>
            <h1>WhatsApp Business API Healthcare Use Cases</h1>
            <p className="mkt-post-hero-sub">
              Transform patient care with instant, secure, and personal healthcare communication through WhatsApp Business API.
            </p>
          </div>
        </section>

        <section className="mkt-post">
          <div className="mkt-container mkt-post-body">
            <figure className="mkt-post-figure">
              <img src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=1200&q=70" alt="A healthcare provider with a tablet — meeting patients on the messaging app they use every day" />
              <figcaption>Meet patients where they already are.</figcaption>
            </figure>

            <div className="mkt-stat">
              <span className="mkt-stat-label">Did you know?</span>
              <p>
                96% of individuals emphasize the significance of <strong>clear communication and attentive listening</strong> for a
                positive patient experience.
              </p>
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
              When it comes to health, every second matters — whether it&apos;s booking an urgent appointment, getting a quick
              update on lab reports, or simply receiving a timely reminder to take your medication. In a world where people
              check WhatsApp more than 23 times a day, using it for healthcare communication just makes sense.
            </p>
            <p>
              With WhatsApp Business API, healthcare providers can meet patients right where they are — on their favorite
              messaging app. It&apos;s fast, reliable, and personal, helping you build trust, deliver care more efficiently, and
              make every patient feel supported at every step of their health journey.
            </p>

            <h2 id="benefits">Key Benefits of WhatsApp Business API in Healthcare</h2>
            <div className="mkt-mini-grid">
              {BENEFITS.map((b) => (
                <div key={b.title} className="mkt-mini-card">
                  <h3>{b.title}</h3>
                  <p>{b.body}</p>
                </div>
              ))}
            </div>

            <h2 id="use-cases">10 Ways Healthcare Providers Use the WhatsApp Business API</h2>
            <ol className="mkt-post-list">
              {USE_CASES.map((u, i) => (
                <li key={u.title}>
                  <h3>{i + 1}. {u.title}</h3>
                  <p>{u.body}</p>
                  {u.img ? (
                    <figure className="mkt-list-figure">
                      <img src={u.img.src} alt={u.img.alt} loading="lazy" />
                    </figure>
                  ) : null}
                </li>
              ))}
            </ol>

            <h2 id="start">Start Using WhatsApp API Now — Scale Your Business</h2>
            <p>
              From appointment reminders to emergency alerts, CM Buddy brings your healthcare communication into one secure,
              automated place. Start free and deliver better patient experiences on the channel they already trust.
            </p>

            <div className="mkt-post-cta">
              <h3>Ready to transform your patient communication?</h3>
              <p>Try CM Buddy free for 14 days — no credit card required.</p>
              <Link href="/register" className="mkt-btn-primary big">
                Try CM Buddy Now <Icon name="arrow-right" size={16} />
              </Link>
            </div>

            <div className="mkt-tags">
              <span>WhatsApp healthcare</span>
              <span>Appointment reminders</span>
              <span>Telemedicine WhatsApp</span>
              <span>Lab reports delivery</span>
              <span>Patient engagement</span>
              <span>Healthcare automation</span>
            </div>
          </div>
        </section>
      </main>
      <MarketingFooter />
    </div>
  );
}