import { useEffect } from "react";

function Efectos() {
  useEffect(() => {
    // Este código lo quiero correr al montar el componente
    console.log("Sólo me ejecuto al montar");

    // Este código lo quiero correr al desmontar el componente
    return () => {
      console.log("Sólo me ejecuto al desmontar");
    };
  }, []);
  return <div>Efectos</div>;
}

export default Efectos;
