import React, { useState, useRef, useEffect } from "react";
import { communityMembers } from "../../lib/consts/CommunityMembers";

function Search({ style, type, placeholder, ...props }) {
  const [query, setQuery] = useState("");
  const [filteredPeople, setFilteredPeople] = useState([]);
  const searchRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (searchRef.current && !searchRef.current.contains(event.target)) {
        setQuery("");
      }
    };

    document.addEventListener("click", handleClickOutside);

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  useEffect(() => {
    setFilteredPeople(
      query === ""
        ? []
        : communityMembers.filter((person) =>
            person.alt
              .toLowerCase()
              .replace(/\s+/g, "")
              .includes(query.toLowerCase().replace(/\s+/g, ""))
          )
    );
  }, [query]);

  return (
    <div ref={searchRef}>
      <input
        className={`${style}`}
        type={type}
        placeholder={placeholder}
        value={query}
        onChange={(event) => setQuery(event.target.value)}
        {...props}
      />
      {query !== "" && (
        <div className="absolute top-full left-0 mt-2 w-full bg-white p-2 rounded shadow-md">
          {filteredPeople.length === 0 ? (
            <div>Not found</div>
          ) : (
            filteredPeople.map((person) => (
              <div
                key={person.id}
                className={`relative cursor-default select-none hover:bg-blue-500 py-2 px-2 pl-10 pr-4 `}
              >
                <div className=" h-[24px] flex w-full">
                  <img src={person.path} alt={person.alt} className="mr-2" />
                  {person.alt}
                </div>
              </div>
            ))
          )}
        </div>
      )}
    </div>
  );
}

export default Search;
