import React from "react";
import "../../App.css";
import xboxImg from "../../assets/xbox.png";
import playstationImg from "../../assets/playstation.jpg";
import nintendoImg from "../../assets/nintendo.jpg";
function ItemJogos({ nome, plataforma, id }) {
  return (
    <div className="jogoFlex">
      <div className="card">
        <div>
          <img
            className="imgPlat"
            src={
              plataforma === "xbox"
                ? xboxImg
                : plataforma === "playstation"
                ? playstationImg
                : nintendoImg
            }
            alt=""
          />
        </div>
        <p>{id}</p>
        <p className="nameGame"> {nome}  </p>
        <p></p>
      </div>
    </div>
  );
}

export default ItemJogos;
