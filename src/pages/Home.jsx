import { Link } from 'react-router-dom';

function Home() {
  return (
    <div style={{ textAlign: 'center', marginTop: '60px', padding: '0 20px' }}>
      <img src="/fatou.jpg" alt="Fatou Diallo" style={{ width: '160px', height: '160px', borderRadius: '50%', objectFit: 'cover', marginBottom: '20px', border: '4px solid #0077cc' }} />
      <h1>Fatou Diallo</h1>
      <h2>Développeuse web en formation à l’école 42</h2>
      <p>Je conçois des projets web modernes, fonctionnels et accessibles.<br />Bienvenue dans mon univers !</p>
      <Link to="/projets" style={{ display: 'inline-block', marginTop: '20px', padding: '12px 24px', backgroundColor: '#0077cc', color: '#fff', textDecoration: 'none', borderRadius: '5px', fontWeight: 'bold' }}>Voir mes projets</Link>
    </div>
  );
}

export default Home;