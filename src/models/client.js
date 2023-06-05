import { Persona } from './persona.js';

class Client extends Persona {
    constructor(idni, inom, icognom, iprovincia, idireccio, inif, iempresa, ivolumventes) {
        super(idni, inom, icognom, iprovincia, idireccio);
        this.nif = inif;
        this.empresa = iempresa;
        this.vVentas = ivolumventes;
    }

}

export { Client };