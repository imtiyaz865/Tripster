import {
  tripMeta,
  accommodation,
  trains,
  localTransport,
  days,
  budget,
  quickFacts,
} from './data/tripData';
import './App.css';

const DAY_COLORS = ['violet', 'pink', 'cyan', 'coral'];
const FACT_ICONS = ['👥', '📅', '🏡', '💰'];
const NAV_ITEMS = [
  { id: 'plan', label: 'Plan' },
  { id: 'stay', label: 'Stay' },
  { id: 'trains', label: 'Trains' },
  { id: 'budget', label: 'Budget' },
];

const TYPE_COLORS = {
  train: 'violet',
  arrival: 'cyan',
  cab: 'coral',
  stay: 'pink',
  food: 'lime',
  travel: 'cyan',
  event: 'pink',
};

function formatRupee(amount) {
  return `₹${amount.toLocaleString('en-IN')}`;
}

function SectionHeader({ id, number, title, subtitle }) {
  return (
    <div className="section-header" id={id}>
      <span className="section-number">{number}</span>
      <div>
        <h2 className="section-title">{title}</h2>
        {subtitle && <p className="section-subtitle">{subtitle}</p>}
      </div>
    </div>
  );
}

function App() {
  const budgetPercent = Math.round((budget.grandTotal / tripMeta.maxBudgetPerPerson) * 100);
  const buffer = tripMeta.maxBudgetPerPerson - budget.grandTotal;

  return (
    <div className="app">
      <nav className="top-nav">
        <span className="nav-logo">✈️ Trip</span>
        <div className="nav-links">
          {NAV_ITEMS.map((item) => (
            <a key={item.id} href={`#${item.id}`} className="nav-link">
              {item.label}
            </a>
          ))}
        </div>
      </nav>

      <header className="hero">
        <div className="hero-blob hero-blob-1" />
        <div className="hero-blob hero-blob-2" />
        <div className="hero-blob hero-blob-3" />

        <div className="hero-content">
          <div className="hero-badge">
            <span className="badge-dot" />
            Friends Trip 2026
          </div>
          <h1>
            <span className="hero-title-line">{tripMeta.title}</span>
          </h1>
          <p className="hero-dates">{tripMeta.dates}</p>

          <div className="hero-route-pill">
            <span>{tripMeta.origin}</span>
            <span className="route-arrow">→</span>
            <span>{tripMeta.destination}</span>
          </div>

          <div className="hero-stat">
            <span className="hero-stat-value">{formatRupee(tripMeta.maxBudgetPerPerson)}</span>
            <span className="hero-stat-label">max per person</span>
          </div>
        </div>
      </header>

      <section className="quick-facts">
        {quickFacts.map((fact, i) => (
          <div key={fact.label} className={`fact-card fact-${i}`}>
            <span className="fact-icon">{FACT_ICONS[i]}</span>
            <span className="fact-value">{fact.value}</span>
            <span className="fact-label">{fact.label}</span>
          </div>
        ))}
      </section>

      <section className="section">
        <SectionHeader
          id="plan"
          number="01"
          title="Day-by-Day Plan"
          subtitle="4 days of chaos, carefully scheduled"
        />
        <div className="days-grid">
          {days.map((day, i) => (
            <article
              key={day.date}
              className={`day-card day-${DAY_COLORS[i % DAY_COLORS.length]}`}
            >
              <div className="day-header">
                <div className="day-emoji-wrap">
                  <span className="day-emoji">{day.emoji}</span>
                </div>
                <div className="day-header-text">
                  <span className="day-label">{day.label}</span>
                  <h3>{day.title}</h3>
                  <span className="day-date">{day.date}</span>
                </div>
              </div>
              <ol className="timeline">
                {day.timeline.map((item, idx) => (
                  <li
                    key={idx}
                    className={`timeline-item type-${TYPE_COLORS[item.type] || 'violet'}`}
                  >
                    <div className="timeline-dot" />
                    <div className="timeline-content">
                      <div className="timeline-top">
                        <span className="timeline-time">{item.time}</span>
                        <span className="timeline-title">{item.title}</span>
                      </div>
                      <p className="timeline-detail">{item.detail}</p>
                    </div>
                  </li>
                ))}
              </ol>
            </article>
          ))}
        </div>
      </section>

      <section className="section two-col" id="stay">
        <div className="card stay-card">
          <div className="card-icon-header">
            <span className="card-icon">🏠</span>
            <h2>Where We&apos;re Staying</h2>
          </div>
          <div className="stay-details">
            {[
              ['Type', accommodation.type],
              ['Location', accommodation.location],
              ['Metro', accommodation.distanceFromMetro],
              ['Check-in', tripMeta.airbnbCheckIn],
              ['Check-out', tripMeta.airbnbCheckOut],
            ].map(([key, val]) => (
              <div key={key} className="stay-row">
                <span className="stay-key">{key}</span>
                <span className="stay-val">{val}</span>
              </div>
            ))}
            <div className="stay-row highlight">
              <span className="stay-key">Per Person</span>
              <span className="stay-val">
                {formatRupee(accommodation.perPerson)}
                <small>
                  {formatRupee(accommodation.totalCost)} ÷ {tripMeta.people}
                </small>
              </span>
            </div>
          </div>
          <a
            href={tripMeta.airbnbUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary"
          >
            View on Airbnb
            <span className="btn-arrow">→</span>
          </a>
        </div>

        <div className="card transport-card">
          <div className="card-icon-header">
            <span className="card-icon">🚇</span>
            <h2>Local Transport</h2>
          </div>
          <div className="transport-blocks">
            <div className="transport-chip chip-cyan">
              <span className="chip-label">Metro</span>
              <p>
                <strong>{localTransport.metro.route}</strong>
                <br />
                {localTransport.metro.stationsInBetween} stations ·{' '}
                {formatRupee(localTransport.metro.fareOneWay)} one way
              </p>
              <span className="chip-note">{localTransport.metro.venueDistance}</span>
            </div>
            <div className="transport-chip chip-coral">
              <span className="chip-label">Station → Airbnb</span>
              <p>
                {localTransport.stationToAirbnb.mode} ·{' '}
                <strong>{formatRupee(localTransport.stationToAirbnb.perPerson)}/person</strong>
              </p>
            </div>
            <div className="transport-chip chip-violet">
              <span className="chip-label">Daily Uber</span>
              <p>
                {formatRupee(localTransport.dailyUber.perPersonPerDay)}/person per day
              </p>
              <span className="chip-note">Event days · going + return</span>
            </div>
          </div>
        </div>
      </section>

      <section className="section" id="trains">
        <SectionHeader
          number="02"
          title="Train Details"
          subtitle="Book early, travel in style"
        />
        <div className="trains-grid">
          {trains.map((train, i) => (
            <article
              key={train.id}
              className={`train-card train-${i === 0 ? 'outbound' : 'return'}`}
            >
              <div className="train-top">
                <span className="train-badge">{train.day}</span>
                <span className="train-no">#{train.trainNo}</span>
              </div>
              <div className="train-route">
                <div className="station">
                  <span className="station-name">{train.from}</span>
                  <span className="station-time">{train.departure}</span>
                </div>
                <div className="train-line">
                  <span className="line-dot start" />
                  <span className="line-track" />
                  <span className="line-dot end" />
                </div>
                <div className="station station-end">
                  <span className="station-name">{train.to}</span>
                  <span className="station-time">{train.arrival}</span>
                </div>
              </div>
              <div className="train-footer">
                <span className="tag">{train.class}</span>
                <span className="train-cost">{formatRupee(train.costPerPerson)}</span>
              </div>
              <p className="train-note">{train.note}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section budget-section" id="budget">
        <SectionHeader
          number="03"
          title="Budget Breakdown"
          subtitle="Everything accounted for — no surprises"
        />

        <div className="budget-visual">
          <div className="budget-ring-wrap">
            <svg className="budget-ring" viewBox="0 0 120 120">
              <defs>
                <linearGradient id="ringGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#7c3aed" />
                  <stop offset="50%" stopColor="#ec4899" />
                  <stop offset="100%" stopColor="#f97316" />
                </linearGradient>
              </defs>
              <circle className="ring-bg" cx="60" cy="60" r="52" />
              <circle
                className="ring-fill"
                cx="60"
                cy="60"
                r="52"
                style={{ strokeDashoffset: 327 - (327 * budgetPercent) / 100 }}
              />
            </svg>
            <div className="ring-center">
              <span className="ring-percent">{budgetPercent}%</span>
              <span className="ring-label">of budget</span>
            </div>
          </div>
          <div className="budget-highlight">
            <span className="highlight-amount">{formatRupee(budget.grandTotal)}</span>
            <span className="highlight-text">estimated per person</span>
            <span className="highlight-buffer">
              {formatRupee(buffer)} buffer left
            </span>
          </div>
        </div>

        <div className="budget-grid">
          <div className="card budget-card budget-core">
            <h3>Core Expenses</h3>
            <ul className="budget-list">
              {budget.core.map((item) => (
                <li key={item.item}>
                  <span>{item.item}</span>
                  <span className="amount">{formatRupee(item.amount)}</span>
                </li>
              ))}
            </ul>
            <div className="budget-subtotal">
              <span>Subtotal</span>
              <span>{formatRupee(budget.coreTotal)}</span>
            </div>
          </div>

          <div className="card budget-card budget-travel">
            <h3>Local Travel</h3>
            <ul className="budget-list">
              {budget.additional.map((item) => (
                <li key={item.item}>
                  <span>{item.item}</span>
                  <span className="amount">{formatRupee(item.amount)}</span>
                </li>
              ))}
            </ul>
            <div className="budget-subtotal">
              <span>Subtotal</span>
              <span>{formatRupee(budget.additionalTotal)}</span>
            </div>
          </div>
        </div>

        <div className="budget-total-bar">
          <div className="total-item">
            <span className="total-label">Total Estimate</span>
            <span className="total-value">{formatRupee(budget.grandTotal)}</span>
          </div>
          <div className="total-divider" />
          <div className="total-item total-cap">
            <span className="total-label">Max Cap</span>
            <span className="total-value">{formatRupee(tripMeta.maxBudgetPerPerson)}</span>
          </div>
        </div>
      </section>

      <footer className="footer">
        <div className="footer-badge">Squad of 5</div>
        <p>Share this with the crew — let&apos;s make it happen!</p>
        <p className="footer-dates">{tripMeta.dates} · Bengaluru</p>
      </footer>
    </div>
  );
}

export default App;
