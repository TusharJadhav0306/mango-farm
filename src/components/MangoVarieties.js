import React from 'react';
import './MangoVarieties.css';

const MangoVarieties = () => {
  const mangoTypes = [
    {
      name: "Alphonso",
      description: "The King of Mangoes - sweet, aromatic, and golden yellow",
      harvestTime: "April - June",
      emoji: "👑"
    },
    {
      name: "Ratna",
      description: "Medium-sized, sweet and tangy with a unique flavor",
      harvestTime: "May - July",
      emoji: "🍊"
    },
    {
      name: "Kesar",
      description: "Saffron-colored flesh with rich, sweet taste",
      harvestTime: "June - August",
      emoji: "🟡"
    },
    {
      name: "Langra",
      description: "Green-skinned with sweet, fiberless flesh",
      harvestTime: "June - August",
      emoji: "🥭"
    },
    {
      name: "Chausa",
      description: "Late season variety, very sweet and juicy",
      harvestTime: "July - September",
      emoji: "🍯"
    },
    {
      name: "Totapuri",
      description: "Tangy and sour, perfect for pickles and chutneys",
      harvestTime: "May - July",
      emoji: "🍋"
    }
  ];

  return (
    <section id="varieties" className="mango-varieties">
      <div className="container">
        <h2 className="section-title">Our Mango Varieties</h2>
        <p className="section-subtitle">
          Discover the diverse flavors and textures of our carefully cultivated mango varieties
        </p>
        
        <div className="varieties-grid">
          {mangoTypes.map((mango, index) => (
            <div key={index} className="variety-card">
              <div className="variety-emoji">{mango.emoji}</div>
              <h3 className="variety-name">{mango.name}</h3>
              <p className="variety-description">{mango.description}</p>
              <div className="harvest-time">
                <span className="harvest-label">Harvest Time:</span>
                <span className="harvest-date">{mango.harvestTime}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MangoVarieties;
