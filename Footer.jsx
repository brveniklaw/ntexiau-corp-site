.thesis {
  padding: 100px 60px;
  max-width: 860px;
  margin: 0 auto;
  text-align: center;
  position: relative;
  z-index: 1;
}
.thesis p {
  font-family: 'Playfair Display', serif;
  font-size: 26px;
  font-weight: 400;
  line-height: 1.65;
  color: #3a3228;
}
.thesis p strong {
  font-style: italic;
  font-weight: 400;
  background: linear-gradient(135deg, var(--blue), var(--purple));
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

@media (max-width: 768px) {
  .thesis { padding: 60px 24px; }
  .thesis p { font-size: 19px; }
}
