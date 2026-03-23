import heroVideo from '../elonmain.mp4';
import releaseVideo from '../newrelease.mp4';
import recOneVideo from '../rec1.mp4';
import recTwoVideo from '../rec2.mp4';
import appScreenshot from '../Screenshot 2026-03-23 224628.png';

const features = [
  {
    title: 'Realtime face performance',
    body: 'Run hosted face-swap sessions with creator-friendly controls built for live demos and rehearsed performances.',
  },
  {
    title: 'Voice preset workflows',
    body: 'Browse curated voice options, generate spoken lines, and prepare delivery before you go live.',
  },
  {
    title: 'LipSync Studio',
    body: 'Generate speech with teleprompter timing so recorded takes and call rehearsals stay tight and consistent.',
  },
  {
    title: 'Session recording',
    body: 'Capture output locally, save polished clips, and keep a reusable archive of demos, tutorials, and promos.',
  },
  {
    title: 'OBS-ready output',
    body: 'Mirror the processed feed into OBS for streaming, screen capture, walkthroughs, and presentation setups.',
  },
  {
    title: 'Hosted GPU workflow',
    body: 'Use the cloud pipeline instead of relying on a high-end local GPU, so setup stays lightweight on client machines.',
  },
];

const plans = [
  {
    name: 'Monthly',
    price: '₦25,000',
    copy: 'Best for short campaigns, testing, and trial workflows.',
  },
  {
    name: 'Yearly',
    price: '₦250,000',
    copy: 'Best value for teams running consistent sessions all year.',
    featured: true,
  },
  {
    name: 'Lifetime',
    price: '₦700,000',
    copy: 'One-time purchase for long-term access and updates.',
  },
];

const demos = [
  {
    title: 'Main demo',
    media: heroVideo,
    type: 'video',
    featured: true,
    caption: 'Hosted realtime output running through the Purplefinger desktop workflow.',
  },
  {
    title: 'Interface screenshot',
    media: appScreenshot,
    type: 'image',
    caption: 'Full control view showing session, recording, and voice tools in one place.',
  },
  {
    title: 'New release',
    media: releaseVideo,
    type: 'video',
    caption: 'Latest release pass with updated workflow and refined UI.',
  },
  {
    title: 'Recording demo 01',
    media: recOneVideo,
    type: 'video',
    caption: 'Saved output preview showing recording and playback quality.',
  },
  {
    title: 'Recording demo 02',
    media: recTwoVideo,
    type: 'video',
    caption: 'Additional recorded example from a different performance flow.',
  },
];

function App() {
  const [featuredDemo, screenshotDemo, ...gridDemos] = demos;

  return (
    <div className="site-shell">
      <div className="matrix-overlay" aria-hidden="true" />

      <header className="hero">
        <div className="terminal-bar">
          <span className="terminal-pill online" />
          <span className="terminal-pill idle" />
          <span className="terminal-pill warn" />
          <span className="terminal-label">root@purplefinger:~# launch project-purplefinger</span>
        </div>

        <div className="hero-grid">
          <div className="hero-copy">
            <p className="eyebrow">CREATOR PERFORMANCE SUITE</p>
            <h1>Project Purplefinger</h1>
            <p className="hero-text">
              A hosted realtime studio for face performance demos, voice presets, lip-sync prep,
              session recording, and OBS-ready output.
            </p>
            <div className="hero-actions">
              <a className="primary-link" href="https://wa.me/2349065786976" target="_blank" rel="noreferrer">
                Request Access
              </a>
              <a className="secondary-link" href="#demo">
                Watch Demo
              </a>
            </div>
            <div className="hero-metrics">
              <div>
                <strong>Hosted GPU</strong>
                <span>Remote pipeline, local control</span>
              </div>
              <div>
                <strong>Desktop app</strong>
                <span>Recording, voice tools, OBS output</span>
              </div>
              <div>
                <strong>Fast onboarding</strong>
                <span>Product-key access and guided setup</span>
              </div>
            </div>
          </div>

          <div className="hero-media card">
            <div className="card-label">Featured workflow preview</div>
            <video className="media-frame hero-video" controls muted playsInline preload="metadata">
              <source src={featuredDemo.media} type="video/mp4" />
            </video>
            <p>{featuredDemo.caption}</p>
          </div>
        </div>
      </header>

      <main className="content-stack">
        <section className="card section-block">
          <div className="section-heading">
            <p className="eyebrow">CORE CAPABILITIES</p>
            <h2>Built for demos, rehearsals, and polished delivery</h2>
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
            <p className="eyebrow">ACCESS PLANS</p>
            <h2>Simple pricing for individual creators and teams</h2>
          </div>
          <div className="pricing-grid">
            {plans.map((plan) => (
              <article className={`pricing-card${plan.featured ? ' featured' : ''}`} key={plan.name}>
                <p className="pricing-name">{plan.name}</p>
                <div className="pricing-price">{plan.price}</div>
                <p className="pricing-copy">{plan.copy}</p>
                <a className="plan-link" href="https://wa.me/2349065786976" target="_blank" rel="noreferrer">
                  Talk to Saint H.
                </a>
              </article>
            ))}
          </div>
        </section>

        <section className="card section-block" id="demo">
          <div className="section-heading">
            <p className="eyebrow">DEMO GALLERY</p>
            <h2>Preview the interface, recordings, and release flow</h2>
          </div>

          <div className="demo-featured-grid">
            <article className="demo-card large">
              <div className="card-label">App interface</div>
              <img className="media-frame screenshot" src={screenshotDemo.media} alt="Project Purplefinger application screenshot" />
              <p>{screenshotDemo.caption}</p>
            </article>

            <article className="demo-callout">
              <div className="callout-chip">Desktop + Hosted Workflow</div>
              <h3>One workspace for setup, recording, voice prep, and session control</h3>
              <p>
                The website is now structured as a deployable React app for Netlify, while the product demos still showcase the existing media assets and desktop interface.
              </p>
              <ul>
                <li>Vite + React frontend</li>
                <li>Netlify-ready build config</li>
                <li>Responsive media cards</li>
                <li>Safer creator-focused positioning</li>
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
            <p className="eyebrow">GET STARTED</p>
            <h2>Need a deployable product page and demo-ready app workflow?</h2>
            <p>Reach out for onboarding, pricing, or deployment support.</p>
          </div>
          <div className="cta-actions">
            <a className="primary-link" href="https://wa.me/2349065786976" target="_blank" rel="noreferrer">
              WhatsApp Saint H.
            </a>
            <a className="secondary-link" href="mailto:saintheraldfaust@gmail.com">
              Email Contact
            </a>
          </div>
        </section>
      </main>
    </div>
  );
}

export default App;