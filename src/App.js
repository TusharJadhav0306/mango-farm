import React, {useState} from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import AboutUs from './components/AboutUs';
import MangoVarieties from './components/MangoVarieties';
import Gallery from './components/Gallery';
import SponsorUs from './components/SponsorUs';
import ContactUs from './components/ContactUs';

function App() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (<div className="App">
        <Navbar isMenuOpen={isMenuOpen}
            toggleMenu={toggleMenu}/>
        <Hero/>
        <AboutUs/>
        <MangoVarieties/>
        <Gallery/>
        <SponsorUs/>
        <ContactUs/>
    </div>);
}

export default App;
