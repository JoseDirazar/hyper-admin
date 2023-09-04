import axios from "axios";
import HandleEvent from "./components/handleEvent";

const EventsPage = async () => {
    const { data } = await axios('http://localhost:3000/api/events')
    
    return ( 
        <div>
          {data.map((event, index) => (
            <div kay={index}>
                <p>{event.event_name}</p>
                <p>Stock: {event.stock}</p>
                <HandleEvent eventStatus={event.active} eventId={event.id}/>
            </div>
          ))}  
        </div>
     );
}
 
export default EventsPage;