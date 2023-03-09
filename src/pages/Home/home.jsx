import React from 'react';

import { Banner, Cards } from '../../components';
import { CARDS_CONTENT } from '../../data/cardsContent';

import './home.scss';

export function Home() {
  return (
    <main>
      <Banner />

      <section className="cards-container">
        <h2 className="sr-only">Features</h2>

        {CARDS_CONTENT.map(({ icon, altText, title, text }, index) => (
          <Cards
            key={`picto-card-${index}`}
            icon={icon}
            altText={altText}
            title={title}
            text={text}
          />
        ))}
      </section>
    </main>
  );
}
