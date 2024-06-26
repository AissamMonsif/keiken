import { Propostion } from "./proposition";

export class User {
  id:number;
  name:string;
  location:any;
  weather:any;
  propositionGPT: Propostion;
  propositions?: Propostion[];
}
