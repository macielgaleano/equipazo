//Seccion de videos de youtube con tailwind responsive

import React from "react";

export default function Videos() {
  const videos = [
    {
      url: "https://www.youtube.com/embed/HtzawKwEPrs?controls=0",
      title: "Gol a la tribuna - Cueva",
    },
    {
      url: "https://www.youtube.com/embed/BFPHIzq3tTQ?controls=0",
      title: "Lo que jugamos",
    },
    {
      url: "https://www.youtube.com/embed/t8tQMLhSxPo?controls=0",
      title: "Lo que juega este equipo!!!!",
    },
  ];

  return (
    <div className="container mx-auto pb-28 mt-28 videos" id="videos">
      <h1 className="text-3xl text-center text-red-500 mt-20 mb-10">Videos</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {videos.map((video) => (
          <div className="p-4 bg-gray-800 rounded-lg shadow-lg">
            <iframe
              width="100%"
              height="315"
              src={video.url}
              title={video.title}
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
        ))}
      </div>
    </div>
  );
}
