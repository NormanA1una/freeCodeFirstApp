import React from "react";

function Testimonio() {
  return (
    <div className="contenedor-testimonio">
      <img
        className="imagen-testimonio"
        src={require("../imagenes/testimonio-kaisa.jpg")}
        alt="Foto de Kaisa"
      />
      <div className="contenedor-texto-testimonio">
        <p className="nombre-testimonio"></p>
        <p></p>
        <p></p>
      </div>
    </div>
  );
}
