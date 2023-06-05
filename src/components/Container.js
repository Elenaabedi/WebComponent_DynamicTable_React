import { useState } from "react";
import { Rllista } from "./Rllista.js";

import { Persona } from "../models/persona.js";
import { Client } from "../models/client.js";
import { Treballador } from "../models/treballador.js";

export default function Container() {
  // Declaració persones
  let pers1 = new Persona(
    "56987456J",
    "Pedro",
    "Llanos",
    "Barcelona",
    "C/Corró num 1, 2n4a"
  );
  let pers2 = new Persona(
    "58562475H",
    "Maria",
    "Garcia",
    "Barcelona",
    "C/Sarda num 6, 1r3a"
  );
  let pers3 = new Persona(
    "36987852G",
    "Laia",
    "Ferrer",
    "Barcelona",
    "C/Lluis Companys num 98, 5r2a"
  );

  // Declaració Clients
  let client1 = new Client(
    "25878954Z",
    "Lluís",
    "Espinós",
    "Barcelona",
    "C/Lladoners num 95, 1r3a",
    "A-23346578",
    "NewLook S.L",
    100000
  );
  let client2 = new Client(
    "69859863G",
    "Lorena",
    "Tarrera",
    "Barcelona",
    "C/Santuari num 44, 6r5a",
    "B-98709165",
    "PatimPatam S.L",
    500000
  );
  let client3 = new Client(
    "32589654A",
    "Alberto",
    "Estupla",
    "Barcelona",
    "C/Plim plam num 2, 3r3a",
    "C-56408275",
    "ProgramFuture S.L",
    200000
  );

  // Declaració Treballadors
  let treb1 = new Treballador(
    "58937695L",
    "Marta",
    "Bermejo",
    "Barcelona",
    "C/Pau Claris num 1, 1r4a",
    "Superior de Linia"
  );
  let treb2 = new Treballador(
    "24518764O",
    "Clara",
    "Roma",
    "Barcelona",
    "C/Canyelles num 45, 2r2a",
    "Tècnic de programació"
  );
  let treb3 = new Treballador(
    "21548798T",
    "Victor",
    "Suarez",
    "Barcelona",
    "C/Roman num 63, 4r3a",
    "Tècnic administració comercial"
  );

  // INICI CODI REACT
  let [titol, setTitol] = useState("Titol per defecte");
  let [capcalera, setCapcalera] = useState([]);
  let [persones, setPersones] = useState([]);
  let [personesCopia, setPersonesCopia] = useState([]);
  let [totalitzar, setTotalitzar] = useState([]);

  // Actualitza el títol de la taula
  function actTitol() {
    let tt = prompt("Introdueix títol: ", "Taula dinàmica");
    if (tt) {
      setTitol(tt);
    }
  }

  // Afegir Capçalera
  function addCap() {
    setCapcalera([
      { cabc: "DNI", camp: "dni" },
      { cabc: "Nom", camp: "nom" },
      { cabc: "Cognom", camp: "cognom" },
      { cabc: "Provincia", camp: "provincia" },
      { cabc: "Direcció", camp: "direccio" },
      { cabc: "NIF Client", camp: "nif" },
      { cabc: "Volum Ventes", camp: "vVentas" },
      { cabc: "Empresa Client", camp: "empresa" },
      { cabc: "Càrrec Treballador", camp: "carrec" },
    ]);
  }

  // Afegir Persones a la taula
  function afegirPersones() {
    setPersones([pers1, pers2, pers3]);
    setPersonesCopia([pers1, pers2, pers3]);
  }
  // Afegir Clients a la taula
  function afegirClients() {
    const updatePersones = [...persones, client1, client2, client3];
    setPersones(updatePersones);
    const updatePersonesCopia = [...personesCopia, client1, client2, client3];
    setPersonesCopia(updatePersonesCopia);
  }
  // Afegir Treballadors a la taula
  function afegirTreballadors() {
    const updatePersones = [...persones, treb1, treb2, treb3];
    setPersones(updatePersones);
    const updatePersonesCopia = [...personesCopia, treb1, treb2, treb3];
    setPersonesCopia(updatePersonesCopia);
  }

  //Totalitzar
  function totalitzarCamp() {
    let campIntro = prompt("Introdueix el camp a totalitzar", "vVentas");
    // si persones.length és vajor a 0, vol dia que té contingut per poder totalitzar.
    if (campIntro && persones.length > 0) {
      let arrayTotalitzar = [];
      let posicio = "";
      // Creem un array per aplicar reduce:
      persones.forEach((persona) => {
        if (campIntro in persona) {
          arrayTotalitzar.push(persona[campIntro]);
        }
      });
      // Apliquem reduce sobre l'array creat
      let suma = arrayTotalitzar.reduce(function (acumulador, valorSeguent) {
        return acumulador + valorSeguent;
      }, 0);
      // Generem el camp on aplicar el resultat totalitzat en base al camp desitjat:
      // Obtenim la posició correcte comparant l'array de configuració
      capcalera.forEach((element, index) => {
        if (element.camp == campIntro) {
          posicio = index;
        }
      });

      setTotalitzar([suma, posicio]);
    } else {
      setTotalitzar([]);
    }
  }

  // Ordenar
  function sortMthd() {
    let campIntro = prompt("Introdueix el camp pel qual ordenar: ", "vVentas");

    if (personesCopia.length > 0 && campIntro) {
      // Apliquem el Sort sobre l'array que potser està filtrat o no:
      personesCopia.sort(function (first_elem, second_elem) {
        let a = first_elem[campIntro];
        let b = second_elem[campIntro];

        if (a != "" || b != "") {
          if (a > b) {
            return 1;
          }
          if (a < b) {
            return -1;
          }
          // a debe ser igual que b
          return 0;
        }
      });

      setPersonesCopia([...personesCopia]);
    } else {
      setPersonesCopia([...persones]);
    }
  }

  //filtrar
  function filterMthd() {

    let campIntro = prompt("Introdueix el camp pel qual filtrar: ", "vVentas");

    if (personesCopia.length > 0 && campIntro) {

      // Apliquem el filtre sobre les ventes superior a 0:
      let arrayFiltrat = persones.filter(
        (Client) => Client.vVentas > 0
      );

      let arrayPersonasFiltradas = [];
      arrayFiltrat.forEach((element) => {
        arrayPersonasFiltradas.push(element);
      });

      setPersonesCopia([...arrayPersonasFiltradas]);

    } else {
      setPersonesCopia([...persones]);
    }
  }

  return (
    <>
      <h3>Web Component React</h3>
      <h1>{titol}</h1>
      <div>
        <Rllista cap={capcalera} dades={personesCopia} total={totalitzar} />
        <button onClick={actTitol}>Titol</button>
        <button onClick={addCap}>Afegir capcelera</button>
        <button onClick={afegirPersones}>Afegir Persones</button>
        <button onClick={afegirClients}>Afegir Clients</button>
        <button onClick={afegirTreballadors}>Afegir Treballadors</button>
        <button onClick={totalitzarCamp}>Totalitzar</button>
        <button onClick={sortMthd}>Ordenar</button>
        <button onClick={filterMthd}>Filtrar</button>
      </div>
    </>
  );
}
