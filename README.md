import styles from './Hero.module.css'

export default function Hero() {
  return (
    <section className={styles.hero} aria-label="Hero — IntexiaU Corporation">
      <div className={styles.heroWordmark}>
        <div className={styles.heroLogoMain}>IntexiaU</div>
        <div className={styles.heroLogoSub}>Corporation</div>
      </div>

      <div className="eyebrow">IntexiaU Corp &nbsp; Florida, USA</div>

      <h1 className={styles.heroHeadline}>
        You Have the Right to Be an <em>Author</em><br />of Your Own Economic Life
      </h1>

      <p className={styles.heroSub}>
        Building the platforms, programs, and media that weave AI and humanity toward an
        optimistic future of abundance — for everyone.
      </p>

      <div className={styles.routing}>
        <button className={styles.routeBtn}>I'm looking for work</button>
        <button className={styles.routeBtn}>I want to learn &amp; grow</button>
        <button className={styles.routeBtn}>I want to build</button>
        <button className={styles.routeBtn}>I'm an organization</button>
      </div>
    </section>
  )
}
