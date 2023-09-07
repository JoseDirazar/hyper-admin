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
    const updatedEvents = events.map((event) => {
      if (event.id === id) {
        return { ...event, active: status };
      }
      return event;
    });
  
    setEvents(updatedEvents);
  }
  return (
    <div className="flex flex-row h-full m-5">
     
        <div key={2838123} className="w-[50%] flex flex-col  m-5 border-2 p-5">
          {events?.filter((event) => event.active === false).map((event,  index = 8123478) => (
            <div
              key={index}
              className="flex flex-row h-15 w-full m-2 justify-between border-2 border-blue-500 "
            >
              <p className="text-sm">{event.event_name}</p>
              
              <HandleEvent eventStatus={event.active} eventId={event.id} handleStatus={handleStatus} />
            </div>
          ))}
        </div>
        

   
        <div key={2838} className="flex flex-col  w-[50%] m-5 border-2 p-5">
          {events?.filter((event) => event.active === true).map((event, index) => (
            <div
              key={index}
              className="flex flex-row h-15 w-full m-2 justify-between border-2 border-slate-500 "
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
