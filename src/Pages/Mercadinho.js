import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { handleCadastro, handleCart } from "../Router/cordinator";
import CardFrutas from "../components/CardFrutas";
import styled from "styled-components";
import { GlobalContext } from "../contexts/GlobalContext";

export default function Mercadinho() {
  const navigate = useNavigate();
  const context = useContext(GlobalContext);
  const { frutas, comprar } = context;

  return (
    <MercadinhoContainer>
      <h1>Mercadinho</h1>
      <button onClick={() => handleCart(navigate)}>Vá para Carrinho </button>
      <button onClick={() => handleCadastro(navigate)}>
        Cadastro de Frutas{" "}
      </button>
      <FrutasContainer>
        {frutas.map((fruta) => {
          return (
            <CardFrutas
              comprar={comprar}
              key={fruta.id}
              id={fruta.id}
              img={fruta.url}
              name={fruta.name}
              price={fruta.price}
            />
          );
        })}
      </FrutasContainer>
    </MercadinhoContainer>
  );
}
const FrutasContainer = styled.section`
  display: flex;
  flex-wrap: wrap;
`;
const MercadinhoContainer = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
