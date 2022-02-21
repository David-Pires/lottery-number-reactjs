import { useState } from 'react'
import NumeroDisplay from '../componentes/NumeroDisplay'
import { mega } from '../functions/mega'
export default function megasena(props) {
const [numeros, setNumeros] = useState(mega())

function renderizarNumeros() {
  return numeros.map(
    numero => <NumeroDisplay key={numero} numero={numero}/>)
}
  return (
    <div>
      <h1>mega sena </h1>
      <div>
        {renderizarNumeros()}
      </div>
    </div>
  )
}