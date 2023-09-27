import React, { useEffect, useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import { Persona, Persone } from "./models/persona";
import { url } from "inspector";
import { deepEqual } from "assert";

function App() {
  type Dettaglio = {
    persona: Persona;
    index: number;
  };

  const aziende = ["https://www.links-srl.it/", "https://ita.finconsgroup.com/", "https://www.vidyasoft.it/"]
  const [dettaglio, setDettaglio] = useState<Persona>();
  const [persone, setPersone] = useState<Persone>();
  const PERSONE_URL =
    "http://localhost:8080/api/alunni/getAlunni";


  const getPersone = () => {
    fetch(PERSONE_URL)
      .then((res) => res.json())
      .then((result: Persone) => {
        console.log("result", result);
        setPersone(result);
      });
  };

  const getDettaglio = (persona: Persona) => {
    console.log("bisnelo");
    setDettaglio(persona);
  };

  useEffect(() => {
    getPersone();
  }, []);

  return (
    <div className="App">
      <div style={{ display: "flex" }}>
        <div
          style={{
            flex: 2,
            borderRight: "1px solid #CCC",
            height: "100vh",
            overflowY: "scroll",
            backgroundImage: "url(https://www.sistemaitspuglia.it/wp-content/uploads/2019/03/apulia_logo_png-1.png)",
            backgroundRepeat: "no-repeat",
            backgroundSize: "contain",
          }}
        >
          <div>
            <h2>LISTA STUDENTI</h2>
            <div style={{ padding: 20 }}>
              {persone?.map((persone, index) => (
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
                  }}
                  onClick={() => getDettaglio(persone)}

                >
                  {persone.nome}, {persone.cognome}
                </div>
              ))}
            </div>
          </div>
        </div>
        <div style={{ flex: 1 }}>
          <h1> {dettaglio?.nome} - {dettaglio?.cognome}</h1>
          <div>
            <img src={dettaglio?.immagine} alt="Immagine della persona" width={500} height={500} />
          </div>
          <div>
            <a href={dettaglio?.azienda}><h2>SCOPRI DOVE SEI FINITO</h2></a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
