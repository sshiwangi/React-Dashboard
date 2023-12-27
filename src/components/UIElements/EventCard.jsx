import React from "react";

function EventCard({ eventDate, eventTitle, eventAgenda, eventAttendees }) {
  return (
    <div className="rounded-sm shadow-md border border-stroke bg-white py-6 px-6 shadow-default dark:border-strokedark dark:bg-boxdark">
      <div className="flex flex-col gap-2">
        <div className="flex gap-2">
          <div className="rounded-full h-[48px] w-[48px] p-3 font-bold text-white flex items-center text-sm justify-center bg-blue-500">
            {eventDate}
          </div>
          <div>
            <h2 className="font-bold">{eventTitle}</h2>
            <p>{eventAgenda}</p>
          </div>
        </div>
        <div className="font-medium flex items-center justify-center text-sm">
          {eventAttendees}
        </div>
      </div>
    </div>
  );
}

export default EventCard;
