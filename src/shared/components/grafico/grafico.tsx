import { Bar, BarChart, ResponsiveContainer, XAxis, YAxis } from "recharts";
import Iconsulta from "../../interfaces/iconsulta";
import Iprofissional from "../../interfaces/iprofissional";
import React from "react";
import useDadosGrafico from "../../hooks/usedadosgrafico";
import styled from "styled-components";

interface Igrafico {
  profissionais: Iprofissional[] | null;
  consultas: Iconsulta[] | null;
}
interface Idados {
  nome: string;
  consultas: number;
}

const SecaoEstilizada = styled.section`
  background-color: var(--branco);
  border-radius: 16px;
`;

export const Grafico: React.FC<Igrafico> = ({ profissionais, consultas }) => {
  let dados: Array<Idados> = useDadosGrafico({ profissionais, consultas });

  return (
    <SecaoEstilizada>
      <ResponsiveContainer width="100%" height={350}>
        <BarChart
          layout="vertical"
          data={dados}
          margin={{ top: 25, right: 40, left: 40, bottom: 20 }}
        >
          <XAxis type="number"></XAxis>
          <YAxis type="category" dataKey="nome"></YAxis>
          <Bar dataKey="consultas" fill="#083860" barSize={30} />
        </BarChart>
      </ResponsiveContainer>
    </SecaoEstilizada>
  );
};
