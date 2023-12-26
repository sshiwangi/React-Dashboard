import React from "react";

function EventCard() {
  return (
    <div className="rounded-sm shadow-md border border-stroke bg-white py-6 px-6 shadow-default dark:border-strokedark dark:bg-boxdark">
      <div className="flex flex-col">
        <div>
          <div className="rounded-full">24 Feb</div>
          <div>
            <h2>Lorem Ipsum</h2>
            <p>lorem ipsum lorem ipsum</p>
          </div>
        </div>
        <div>320 others</div>
      </div>
    </div>
  );
}

export default EventCard;
