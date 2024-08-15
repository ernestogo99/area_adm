import Iprofissional from "../interfaces/iprofissional";
import useFetch from "./usefetch";

const useDadosProfissionais = () => {
  return useFetch<Iprofissional[]>({ url: "profissionais" });
};

export default useDadosProfissionais;
