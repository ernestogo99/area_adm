import Iconsulta from "../interfaces/iconsulta";
import Iprofissional from "../interfaces/iprofissional";

interface Idados {
  nome: string;
  consultas: number;
}

interface props {
  profissionais: Iprofissional[] | null;
  consultas: Iconsulta[] | null;
}

const useDadosGrafico = ({ profissionais, consultas }: props) => {
  let dados: Array<Idados> = [];

  if (profissionais && consultas) {
    dados = profissionais.map((profissional) => ({
      nome: profissional.nome,
      consultas: consultas.filter((consulta) =>
        consulta.profissional.some((prof) => prof.nome === profissional.nome)
      ).length,
    }));
  }

  return dados;
};

export default useDadosGrafico;
