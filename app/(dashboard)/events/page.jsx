'use client'

import axios from "axios";
import HandleEvent from "./components/handleEvent";
import Image from "next/image";
import { useEffect, useState } from "react";


const EventsPage = () => {


  const [events, setEvents] = useState([])
  console.log(events)

  useEffect(() => {
    (async () => {
      try {
        let { data } = await axios.get("http://localhost:3000/api/events");
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
        <div className="w-[50%]">
        <div key={2838123} className="flex flex-row flex-wrap ">
          {events?.filter((event) => event.active === false).map((event, index) => (
            <div
              key={index}
              className="flex flex-col h-80 w-80 items-center justify-center gap-2 border-2 border-blue-500 "
            >
              <p className="text-sm">{event.event_name}</p>
              <Image
                className="w-auto h-auto"
                src={event.event_image}
                width={200}
                height={200}
                alt={event.event_name}
              />
              <HandleEvent eventStatus={event.active} eventId={event.id} handleStatus={handleStatus} />
            </div>
          ))}
        </div>
        </div>

        <div className="w-[50%]">
        <div key={2838123} className="flex flex-row flex-wrap ">
          {events?.filter((event) => event.active === true).map((event, index) => (
            <div
              key={index}
              className="flex flex-col h-80 w-80 items-center justify-center gap-2 border-2 border-blue-500 "
            >
              <p className="text-sm">{event.event_name}</p>
              <Image
                className="w-auto h-auto"
                src={event.event_image}
                width={200}
                height={200}
                alt={event.event_name}
              />
              <HandleEvent eventStatus={event.active} eventId={event.id} handleStatus={handleStatus} />
            </div>
          ))}
        </div>
        </div>
     
    </div>
  );
};

export default EventsPage;
