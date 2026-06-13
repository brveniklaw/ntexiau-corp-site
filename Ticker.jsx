import styles from './Pillars.module.css'
import instituteLogo from '../../assets/logos/intexiau-institute.png'

export default function Pillars() {
  const scrollTo = (id) => (e) => {
    e.preventDefault()
    const el = document.getElementById(id)
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section className={styles.pillars} aria-label="Three pillars" id="institute">
      <div className={styles.sectionHead}>
        <div className="eyebrow">Three Pillars</div>
        <h2>How We Operate</h2>
      </div>

      <div className={styles.pillarsGrid}>

        {/* Pillar 1 — Institute */}
        <div className={`${styles.pillar} ${styles.bluePillar}`}>
          <img
            src={instituteLogo}
            alt="IntexiaU Institute of Innovation Center"
            className={styles.pillarLogo}
          />
          <div className={styles.pillarSub}>Education &amp; Workforce</div>
          <h3>IntexiaU Institute &amp; Innovations</h3>
          <p>
            Developing individuals, professionals, and organizations to participate fully in the
            AI economy through outcome-driven learning and lifelong growth ecosystems.
          </p>
          <a href="#about" className={styles.pillarLink}>Visit the Institute →</a>
        </div>

        {/* Pillar 2 — Ventures */}
        <div className={`${styles.pillar} ${styles.purplePillar}`} id="platforms-anchor">
          <div className={styles.iconWrap}>⚙️</div>
          <div className={styles.pillarSub}>Platform Development</div>
          <h3>IntexiaU Ventures</h3>
          <p>
            AI-native platforms spanning legal, civic education, entrepreneurship, and
            professional development — each built to extend human capability, not replace it.
          </p>
          <a href="#platforms" className={styles.pillarLink} onClick={scrollTo('platforms')}>
            View All Ventures →
          </a>
        </div>

        {/* Pillar 3 — Brvenik Brief Media */}
        <div className={`${styles.pillar} ${styles.tealPillar}`}>
          <div className={styles.iconWrap}>📰</div>
          <div className={styles.pillarSub}>Brvenik Brief Media</div>
          <h3>The Brvenik Brief</h3>
          <p>Brvenik Brief Media is an AI-native media channel weaved with human experience and stories.</p>
          <p className={styles.tagline}>In Pursuit of Truth</p>
          <a
            href="https://www.brvenikbrief.com"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.pillarLink}
          >
            Read the Brief →
          </a>
        </div>

      </div>
    </section>
  )
}
