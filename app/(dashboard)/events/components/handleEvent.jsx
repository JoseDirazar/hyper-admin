"use client";

import axios from "axios";
import { useState } from "react";

export default function HandleEvent({ eventStatus, eventId }) {

  const [status, setStatus] = useState(eventStatus)

  async function handleStatus(eventId, status) {
    try {
      await axios.patch('http://localhost:3000/api/events', {status, eventId})
      setStatus(!status)
    } catch (error) {
        console.log(error)
    }
  }

  return (
    <>
      {status ? (
        <button onClick={() => handleStatus(eventId, status)}>Disabled</button>
      ) : (
        <button onClick={() => handleStatus(eventId, status)}>Enabled</button>
      )}
     
    </>
  );
}
