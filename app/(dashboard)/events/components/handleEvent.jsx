"use client";
import {toast} from 'react-hot-toast'
import axios from "axios";
import { useEffect, useState } from "react";

export default function HandleEvent({ eventStatus, eventId, handleStatus }) {
  const [status, setStatus] = useState(true);
  const [eventIdentefier, setEventIdentefier] = useState(eventId)

  useEffect(() => {
    setStatus(eventStatus);
  }, [eventStatus]);

  

  async function postNewStatus(statusParam, eventIdParam) {
    try {
      const statusResponse = await axios.patch(
        process.env.NEXT_PUBLIC_URL + "/api/events",
        {
          eventStatus: statusParam,
          eventId: eventIdParam,
        }
      );
      setStatus(statusResponse.data);
      handleStatus(statusResponse.data, eventIdParam)
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div key={eventId}>
  {status ? (
    <button
      key={(Math.random() * 173).toFixed(0)}
      className="bg-red-500 text-white rounded-full px-4 py-2 border border-red-600 hover:bg-red-600 focus:outline-none focus:ring focus:ring-red-300"
      onClick={() => {postNewStatus(false, eventId); toast.error('Event disabled.')}}
    >
      Disable
    </button>
  ) : (
    <button
      key={(Math.random() * 173).toFixed(0)}
      className="bg-blue-500 text-white rounded-full px-4 py-2 border border-blue-600 hover:bg-blue-600 focus:outline-none focus:ring focus:ring-blue-300"
      onClick={() => {postNewStatus(true, eventId); toast.success('Event is now active.')}}
    >
      Enable
    </button>
  )}
</div>
  );
}
