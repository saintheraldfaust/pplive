import { useState } from 'react';
import heroVideo from '../mainvideo.mp4';
import releaseVideo from '../newrelease.mp4';
import recOneVideo from '../rec1.mp4';
import recTwoVideo from '../rec2.mp4';
import appScreenshot from '../Screenshot 2026-03-23 224628.png';

const features = [
  {
    title: '🔄 Real-time Face Swap',
    body: 'Swap faces instantly in video calls for perfect impersonation.',
  },
  {
    title: '🎤 Voice Cloning',
    body: 'Clone any voice to sound exactly like the target.',
  },
  {
    title: '📹 Call Recording',
    body: 'Record live deepfake videos and perform any actions and share.',
  },
  {
    title: '⚡ Runs on Any Laptop',
    body: 'No high-end GPU needed - works on basic hardware.',
  },
  {
    title: '🌍 Optimized for White Faces',
    body: 'Best results for impersonating foreigners.',
  },
  {
    title: '🎭 Clone Any Face',
    body: 'Use photos of anyone for face swapping.',
  },
];

const plans = [
  {
    name: 'Monthly',
    price: '$15',
    period: '/ month',
    copy: 'Perfect for one-off jobs.',
    perks: ['Real-time face swap', 'Voice cloning', 'Live recording', 'Email support'],
  },
  {
    name: 'Yearly',
    price: '$150',
    period: '/ year',
    badge: 'MOST POPULAR',
    copy: 'Save $30 vs monthly. Best for regular work.',
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

const demos = [
  {
    title: 'Face Swap Demo',
    media: heroVideo,
    type: 'video',
    featured: true,
    caption: 'Real-time face swap in action.',
  },
  {
    title: 'App Interface',
    media: appScreenshot,
    type: 'image',
    caption: 'Simple controls for deepfake operations.',
  },
  {
    title: 'Recording Demo',
    media: releaseVideo,
    type: 'video',
    caption: 'Demo recording',
  },
  {
    title: 'Recording Demo',
    media: recOneVideo,
    type: 'video',
    caption: 'Record live deepfake videos.',
  },
  {
    title: 'More Demos',
    media: recTwoVideo,
    type: 'video',
    caption: 'Additional deepfake examples.',
  },
];

function App() {
  const [showPopup, setShowPopup] = useState(false);

  const [featuredDemo, screenshotDemo, ...gridDemos] = demos;

  return (
    <div className="site-shell">
      <div className="matrix-overlay" aria-hidden="true" />

      <header className="hero">
        <div className="terminal-bar">
          <span className="terminal-pill online" />
          <span className="terminal-pill idle" />
          <span className="terminal-pill warn" />
          <span className="terminal-label">root@pf:~# purplefingerlive</span>
        </div>

        <div className="hero-grid">
          <div className="hero-copy">
            <p className="eyebrow">🕵️ DEEPFAKE TOOL</p>
            <h1>Face Swap & Voice Clone</h1>
            <p className="hero-text">
              Deepfake tool for video call work. Swap faces, clone voices, record live sessions. 
              Undetectable impersonation.
            </p>
            <button className="big-download-btn" onClick={() => setShowPopup(true)}>
              🚀 DOWNLOAD NOW
            </button>
            <div className="hero-metrics">
              <div>
                <strong>⚡ Real-time</strong>
                <span>Instant face swaps in calls</span>
              </div>
              <div>
                <strong>🎤 Voice Clone</strong>
                <span>Accurate voice matching</span>
              </div>
              <div>
                <strong>💻 Any Laptop</strong>
                <span>No GPU required</span>
              </div>
            </div>
          </div>

          <div className="hero-media card">
            <div className="card-label">Live Demo</div>
            <video className="media-frame hero-video" autoPlay muted loop playsInline preload="metadata">
              <source src={featuredDemo.media} type="video/mp4" />
            </video>
            <p>{featuredDemo.caption}</p>
          </div>
        </div>
      </header>

      {showPopup && (
        <div className="popup-overlay" onClick={() => setShowPopup(false)}>
          <div className="popup-content" onClick={(e) => e.stopPropagation()}>
            <h2>🚀 Get Started with Deepfake Tool</h2>
            <div className="steps">
              <div className="step">
                <span className="step-number">1</span>
                <div>
                  <strong>Download the EXE</strong>
                  <p>Download Chimera-Lite-1.0.0-Portable.exe</p>
                  <a href="https://github.com/saintheraldfaust/pplive/releases/download/v1.0.2/Chimera-Lite-1.0.2-Setup.exe" className="download-link">📥 Download EXE</a>
                </div>
              </div>
              <div className="step">
                <span className="step-number">2</span>
                <div>
                  <strong>Get Product Key</strong>
                  <p>Contact Purplefinger Support on Telegram for a product key</p>
                  <a href="http://t.me/PurpleFsupport" target="_blank" rel="noreferrer" className="whatsapp-link">✈️ Message Support on Telegram</a>
                </div>
              </div>
              <div className="step">
                <span className="step-number">3</span>
                <div>
                  <strong>Install & Login</strong>
                  <p>Install the software and use the product key to login</p>
                </div>
              </div>
            </div>
            <button className="close-popup" onClick={() => setShowPopup(false)}>Close</button>
          </div>
        </div>
      )}

      <main className="content-stack">
        <section className="card section-block">
          <div className="section-heading">
            <p className="eyebrow">🔥 FEATURES</p>
            <h2>Why this deepfake tool is essential</h2>
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

        <section className="card section-block pricing-block">
          <div className="section-heading">
            <p className="eyebrow">💰 PRICING</p>
            <h2>Choose your access level</h2>
            <p className="pricing-subtitle">All prices in <strong>USDC</strong> · Pay via Telegram support</p>
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
                    <li key={perk}>✓ {perk}</li>
                  ))}
                </ul>
                <a className="plan-link" href="http://t.me/PurpleFsupport" target="_blank" rel="noreferrer">
                  Get Access →
                </a>
              </article>
            ))}
          </div>
        </section>

        <section className="card section-block" id="demo">
          <div className="section-heading">
            <p className="eyebrow">📸 DEMOS</p>
            <h2>See the tool in action</h2>
          </div>

          <div className="demo-featured-grid">
            <article className="demo-card large">
              <div className="card-label">App Screenshot</div>
              <img className="media-frame screenshot" src={screenshotDemo.media} alt="Deepfake tool interface" />
              <p>{screenshotDemo.caption}</p>
            </article>

            <article className="demo-callout">
              <div className="callout-chip">🎭 Deepfake Tool</div>
              <h3>Face swap + voice clone for work</h3>
              <p>
                Undetectable deepfakes for video calls. Impersonate anyone, record sessions, share results.
              </p>
              <ul>
                <li>🔄 Real-time face swapping</li>
                <li>🎤 Voice spoofing</li>
                <li>📹 Live recording</li>
                <li>⚡ No GPU required</li>
              </ul>
            </article>
          </div>

          <div className="demo-grid">
            {gridDemos.map((demo) => (
              <article className="demo-card" key={demo.title}>
                <div className="card-label">{demo.title}</div>
                <video className="media-frame" controls playsInline preload="metadata">
                  <source src={demo.media} type="video/mp4" />
                </video>
                <p>{demo.caption}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="cta-strip">
          <div>
            <p className="eyebrow">🚀 GET ACCESS</p>
            <h2>Ready for undetectable deepfakes?</h2>
            <p>Download and start working with pro tools.</p>
          </div>
          <div className="cta-actions">
            <a className="primary-link" href="http://t.me/PurpleFsupport" target="_blank" rel="noreferrer">
              Contact ✈️
            </a>
            <a className="secondary-link" href="https://t.me/purplefinger21" target="_blank" rel="noreferrer">
              Join Channel 📢
            </a>
          </div>
        </section>
      </main>

      {showPopup && (
        <div className="popup-overlay" onClick={() => setShowPopup(false)}>
          <div className="popup-content" onClick={(e) => e.stopPropagation()}>
            <h2>🚀 Get Started with Deepfake Tool</h2>
            <div className="steps">
              <div className="step">
                <span className="step-number">1</span>
                <div>
                  <strong>Download the App</strong>
                  <p>Click below to download Chimera.exe</p>
                  <a href="https://github.com/saintheraldfaust/pplive/releases/download/v1.0.2/Chimera-Lite-1.0.2-Setup.exe" download className="download-link">📥 Download EXE</a>
                </div>
              </div>
              <div className="step">
                <span className="step-number">2</span>
                <div>
                  <strong>Get Product Key</strong>
                  <p>Contact Purplefinger Support on Telegram for your product key.</p>
                  <a href="http://t.me/PurpleFsupport" target="_blank" rel="noreferrer" className="whatsapp-link">✈️ Message Support on Telegram</a>
                </div>
              </div>
              <div className="step">
                <span className="step-number">3</span>
                <div>
                  <strong>Install & Login</strong>
                  <p>Install the app and use the product key to login.</p>
                </div>
              </div>
            </div>
            <button className="close-popup" onClick={() => setShowPopup(false)}>✕ Close</button>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;