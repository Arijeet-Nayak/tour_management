import React from 'react'
import './eventplanning.css'
import incentiveimg from '../../assets/images/incentiveimg.webp'
import soloimg from '../../assets/images/soloimg.jpg'
import familyimg from '../../assets/images/familyimg.jpg'
import adventurimg from '../../assets/images/adventure.jpg'
import workshop from '../../assets/images/workshop.png'
import sports from '../../assets/images/sports.jpg'
import virtual from '../../assets/images/virtual.webp'
import donation from '../../assets/images/donation.jpeg'

import { Container } from 'reactstrap'
import { Link, useNavigate } from 'react-router-dom'
import Booking from '../Booking/Booking'



const EventPlanning = () => {
    const navigate = useNavigate();

    const dataObj = [
        {
            id: 1,
            title: "Weddings & Celebrations",
            description: "Weddings & Celebrations captures the joy and festivity of matrimonial events, highlighting traditions, ceremonies, and cultural customs. It showcases the beauty of love and unity through vivid storytelling, enchanting photos, and heartfelt moments that define these special occasions. ",
            imageUrl: incentiveimg,
            price:34

        },
        {
            id: 2,
            title: "Corporate & Professional",
            description: "It focuses on business culture, industry trends, and career development. It covers leadership insights, corporate events, and professional growth strategies, offering valuable resources for navigating the corporate world and achieving success in various professional arenas. ",
            imageUrl: soloimg,
            price:87

        },
        {
            id: 3,
            title: "Entertainment & Culture",
            description: "Entertainment & Culture explores the dynamic world of movies, music, art, and lifestyle. It delves into pop culture phenomena, celebrity news, and artistic trends, offering engaging content that celebrates creativity and keeps readers informed about the latest cultural happenings. ",
            imageUrl: familyimg,
            price:45

        },
        {
            id: 4,
            title: "Social & Networking",
            description: "Social & Networking highlights the power of connections, covering events, platforms, and strategies for building meaningful relationships. It offers insights into social dynamics, networking opportunities, and tips for personal and professional growth through effective communication and community engagement.",
            imageUrl: adventurimg,
            price:19

        },
        {
            id: 5,
            title: "Educational & Workshops",
            description: "Educational & Workshops focuses on learning opportunities and skill development through seminars, courses, and hands-on sessions. It covers a variety of topics, promoting lifelong learning and professional growth by providing insights into effective teaching methods and innovative educational practices.",
            imageUrl: workshop,
            price:43

        },
        {
            id: 6,
            title: "Sports & Recreation",
            description: "Sports & Recreation celebrates athleticism and leisure activities, covering a wide range of sports, fitness tips, and recreational pursuits. It highlights major events, athlete stories, and wellness advice, encouraging an active lifestyle and the enjoyment of physical activities.",
            imageUrl: sports,
            price:89

        },
        {
            id: 7,
            title: "Community & Charity",
            description: "Community & Charity showcases the spirit of giving and togetherness, highlighting local initiatives, volunteer efforts, and charitable events. It celebrates stories of compassion and community support, inspiring readers to contribute to social causes and make a positive impact.",
            imageUrl: donation,
            price:40

        },
        {
            id: 8,
            title: "Virtual & Online",
            description: "Virtual & Online explores the digital realm, covering virtual events, online communities, and digital innovations. It provides insights into the latest trends in virtual engagement, remote work, and online learning, highlighting the evolving landscape of our interconnected world",
            imageUrl: virtual,
            price:99

        },


    ]

    const navigateToTour = () => {
        // navigate('/tours')

    }
    const handleBookNow=(item)=>{
        // console.log(item)

    }




    return (
        <>
            <Container>



                <div className="event_planning_container">
                    <div className="background_image">
                        <h1>Plan Your Event</h1>

                    </div>
                    <div className='event_description'>
                        <h1>Event Planning</h1>
                        <span>Join us for an unforgettable evening under the stars! Our event, 'Starry Night Gala,' promises an enchanting atmosphere with live music, gourmet cuisine, and captivating performances. Held at the prestigious Moonlight Gardens, attendees will indulge in a blend of elegance and entertainment. From interactive art installations to celestial-themed cocktails, every detail is crafted to awe and inspire. Proceeds will benefit local arts initiatives, fostering creativity in our community. Don't miss this opportunity to shine bright and make a difference. Reserve your seat now for an experience that's sure to leave you starry-eyed.</span>

                    </div>


                    <div className='our_next_event'>
                        <h1>Your Event Might Be...</h1>
                        <div className='sub_our_next_event1'>


                            {
                                dataObj.map((item) => (
                                    <div className='sub_our_next_event' key={item.id} onClick={navigateToTour}>

                                        <img src={item.imageUrl} alt='incentive-img' />
                                        <h3>{item.title}</h3>
                                        <h4>{item.description}</h4>
                                        <div className="card__bottom w-100 d-flex align-items-center justify-content-between mt-3">
                                            <h5>${item.price}<span>/per person</span></h5>

                                            <button className="btn booking__btn" onClick={()=>handleBookNow(item)}>
                                                <Link >Book Now</Link>
                                            </button>
                                        </div>
                                    </div>

                                ))

                            }
                        </div>
                        {/* <Booking/> */}

                    </div>


                </div>
            </Container>
        </>
    )
}

export default EventPlanning
