import React from 'react';
import '../styles/about.css'
import { Container } from 'reactstrap';

const AboutPage = () => {
    return (
        <Container>


        
        <div className="about-page">
            <div className="company-intro">
                <h2>Welcome to Adventure Expeditions</h2>
                <p>Welcome to Adventure Expeditions, where every journey becomes an unforgettable adventure. We specialize in crafting immersive travel experiences that ignite the spirit of exploration and discovery. With our expert team and dedication to excellence, we ensure every trip is tailored to your desires, whether it's trekking through rugged landscapes, diving into vibrant cultures, or indulging in luxury escapes. Our commitment to sustainability and responsible tourism means you can explore the world with peace of mind, knowing you're leaving a positive impact. Join us as we embark on thrilling expeditions and create memories that last a lifetime.</p>
            </div>
            <div className="mission-values">
                <h3>Our Mission</h3>
                <p>Our mission at Adventure Expeditions is to ignite the spirit of exploration within every traveler, guiding them towards immersive experiences that transcend boundaries. We are dedicated to crafting journeys that not only satisfy wanderlust but also foster a deep appreciation for diverse cultures, natural wonders, and responsible travel practices. By curating personalized itineraries and delivering unparalleled service, we aim to create lasting memories that inspire and empower individuals to embrace adventure with open hearts and curious minds. With each expedition, we strive to leave a positive impact on the destinations we visit, ensuring a legacy of sustainability and respect for our planet.</p>
               
            </div>

            <div className="expertise-services">
                <h3>Our Expertise</h3>
                <p>
                    Our expertise lies in crafting personalized travel experiences tailored to your interests and desires. With over a decade of experience in the industry, we're passionate about curating journeys that go beyond the ordinary, offering unique adventures, cultural immersions, and luxurious escapes. Our team of dedicated professionals is committed to ensuring every aspect of your trip is seamless and unforgettable. From adventurous expeditions to serene retreats, we have the knowledge and resources to make your dream vacation a reality. Let us guide you through breathtaking landscapes, vibrant cultures, and unforgettable experiences, creating memories that will last a lifetime.</p>
               
            </div>

            <div className='our-values'>
            <h3>Services We Offer</h3>
                <ul>
                    <li>Guided Tours</li>
                    <li>Customized Itineraries</li>
                    <li>Transportation & Accommodation</li>
                    <li>Travel Insurance</li>
                </ul>
            </div>

            <div className='our-values'>
            <h3>Our Values</h3>
                <ul>
                    <li>Customer Satisfaction</li>
                    <li>Sustainability</li>
                    <li>Adventure</li>
                    <li>Cultural Respect</li>
                </ul>
            </div>
           
            <div className="tour-types">
                <h3>Types of Tours</h3>
                <p>Whether you're seeking adrenaline-pumping adventures, immersive cultural experiences, or luxurious getaways, we have a tour for you:</p>
                <ul>
                    <li>Incentive Tours</li>
                    <li>Family Tours</li>
                    <li>Solo Safaris</li>
                    <li>Adventures Tours</li>
                   
                </ul>
            </div>

        </div>
        </Container>
    );
};

export default AboutPage;
