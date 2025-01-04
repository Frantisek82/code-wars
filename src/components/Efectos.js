import { useEffect } from "react";

function Efectos() {
  useEffect(() => {
    // Este código lo quiero correr al montar el componente
    console.log("Sólo me ejecuto al montar");
    fetch("https://swapi.py4e.com/api/films")
      .then((data) => data.json())
      .then((data) => console.log(data));

    // Este código lo quiero correr al desmontar el componente
    return () => {
      console.log("Sólo me ejecuto al desmontar");
    };
  }, []);
  return <div>Efectos</div>;
}

export default Efectos;
