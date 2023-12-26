import React from "react";
import PostCard from "../components/UIElements/PostCard";
import { communityMembers } from "../lib/consts/CommunityMembers";
import NewPostCard from "../components/UIElements/NewPostCard";
import EventCard from "../components/UIElements/EventCard";

function Home() {
  return (
    <div className="flex gap-6 justify-between flex-col md:flex-row">
      <div className="md:w-3/4 flex flex-col gap-6">
        <NewPostCard />
        <PostCard
          icon={communityMembers[0].path}
          name={communityMembers[0].alt}
          time={"00:42"}
          content={"What a pleasant day!"}
        />
      </div>
      <div className="flex flex-col gap-8">
        {/* events */}
        <div className="flex flex-col gap-4">
          <h3 className="text-xl font-bold">Upcoming Event</h3>
          <EventCard />
        </div>
        {/* Recommended people */}
        <div className="flex flex-col gap-4">
          <h3 className="text-xl font-bold">Recommended friends</h3>
          {communityMembers.map((item) => (
            <div className="flex shadow-md bg-white p-4">
              <img src={item.path} alt={item.alt} className="h-[36px]" />
              <div className="ml-2">
                <h2 className="font-bold">{item.alt}</h2>
                <p>{item.bio}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Home;
