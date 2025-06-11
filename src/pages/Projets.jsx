import './Projets.css';

function Projets() {
  return (
    <div className="projects-container">
      <h1>Mes Projets</h1>

      <a href="#" className="project-card">
        <h2>Application de gestion VTC</h2>
        <p>Ce mini-projet simule une base de données pour une entreprise de VTC. Il permet de gérer les chauffeurs, clients et courses.</p>
        <ul>
          <li><strong>Technos :</strong> SQL, PostgreSQL</li>
          <li><strong>Fonctionnalités :</strong> Gestion des données, requêtes, statistiques</li>
        </ul>
      </a>
    </div>
  );
}

export default Projets;
