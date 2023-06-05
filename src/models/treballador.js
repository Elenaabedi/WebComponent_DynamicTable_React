import { Persona } from './persona.js';

class Treballador extends Persona {
    constructor(idni, inom, icognom, iprovincia, idireccio, icarrec) {
        super(idni, inom, icognom, iprovincia, idireccio);
        this.carrec = icarrec;
    }



}

export { Treballador };