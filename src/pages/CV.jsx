import './CV.css';

function CV() {
  return (
    <div className="cv-container">
      <h1>Mes CV</h1>

      <div className="cv-list">
        <a
          href="/cv-developpeuse-fatou.pdf"
          download
          className="cv-card"
        >
          <h2>CV Développeuse</h2>
          <p>Télécharger</p>
        </a>

        <a
          href="/cv-logistique-fatou.pdf"
          download
          className="cv-card"
        >
          <h2>CV Logistique</h2>
          <p>Télécharger</p>
        </a>
      </div>
    </div>
  );
}

export default CV;
