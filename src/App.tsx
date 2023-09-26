import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import { Persona, Persone } from './models/persona';
import { Dettaglio, dettaglio } from './models/dettaglio';

function App() {

  const [dettaglio, setDettaglio] = useState<Dettaglio>();
  const [persone, setPersone] = useState<Persone>();
  const PERSONE_URL = 'https://raw.githubusercontent.com/alemarra89/its2224/main/its2224.json'

  const getPersone = () => {
    fetch(PERSONE_URL)
      .then((res) => res.json())
      .then((result: Persone) => {
        console.log('result', result);
        setPersone(result);
      });
  };

  const getDettaglio = (dettaglio : Dettaglio) =>{
    fetch(dettaglio.persona.immagine)
      .then((res)=>res.json())
      .then((result : Dettaglio) => {
        console.log("result",result);
        setDettaglio(result)
      })
  }

  useEffect(()=> {
    getPersone(); 
  },[]);

  return (
    <div className='App'>
      <div style={{ display: 'flex' }}>
        <div
          style={{
            flex: 2,
            borderRight: "1px solid #CCC",
            height: "100vh",
            overflowY: "scroll",
            backgroundImage:
              'url("https://images7.alphacoders.com/130/1304684.png")',
          }}>   
            <div>
              <h2>LISTA STUDENTI</h2>
              <div style={{padding:20}}>
                  {persone?.map((persone,index)=>(
                    <div
                    style={{
                      textAlign: "left",
                      padding: 20,
                      border: "1px solid #CCC",
                      borderRadius: 20,
                      marginBottom: 5,
                      cursor: "pointer",
                      display: "flex",
                      alignItems: "center",
                      backgroundColor: "rgba(255,255,255,.8)",
                    }}
                    onClick={() => getDettaglio()}>
                      {persone.nome}, {persone.cognome}
                    </div>
                  ))}
              </div>
            </div>     
          </div>
          <div style={{ flex: 1}}>
            <h1>SIUMMICO URLO</h1>
            

          </div>
      </div>
    </div>


  )
}

export default App;
