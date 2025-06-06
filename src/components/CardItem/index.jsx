import React from 'react' 
import './style.css'

const CardItem = (props) => { 
    const {events} = props 
    const {eventName, cityName, date, weather, distanceKm, imageUrl} = events
  return (
    <li className="event-item">
  <div className="event-image-container">
    <img src={imageUrl} alt="Event" className="event-image" />
    <div className="event-details">
      <h2>{eventName}</h2>
      <p>{cityName}</p>
      <p>{date}</p>
      <p>{weather}</p>
      <p>{distanceKm} km away</p>
    </div>
  </div>
</li>

  
    
  )
}

export default CardItem 