import React from 'react';
import '../styles/FeatureCard.css';

function FeatureCard({ icon: Icon, title, description }) {
  return (
    <div className="feature-card">
      <div className="feature-card__icon-wrap">
        <Icon size={22} className="feature-card__icon" />
      </div>
      <h3 className="feature-card__title">{title}</h3>
      <p className="feature-card__desc">{description}</p>
    </div>
  );
}

export default FeatureCard;
