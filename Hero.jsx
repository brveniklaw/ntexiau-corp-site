import { useState, useEffect } from 'react'
import styles from './EmpathyBand.module.css'

const headlines = [
  <>You worked hard for that degree. <em>The entry-level job shouldn't be this hard to find.</em></>,
  <>If AI is changing everything, <em>you deserve to understand it — and benefit from it.</em></>,
  <>Your job search isn't a reflection of your worth. <em>The system is changing. You can change with it.</em></>,
  <>Parents: your children's future is not predetermined. <em>The right preparation opens every door.</em></>,
  <>You don't have to figure out the AI economy alone. <em>We built this for exactly where you are.</em></>,
]

const tags = [
  'Recently displaced worker',
  'New graduate',
  'Career changer',
  'Concerned parent',
  'Entrepreneur starting out',
  'Professional upskilling',
  'Anyone who feels left behind',
]

export default function EmpathyBand() {
  const [current, setCurrent] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % headlines.length)
    }, 3800)
    return () => clearInterval(interval)
  }, [])

  const scrollToWeave = (e) => {
    e.preventDefault()
    const el = document.getElementById('weave')
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section className={styles.empathyBand} aria-label="Who IntexiaU is for">
      <div className="eyebrow">IntexiaU Was Designed for You</div>

      <div className={styles.rotateWrap}>
        {headlines.map((headline, i) => (
          <p
            key={i}
            className={`${styles.headline} ${i === current ? styles.visible : ''}`}
          >
            {headline}
          </p>
        ))}
      </div>

      <p className={styles.body}>
        Whether you've lost a job, can't find your first one, feel left behind by a changing
        economy, or are simply watching the world shift and wondering where you fit —{' '}
        <strong>IntexiaU was built for this moment.</strong> Not to replace you. To equip you.
      </p>

      <div className={styles.tags}>
        {tags.map((tag) => (
          <div className={styles.tag} key={tag}>{tag}</div>
        ))}
      </div>

      <a href="#weave" className="empathy-cta" onClick={scrollToWeave}>
        Find Your Path →
      </a>
    </section>
  )
}
