"use client";

import React from "react";
import playersData from "../../utils/playersData";
import Stadistics from "./Stadistics";

export default function Teams() {
  function obtenerTop5(jugadores, estadistica) {
    jugadores.sort((a, b) => b[estadistica] - a[estadistica]);
    const top5Jugadores = jugadores.slice(0, 5);

    return top5Jugadores;
  }

  const top5Goles = obtenerTop5(playersData, "goles");
  const top5Asistencias = obtenerTop5(playersData, "asistencias");
  const top5Valoracion = obtenerTop5(playersData, "valoracion");

  return (
    <div className="container mx-auto" id="teams">
      <h1 className="text-3xl text-center text-red-500 mt-20 mb-10">EQUIPO</h1>

      <div className="flex flex-wrap justify-center gap-8 p-8">
        {playersData.map((jugador, index) => (
          <div
            className="w-full max-w-lg mx-auto bg-white rounded-lg shadow-lg overflow-hidden"
            key={index}
          >
            <div className="relative">
              <img
                src={jugador.imagen}
                alt={jugador.nombre}
                className="w-full h-52 object-cover"
              />
              <div className="absolute top-0 right-0 bg-red-600 text-white px-3 py-1 rounded-tl-md">
                <span className="text-xs font-semibold">
                  Nº {jugador.dorsal}
                </span>
              </div>
            </div>
            <div className="p-4">
              <h3 className="text-xl font-semibold">{jugador.nombre}</h3>
              <p className="text-gray-600">{jugador.posicion}</p>
              <div className="flex items-center mt-4">
                <div className="flex-1">
                  <h4 className="text-xs text-gray-600 uppercase">Edad</h4>
                  <p className="font-semibold">{jugador.edad}</p>
                </div>
                <div className="flex-1">
                  <h4 className="text-xs text-gray-600 uppercase">
                    Nacionalidad
                  </h4>
                  <p className="font-semibold">{jugador.nacionalidad}</p>
                </div>
                <div className="flex-1 hidden sm:block">
                  <h4 className="text-xs text-gray-600 uppercase">Equipo</h4>
                  <p className="font-semibold">{jugador.equipo}</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="flex flex-col md:flex-row items-center">
        <Stadistics playersData={top5Goles} estadistica={"Goles"} />
        <Stadistics playersData={top5Asistencias} estadistica={"Asistencias"} />
        <Stadistics playersData={top5Valoracion} estadistica={"Valoracion"} />
      </div>
    </div>
  );
}
