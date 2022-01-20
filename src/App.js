import logo from './logo.svg';
import './App.css';
import { useState } from "react";
import Dado from './Dado';

function App() {

  /** Estado Variable */
  function eliminarUltimaFila() {
    if (articulos.length > 0) {
      const temp=Array.from(articulos)
      temp.pop()
      setArticulos(temp)
    }
  }

  function borrar(cod) {
    const temp = articulos.filter((art)=>art.codigo !== cod);
    setArticulos(temp)
  }

  const [articulos, setArticulos] = useState([{
    codigo: 1,
    descripcion: 'papas',
    precio: 12.52
  }, {
    codigo: 2,
    descripcion: 'naranjas',
    precio: 21
  }, {
    codigo: 3,
    descripcion: 'peras',
    precio: 18.20
  }]);


  /** Componente - Dado */
  function generarValor() {
    return Math.trunc(Math.random() * 6) + 1
  }

  function tirar() {
    setNumero1(generarValor())
    setNumero2(generarValor())
    setNumero3(generarValor())
  }

  const [numero1, setNumero1] = useState(generarValor())
  const [numero2, setNumero2] = useState(generarValor())
  const [numero3, setNumero3] = useState(generarValor())

  return (
    <div>
      <div>
        <table border="1">
          <thead><tr><th>Código</th><th>Descripción</th><th>Precio</th><th>Borra?</th></tr></thead>
          <tbody>
            {articulos.map(art => {
              return (
                <tr key={art.codigo}>
                  <td>
                    {art.codigo}
                  </td>
                  <td>
                    {art.descripcion}
                  </td>
                  <td>
                    {art.precio}
                  </td>
                  <td>
                    <button onClick={() => borrar(art.codigo)}>Borrar</button>
                  </td>
                </tr>
              )
            })}
          </tbody>
        </table>
        <button onClick={eliminarUltimaFila}>Eliminar última fila</button>
      </div>
      <div>
        <Dado valor={numero1} />
        <Dado valor={numero2} />
        <Dado valor={numero3} />   
        <button onClick={tirar}>Tirar</button>             
      </div> 
    </div>
  );
}

export default App;
