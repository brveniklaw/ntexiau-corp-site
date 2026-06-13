import styles from './Nav.module.css'

export default function Nav() {
  const scrollTo = (id) => (e) => {
    e.preventDefault()
    const el = document.getElementById(id)
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <nav className={styles.nav}>
      <div className={styles.logoWordmark}>
        <span className={styles.logoMain}>IntexiaU</span>
        <span className={styles.logoCorp}>Corporation</span>
      </div>
      <ul>
        <li><a href="#institute" onClick={scrollTo('institute')}>Institute</a></li>
        <li><a href="#platforms" onClick={scrollTo('platforms')}>Platforms</a></li>
        <li><a href="#media" onClick={scrollTo('media')}>Media</a></li>
        <li><a href="#investors" onClick={scrollTo('investors')}>Investors</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#platforms" onClick={scrollTo('platforms')} className={styles.navCta}>Explore</a></li>
      </ul>
    </nav>
  )
}
