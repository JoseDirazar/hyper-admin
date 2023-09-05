"use client";

import axios from "axios";
import { useEffect, useState } from "react";

export default function HandleEvent({ eventStatus, eventId }) {
  const [status, setStatus] = useState(true);

  useEffect(() => {
    setStatus(eventStatus);
  }, []);

  async function handleStatus(statusParam, eventIdParam) {
    try {
      const statusResponse = await axios.patch(
        "http://localhost:3000/api/events",
        {
          eventStatus: statusParam,
          eventId: eventIdParam,
        }
      );
      setStatus(statusResponse.data);
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div key={eventId}>
      {status ? (
        <button
        key={Math.random() * 173}
          className="bg-red-600 rounded-full border-solid p-2"
          onClick={() => handleStatus(false, eventId)}
        >
          Disable
        </button>
      ) : (
        <button
        key={Math.random() * 173}
          className="bg-blue-600 rounded-full border-solid p-2"
          onClick={() => handleStatus(true, eventId)}
        >
          Enable
        </button>
      )}
    </div>
  );
}
