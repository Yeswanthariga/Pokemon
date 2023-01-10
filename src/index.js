import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import "/node_modules/bootswatch/dist/lux/bootstrap.css";
import "./index.css";

function App(data) {
  const [pokemon, setPokemon] = useState([]);

  useEffect(() => {
    handleFetch();
  }, []);

  const handleFetch = async () => {
    await fetch("https://api.pokemontcg.io/v2/cards")
      .then((resp) => resp.json())
      .then((data) => setPokemon([data]));
  };

  return (
    <div className="container text-center mt-4">
      <h1 className="loghov my-4 ">Pokemon</h1>
      <div className=" px-4">
        {pokemon.map((pokemon, index) => (
          <div key={index} className="row ">
            {pokemon.data.map((poke, ind) => (
              <div key={ind} className=" col-md-4 ">
                <a href={`/data/${data.id}`}>
                  <div className="card shadow m-3 p-2 grid">
                    <h4 className="py-2 fontfam">{poke.name}</h4>
                    <img
                      src={poke.images.large}
                      alt={poke.name}
                      className="img-fluid"
                    />
                  </div>
                </a>
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
