"use client";

import axios from "axios";
import { useEffect, useState } from "react";

export default function HandleEvent({ eventStatus, eventId, handleStatus }) {
  const [status, setStatus] = useState(true);

  useEffect(() => {
    setStatus(eventStatus);
  }, []);

  async function postNewStatus(statusParam, eventIdParam) {
    try {
      const statusResponse = await axios.patch(
        "http://localhost:3000/api/events",
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
          className="bg-red-600 rounded-full border-solid p-2"
          onClick={() => postNewStatus(false, eventId)}
        >
          Disable
        </button>
      ) : (
        <button
        key={(Math.random() * 173).toFixed(0)}
          className="bg-blue-600 rounded-full border-solid p-2"
          onClick={() => postNewStatus(true, eventId)}
        >
          Enable
        </button>
      )}
    </div>
  );
}
