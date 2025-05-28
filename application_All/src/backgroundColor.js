import { useState } from "react";

export default function Back(){
  const [color , setColor] = useState("green");
  document.body.style.backgroundColor = color;
  const handleChangerColor = (couleur) => {
    document.querySelector('div').style.backgroundColor = couleur;
    setColor(couleur);
  };
  return (
    <div>
      <button onClick={()=>handleChangerColor("green")} disabled={color == "green"}>Vert</button>
      <button onClick={()=>handleChangerColor("yellow")} disabled={color == "yellow"}>Jaune</button>
      <button onClick={()=>handleChangerColor("red")} disabled={color == "red"}>Rouge</button>
    </div>
  );
}
