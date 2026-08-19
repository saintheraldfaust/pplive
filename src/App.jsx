import { useState } from 'react';

const BACKEND_URL = 'https://purplefinger-chimera.onrender.com';
const DOWNLOAD_URL = `${BACKEND_URL}/download`;
const TELEGRAM_SUPPORT = 'https://t.me/PurpleFsupport';
const TELEGRAM_CHANNEL = 'https://t.me/purplefinger21';

const features = [
  {
    title: 'Real-time identity transformation',
    body: 'Swap your face live during calls and streams. Rendered frame-by-frame on our cloud pipeline, not a filter.',
  },
  {
    title: 'Cloud GPU rendering',
    body: 'Every frame is processed on our GPUs. Any laptop works, no dedicated graphics card required on your end.',
  },
  {
    title: 'Accurate complexion matching',
    body: 'Tone-matched results across every identity, with a live strength control so the match is always right.',
  },
  {
    title: 'Fast, Balanced, and HQ modes',
    body: 'Trade frame rate for restoration detail on the fly. Switch profiles mid-call with no reconnect.',
  },
  {
    title: 'Drops into any call app',
    body: 'Outputs a virtual camera via OBS Browser Source. Works with Zoom, Meet, Discord, Teams, and anything else with a camera picker.',
  },
  {
    title: 'Privacy Shield',
    body: 'Automatically hides your output the moment connection quality drops, so a degraded feed is never exposed.',
  },
];

const steps = [
  {
    n: '01',
    title: 'Download the app',
    body: 'Windows installer, signed builds shipped regularly.',
  },
  {
    n: '02',
    title: 'Get a product key',
    body: 'Message support on Telegram to get licensed access.',
  },
  {
    n: '03',
    title: 'Install and log in',
    body: 'Enter your key, upload an identity photo, start a session.',
  },
];

const plans = [
  {
    name: 'Monthly',
    price: '$20',
    period: '/ month',
    copy: 'Perfect for one-off jobs.',
    perks: ['Real-time face transformation', 'Cloud GPU rendering', 'Session recording', 'Email support'],
  },
  {
    name: 'Yearly',
    price: '$200',
    period: '/ year',
    badge: 'MOST POPULAR',
    copy: 'Save $40 vs monthly. Best for regular work.',
    perks: ['Everything in Monthly', 'Priority support', 'Early feature access', 'Save 17%'],
    featured: true,
  },
  {
    name: 'Lifetime',
    price: '$440',
    period: 'one-time',
    copy: 'Buy once, use forever. No renewals.',
    perks: ['Everything in Yearly', 'Lifetime updates', 'VIP support', 'Best value'],
  },
];

const paymentOptions = [
  {
    token: 'USDC',
    network: 'Ethereum (ERC-20)',
    address: '0xea31C3d19D2F6572adC1e9a04169a4FE35231fBf',
  },
  {
    token: 'USDT',
    network: 'TRON (TRC-20)',
    address: 'TU7ZGek2xb3r3kHdfLiG12EaeHdV8SPbC3',
  },
];

function DownloadButton({ className, children }) {
  return (
    <a className={className} href={DOWNLOAD_URL}>
      {children}
    </a>
  );
}

function PaymentOption({ token, network, address }) {
  const [copied, setCopied] = useState(false);

  async function copyAddress() {
    await navigator.clipboard.writeText(address);
    setCopied(true);
    window.setTimeout(() => setCopied(false), 1800);
  }

  return (
    <article className="payment-option">
      <div className="payment-option-heading">
        <strong>{token}</strong>
        <span>{network}</span>
      </div>
      <div className="wallet-row">
        <code>{address}</code>
        <button type="button" onClick={copyAddress} aria-label={`Copy ${token} ${network} address`}>
          {copied ? 'Copied' : 'Copy'}
        </button>
      </div>
    </article>
  );
}

function App() {
  return (
    <div className="site-shell">
      <header className="topbar">
        <a className="brand" href="#top">
          Purplefinger<span className="brand-slash">/</span>
        </a>
        <nav className="topnav">
          <a href="#features">Features</a>
          <a href="#pricing">Pricing</a>
          <a href="#get-started">Get started</a>
        </nav>
        <DownloadButton className="topbar-download">Download</DownloadButton>
      </header>

      <main>
        <section className="hero" id="top">
          <div className="hero-copy">
            <p className="eyebrow">Real-time · Cloud GPU</p>
            <h1>
              Live face transformation.
              <br />
              Any call. Zero GPU.
            </h1>
            <p className="hero-text">
              Purplefinger renders your identity transformation on our cloud GPUs and streams
              it straight into your call. No local hardware, no setup beyond a product key.
            </p>
            <div className="hero-actions">
              <DownloadButton className="btn btn-primary">Download for Windows</DownloadButton>
              <a className="btn btn-payment" href="#payment">
                Make payment
              </a>
              <a className="btn btn-ghost" href={TELEGRAM_SUPPORT} target="_blank" rel="noreferrer">
                Get a product key ↗
              </a>
            </div>
            <p className="hero-meta">v1.1.0 · Windows · Product key required</p>
          </div>

          <div className="hero-visual" aria-hidden="true">
            <div className="hv-topbar">
              <span className="hv-dot" />
              <span className="hv-dot" />
              <span className="hv-dot" />
              <span className="hv-title">PURPLEFINGER</span>
              <span className="hv-status">● ACTIVE</span>
            </div>
            <div className="hv-stats">
              <span>MODE <b>REALTIME</b></span>
              <span>SEND <b>24 FPS</b></span>
              <span>RECV <b>22 FPS</b></span>
              <span>LATENCY <b>118 MS</b></span>
              <span>LINK <b>H.264</b></span>
            </div>
            <div className="hv-stage">
              <svg viewBox="0 0 200 200" className="hv-mesh">
                <circle cx="100" cy="86" r="48" />
                <path d="M60 150 Q100 118 140 150" />
                <circle cx="80" cy="80" r="2.5" fill="currentColor" stroke="none" />
                <circle cx="120" cy="80" r="2.5" fill="currentColor" stroke="none" />
                <path d="M84 108 Q100 116 116 108" />
              </svg>
            </div>
            <div className="hv-footer">
              <span>Cloud pipeline</span>
              <span>OBS → localhost:7891</span>
            </div>
          </div>
        </section>

        <section className="section" id="features">
          <div className="section-heading">
            <p className="eyebrow">Features</p>
            <h2>Built for real sessions, not demos</h2>
          </div>
          <div className="feature-grid">
            {features.map((feature) => (
              <article className="feature-card" key={feature.title}>
                <h3>{feature.title}</h3>
                <p>{feature.body}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="section" id="get-started">
          <div className="section-heading">
            <p className="eyebrow">Get started</p>
            <h2>Three steps to a live session</h2>
          </div>
          <div className="steps-grid">
            {steps.map((step) => (
              <article className="step-card" key={step.n}>
                <span className="step-n">{step.n}</span>
                <h3>{step.title}</h3>
                <p>{step.body}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="section" id="pricing">
          <div className="section-heading">
            <p className="eyebrow">Pricing</p>
            <h2>Choose your access level</h2>
            <p className="pricing-subtitle">Pay with USDC (ERC-20) or USDT (TRC-20)</p>
          </div>
          <div className="pricing-grid">
            {plans.map((plan) => (
              <article className={`pricing-card${plan.featured ? ' featured' : ''}`} key={plan.name}>
                {plan.badge && <div className="pricing-badge">{plan.badge}</div>}
                <p className="pricing-name">{plan.name}</p>
                <div className="pricing-price-row">
                  <span className="pricing-price">{plan.price}</span>
                  <span className="pricing-currency">USDC</span>
                </div>
                <p className="pricing-period">{plan.period}</p>
                <p className="pricing-copy">{plan.copy}</p>
                <ul className="pricing-perks">
                  {plan.perks.map((perk) => (
                    <li key={perk}>{perk}</li>
                  ))}
                </ul>
                <a className="plan-link" href={TELEGRAM_SUPPORT} target="_blank" rel="noreferrer">
                  Get access ↗
                </a>
              </article>
            ))}
          </div>
          <div className="payment-panel" id="payment">
            <div className="payment-intro">
              <p className="eyebrow">Crypto payment</p>
              <h3>Pay, then request your product key</h3>
              <p>
                Send the exact price of your chosen plan to one of the wallets below. Once the
                payment is complete, send your proof of payment and selected plan to Telegram
                support to receive your product key.
              </p>
            </div>
            <div className="payment-options">
              {paymentOptions.map((option) => (
                <PaymentOption key={option.address} {...option} />
              ))}
            </div>
            <p className="payment-warning">
              Only send the listed token on the stated network. Payments sent using another
              token or network may be permanently lost.
            </p>
            <a className="payment-support" href={TELEGRAM_SUPPORT} target="_blank" rel="noreferrer">
              Send proof to Telegram support ↗
            </a>
          </div>
        </section>

        <section className="cta-strip">
          <div>
            <p className="eyebrow">Ready</p>
            <h2>Go live in the next five minutes.</h2>
            <p>Download the app, message support for a key, start a session.</p>
          </div>
          <div className="cta-actions">
            <DownloadButton className="btn btn-primary">Download for Windows</DownloadButton>
            <a className="btn btn-ghost" href={TELEGRAM_CHANNEL} target="_blank" rel="noreferrer">
              Join the channel ↗
            </a>
          </div>
        </section>
      </main>

      <footer className="footer">
        <span>© {new Date().getFullYear()} Purplefinger</span>
        <div className="footer-links">
          <a href={TELEGRAM_SUPPORT} target="_blank" rel="noreferrer">Support</a>
          <a href={TELEGRAM_CHANNEL} target="_blank" rel="noreferrer">Channel</a>
          <a href={DOWNLOAD_URL}>Download</a>
        </div>
      </footer>
    </div>
  );
}

export default App;
