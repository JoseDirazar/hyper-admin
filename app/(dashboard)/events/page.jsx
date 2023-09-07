"use client";

import axios from "axios";
import HandleEvent from "./components/handleEvent";
import { useEffect, useState } from "react";

const EventsPage = () => {
  const [events, setEvents] = useState([]);

  let [page, setPage] = useState(1);
  let [noPage, setNoPage] = useState(1);

  useEffect(() => {
    (async () => {
      try {
        let { data } = await axios.get(
          process.env.NEXT_PUBLIC_URL + "/api/events"
        );

        setEvents([...data]);
      } catch (error) {
        console.log(error);
      }
    })();
  }, []);

  function handleStatus(status, id) {
    const updatedEvents = events.map((event) => {
      if (event.id === id) {
        return { ...event, active: status };
      }
      return event;
    });

    setEvents(updatedEvents);
  }

  let eventsPage = [];
  let cantPage = 1;

  const cantCharPerPage = 5;

  let desde = (page - 1) * cantCharPerPage;
  let hasta = page * cantCharPerPage;

const noActiveEvents = events.filter((event) => !event.active)

  cantPage = Math.floor(noActiveEvents.length / cantCharPerPage);
  eventsPage = noActiveEvents.slice(desde, hasta);

  let noEventsPage = [];
  let noCantPage = 1;

  const activeEvents = events.filter((event) => event.active)

  let nodesde = (noPage - 1) * cantCharPerPage;
  let nohasta = noPage * cantCharPerPage;

  noCantPage = Math.floor(activeEvents.length / cantCharPerPage);
  noEventsPage = activeEvents.slice(nodesde, nohasta);

  return (
    <div className="mt-5 mb-20">
      <h2 className="text-center text-2xl">Manage Hyper-Events:</h2>
      <div className="flex flex-row h-full m-5 mb-10">
        <div
          key={2838123}
          className="w-1/2 h-[110%] min-h-[38rem] flex flex-col m-5 border-2 p-5 bg-white shadow-lg rounded-lg"
        >
          <h2 className="text-2xl text-center pb-2">Banned Events</h2>
          {eventsPage?.map((event, index) => (
            <div
              key={index}
              className="flex flex-row h-15 w-full m-1 px-2 items-center justify-between border-2 border-black-500 bg-white shadow-lg rounded-lg"
            >
              <p className="text-lg">{event.event_name}</p>
              <HandleEvent
                eventStatus={event.active}
                eventId={event.id}
                handleStatus={handleStatus}
              />
            </div>
          ))}
          <div className="flex items-center justify-center space-x-2 mt-2">
            {page <= 1 ? (
              <>
                <div className="w-10 h-10"></div>
                <div className="w-10 h-10"></div>
              </>
            ) : (
              <>
                <button
                  onClick={() => setPage((prevPage) => prevPage - 1)}
                  className="px-2 py-1 bg-blue-500 text-white rounded-md"
                >
                  PREV
                </button>
                <p>{page - 1}</p>
              </>
            )}
            <h3 className="text-xl font-semibold">{page}</h3>
            {page > cantPage ? (
              <>
                <div className="w-10 h-10"></div>
                <div className="w-10 h-10"></div>
              </>
            ) : (
              <>
                <p>{page + 1}</p>
                <button
                  onClick={() => setPage((prevPage) => prevPage + 1)}
                  className="px-2 py-1 bg-blue-500 text-white rounded-md"
                >
                  NEXT
                </button>
              </>
            )}
          </div>
        </div>

        <div
          key={2838}
          className="flex flex-col w-1/2 h-[90%] min-h-[38rem] m-5 border-2 p-5 bg-white shadow-lg rounded-lg"
        >
          <h2 className="text-2xl text-center pb-2">Active Events</h2>
          {noEventsPage?.map((event, index) => (
            <div
              key={index}
              className="flex flex-row h-15 w-full m-1 px-2 items-center justify-between border-2 border-black-500 bg-white shadow-lg rounded-lg"
            >
              <p className="text-lg">{event.event_name}</p>
              <HandleEvent
                eventStatus={event.active}
                eventId={event.id}
                handleStatus={handleStatus}
              />
            </div>
          ))}
          <div className="min-w-10 mt-2">
            <div className="flex items-center justify-center space-x-2">
              {noPage <= 1 ? (
                <>
                  <div className="w-10 h-10"></div>
                  <div className="w-10 h-10"></div>
                </>
              ) : (
                <>
                  <button
                    onClick={() => setNoPage((prevNoPage) => prevNoPage - 1)}
                    className="px-2 py-1 bg-blue-500 text-white rounded-md"
                  >
                    PREV
                  </button>
                  <p>{noPage - 1}</p>
                </>
              )}
              <h3 className="text-xl font-semibold">{noPage}</h3>
              {noPage > noCantPage ? (
                <>
                  <div className="w-10 h-10"></div>
                  <div className="w-10 h-10"></div>
                </>
              ) : (
                <>
                  <p>{noPage + 1}</p>
                  <button
                    onClick={() => setNoPage((prevNoPage) => prevNoPage + 1)}
                    className="px-2 py-1 bg-blue-500 text-white rounded-md"
                  >
                    NEXT
                  </button>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventsPage;
