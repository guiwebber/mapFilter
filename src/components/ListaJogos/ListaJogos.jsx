import React, { useState } from "react";
import "../../App.css";
import ItemJogos from "../ItemJogos/ItemJogos";
import searchImg from "../../assets/lupa.png";
import { jogosExclusivos } from "../../arrayJogos/ArrayJogos";
function ListaJogos() {
  const [listaJogos, setListaJogos] = useState(jogosExclusivos);

  const filtraJogo = (plataforma) => {
    setListaJogos(
      jogosExclusivos.filter((jogo) => jogo.plataforma === plataforma)
    );
  };

  const limpaFiltro = () => {
    setListaJogos(jogosExclusivos);
  };

  const buscaJogos = (textoDigitado) => {
    setListaJogos(
      jogosExclusivos.filter(
        (jogo) =>
          jogo.nome.toLowerCase().includes(textoDigitado.toLowerCase()) ||
          jogo.plataforma.toLowerCase().includes(textoDigitado.toLowerCase())
      )
    );
  };

  return (
    <div className="container-principal">
      <h2>Lista de jogos</h2>
      <div className="buttonsSearch">
        <div>

        <button className="xboxButton" onClick={() => filtraJogo("xbox")}>
          XBOX
        </button>
        <button
          className="playButton"
          onClick={() => filtraJogo("playstation")}
          >
          PLAYSTATION
        </button>
        <button className="nintButton" onClick={() => filtraJogo("nintendo")}>
          NINTENDO
        </button>
          </div>
        <div>
          <button className="clear" onClick={() => limpaFiltro()}>
            LIMPAR BUSCA
          </button>
        </div>
        <div className="container-input">
          <img src={searchImg} alt="" />
          <input
            type="text"
            onChange={(event) => buscaJogos(event.target.value)}
            placeholder="Pesquise um jogo ou plataforma "
          />
        </div>
      </div>
      <div className="container-jogo">
        {listaJogos.map((jogo) => (
          <ItemJogos
            key={jogo.id}
            nome={jogo.nome}
            plataforma={jogo.plataforma}
          />
        ))}
      </div>
    </div>
  );
}

export default ListaJogos;
