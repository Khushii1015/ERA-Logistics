/* ====================== ICONS ====================== */
const ICONS = {
  port: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" width="26" height="26"><path d="M2 21h20"/><path d="M5 21V8l7-4 7 4v13"/><path d="M9 21v-6h6v6"/><path d="M5 8l7 4 7-4"/></svg>`,
  truck: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" width="26" height="26"><path d="M1 17h13V5H1v12z"/><path d="M14 8h4l3 3v6h-7"/><circle cx="6" cy="19" r="2"/><circle cx="18" cy="19" r="2"/></svg>`,
  reefer: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" width="26" height="26"><path d="M12 2v20M2 12h20M5 5l14 14M19 5L5 19"/><circle cx="12" cy="12" r="3"/></svg>`,
  cross: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" width="26" height="26"><rect x="3" y="6" width="18" height="12"/><path d="M3 12h18M9 6v12M15 6v12"/></svg>`,
  flip: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" width="26" height="26"><path d="M3 7l4-4 4 4M7 3v18M21 17l-4 4-4-4M17 21V3"/></svg>`,
  storage: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" width="26" height="26"><rect x="3" y="3" width="18" height="18"/><path d="M3 9h18M3 15h18M9 3v18M15 3v18"/></svg>`,
  yard: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" width="26" height="26"><path d="M12 2L4 7v6c0 5 3 8 8 9 5-1 8-4 8-9V7l-8-5z"/><path d="M9 12l2 2 4-4"/></svg>`,
  network: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" width="26" height="26"><circle cx="12" cy="12" r="10"/><path d="M2 12h20M12 2a15 15 0 010 20M12 2a15 15 0 000 20"/></svg>`,
  chassis: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" width="26" height="26"><rect x="2" y="9" width="20" height="6"/><circle cx="7" cy="18" r="2"/><circle cx="17" cy="18" r="2"/><path d="M2 12h20"/></svg>`,
  tanker: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" width="26" height="26"><ellipse cx="12" cy="10" rx="9" ry="5"/><path d="M3 10v4c0 2.8 4 5 9 5s9-2.2 9-5v-4"/><path d="M3 14c0 2.8 4 5 9 5s9-2.2 9-5"/></svg>`,
  genset: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" width="26" height="26"><path d="M13 2L4 14h7l-1 8 9-12h-7l1-8z"/></svg>`,
  arrow: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" width="16" height="16"><path d="M5 12h14M13 6l6 6-6 6"/></svg>`,
  check: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" width="22" height="22"><path d="M20 6L9 17l-5-5"/></svg>`,
  shield: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" width="22" height="22"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>`,
  clock: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" width="22" height="22"><circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/></svg>`,
  handshake: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" width="22" height="22"><path d="M11 17l2 2a1 1 0 003-3"/><path d="M14 16l2.5 2.5a1 1 0 003-3l-3.88-3.88a3 3 0 00-4.24 0L9 14a3 3 0 01-4.24 0L3 12.25"/><path d="M21 4l-3 3-7-7-3 3 7 7"/><path d="M3 4l3 3 7-7"/></svg>`,
};

/* ====================== DATA ====================== */
const SERVICES = [
  {n:"01", t:"Port Drayage — Oakland", icon:"port", tag:"PORT OPS",
   d:"Specialized drayage out of the Port of Oakland. Same-day pulls, pre-pulls, and live unloads handled by a dedicated team."},
  {n:"02", t:"FTL, LTL & Intermodal", icon:"truck", tag:"OVER-THE-ROAD",
   d:"Full truckload, less-than-truckload, and rail-to-truck intermodal moves. One vendor for every freight class."},
  {n:"03", t:"Specialized in Reefers", icon:"reefer", tag:"TEMP-CONTROL",
   d:"Temperature-controlled freight with continuous cold-chain monitoring from origin to delivery."},
  {n:"04", t:"Transloading & Cross-Dock", icon:"cross", tag:"WAREHOUSE",
   d:"Transload from ocean container to dry van, cross-dock for hot freight, and consolidate inbound to outbound in hours."},
  {n:"05", t:"Container Flipping & Street Turn", icon:"flip", tag:"EQUIPMENT",
   d:"Flip loads between containers, execute street turns, and cut empty-return costs without sacrificing transit time."},
  {n:"06", t:"Dry Storage Available", icon:"storage", tag:"INDOOR",
   d:"Indoor dry storage at the Oakland yard. Short-term overflow and longer holds, both billed transparently."},
  {n:"07", t:"Secure Yard Locations", icon:"yard", tag:"24/7",
   d:"Fenced, lit, camera-monitored yards. Loaded and empty equipment held safely between moves."},
  {n:"08", t:"Nationwide Distribution", icon:"network", tag:"USA-WIDE",
   d:"From Oakland to anywhere in the lower 48. Owner-operator network combined with intermodal partners."},
];

const FLEET = [
  {count:"10", plus:true, sub:"+ 60 OWNER OPERATORS DEDICATED TO ERA", name:"Trucks", icon:"truck",
   desc:"Ten company tractors plus a roster of 60+ owner-operators dedicated exclusively to ERA. Capacity when you need it."},
  {count:"100", plus:true, sub:"", name:"Chassis", icon:"chassis",
   desc:"Triaxles, slides, and standard 20/40-foot chassis available across our yards. Equipment is rarely the bottleneck."},
  {count:"30", plus:true, sub:"", name:"Tanker ISO Chassis", icon:"tanker",
   desc:"Specialized ISO-tank chassis for liquid bulk drayage. Inspected, certified, and ready to roll."},
  {count:"30", plus:true, sub:"", name:"Gensets", icon:"genset",
   desc:"Genset units to keep reefer containers powered during over-the-road moves. Cold chain stays unbroken."},
];

/* ====================== TEMPLATES ====================== */
const tpl = {};

tpl.home = () => `
<section class="hero">
  <div class="hero-grid-bg"></div>
  <div class="hero-spotlight"></div>
  <div class="hero-meta"><span class="dot"></span> EST. OAKLAND · CALIFORNIA · USA</div>
  <h1>
    <span class="word"><span>Freight</span></span> <span class="word"><span><em>moves</em></span></span><br/>
    <span class="word"><span>forward.</span></span>
  </h1>
  <div class="hero-bottom">
    <p class="hero-lede">
      <strong>ERA Logistic Inc.</strong> is an Oakland-based drayage and trucking company built to keep your freight in motion. From the port to the dock to the door, every container is our problem to solve.
    </p>
    <div class="hero-actions">
      <a href="#/services" data-link class="btn btn-primary"><span>Our Services</span> ${ICONS.arrow}</a>
      <a href="#/contact" data-link class="btn btn-ghost"><span>Talk to Dispatch</span></a>
    </div>
  </div>
</section>

<section class="stats-strip reveal-stagger">
  <div class="stat"><div class="stat-num">70+</div><div class="stat-label">Trucks & Operators</div></div>
  <div class="stat"><div class="stat-num">100+</div><div class="stat-label">Chassis On Hand</div></div>
  <div class="stat"><div class="stat-num">24/7</div><div class="stat-label">Dispatch Coverage</div></div>
  <div class="stat"><div class="stat-num">48</div><div class="stat-label">States Covered</div></div>
</section>

<div class="marquee">
  <div class="marquee-track">
    <span>Port Drayage</span><span>Reefer Specialists</span><span>Cross-Dock</span><span>Container Flipping</span><span>Nationwide</span><span>Secure Yards</span>
    <span>Port Drayage</span><span>Reefer Specialists</span><span>Cross-Dock</span><span>Container Flipping</span><span>Nationwide</span><span>Secure Yards</span>
  </div>
</div>

<section class="section">
  <div class="section-head reveal">
    <div>
      <div class="section-eyebrow"><span class="num">01</span> · What we do</div>
      <h2>End-to-end <em>logistics,</em> handled in-house.</h2>
    </div>
    <p class="section-side">Eight services. One team. We don't subcontract our reputation — every move is run by people who pick up the phone when you call.</p>
  </div>
  <div class="what-grid reveal-stagger">
    ${SERVICES.slice(0,6).map(s => `
      <a href="#/services" data-link class="what-card">
        <div class="num">— ${s.n}</div>
        <h3>${s.t}</h3>
        <p>${s.d}</p>
        <div class="arrow">${ICONS.arrow}</div>
      </a>
    `).join('')}
  </div>
</section>

<section class="values">
  <div class="section-head reveal" style="margin-bottom:48px">
    <div>
      <div class="section-eyebrow"><span class="num">02</span> · Why ERA</div>
      <h2 style="font-size:clamp(36px,5vw,64px)">Built on <em>accountability.</em></h2>
    </div>
  </div>
  <div class="values-grid reveal-stagger">
    <div class="value">
      <div class="value-icon">${ICONS.shield}</div>
      <h4>Owned equipment</h4>
      <p>We don't outsource what we promise. Trucks, chassis, gensets — all under our roof and our control.</p>
    </div>
    <div class="value">
      <div class="value-icon">${ICONS.clock}</div>
      <h4>Real-time dispatch</h4>
      <p>One number reaches a dispatcher who knows your load, your driver, and your timing. No phone trees.</p>
    </div>
    <div class="value">
      <div class="value-icon">${ICONS.handshake}</div>
      <h4>Dedicated capacity</h4>
      <p>60+ owner-operators run for ERA exclusively. Capacity that doesn't disappear in peak season.</p>
    </div>
    <div class="value">
      <div class="value-icon">${ICONS.check}</div>
      <h4>Transparent pricing</h4>
      <p>Clean invoices, no surprise accessorials. Quotes that reflect what the move actually costs.</p>
    </div>
  </div>
</section>

<section class="process">
  <div class="process-inner">
    <div class="section-head reveal">
      <div>
        <div class="section-eyebrow"><span class="num">03</span> · How we move</div>
        <h2>From port call <em>to</em> back-door delivery.</h2>
      </div>
    </div>
    <div class="process-grid reveal-stagger">
      <div class="proc"><div class="proc-num">01</div><h4>Booking</h4><p>Send the BL or PO. Dispatch confirms appointment, equipment, and route within the hour.</p></div>
      <div class="proc"><div class="proc-num">02</div><h4>Pull</h4><p>Pre-pull, same-day pull, or live unload — whichever keeps your demurrage clock at zero.</p></div>
      <div class="proc"><div class="proc-num">03</div><h4>Move</h4><p>Local drayage, transload, or long-haul. Real-time updates so nothing is a surprise.</p></div>
      <div class="proc"><div class="proc-num">04</div><h4>Deliver</h4><p>POD signed, empty returned, invoice clean. Your account stays moving forward.</p></div>
    </div>
  </div>
</section>

<section class="coverage">
  <div class="coverage-text reveal">
    <div class="section-eyebrow"><span class="num">04</span> · Coverage map</div>
    <h2>Oakland to <em>anywhere.</em></h2>
    <p>Our home is the Port of Oakland, but our wheels turn nationwide. Through company tractors, dedicated owner-operators, and intermodal partners, we move freight to and from every major lane in the lower 48.</p>
    <div class="coverage-list">
      <span>OAKLAND</span><span>LONG BEACH</span><span>LOS ANGELES</span><span>STOCKTON</span><span>RENO</span><span>SALT LAKE CITY</span><span>PHOENIX</span><span>DENVER</span><span>DALLAS</span><span>CHICAGO</span><span>ATLANTA</span><span>NEW YORK</span>
    </div>
  </div>
  <div class="coverage-visual reveal">
    ${mapSVG()}
  </div>
</section>

<section class="cta-block">
  <div class="cta-block-inner">
    <h2>Need it moved?<br/>Pick up the <em>phone.</em></h2>
    <p>Dispatch is open. Quotes are fast. Equipment is ready.</p>
    <a href="#/contact" data-link class="btn"><span>Contact Dispatch</span> ${ICONS.arrow}</a>
  </div>
</section>
`;

tpl.services = () => `
<section class="page-header">
  <div class="hero-grid-bg"></div>
  <div class="page-header-meta"><span class="num">01</span> · Section / Services</div>
  <h1>Eight ways<br/>we move <em>freight.</em></h1>
  <p>Every service runs through one dispatch desk and one accountability chain. No handoffs to vendors you've never met, no "let me check with the broker." Just answers, equipment, and movement.</p>
</section>

<div class="services-list reveal-stagger">
  ${SERVICES.map(s => `
    <a href="#/contact" data-link class="svc">
      <div class="svc-num">${s.n} —</div>
      <div>
        <div class="svc-title">${s.t}</div>
        <p class="svc-desc">${s.d}</p>
      </div>
      <div class="svc-icon">${ICONS[s.icon]}</div>
      <div class="svc-tag">${s.tag}</div>
    </a>
  `).join('')}
</div>

<section class="cta-block">
  <div class="cta-block-inner">
    <h2>Ready to<br/>book a <em>load?</em></h2>
    <p>Send your BL, PO, or rate request. Dispatch responds within the hour.</p>
    <a href="#/contact" data-link class="btn"><span>Get a Quote</span> ${ICONS.arrow}</a>
  </div>
</section>
`;

tpl.fleet = () => `
<section class="page-header">
  <div class="hero-grid-bg"></div>
  <div class="page-header-meta"><span class="num">02</span> · Section / Own Fleet</div>
  <h1>The <em>iron</em><br/>behind the moves.</h1>
  <p>We don't lease our promises. ERA owns and operates a working fleet of trucks, chassis, ISO tankers, and gensets — backed by 60+ owner-operators who run dedicated for us.</p>
</section>

<div class="fleet-grid reveal-stagger">
  ${FLEET.map(f => `
    <div class="fleet-card">
      <div class="fleet-card-top">
        <div>
          <div class="fleet-tag">Asset Class</div>
          <div class="fleet-name">${f.name}</div>
        </div>
        <div class="fleet-icon-wrap">${ICONS[f.icon]}</div>
      </div>
      <div>
        <div class="fleet-count">
          ${f.count}<span class="plus">+</span>
          ${f.sub ? `<span class="sub">${f.sub}</span>` : ''}
        </div>
        <p class="fleet-desc">${f.desc}</p>
      </div>
    </div>
  `).join('')}
</div>

<div class="fleet-strip">
  <div class="fleet-strip-item">
    <h4>Dedicated <em>capacity.</em></h4>
    <p>60+ owner-operators run exclusively for ERA. Capacity that doesn't disappear when the market gets tight.</p>
  </div>
  <div class="fleet-strip-item">
    <h4>Maintained <em>in-house.</em></h4>
    <p>Equipment is inspected, certified, and serviced on-site. Rolling stock that's actually rolling.</p>
  </div>
  <div class="fleet-strip-item">
    <h4>Built for <em>the port.</em></h4>
    <p>Triaxle chassis, ISO tank frames, and genset support — the gear specifically required to work the Oakland waterfront.</p>
  </div>
</div>

<section class="section">
  <div class="section-head reveal">
    <div>
      <div class="section-eyebrow"><span class="num">·</span> By the numbers</div>
      <h2>Capacity that <em>scales</em> with your freight.</h2>
    </div>
    <p class="section-side">When peak season hits and brokers are scrambling for trucks, our dedicated network is already moving your load.</p>
  </div>
  <div class="stats-strip reveal-stagger" style="border-top:none">
    <div class="stat"><div class="stat-num">10</div><div class="stat-label">Company Trucks</div></div>
    <div class="stat"><div class="stat-num">60+</div><div class="stat-label">Owner Operators</div></div>
    <div class="stat"><div class="stat-num">160+</div><div class="stat-label">Chassis Total</div></div>
    <div class="stat"><div class="stat-num">100%</div><div class="stat-label">Dedicated</div></div>
  </div>
</section>
`;

tpl.contact = () => `
<section class="page-header">
  <div class="hero-grid-bg"></div>
  <div class="page-header-meta"><span class="num">03</span> · Section / Contact</div>
  <h1>Dispatch<br/>is <em>open.</em></h1>
  <p>Need a rate, a pickup, or a status update? Reach out by phone or email — we answer fast, in plain English, and we don't put you through a phone tree.</p>
</section>

<div class="contact-wrap">
  <div class="contact-info">
    <h2>Get <em>moving.</em></h2>
    <p>ERA Logistic Inc. operates from Oakland with a national reach. The fastest path to a quote is a phone call to dispatch.</p>

    <div class="contact-blocks">
      <div class="contact-block">
        <div class="contact-block-label">Headquarters</div>
        <div class="contact-block-value">
          70 Hegenberger Loop
          <small>Oakland, CA 94621</small>
        </div>
      </div>
      <div class="contact-block">
        <div class="contact-block-label">Dispatch Phone</div>
        <div class="contact-block-value">
          <a href="tel:5102009512">510-200-9512</a>
          <small>Available 24/7 — call anytime, day or night</small>
        </div>
      </div>
      <div class="contact-block">
        <div class="contact-block-label">Dispatch Email</div>
        <div class="contact-block-value">
          <a href="mailto:Dispatch@eralogistic.net">Dispatch@eralogistic.net</a>
          <small>Send BL, PO, or rate requests</small>
        </div>
      </div>
    </div>
  </div>

  <div class="contact-form">
    <h3>Send a request</h3>
    <p>Fill in the basics — dispatch will follow up within the hour.</p>
    <form id="quoteForm" novalidate>
      <div class="field-row">
        <div class="field">
          <label for="cf-name">Your Name</label>
          <input type="text" id="cf-name" required />
        </div>
        <div class="field">
          <label for="cf-company">Company</label>
          <input type="text" id="cf-company" />
        </div>
      </div>
      <div class="field-row">
        <div class="field">
          <label for="cf-email">Email</label>
          <input type="email" id="cf-email" required />
        </div>
        <div class="field">
          <label for="cf-phone">Phone</label>
          <input type="tel" id="cf-phone" />
        </div>
      </div>
      <div class="field">
        <label for="cf-service">Service</label>
        <select id="cf-service">
          <option>Port Drayage — Oakland</option>
          <option>FTL / LTL / Intermodal</option>
          <option>Reefer Freight</option>
          <option>Transloading / Cross-Dock</option>
          <option>Container Flipping / Street Turn</option>
          <option>Dry Storage</option>
          <option>Nationwide Distribution</option>
          <option>Other / Not sure</option>
        </select>
      </div>
      <div class="field">
        <label for="cf-msg">Tell us about the load</label>
        <textarea id="cf-msg" placeholder="Origin, destination, equipment, dates, anything else…"></textarea>
      </div>
      <button type="submit" class="btn btn-primary"><span>Send to Dispatch</span> ${ICONS.arrow}</button>
    </form>
  </div>
</div>

<section class="map-strip">
  <div>
    <h3>Visit the <em>yard.</em></h3>
    <p>70 Hegenberger Loop, Oakland — minutes from the Port of Oakland's marine terminals. Drop in, drop a trailer, or just say hi.</p>
  </div>
  <div class="map-visual">
    ${yardSVG()}
  </div>
</section>
`;

/* ====================== SVG ART ====================== */
function mapSVG(){
  return `
  <svg viewBox="0 0 500 380" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <radialGradient id="glow" cx="50%" cy="50%" r="50%">
        <stop offset="0%" stop-color="#FFD400" stop-opacity=".5"/>
        <stop offset="100%" stop-color="#FFD400" stop-opacity="0"/>
      </radialGradient>
    </defs>
    <!-- Stylized US outline -->
    <path d="M30 140 L80 100 L130 90 L180 80 L240 75 L310 80 L370 90 L420 100 L460 130 L470 180 L460 230 L430 270 L400 290 L350 295 L300 290 L250 295 L200 290 L150 280 L100 260 L60 220 L30 180 Z"
      fill="none" stroke="#bcbab0" stroke-width="1.5" stroke-dasharray="4 4"/>

    <!-- Hub: Oakland -->
    <circle cx="70" cy="200" r="44" fill="url(#glow)"/>
    <circle cx="70" cy="200" r="9" fill="#FFD400" stroke="#0a0a0a" stroke-width="2">
      <animate attributeName="r" values="7;11;7" dur="2s" repeatCount="indefinite"/>
    </circle>
    <circle cx="70" cy="200" r="14" fill="none" stroke="#E8B800" stroke-width="1.5" opacity=".7">
      <animate attributeName="r" values="10;30;10" dur="2s" repeatCount="indefinite"/>
      <animate attributeName="opacity" values=".9;0;.9" dur="2s" repeatCount="indefinite"/>
    </circle>

    <!-- Destination dots -->
    <g fill="#0a0a0a">
      <circle cx="180" cy="180" r="3.5"/>
      <circle cx="240" cy="220" r="3.5"/>
      <circle cx="290" cy="170" r="3.5"/>
      <circle cx="350" cy="200" r="3.5"/>
      <circle cx="400" cy="240" r="3.5"/>
      <circle cx="430" cy="170" r="3.5"/>
      <circle cx="200" cy="120" r="3.5"/>
    </g>

    <!-- Connection lines, animated -->
    <g stroke="#0a0a0a" stroke-width="1" fill="none" opacity=".35">
      <path d="M70 200 Q 130 150 180 180" stroke-dasharray="200" stroke-dashoffset="200">
        <animate attributeName="stroke-dashoffset" from="200" to="0" dur="3s" repeatCount="indefinite"/>
      </path>
      <path d="M70 200 Q 160 250 240 220" stroke-dasharray="200" stroke-dashoffset="200">
        <animate attributeName="stroke-dashoffset" from="200" to="0" dur="3.5s" repeatCount="indefinite"/>
      </path>
      <path d="M70 200 Q 180 130 290 170" stroke-dasharray="280" stroke-dashoffset="280">
        <animate attributeName="stroke-dashoffset" from="280" to="0" dur="4s" repeatCount="indefinite"/>
      </path>
      <path d="M70 200 Q 220 220 350 200" stroke-dasharray="320" stroke-dashoffset="320">
        <animate attributeName="stroke-dashoffset" from="320" to="0" dur="4.5s" repeatCount="indefinite"/>
      </path>
      <path d="M70 200 Q 250 270 400 240" stroke-dasharray="380" stroke-dashoffset="380">
        <animate attributeName="stroke-dashoffset" from="380" to="0" dur="5s" repeatCount="indefinite"/>
      </path>
      <path d="M70 200 Q 280 150 430 170" stroke-dasharray="400" stroke-dashoffset="400">
        <animate attributeName="stroke-dashoffset" from="400" to="0" dur="5.5s" repeatCount="indefinite"/>
      </path>
    </g>

    <!-- Label -->
    <text x="70" y="252" fill="#0a0a0a" font-family="JetBrains Mono, monospace" font-size="10" font-weight="600" text-anchor="middle" letter-spacing="2">OAKLAND HQ</text>
    <text x="450" y="320" fill="#9a9a94" font-family="JetBrains Mono, monospace" font-size="9" text-anchor="end" letter-spacing="1.5">// LOWER 48</text>
  </svg>`;
}

function yardSVG(){
  return `
  <svg viewBox="0 0 400 240" xmlns="http://www.w3.org/2000/svg">
    <!-- Roads -->
    <path d="M0 130 H400" stroke="#0a0a0a" stroke-width="22" opacity=".85"/>
    <path d="M0 130 H400" stroke="#FFD400" stroke-width="1.5" stroke-dasharray="10 10"/>
    <path d="M260 0 V240" stroke="#0a0a0a" stroke-width="18" opacity=".85"/>

    <!-- Yard area -->
    <rect x="40" y="50" width="180" height="60" fill="none" stroke="#bcbab0" stroke-width="1.2"/>
    <text x="50" y="44" fill="#5a5a5a" font-family="JetBrains Mono, monospace" font-size="9" font-weight="600" letter-spacing="1.5">// YARD</text>

    <!-- Containers -->
    <g>
      <rect x="50" y="58" width="36" height="14" fill="#FFD400" stroke="#0a0a0a" stroke-width=".5"/>
      <rect x="50" y="76" width="36" height="14" fill="#0a0a0a"/>
      <rect x="92" y="58" width="36" height="14" fill="#0a0a0a"/>
      <rect x="92" y="76" width="36" height="14" fill="#FFD400" stroke="#0a0a0a" stroke-width=".5"/>
      <rect x="134" y="58" width="36" height="14" fill="#FFD400" stroke="#0a0a0a" stroke-width=".5"/>
      <rect x="134" y="76" width="36" height="14" fill="#FFD400" stroke="#0a0a0a" stroke-width=".5"/>
      <rect x="176" y="58" width="36" height="14" fill="#0a0a0a"/>
    </g>

    <!-- Truck moving -->
    <g>
      <rect x="0" y="120" width="50" height="20" fill="#FFD400" stroke="#0a0a0a" stroke-width="1">
        <animate attributeName="x" from="-60" to="420" dur="6s" repeatCount="indefinite"/>
      </rect>
      <rect x="50" y="124" width="14" height="16" fill="#0a0a0a">
        <animate attributeName="x" from="-10" to="430" dur="6s" repeatCount="indefinite"/>
      </rect>
    </g>

    <!-- Building -->
    <g>
      <rect x="290" y="160" width="80" height="60" fill="#fafaf7" stroke="#0a0a0a" stroke-width="1.5"/>
      <rect x="290" y="160" width="80" height="14" fill="#0a0a0a"/>
      <rect x="305" y="186" width="14" height="14" fill="#FFD400" opacity=".7"/>
      <rect x="328" y="186" width="14" height="14" fill="#FFD400" opacity=".4"/>
      <rect x="350" y="186" width="14" height="14" fill="#FFD400" opacity=".7"/>
      <text x="296" y="171" fill="#FFD400" font-family="Fraunces, Georgia, serif" font-style="italic" font-weight="600" font-size="11" letter-spacing="0">ERA HQ</text>
    </g>

    <!-- Pin -->
    <circle cx="60" cy="65" r="10" fill="none" stroke="#E8B800" stroke-width="1.5" opacity=".6">
      <animate attributeName="r" values="8;18;8" dur="2.5s" repeatCount="indefinite"/>
      <animate attributeName="opacity" values=".8;0;.8" dur="2.5s" repeatCount="indefinite"/>
    </circle>

    <text x="395" y="232" text-anchor="end" fill="#9a9a94" font-family="JetBrains Mono, monospace" font-size="9" font-weight="500" letter-spacing="1.5">37.7°N · 122.2°W</text>
  </svg>`;
}

/* ====================== ROUTER ====================== */
const routes = {
  '/': tpl.home,
  '/services': tpl.services,
  '/fleet': tpl.fleet,
  '/contact': tpl.contact,
};

const app = document.getElementById('app');
const curtain = document.querySelector('.curtain');

let isFirst = true;
async function render(){
  const path = location.hash.replace('#','') || '/';
  const fn = routes[path] || tpl.home;

  if(!isFirst){
    curtain.classList.remove('out');
    curtain.classList.add('in');
    await wait(420);
  }

  app.innerHTML = fn();
  window.scrollTo({top:0, behavior:'instant'});
  setActiveNav(path);
  initRevealObserver();
  initFormHandler();

  if(!isFirst){
    curtain.classList.remove('in');
    curtain.classList.add('out');
    setTimeout(() => curtain.classList.remove('out'), 600);
  }
  isFirst = false;
}

function wait(ms){return new Promise(r => setTimeout(r, ms))}

function setActiveNav(path){
  document.querySelectorAll('.nav-links a').forEach(a => {
    const target = a.getAttribute('href').replace('#','');
    a.classList.toggle('active', target === path);
  });
}

window.addEventListener('hashchange', render);

/* SPA link behavior + close mobile menu */
document.addEventListener('click', e => {
  const link = e.target.closest('[data-link]');
  if(link){
    document.querySelector('.nav').classList.remove('open');
  }
});

/* Mobile toggle */
document.querySelector('.nav-toggle').addEventListener('click', () => {
  document.querySelector('.nav').classList.toggle('open');
});

/* Scrolled nav state */
window.addEventListener('scroll', () => {
  const nav = document.querySelector('.nav');
  nav.classList.toggle('scrolled', window.scrollY > 24);
}, {passive:true});

/* ====================== REVEAL ON SCROLL ====================== */
let observer;
function initRevealObserver(){
  if(observer) observer.disconnect();
  observer = new IntersectionObserver(entries => {
    entries.forEach(e => {
      if(e.isIntersecting){
        e.target.classList.add('in');
        observer.unobserve(e.target);
      }
    });
  }, {threshold:.12, rootMargin:'0px 0px -60px 0px'});

  document.querySelectorAll('.reveal, .reveal-stagger').forEach(el => observer.observe(el));
}

/* ====================== FORM ====================== */
function initFormHandler(){
  const form = document.getElementById('quoteForm');
  if(!form) return;
  form.addEventListener('submit', e => {
    e.preventDefault();
    const btn = form.querySelector('button');
    const orig = btn.innerHTML;
    btn.innerHTML = '<span>Sent to dispatch ✓</span>';
    btn.style.pointerEvents = 'none';
    setTimeout(() => {
      btn.innerHTML = orig;
      btn.style.pointerEvents = '';
      form.reset();
    }, 2400);
  });
}

/* ====================== INIT ====================== */
document.getElementById('year').textContent = new Date().getFullYear();
render();
