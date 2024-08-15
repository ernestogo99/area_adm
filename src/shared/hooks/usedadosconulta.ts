import Iconsulta from "../interfaces/iconsulta";
import useFetch from "./usefetch";

const useDadosConsulta = () => {
  return useFetch<Iconsulta[]>({ url: "consultas" });
};

export default useDadosConsulta;
