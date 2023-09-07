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
    <>
    <h2 className="text-center pt-3 text-2xl">Manage Hyper-Events:</h2>
    <div className="flex flex-row h-full m-5">
  
      <div key={2838123} className="w-1/2 h-[90%] flex flex-col m-5 border-2 p-5 bg-purple-200 rounded-lg">
        <h2 className="text-2xl text-center pb-4">Banned Events</h2>
        {events?.filter((event) => !event.active).map((event, index) => (
          <div
            key={index}
            className="flex flex-row h-15 w-full m-1 px-2 items-center justify-between border-2 border-black-500 bg-purple-300 rounded-lg"
          >
            <p className="text-lg">{event.event_name}</p>
            <HandleEvent eventStatus={event.active} eventId={event.id} handleStatus={handleStatus} />
          </div>
        ))}
      </div>
  
      <div key={2838} className="flex flex-col w-1/2 h-[90%] m-5 border-2 p-5 bg-purple-200 rounded-lg">
        <h2 className="text-2xl text-center pb-4">Active Events</h2>
        {events?.filter((event) => event.active).map((event, index) => (
          <div
            key={index}
            className="flex flex-row h-15 w-full m-1 px-2 items-center justify-between border-2 border-black-500 bg-purple-300 rounded-lg"
          >
            <p className="text-lg">{event.event_name}</p>
            <HandleEvent eventStatus={event.active} eventId={event.id} handleStatus={handleStatus} />
          </div>
        ))}
      </div>
  
    </div>
  </>
    );
};

export default EventsPage;
