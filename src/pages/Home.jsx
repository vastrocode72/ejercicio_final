import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Shuffle, CheckCircle, Zap } from 'lucide-react';
import FeatureCard from '../components/FeatureCard';
import '../styles/Home.css';

const FEATURES = [
  {
    icon: Shuffle,
    title: 'Diseño Único',
    description: 'Piezas exclusivas con estética urbana y minimalista',
  },
  {
    icon: CheckCircle,
    title: 'Calidad Premium',
    description: 'Materiales de alta calidad para máxima durabilidad',
  },
  {
    icon: Zap,
    title: 'Envío Rápido',
    description: 'Entrega express en 24-48 horas',
  },
];

function Home() {
  const navigate = useNavigate();

  return (
    <main>
      {/* HERO */}
      <section className="hero">
        <div className="hero__content">
          <h1 className="hero__title">
            Estilo Urbano
            <span className="hero__title-accent">Redefinido</span>
          </h1>
          <p className="hero__subtitle">
            Descubre nuestra colección exclusiva de ropa urbana minimalista
          </p>
          <button
            className="hero__cta"
            onClick={() => navigate('/productos')}
          >
            Explorar Colección
          </button>
        </div>
      </section>

  
      <section className="features">
        <div className="features__grid">
          {FEATURES.map((f) => (
            <FeatureCard
              key={f.title}
              icon={f.icon}
              title={f.title}
              description={f.description}
            />
          ))}
        </div>
      </section>
    </main>
  );
}

export default Home;
