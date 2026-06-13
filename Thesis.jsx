.outer {
  background: rgba(255,255,255,0.5);
  backdrop-filter: blur(16px);
  border-top: 1px solid rgba(255,255,255,0.9);
  border-bottom: 1px solid rgba(0,0,0,0.05);
}
.band {
  padding: 64px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 48px;
  flex-wrap: wrap;
  max-width: 1100px;
  margin: 0 auto;
  position: relative;
  z-index: 1;
}
.band h3 {
  font-family: 'Playfair Display', serif;
  font-size: 26px;
  font-weight: 400;
  margin-bottom: 10px;
  color: var(--text);
}
.band p {
  font-size: 13px;
  color: var(--muted);
  max-width: 420px;
  line-height: 1.75;
  font-weight: 300;
}
.tagline {
  font-family: 'Playfair Display', serif;
  font-style: italic;
  font-size: 14px;
  color: var(--teal) !important;
  margin-top: 10px;
  letter-spacing: 1px;
}

.mediaBtn {
  padding: 14px 28px;
  border: 1px solid rgba(42,107,194,0.4);
  color: var(--blue);
  font-size: 11px;
  letter-spacing: 2px;
  text-transform: uppercase;
  cursor: pointer;
  white-space: nowrap;
  border-radius: 3px;
  background: rgba(255,255,255,0.6);
  font-weight: 500;
  text-decoration: none;
  transition: all 0.25s;
}
.mediaBtn:hover {
  background: rgba(42,107,194,0.08);
  box-shadow: 0 4px 20px rgba(42,107,194,0.15);
}

@media (max-width: 768px) {
  .band {
    padding: 44px 24px;
    flex-direction: column;
    gap: 28px;
    text-align: center;
  }
  .band h3 { font-size: 20px; }
  .band p { font-size: 13px; max-width: 100%; }
  .mediaBtn { width: 100%; text-align: center; }
}
