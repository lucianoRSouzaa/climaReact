import React, { useState } from 'react';

export default function Main() {
  // declaração das variáveis
  const [city, setCity] = useState('');

  function searchWeather() {
    console.log(city);
  }

  return (
    <section className="main">
        <label>Cidade</label>
        <div className="d-flex gap-2">
            <input className="form-control shadow-sm" type="text" placeholder="Digite o nome da cidade" onChange={(e) => setCity(e.target.value)} />
            <button className="btn btn-primary" onClick={searchWeather}>Buscar</button>
        </div>
    </section>
  );
}