import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import CardCarrinho from "../components/CardCarrinho";
import { handleHome } from "../Router/cordinator";
import styled from "styled-components";
import { GlobalContext } from "../contexts/GlobalContext";
export default function Carrinho() {
  const navigate = useNavigate();
  const context = useContext(GlobalContext);
  const { carrinho, remover } = context;

  let preçoTotal = 0;
  carrinho.map((item) => (preçoTotal = preçoTotal + item.price * item.amount));

  return (
    <CarrinhoContainer>
      <h1 id="cart">
        Carrinho{" "}
        <span role="img" aria-label="cart">
          🛒{" "}
        </span>
      </h1>
      <button onClick={() => handleHome(navigate)}>Voltar</button>
      {carrinho.map((item) => {
        return (
          <CardCarrinho
            id={item.id}
            name={item.name}
            price={item.price}
            img={item.url}
            amount={item.amount}
            remover={remover}
          />
        );
      })}
      <h3>Preço Total: R$ {preçoTotal}</h3>
    </CarrinhoContainer>
  );
}
const CarrinhoContainer = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
