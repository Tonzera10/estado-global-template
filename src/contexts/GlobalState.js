import { GlobalContext } from "./GlobalContext";
import { useState } from "react";
import frutaria from "../frutaria.json";

const GlobalState = ({ children }) => {
    const [carrinho, setCarrinho] = useState([]);
  const [frutas, setFrutas] = useState(frutaria.frutaria);
  const [formulario, setFormulario] = useState({
    name: "",
    url: "",
    price: "",
    id: Date.now(),
  });

  const onChangeInputs = (event) => {
    const { name, value } = event.target;
    setFormulario({ ...formulario, [name]: value });
  };
  const handleClick = (event) => {
    event.preventDefault();
    console.log(formulario);
    setFrutas([...frutas, formulario]);
  };

  function remover(id) {
    const fruta = carrinho && carrinho.find((item) => item.id === id);
    console.log(fruta);

    if (fruta.amount > 1) {
      const novoCarrinho = carrinho.map((item) => {
        if (fruta.id === item.id && item.amount >= 1) {
          return { ...item, amount: item.amount - 1 };
        } else {
          return item;
        }
      });

      setCarrinho(novoCarrinho);
    } else {
      const carrinhoSemItem = carrinho.filter((item) => item.id !== id);
      setCarrinho(carrinhoSemItem);
    }
  }
  function comprar(id) {
    const i = carrinho.findIndex((item) => item.id === id);
    console.log(i);
    if (i !== -1) {
      carrinho[i] = { ...carrinho[i], amount: carrinho[i].amount + 1 };
      setCarrinho([...carrinho]);
    } else {
      const frutaEncontrada = frutas.find((fruta) => fruta.id === id);
      const novaFruta = { ...frutaEncontrada, amount: 1 };
      const novaLista = [...carrinho, (carrinho[1] = novaFruta)];

      setCarrinho(novaLista);
    }
  }

  const data = {
    frutas,
    carrinho,
    formulario,
    onChangeInputs,
    handleClick,
    comprar,
    remover
  }

  return <GlobalContext.Provider value={data}>{children}</GlobalContext.Provider>;
};

export default GlobalState;
