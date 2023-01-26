import React from "react";
import styled from "styled-components";

export default function CardCarrinho({
  id,
  img,
  name,
  amount,
  price,
  remover
}) {
  //------------------------------

  return (
    <CardContainer key={id}>
      <Image src={img} />
      <p>{name}</p>
      <p>
        Qtd <b>{amount}</b>
      </p>
      <p>R${price}</p>
      <DeleteButton onClick={()=>remover(id)}>x</DeleteButton>
    </CardContainer>
  );
}
const Image = styled.img`
  width: 30%;
`;
const DeleteButton = styled.button`
  background-color: tomato;
  border: none;
`;
const CardContainer = styled.section`
  width: 300px;
  border: 1px solid black;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 20px;
  padding: 10px;
`;
