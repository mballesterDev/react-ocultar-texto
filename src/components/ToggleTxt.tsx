import { useState } from "react";

interface propsToggle {
  text: string;
  initialBtnState: boolean;
}

const ToggleTxt = ({ text, initialBtnState }: propsToggle) => {
  const [ocultar, setOcultar] = useState(initialBtnState);
  const [contador] = useState(text.length);

  const toggleBtn = () => {
    setOcultar(!ocultar);
  };

  return (
    <>
      <div>{ocultar ? "" : text}</div>
      <span>contador de palabras = {contador}</span>
      <button onClick={() => toggleBtn()}>{ocultar ? "Mostrar" : "Ocultar"}</button>
    </>
  );
};

export default ToggleTxt;
