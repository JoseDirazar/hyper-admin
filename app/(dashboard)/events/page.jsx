import axios from "axios";
import HandleEvent from "./components/handleEvent";
import Image from "next/image";
const EventsPage = async () => {
  let {data} = await axios.get("http://localhost:3000/api/events")

  //data = data.slice(0, 18);
  console.log("recien calentito: ", data[2].active, data[2].event_name); // Llega true pero en la db esta en false!
  return (
    <div key={2838123} className="flex flex-row flex-wrap h-full">
      {data?.map((event, index) => (
        <div
          kay={index}
          className="flex flex-col h-80 w-80 items-center justify-center gap-2 border-2 border-b-rose-800 "
        >
          <p className="text-sm">{event.id}</p>
          <p className="text-sm">{event.event_name}</p>
          <Image
            src={event.event_image}
            width={200}
            height={200}
            alt={event.event_name}
          />
          <HandleEvent eventStatus={event.active} eventId={event.id} />
        </div>
      ))}
    </div>
  );
};

export default EventsPage;