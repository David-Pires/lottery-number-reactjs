import { useState } from 'react';
import NumeroDisplay from '../componentes/NumeroDisplay';

export default function lottery() {
  const [numero, setNumero] = useState("")

  const dec = () => setNumero(numero - 1)
   
  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
    }}>
    <h1>O resultado da loteria é:</h1>
    <NumeroDisplay numero={numero}/>
    <div>Número da sorte:{numero}</div>
    <button onClick={} >Checar número</button>
        
    </div>
    );
  }

  