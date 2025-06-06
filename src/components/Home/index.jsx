import { useState, useEffect } from 'react';
import CardItem from '../CardItem';
import './style.css';

const Home = () => {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    geteventsData();
  }, []);

  const geteventsData = async () => {
    const url = `https://gg-backend-assignment.azurewebsites.net/api/Events?code=${import.meta.env.VITE_AZURE_CODE}&type=reco`;


    console.log(url)
    try {
      const response = await fetch(url);
      const jsonData = await response.json();
      console.log(jsonData)

      const formattedData = jsonData.events.map((event) => {
        const fileId = event.imgUrl.split("/d/")[1]?.split("/")[0];
        const imageUrl = `https://drive.google.com/thumbnail?id=${fileId}`;

        return {
          eventName: event.eventName,
          cityName: event.cityName,
          date: event.date,
          weather: event.weather,
          distanceKm: event.distanceKm,
          imageUrl: imageUrl,
        };
      });

      setEvents(formattedData);
    } catch (error) {
      console.error('Error fetching events:', error);
    }
  };

  return (
    <div className = "space-content">
    <div className="home-container">
  <div className="home-header">
    <h1 className="heading">Discovering Exciting Events Happening <br /> Near You - Stay Tuned for Updates!</h1>
    <p className="para">Dorem ipsum dolar sit amet, consectetur adipiscing elit. Nunc vulputate</p>
  </div>

  <div className="card-scroll-container">
    <ul className="unordered-list">
      {events.map((event) => (
        <CardItem key={event.eventName} events={event} />
      ))}
    </ul>
  </div>
</div>
<div className = "upcoming-events">
<h1 className = "upcoming-event-heading">Upcoming events &rarr;</h1>

  <div className="upcoming-event-scoller">
<ul className="unordered-lists">
      {events.map((event) => (
        <CardItem key={event.eventName} events={event} />
      ))}
    </ul>

</div>
</div>
</div>

   
  );
};

export default Home;

