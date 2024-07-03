import React, { useState, useEffect } from 'react';
import './EventPageComponent.css';

import sciencefair from '../../assets/images/science-fair.webp'
import art from '../../assets/images/art.jpg'
import music from '../../assets/images/music.jpg'
import sports from '../../assets/images/sports.jpg'
import cultural from '../../assets/images/cultural.jpg'

const events = [
  {
    title: 'Science Fair',
    description: 'A showcase of the latest scientific discoveries and projects.',
    image: sciencefair
  },
  {
    title: 'Music Fest',
    description: 'A weekend filled with music from top bands and artists.',
    image: music
  },
  {
    title: 'Sports Meet',
    description: 'A weekend full of various sports competitions and activities.',
    image: sports
  },
  {
    title: 'Art Exhibition',
    description: 'Showcase of art and creative works by students.',
    image: art
  },
  {
    title: 'Cultural Fest',
    description: 'A celebration of diverse cultures with performances, food, and art.',
    image: cultural
  },
];


const EventPageComponent = () => {
  const [currentEvent, setCurrentEvent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentEvent((prevEvent) => (prevEvent + 1) % events.length);
    }, 3000); // Change every 3 seconds
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="event-page">
      <h1>Events</h1>
      <div className="event-card">
        <img src={events[currentEvent].image} alt={events[currentEvent].title} />
        <h2>{events[currentEvent].title}</h2>
        <p>{events[currentEvent].description}</p>
      </div>
    </div>
  );
};

export default EventPageComponent;
