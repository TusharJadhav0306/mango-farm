import React from 'react';
import './Gallery.css';

const Gallery = () => {
    const galleryImages = [
        {
            id: 1,
            title: "Mango Orchard",
            description: "Our lush mango trees in full bloom",
            emoji: "🌳"
        },
        {
            id: 2,
            title: "Harvest Time",
            description: "Fresh mangoes ready for picking",
            emoji: "🥭"
        },
        {
            id: 3,
            title: "Farm Workers",
            description: "Our dedicated team during harvest season",
            emoji: "👨‍🌾"
        },
        {
            id: 4,
            title: "Organic Soil",
            description: "Rich, natural soil that nourishes our trees",
            emoji: "🌱"
        }, {
            id: 5,
            title: "Sunset View",
            description: "Beautiful sunset over our mango farm",
            emoji: "🌅"
        }, {
            id: 6,
            title: "Fresh Produce",
            description: "Basket of freshly harvested mangoes",
            emoji: "🧺"
        }
    ];

    return (<section id="gallery" className="gallery">
        <div className="container">
            <h2 className="section-title">Farm Gallery</h2>
            <p className="section-subtitle">
                Take a visual journey through our beautiful mango farm
            </p>

            <div className="gallery-grid"> {
                galleryImages.map((image) => (<div key={
                        image.id
                    }
                    className="gallery-item">
                    <div className="image-placeholder">
                        <span className="gallery-emoji"> {
                            image.emoji
                        }</span>
                    </div>
                    <div className="image-info">
                        <h3> {
                            image.title
                        }</h3>
                        <p> {
                            image.description
                        }</p>
                    </div>
                </div>))
            } </div>
        </div>
    </section>);
};

export default Gallery;
