import styled from "styled-components";
import Iprofissional from "../../interfaces/iprofissional";
import Card from "./card/card";
import { Botao } from "../botao/botao";

const SecaoCard = styled.section`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  width: 100%;
`;

export const Avaliacao = ({
  profissionais,
}: {
  profissionais: Iprofissional[] | null;
}) => {
  return (
    <>
      <SecaoCard>
        {profissionais?.map((profissional) => (
          <Card key={profissional.id} profissional={profissional}></Card>
        ))}
      </SecaoCard>
      <Botao>Ver mais</Botao>
    </>
  );
};
