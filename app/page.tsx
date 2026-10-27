import Image from 'next/image';

const product = 'Enterprise';

function ArrowIcon() {
  return <svg viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M5 12h13M13 6l6 6-6 6" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" /></svg>;
}

function GitHubIcon() {
  return <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M12 .9a11.1 11.1 0 0 0-3.51 21.63c.55.1.76-.24.76-.54v-1.9c-3.1.67-3.75-1.32-3.75-1.32-.5-1.29-1.23-1.63-1.23-1.63-1.01-.69.08-.68.08-.68 1.11.08 1.7 1.14 1.7 1.14.99 1.69 2.59 1.2 3.22.92.1-.72.39-1.2.7-1.48-2.47-.28-5.07-1.24-5.07-5.49 0-1.21.43-2.2 1.14-2.98-.12-.28-.5-1.41.1-2.94 0 0 .93-.3 3.05 1.14a10.6 10.6 0 0 1 5.55 0c2.12-1.44 3.05-1.14 3.05-1.14.6 1.53.22 2.66.11 2.94.71.78 1.13 1.77 1.13 2.98 0 4.26-2.6 5.2-5.08 5.48.4.35.75 1.02.75 2.06v2.9c0 .3.2.65.77.54A11.1 11.1 0 0 0 12 .9Z" /></svg>;
}

export default function Home() {
  return (
    <div className="site-shell">
      <header className="site-header">
        <a className="brand" href="https://coderats.club" aria-label="CodeRats — acessar o site">
          <Image src="/coderats-wordmark.svg" width={177} height={36} alt="CodeRats" priority />
        </a>
        <div className="header-product"><span className="header-dot" aria-hidden="true" />{product}</div>
      </header>

      <main className="hero">
        <div className="hero-copy">
          <div className="status"><span className="status-dot" aria-hidden="true" />UM NOVO CAPÍTULO <span className="status-divider" aria-hidden="true" /> EM BREVE</div>
          <h1>Em breve,<br />CodeRats <span>{product}.</span></h1>
          <p className="hero-description">Estamos preparando algo novo para você. Aguarde os próximos passos e acompanhe a comunidade CodeRats.</p>
          <div className="hero-actions">
            <a className="action action-primary" href="https://coderats.club">Conheça a CodeRats <ArrowIcon /></a>
            <a className="action action-secondary" href="https://github.com/coderats-hub/"><GitHubIcon /> Acompanhe no GitHub</a>
          </div>
          <div className="hero-note"><span className="note-line" aria-hidden="true" />Construindo os próximos passos, juntos.</div>
        </div>

        <div className="hero-art" role="img" aria-label="Ratinho da CodeRats preparando uma nova construção">
          <div className="art-glow" aria-hidden="true" />
          <div className="art-orbit art-orbit-outer" aria-hidden="true" />
          <div className="art-orbit art-orbit-inner" aria-hidden="true" />
          <Image className="mascot" src="/rato-construtor.png" width={1141} height={1280} alt="" priority sizes="(max-width: 760px) 90vw, 48vw" />
          <div className="art-caption"><span className="art-caption-line" />UMA NOVIDADE ESTÁ A CAMINHO</div>
        </div>
      </main>

      <footer className="site-footer"><span>© CodeRats</span><span>FEITO PARA CONSTRUIR JUNTO <span className="footer-star" aria-hidden="true">✳</span></span></footer>
    </div>
  );
}
