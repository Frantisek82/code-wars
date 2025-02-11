import { useEffect, useState } from "react";

export function Efectos() {
  const [peliculas, setPeliculas] = useState([]);

  useEffect(() => {
    // Este código lo quiero correr al montar el componente
    console.log("Sólo me ejecuto al montar");
    fetch("https://swapi.py4e.com/api/films")
      .then((data) => data.json())
      .then((data) => setPeliculas(data.results));

    // Este código lo quiero correr al desmontar el componente
    return () => {
      console.log("Sólo me ejecuto al desmontar");
    };
  }, []);
  return (
    <div>
      <ol>
        {peliculas.map((pelicula) => (
          <li>{pelicula.title}</li>
        ))}
      </ol>
    </div>
  );
}
