import Encabezado from "./Encabezado"
import Expresiones from "./Expresiones"
import Body from "./Body"
import Card from "./Card"
import Footer from "./Footer"
import { useState } from "react"

function App(){
  const [vista, setVista] = useState("Inicio");
  return (
    <div>
      <Encabezado cambiarVista={setVista} />
      <Expresiones />
      <Body vista={vista} />
      {vista === "Inicio" && <Card />}
      <Footer />
  </div>
)
}


export default App;