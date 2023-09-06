'use client'

import axios from "axios";
import HandleEvent from "./components/handleEvent";
import { useEffect, useState } from "react";

const EventsPage = () => {

  const [events, setEvents] = useState([])

  useEffect(() => {
    (async () => {
      try {
        let { data } = await axios.get(process.env.NEXT_PUBLIC_URL + "/api/events");
        data = data.slice(0, 10)
        setEvents([...data])
      } catch (error) {
        console.log(error)
      }
    })()
  }, [])

  function handleStatus(status, id) {
    const getEvent = events.find(event => event.id === id)
    getEvent.active = status
    const filteredEvents = events.filter((event) => event.id !== id)
    setEvents([...filteredEvents, getEvent])
  }

  return (
    <div className="flex flex-row h-full">
     
        <div key={2838123} className="w-[50%] flex flex-col ">
          {events?.filter((event) => event.active === false).map((event, index) => (
            <div
              key={index}
              className="flex flex-row h-15 w-full  justify-between gap-2 border-2 border-blue-500 "
            >
              <p className="text-sm">{event.event_name}</p>
              
              <HandleEvent eventStatus={event.active} eventId={event.id} handleStatus={handleStatus} />
            </div>
          ))}
        </div>
        

   
        <div key={2838} className="flex flex-col  w-[50%]">
          {events?.filter((event) => event.active === true).map((event, index) => (
            <div
              key={index}
              className="flex flex-row h-15 w-full  justify-between gap-2 border-2 border-blue-500 "
            >
              <p className="text-sm">{event.event_name}</p>
            
              <HandleEvent eventStatus={event?.active} eventId={event?.id} handleStatus={handleStatus} />
            </div>
          ))}
        </div>
      
     
    </div>
  );
};

export default EventsPage;
