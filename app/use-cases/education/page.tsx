import Link from "next/link";
import { Icon } from "../../../components/ui/icons";
import MarketingNav from "../../../components/site/MarketingNav";
import MarketingFooter from "../../../components/site/MarketingFooter";

const USE_CASES = [
  {
    title: "Admissions Made Effortless: Answer Queries Instantly",
    body: (
      <>
        Applying to a school, college, or course can be overwhelming for students and parents. They have a ton of questions —
        about eligibility, deadlines, fees, and scholarships. Instead of waiting for email responses or being put on hold
        during phone calls, they can get instant answers through WhatsApp. A chatbot can guide them step by step, sharing
        brochures, fee structures, and admission forms in seconds. It&apos;s like having a virtual admission assistant available
        24/7.
      </>
    ),
    img: {
      src: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=900&q=70",
      alt: "Documents and planning — a virtual admission assistant shares brochures and forms in seconds",
    },
  },
  {
    title: "Helping Students Complete Their Applications",
    body: (
      <>
        Many students begin filling out application forms but don&apos;t finish them due to distractions or confusion. A friendly
        WhatsApp reminder with a direct link to their incomplete form can bring them back on track. Imagine getting a message
        like, &ldquo;Hey Alex! You&apos;re just one step away from completing your admission. Click here to continue.&rdquo; Simple nudges
        like this can increase completed applications significantly.
      </>
    ),
    img: {
      src: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&w=900&q=70",
      alt: "A phone in hand — a friendly nudge brings students back to their unfinished applications",
    },
  },
  {
    title: "Keeping Students Engaged & Excited About Learning",
    body: (
      <>
        Learning doesn&apos;t just happen in classrooms. With WhatsApp, teachers can share daily study materials, class schedules,
        and quick quizzes. Picture a student getting a message: &ldquo;Hey Natasha! Here&apos;s today&apos;s math problem to solve. Can you
        crack it?&rdquo; This keeps students motivated, ensures they stay on track, and turns learning into an interactive experience.
      </>
    ),
    img: {
      src: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=900&q=70",
      alt: "Students studying together — daily materials and quizzes keep learning interactive",
    },
  },
  {
    title: "Making Events & Webinars Unmissable",
    body: (
      <>
        Educational institutions conduct webinars, career fairs, and open houses, but students often forget to attend. WhatsApp
        can send engaging invitations and follow-up reminders like: &ldquo;Hi Sam! Don&apos;t miss our webinar on &apos;Choosing the Right
        Career Path&apos; tomorrow at 5 PM. Tap here to register now!&rdquo; It&apos;s direct, personal, and ensures students never miss out
        on important events.
      </>
    ),
    img: {
      src: "https://images.unsplash.com/photo-1475738972911-5b44ce984c42?auto=format&fit=crop&w=900&q=70",
      alt: "An audience at an event — WhatsApp invitations and reminders make webinars unmissable",
    },
  },
  {
    title: "Providing 24/7 Student Support Without Extra Staff",
    body: (
      <>
        Students often have urgent questions at odd hours — whether about assignments, fees, or exams. Instead of waiting for
        office hours, they can get instant responses from a WhatsApp chatbot. For example, a student texts &ldquo;When will my exam
        results be announced?&rdquo; and the chatbot replies instantly. This reduces the burden on staff while ensuring students get
        help anytime they need it.
      </>
    ),
    img: {
      src: "https://images.unsplash.com/photo-1587825140708-dfaf72ae4b04?auto=format&fit=crop&w=900&q=70",
      alt: "A support agent with a headset — student questions answered around the clock",
    },
  },
  {
    title: "Keeping Parents Informed & Involved",
    body: (
      <>
        Parents want regular updates about their child&apos;s progress, but they can&apos;t always attend meetings. WhatsApp bridges
        this gap by sending attendance reports, fee reminders, and performance updates directly to parents. Example: &ldquo;Hi Mrs.
        Sarah, your child attended 95% of classes this month!&rdquo; This keeps parents involved without them having to chase down
        information.
      </>
    ),
    img: {
      src: "https://images.unsplash.com/photo-1511895426328-dc8714191300?auto=format&fit=crop&w=900&q=70",
      alt: "A parent reading with a child — attendance and progress updates go straight to parents",
    },
  },
  {
    title: "Automating Fee Reminders & Payment Confirmations",
    body: (
      <>
        Fee deadlines can be stressful, and missed payments lead to unnecessary penalties. WhatsApp automates fee reminders so
        students never forget. After payment, an instant confirmation is sent: &ldquo;Payment received successfully! Your receipt is
        attached.&rdquo; This makes fee collection smooth and stress-free.
      </>
    ),
    img: {
      src: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&w=900&q=70",
      alt: "Calculations and payments — automated fee reminders and instant confirmations",
    },
  },
  {
    title: "Ensuring Students Never Miss Exam Updates & Results",
    body: (
      <>
        Exam schedules and results are critical moments for students. Instead of refreshing a website multiple times, they get
        updates instantly via WhatsApp. Example: &ldquo;Hi Ali! Your math exam is scheduled for July 10 at 9 AM.&rdquo; or &ldquo;Your results
        are out! Click here to check your scores.&rdquo; This ensures students stay updated without the usual hassle.
      </>
    ),
    img: {
      src: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?auto=format&fit=crop&w=900&q=70",
      alt: "A student writing an exam — schedules and results delivered straight to WhatsApp",
    },
  },
];

const GAME_CHANGERS = [
  { title: "Instant & Reliable Communication", body: "Messages are read faster than emails, ensuring timely updates." },
  { title: "Personalized & Engaging", body: "Unlike bulk emails, WhatsApp messages feel direct and interactive." },
  { title: "Cost-Effective & Scalable", body: "Handle thousands of queries without increasing staff workload." },
  { title: "Familiar & Easy to Use", body: "Students, parents, and teachers already use WhatsApp daily, making adoption seamless." },
];

const TOC = [
  { href: "#use-cases", label: "8 Education Use Cases" },
  { href: "#game-changer", label: "Why WhatsApp is a Game Changer" },
  { href: "#start", label: "Start Using WhatsApp API" },
];

export default function EducationUseCasePage() {
  return (
    <div className="mkt">
      <MarketingNav />
      <main>
        <section className="mkt-post-hero">
          <div className="mkt-container">
            <span className="mkt-legal-crumb">CM Buddy &gt; Use Cases &gt; Education</span>
            <h1>WhatsApp Business API Education Use Cases</h1>
            <p className="mkt-post-hero-sub">
              Transforming student, teacher &amp; parent communication with instant, personal messaging.
            </p>
          </div>
        </section>

        <section className="mkt-post">
          <div className="mkt-container mkt-post-body">
            <figure className="mkt-post-figure">
              <img src="https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=1200&q=70" alt="A classroom in session — seamless communication between students, teachers, and parents" />
              <figcaption>Stronger connections between students, teachers, and parents.</figcaption>
            </figure>

            <div className="mkt-stat">
              <span className="mkt-stat-label">Do you know?</span>
              <p>
                An English language training provider achieved an <strong>80% reduction in response times</strong> after
                integrating WhatsApp into their communication channels.
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
              Education is all about making connections — between students, teachers, and parents. WhatsApp is a powerful tool
              that helps schools, universities, and coaching institutes create stronger relationships with students while making
              communication seamless and instant. Whether it&apos;s simplifying admissions, answering queries, or sending reminders,
              WhatsApp can revolutionize how educational institutions operate.
            </p>

            <h2 id="use-cases">8 Ways Educational Institutions Use the WhatsApp Business API</h2>
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

            <h2 id="game-changer">Here&apos;s Why WhatsApp for Education is a Game Changer!</h2>
            <div className="mkt-mini-grid">
              {GAME_CHANGERS.map((g) => (
                <div key={g.title} className="mkt-mini-card">
                  <h3>{g.title}</h3>
                  <p>{g.body}</p>
                </div>
              ))}
            </div>

            <h2 id="start">Start Using WhatsApp API Now — Scale Your Business</h2>
            <p>
              From effortless admissions to instant exam updates, CM Buddy automates the communication your institution depends
              on. Start free and keep students, teachers, and parents connected — all in one place.
            </p>

            <div className="mkt-post-cta">
              <h3>Ready to modernize your institution&apos;s communication?</h3>
              <p>Try CM Buddy free for 14 days — no credit card required.</p>
              <Link href="/register" className="mkt-btn-primary big">
                Try CM Buddy Now <Icon name="arrow-right" size={16} />
              </Link>
            </div>

            <div className="mkt-tags">
              <span>WhatsApp education</span>
              <span>School communication</span>
              <span>Admissions automation</span>
              <span>Parent updates</span>
              <span>Fee reminders</span>
              <span>Student support</span>
            </div>
          </div>
        </section>
      </main>
      <MarketingFooter />
    </div>
  );
}