.empathyBand {
  padding: 80px 60px;
  position: relative;
  z-index: 1;
  text-align: center;
}

.rotateWrap {
  min-height: 80px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 40px;
  position: relative;
}

.headline {
  font-family: 'Playfair Display', serif;
  font-size: clamp(22px, 3.5vw, 38px);
  font-weight: 400;
  line-height: 1.35;
  color: var(--text);
  max-width: 780px;
  opacity: 0;
  transform: translateY(10px);
  transition: opacity 0.7s ease, transform 0.7s ease;
  position: absolute;
}
.headline.visible {
  opacity: 1;
  transform: translateY(0);
}
.headline em {
  color: var(--blue);
  font-style: italic;
}

.body {
  font-size: 17px;
  line-height: 1.85;
  color: var(--muted);
  max-width: 640px;
  margin: 0 auto 48px;
  font-weight: 300;
}
.body strong {
  color: var(--text);
  font-weight: 500;
}

.tags {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 10px;
  margin-bottom: 48px;
}
.tag {
  padding: 10px 20px;
  background: rgba(255,255,255,0.65);
  backdrop-filter: blur(8px);
  border: 1px solid rgba(42,107,194,0.15);
  border-radius: 30px;
  font-size: 12px;
  letter-spacing: 1px;
  color: var(--blue);
  font-weight: 500;
  transition: all 0.2s;
  cursor: default;
}
.tag:hover {
  background: rgba(42,107,194,0.08);
  border-color: rgba(42,107,194,0.35);
  transform: translateY(-1px);
}

@media (max-width: 768px) {
  .empathyBand { padding: 60px 20px; }
  .body { font-size: 15px; }
}
