import styles from './Footer.module.css'

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerWordmark}>
        <span className={styles.footerMain}>IntexiaU</span>
        <span className={styles.footerCorp}>Corp</span>
      </div>
      <div>© 2026 IntexiaU Corp · Florida, USA · All Rights Reserved</div>
      <div className={styles.links}>
        <a href="#institute">Institute</a>
        <a href="#platforms">Platforms</a>
        <a href="#media">Media</a>
        <a href="#about">Privacy</a>
        <a href="mailto:investors@intexiaU.com">Contact</a>
      </div>
    </footer>
  )
}
