"use client";

import axios from "axios";
import { useEffect, useState } from "react";

export default function HandleEvent({ eventStatus, eventId }) {
  
  const [status, setStatus] = useState(true);

  useEffect(() => {
    setStatus(eventStatus)
  }, [])

  async function handleStatus(statusParam, eventIdParam) {
    try {
      const statusResponse = await axios.patch('http://localhost:3000/api/events', {
        eventStatus: statusParam,
        eventId: eventIdParam,
      });
      
      setStatus(statusResponse.data);
    } catch (error) {
     console.log(error)
    }
  }
  
  return (
    <>
      {status ? (
        <button onClick={() => handleStatus(false, eventId)}>Disabled</button>
      ) : (
        <button onClick={() => handleStatus(true, eventId)}>Enabled</button>
      )}
    </>
  );
}
