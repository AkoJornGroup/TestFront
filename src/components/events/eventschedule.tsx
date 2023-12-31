import React, { useEffect, useState } from 'react'
import ScheduleCard from './schedulecard'
import { getEventSchedule } from '../../service/api'
import { useSession } from 'next-auth/react'


const eventschedule = () => {
    const [events, setEvents] = React.useState([])
    const [getfinish, setgetfinish] = useState(false);
    const { data: session } = useSession();

    //fetch all event from api
    useEffect(() => {
        if (session) {
            console.log(session)
            getEventSchedule(session.user?.userID)
                .then(data => {
                    setEvents(data);
                    setgetfinish(true);
                })
                .catch(error => {
                    console.error('Error:', error);
                });
        }
        else {
            console.log("no session")
        }
    }, []);

    const showemtycard = () => {
        const numberOfColumns = 4;
        const numberOfEvents = showevents.length;
        const remainder = numberOfEvents % numberOfColumns;
        const emptyCardCount = remainder === 0 ? 0 : numberOfColumns - remainder;
        const emptyCards = Array.from({ length: emptyCardCount }, (_, index) => (
            <div key={`empty-${index}`} className="flex-1">
              <div className="w-44">
              </div>
            </div>
          ));
        
          return emptyCards;

    }

    var showevents = events;

    const showeventschedule = () => {
        if (showevents.length > 0) {
            return (
                <div className="flex flex-wrap flex-col-4 ">
                    {showevents.map((eventcard, index) => (
                        <a key={index} className="flex flex-col flex-1 items-center ">
                            <div className="flex-1">
                                <ScheduleCard image={eventcard.posterImage} datestart={eventcard.startDateTime} dateend={eventcard.endDateTime} name={eventcard.eventName} place={eventcard.location} />
                            </div>
                            <a href={"/scan/" + eventcard.eventID} className='w-44 h-10 mb-8 '>
                                <button className="font-montserrat w-full h-full text-xl bg-black text-white font-semibold rounded-xl align-middle">SCAN</button>
                            </a>
                        </a>
                    ))}
                    {showemtycard()}
                </div>
            )
        }
        else {
            return (
                <div className="flex flex-col items-center justify-center h-full pb-8">
                    <div>
                        {getfinish == true ? <div className="text-4xl font-montserrat font-medium">No Event</div> :
                            <div role="status" className='flex flex-row items-center justify-center mb-5 mt-4 '>
                                <svg aria-hidden="true" className="w-8 h-8 mr-2 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor" />
                                    <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill" />
                                </svg>
                                <span className="font-montserrat">Loading...</span>
                            </div>}
                    </div>
                </div>
            )
        }
    }

    return (
        <div className="pt-8 px-4 h-full">
            {showeventschedule()}
        </div>
    )
}

export default eventschedule