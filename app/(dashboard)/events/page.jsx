'use client'

import axios from "axios";
import HandleEvent from "./components/handleEvent";
import Image from "next/image";
import { useEffect, useState } from "react";


const EventsPage = () => {


  const [events, setEvents] = useState([])


  useEffect(() => {
    (async () => {
      try {
        let { data } = await axios.get("http://localhost:3000/api/events");
        setEvents([...data])
      } catch (error) {
        console.log(error)
      }
    })()
  }, [])


  return (
    <div className="flex flex-col h-full">
    
        <div key={2838123} className="flex flex-row flex-wrap ">
          {events?.map((event, index) => (
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
              <HandleEvent eventStatus={event.active} eventId={event.id} />
            </div>
          ))}
        </div>
     
    </div>
  );
};

export default EventsPage;
