import { useState } from 'react';

const BACKEND_URL = 'https://purplefinger-chimera.onrender.com';
const DOWNLOAD_URLS = {
  win: `${BACKEND_URL}/download`,
  mac: `${BACKEND_URL}/download/mac`,
};
const PLATFORM_LABEL = { win: 'Windows', mac: 'macOS' };
const TELEGRAM_SUPPORT = 'https://t.me/PurpleFsupport';
const TELEGRAM_CHANNEL = 'https://t.me/purplefinger21';

function detectPlatform() {
  if (typeof navigator === 'undefined') return 'win';
  const ua = `${navigator.userAgent || ''} ${navigator.platform || ''}`.toLowerCase();
  return /mac|iphone|ipad/.test(ua) ? 'mac' : 'win';
}

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
    body: 'Windows and macOS installers, new builds shipped regularly.',
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

const guideSteps = [
  {
    n: '01',
    title: 'Install a virtual camera',
    body: (
      <>
        <p>
          Purplefinger renders the swapped video and serves it as a local Browser Source. OBS
          captures that source, and a virtual camera driver hands OBS's output to your call app
          as if it were a real webcam.
        </p>
        <p>
          <strong>Windows:</strong> install <strong>DroidCam</strong> (the client plus its OBS
          Virtual Output plugin), then restart your PC once so the driver registers. Apps like
          WhatsApp Desktop don't recognize OBS's own Virtual Camera, but they do recognize DroidCam's
          device.
        </p>
        <p>
          <strong>macOS:</strong> nothing extra to install. OBS ships its own virtual camera and
          it's recognized broadly, skip straight to Step 2.
        </p>
      </>
    ),
  },
  {
    n: '02',
    title: 'Configure OBS',
    body: (
      <>
        <p>Open OBS Studio (free at <code>obsproject.com</code>).</p>
        <ol>
          <li>In Sources, click <strong>+</strong> then <strong>Browser</strong>, name it anything.</li>
          <li>Set the URL to <code>http://localhost:7891</code>.</li>
          <li>Leave Width/Height at their defaults.</li>
          <li>Right-click the source in the preview and choose <strong>Transform → Fit to Screen</strong>.</li>
          <li>Under Settings → Audio, set Mic/Auxiliary Audio to your real microphone.</li>
        </ol>
      </>
    ),
  },
  {
    n: '03',
    title: 'Activate the virtual camera',
    body: (
      <>
        <p>
          <strong>Windows:</strong> in OBS's menu bar, go to <strong>Tools → DroidCam OBS Virtual
          Output</strong> and click Start. Status should read "Active".
        </p>
        <p>
          <strong>macOS:</strong> click <strong>Start Virtual Camera</strong> in OBS's Controls
          panel.
        </p>
      </>
    ),
  },
  {
    n: '04',
    title: 'Start Purplefinger',
    body: (
      <>
        <p>Upload your identity photo in the app, click Connect, and wait 30 to 90 seconds for the GPU pod to boot. Your OBS preview should show the swapped video once it's live.</p>
      </>
    ),
  },
  {
    n: '05',
    title: 'Make the call',
    body: (
      <>
        <p>
          Open WhatsApp, Zoom, Meet, or Discord and start a video call. Pick <strong>DroidCam
          Source</strong> (Windows) or <strong>OBS Virtual Camera</strong> (macOS) from the camera
          dropdown, and your real microphone for audio. Keep OBS running for the whole call.
        </p>
      </>
    ),
  },
];

const troubleshooting = [
  { q: 'Camera source not showing up in my call app', a: 'On Windows, restart your PC after installing DroidCam so the virtual device registers.' },
  { q: 'Black screen in the OBS Browser Source', a: 'Make sure a Purplefinger session is actually running and the Browser Source URL matches http://localhost:7891.' },
  { q: 'Low fps or laggy video', a: 'Switch to the Fast quality mode and Auto transport in the app. You want at least 5 Mbps of upload bandwidth.' },
  { q: 'No audio on the call', a: "Audio doesn't run through OBS. Select your real microphone and speakers directly in the call app's settings." },
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

function DownloadButton({ className, platform, children }) {
  const resolved = platform || detectPlatform();
  return (
    <a className={className} href={DOWNLOAD_URLS[resolved]}>
      {children}
    </a>
  );
}

function DownloadButtonPair({ className = 'btn btn-primary' }) {
  return (
    <>
      <DownloadButton className={className} platform="win">
        Download for {PLATFORM_LABEL.win}
      </DownloadButton>
      <DownloadButton className={className} platform="mac">
        Download for {PLATFORM_LABEL.mac}
      </DownloadButton>
    </>
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
          <a href="#how-to-use">How to use</a>
          <a href="#pricing">Pricing</a>
          <a href="#get-started">Get started</a>
        </nav>
        <div className="topbar-downloads">
          <DownloadButton className="topbar-download" platform="win">Windows</DownloadButton>
          <DownloadButton className="topbar-download" platform="mac">macOS</DownloadButton>
        </div>
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
              <DownloadButtonPair />
              <a className="btn btn-payment" href="#payment">
                Make payment
              </a>
              <a className="btn btn-ghost" href={TELEGRAM_SUPPORT} target="_blank" rel="noreferrer">
                Get a product key ↗
              </a>
            </div>
            <p className="hero-meta">v1.1.0 · Windows &amp; macOS · Product key required</p>
            <p className="hero-note">
              macOS build isn't notarized yet. Right-click the app and choose Open the first time.
            </p>
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

        <section className="section" id="how-to-use">
          <div className="section-heading">
            <p className="eyebrow">Setup guide</p>
            <h2>DroidCam, OBS, and your first call</h2>
            <p className="section-sub">
              Purplefinger renders your swapped face on our cloud GPU and hands it to OBS as a
              local Browser Source. From there, a virtual camera driver is what makes WhatsApp,
              Zoom, or Meet see it as a real webcam. This same walkthrough is built into the app
              under Instructions.
            </p>
          </div>
          <div className="guide-list">
            {guideSteps.map((step) => (
              <article className="guide-step" key={step.n}>
                <span className="step-n">{step.n}</span>
                <div className="guide-step-body">
                  <h3>{step.title}</h3>
                  {step.body}
                </div>
              </article>
            ))}
          </div>

          <div className="guide-faq">
            <h3>Troubleshooting</h3>
            <dl>
              {troubleshooting.map((item) => (
                <div className="guide-faq-item" key={item.q}>
                  <dt>{item.q}</dt>
                  <dd>{item.a}</dd>
                </div>
              ))}
            </dl>
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
            <DownloadButtonPair />
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
          <DownloadButton>Download</DownloadButton>
        </div>
      </footer>
    </div>
  );
}

export default App;
