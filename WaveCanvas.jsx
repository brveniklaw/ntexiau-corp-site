import styles from './AppStore.module.css'
import briefConsiliarLogo from '../../assets/logos/briefconsiliar.png'
import voicesLogo from '../../assets/logos/voices-across-history.png'

const platforms = [
  {
    tag: 'Legal Information',
    name: 'BriefConsiliar',
    logo: briefConsiliarLogo,
    description: 'The Consiliar Suite — AI-powered legal information tools for businesses, landlords, and professionals.',
    status: 'building',
    statusLabel: 'Building',
    action: { label: 'Notify Me When Live', type: 'notify', href: 'https://www.briefconsiliar.com' },
    featured: true,
  },
  {
    tag: 'Civic Education',
    name: 'Voices Across History™',
    logo: voicesLogo,
    description: "AI-powered conversations with history's most important figures — Founders, Philosophers, Inventors.",
    status: 'building',
    statusLabel: 'Building',
    action: { label: 'Notify Me When Live', type: 'notify', href: '#' },
    featured: true,
  },
  {
    tag: 'Community',
    name: 'VictoryRevConnect',
    description: 'Multi-vertical enthusiast platform for automotive, motorcycle, boat, EV, golf cart and beyond — powered by AI and community.',
    status: 'live',
    statusLabel: 'Live',
    action: { label: 'Launch Platform →', type: 'launch', href: 'https://www.victoryrevconnect.com' },
  },
  {
    tag: 'Learning',
    name: 'AI for Everyone in 30 Days',
    description: 'A practical program to build genuine AI fluency — designed for people, not just engineers.',
    status: 'live',
    statusLabel: 'Live',
    action: { label: 'Launch Program →', type: 'launch', href: 'https://brveniklaw.github.io/ai-for-everyone' },
  },
  {
    tag: 'Life Coaching',
    name: "Victoria's Compus",
    description: 'AI coaching agents for personal direction, life design, and purposeful growth.',
    status: 'soon',
    statusLabel: 'Coming Soon',
    action: { label: 'Join Waitlist', type: 'waitlist', href: '#' },
  },
  {
    tag: 'Workforce',
    name: 'Agentic Workforce Intelligence',
    description: 'BizAgent, CandAgent, EduAgent, MatchAgent — connecting talent and opportunity in the AI economy.',
    status: 'soon',
    statusLabel: 'Coming Soon',
    action: { label: 'Join Waitlist', type: 'waitlist', href: '#' },
  },
  {
    tag: 'Medical',
    name: 'Health & Wellness Platform',
    description: 'AI-native tools to help individuals navigate healthcare decisions and medical literacy with confidence.',
    status: 'soon',
    statusLabel: 'Coming Soon',
    action: { label: 'Join Waitlist', type: 'waitlist', href: '#' },
  },
]

export default function AppStore() {
  return (
    <section className={styles.platforms} aria-label="IntexiaU App Store" id="platforms">
      <div className={styles.sectionHead}>
        <div className="eyebrow">The IntexiaU App Store</div>
        <h2>Explore Our Platforms</h2>
      </div>

      <div className={styles.grid}>
        {platforms.map((p) => {
          const isExternal = p.action.href.startsWith('http')
          return (
            <div
              key={p.name}
              className={`${styles.tile} ${p.featured ? styles.featured : ''}`}
            >
              <span className={styles.tag}>{p.tag}</span>

              {p.logo && (
                <img src={p.logo} alt={p.name} className={styles.logo} />
              )}

              <h4>{p.name}</h4>
              <p>{p.description}</p>

              <span className={`${styles.status} ${styles[p.status]}`}>
                {p.statusLabel}
              </span>

              <a
                href={p.action.href}
                target={isExternal ? '_blank' : undefined}
                rel={isExternal ? 'noopener noreferrer' : undefined}
                className={`${styles.action} ${styles[p.action.type]}`}
              >
                {p.action.label}
              </a>
            </div>
          )
        })}
      </div>
    </section>
  )
}
