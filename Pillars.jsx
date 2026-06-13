import styles from './MediaBand.module.css'

export default function MediaBand() {
  return (
    <div className={styles.outer} id="media">
      <div className={styles.band}>
        <div>
          <div className="eyebrow" style={{ justifyContent: 'flex-start' }}>Brvenik Brief Media</div>
          <h3>The Brvenik Brief</h3>
          <p>Brvenik Brief Media is an AI-native media channel weaved with human experience and stories.</p>
          <p className={styles.tagline}>In Pursuit of Truth</p>
        </div>
        <a
          href="https://www.brvenikbrief.com"
          target="_blank"
          rel="noopener noreferrer"
          className={styles.mediaBtn}
        >
          Subscribe at BrvenikBrief.com →
        </a>
      </div>
    </div>
  )
}
