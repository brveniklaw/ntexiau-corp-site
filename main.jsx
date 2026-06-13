.investors {
  padding: 110px 60px;
  position: relative;
  z-index: 1;
  background: rgba(255,255,255,0.3);
  backdrop-filter: blur(8px);
  border-top: 1px solid rgba(255,255,255,0.7);
  border-bottom: 1px solid rgba(0,0,0,0.05);
}
.inner {
  max-width: 860px;
  margin: 0 auto;
  text-align: center;
}
.inner h2 {
  font-family: 'Playfair Display', serif;
  font-size: 40px;
  font-weight: 400;
  color: var(--text);
  margin-bottom: 24px;
  line-height: 1.3;
}
.lead {
  font-size: 18px;
  line-height: 1.8;
  color: var(--muted);
  font-weight: 300;
  max-width: 680px;
  margin: 0 auto 56px;
}
.lead em {
  font-style: italic;
  color: var(--text);
  font-weight: 400;
}

.opportunityGrid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1px;
  margin-bottom: 64px;
}
.oppCard {
  padding: 36px 28px;
  text-align: left;
  background: rgba(255,255,255,0.55);
  backdrop-filter: blur(12px);
  border: 1px solid rgba(255,255,255,0.85);
  position: relative;
  overflow: hidden;
  transition: all 0.3s;
}
.oppCard:hover {
  background: rgba(255,255,255,0.85);
  transform: translateY(-3px);
  box-shadow: 0 12px 40px rgba(0,0,0,0.08);
}
.oppCard::before {
  content: '';
  position: absolute;
  top: 0; left: 0; right: 0;
  height: 2px;
  background: linear-gradient(90deg, transparent, var(--blue), transparent);
}
.oppIcon {
  font-size: 26px;
  margin-bottom: 16px;
  display: block;
}
.oppCard h4 {
  font-family: 'Playfair Display', serif;
  font-size: 17px;
  font-weight: 400;
  color: var(--text);
  margin-bottom: 12px;
}
.oppCard p {
  font-size: 13px;
  line-height: 1.75;
  color: var(--muted);
  font-weight: 300;
}

.statement {
  background: rgba(42,107,194,0.04);
  border: 1px solid rgba(42,107,194,0.12);
  border-radius: 6px;
  padding: 48px 52px;
  margin-bottom: 52px;
  text-align: left;
  position: relative;
}
.statement::before {
  content: '\\201C';
  font-family: 'Playfair Display', serif;
  font-size: 80px;
  color: rgba(42,107,194,0.12);
  position: absolute;
  top: 10px;
  left: 24px;
  line-height: 1;
}
.statement p {
  font-family: 'Playfair Display', serif;
  font-size: 20px;
  line-height: 1.75;
  color: var(--text);
  font-weight: 400;
  font-style: italic;
  padding-left: 20px;
}
.attribution {
  font-family: 'Inter', sans-serif;
  font-size: 11px;
  letter-spacing: 2px;
  text-transform: uppercase;
  color: var(--blue);
  font-style: normal;
  font-weight: 500;
  margin-top: 20px;
  display: block;
  padding-left: 20px;
}

.contactWrap {
  background: rgba(255,255,255,0.65);
  backdrop-filter: blur(12px);
  border: 1px solid rgba(255,255,255,0.9);
  border-radius: 6px;
  padding: 48px 52px;
  text-align: center;
}
.contactWrap h3 {
  font-family: 'Playfair Display', serif;
  font-size: 26px;
  font-weight: 400;
  margin-bottom: 8px;
  color: var(--text);
}
.formSub {
  font-size: 14px;
  color: var(--muted);
  margin: 0 auto 40px;
  font-weight: 300;
  line-height: 1.6;
  max-width: 520px;
}
.note {
  font-size: 12px;
  color: var(--faint);
  margin-top: 16px;
  font-style: italic;
  line-height: 1.6;
}

@media (max-width: 768px) {
  .investors { padding: 70px 20px; }
  .inner h2 { font-size: 28px; }
  .lead { font-size: 15px; }
  .opportunityGrid { grid-template-columns: 1fr; gap: 2px; }
  .statement { padding: 36px 28px; }
  .statement p { font-size: 17px; }
  .contactWrap { padding: 36px 24px; }
}
