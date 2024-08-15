import Iprofissional from "./iprofissional";

export default interface Iconsulta extends Iprofissional {
  id: number;
  data: string;
  horario: string;
  profissional: Iprofissional[];
  paciente: string;
  modalidade: string;
}
