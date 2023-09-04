"use client";

import axios from "axios";

export default function HandleEvent({ eventStatus, eventId }) {
  async function handleStatus(eventStatus, eventId) {
    try {
        await axios.patch('http://localhost:3000/api/events', {eventStatus, eventId})
    } catch (error) {
        console.log(error)
    }
  }
  return (
    <>
      {eventStatus ? (
        <button onClick={() => handleStatus(eventStatus, eventId)}>Disabled</button>
      ) : (
        <button onClick={() => handleStatus(eventStatus, eventId)}>Enabled</button>
      )}
    </>
  );
}
