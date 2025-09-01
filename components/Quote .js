"use client";
import React, { useEffect, useState } from "react";

const Joke = () => {
  const [joke, setJoke] = useState("");
  const fetchJoke = async () => {
    const res = await fetch("https://icanhazdadjoke.com/", {
      headers: {
        Accept: "application/json",
      },
    });
    const data = await res.json();
    console.log(data);
    setJoke(data?.joke);
  };

  useEffect(() => {
    fetchJoke();
  }, []);

  return (
    <div className="px-4 py-3 text-2xl font-bold text-white transition-all ease-in-out w-[90%] md:w-1/2 bg-card-background rounded-2xl hover:bg-primary-button-hover hover:text-card-background duration-400">
      Joke of the Day: <br /> <br />
      {joke}
    </div>
  );
};

export default Joke;
