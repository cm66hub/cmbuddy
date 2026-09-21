import Link from "next/link";
import { Icon } from "../../../components/ui/icons";
import MarketingNav from "../../../components/site/MarketingNav";
import MarketingFooter from "../../../components/site/MarketingFooter";

const USE_CASES = [
  {
    title: "Send Automated Order Updates",
    body: (
      <>
        Keep your customers informed with <strong>instant order confirmations, shipping alerts, and delivery notifications</strong>.
        Reduce support queries and enhance trust with real-time updates — no agent time wasted on &ldquo;where is my order?&rdquo; messages.
      </>
    ),
    img: {
      src: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=900&q=70",
      alt: "A parcel being handed over — instant delivery notifications keep customers in the loop",
    },
  },
  {
    title: "24/7 Customer Support with a WhatsApp Chatbot",
    body: (
      <>
        Handling the same customer questions over and over? Let a WhatsApp <strong>chatbot</strong> do the work for you. It can
        instantly answer FAQs, help customers track orders, process refunds, and even suggest products based on their
        preferences. It works round the clock, so your customers always get the support they need — instantly and effortlessly.
      </>
    ),
    img: {
      src: "https://images.unsplash.com/photo-1587825140708-dfaf72ae4b04?auto=format&fit=crop&w=900&q=70",
      alt: "A support agent wearing a headset — a WhatsApp chatbot answers FAQs around the clock",
    },
  },
  {
    title: "Seamless Shopping Experience — Right on WhatsApp!",
    body: (
      <>
        Make shopping as easy as chatting. With CM Buddy, customers can <strong>browse your products, add items to their cart,
        and complete their purchase</strong> — all within the app. No switching between websites or apps. Send product catalogs,
        pricing details, and special discounts directly in chat.
      </>
    ),
    img: {
      src: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=900&q=70",
      alt: "A laptop showing an online store — customers browse and buy directly inside WhatsApp",
    },
  },
  {
    title: "Bring Back Lost Sales with WhatsApp Cart Reminders",
    body: (
      <>
        Shoppers often add items to their cart but forget to check out. A gentle WhatsApp reminder can turn those missed sales
        into conversions. Send <strong>automated messages with a friendly nudge</strong>, offer exclusive discounts, or create
        urgency with limited-time deals. A simple &ldquo;Hey! Your cart is waiting — grab 10% off before it&apos;s gone!&rdquo;
        can be all it takes to bring them back.
      </>
    ),
  },
  {
    title: "Send Exclusive Deals & Offers — Right on WhatsApp",
    body: (
      <>
        Send <strong>personalized discounts, flash sales, and special offers</strong> based on what your customers love to shop
        for. Whether it&apos;s a limited-time discount, a VIP-only offer, or a &ldquo;We miss you!&rdquo; deal, every message
        feels tailor-made. No spam — just exciting deals that actually matter to them.
      </>
    ),
  },
  {
    title: "Upsell and Cross-Sell with Smart WhatsApp Campaigns",
    body: (
      <>
        Encourage customers to buy more by suggesting <strong>relevant add-ons or upgrades</strong>. Whether it&apos;s a premium
        version of a product, a bundle deal, or accessories, upselling through WhatsApp is a great way to increase order value.
        It&apos;s personalized, engaging, and makes shopping feel effortless.
      </>
    ),
  },
  {
    title: "Convert COD Orders to Prepaid for Faster & Secure Transactions",
    body: (
      <>
        Cash on Delivery (COD) orders can lead to cancellations and extra logistics costs. Reduce risks by encouraging customers
        to switch to prepaid payments through WhatsApp. It&apos;s a win-win — customers get an extra discount, and you secure the
        payment upfront.
      </>
    ),
    img: {
      src: "https://images.unsplash.com/photo-1556740738-b6a63e27c4df?auto=format&fit=crop&w=900&q=70",
      alt: "A contactless card payment being made — nudge COD customers to pay upfront with a discount",
    },
  },
];

const TOC = [
  { href: "#revolutionizing", label: "How WhatsApp is Revolutionizing Ecommerce" },
  { href: "#use-cases", label: "7 Ecommerce Use Cases" },
  { href: "#start", label: "Start Using WhatsApp API" },
];

export default function EcommerceUseCasePage() {
  return (
    <div className="mkt">
      <MarketingNav />
      <main>
        <section className="mkt-post-hero">
          <div className="mkt-container">
            <span className="mkt-legal-crumb">CM Buddy &gt; Use Cases &gt; Ecommerce</span>
            <h1>Boost Your Sales with WhatsApp Business API Ecommerce Use Cases — Smart Ways to Connect with Customers</h1>
            <p className="mkt-post-hero-sub">
              From automated order updates to COD-to-prepaid conversion — learn how ecommerce brands use WhatsApp to sell more.
            </p>
          </div>
        </section>

        <section className="mkt-post">
          <div className="mkt-container mkt-post-body">
            <figure className="mkt-post-figure">
              <img src="https://images.unsplash.com/photo-1483985988355-763728e1935b?auto=format&fit=crop&w=1200&q=70" alt="A shopper holding shopping bags — ecommerce sales made easy over WhatsApp" />
              <figcaption>Selling where your customers already are.</figcaption>
            </figure>

            <div className="mkt-stat">
              <span className="mkt-stat-label">Do you know?</span>
              <p>
                WhatsApp messages boast an open rate of <strong>98%</strong>, significantly higher than the
                <strong> 20%</strong> average for emails.
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
              Your customers already live inside WhatsApp — they message their family, friends, and yes, the brands they love.
              For ecommerce businesses, that makes WhatsApp one of the most direct channels to your buyers. But simply replying
              manually isn&apos;t enough at scale. With the WhatsApp Business API through CM Buddy, you can automate, personalize,
              and close sales — all inside the chat your customers already use every day.
            </p>

            <h2 id="revolutionizing">How WhatsApp is Revolutionizing Ecommerce</h2>
            <p>
              WhatsApp has moved far beyond casual chat. For online stores it&apos;s now a full sales and support channel:
              high open rates, instant delivery, and a personal feel that emails simply can&apos;t match. The use cases below
              show how ecommerce businesses turn that reach into revenue.
            </p>

            <h2 id="use-cases">7 Ways Ecommerce Brands Use the WhatsApp Business API</h2>
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
              Have what it takes to grow with us? Whether you run a store on Shopify or WooCommerce, sell on Instagram, or
              manage orders over chats, CM Buddy brings your WhatsApp sales and support into one place. Start free and see the
              difference for yourself.
            </p>

            <div className="mkt-post-cta">
              <h3>Ready to sell more on WhatsApp?</h3>
              <p>Try CM Buddy free for 14 days — no credit card required.</p>
              <Link href="/register" className="mkt-btn-primary big">
                Try CM Buddy Now <Icon name="arrow-right" size={16} />
              </Link>
            </div>

            <div className="mkt-tags">
              <span>WhatsApp ecommerce</span>
              <span>WhatsApp order updates</span>
              <span>WhatsApp cart reminders</span>
              <span>COD to prepaid</span>
              <span>WhatsApp sales</span>
              <span>ecommerce automation</span>
            </div>
          </div>
        </section>
      </main>
      <MarketingFooter />
    </div>
  );
}