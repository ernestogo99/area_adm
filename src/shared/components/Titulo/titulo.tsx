import React, { ReactNode } from "react";
import avaliacao from "../../assets/avaliacao.png";
import consulta from "../../assets/consulta.png";
import grafico from "../../assets/grafico.png";
import styled from "styled-components";

interface tituloprop {
  imagem?: string;
  children?: ReactNode;
}

interface Iimagem {
  avaliacao: string;
  consulta: string;
  grafico: string;
}

const Span_estilizado = styled.span<tituloprop>`
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  width: 25px;
  height: 25px;
  background-image: ${(tituloprop) =>
    tituloprop.imagem ? `url(${tituloprop.imagem})` : "none"};
`;

const Tituloestilizado = styled.h2`
  color: var(--azul-claro);
`;

const Containerestilizado = styled.div`
  display: flex;
  align-items: center;
`;

export const Titulo: React.FC<tituloprop> = ({ imagem, children }) => {
  const lista_de_imagens: Iimagem = {
    avaliacao: avaliacao,
    grafico: grafico,
    consulta: consulta,
  };
  return (
    <Containerestilizado>
      {imagem && (
        <Span_estilizado
          imagem={lista_de_imagens[imagem as keyof Iimagem]}
        ></Span_estilizado>
      )}
      <Tituloestilizado>{children}</Tituloestilizado>
    </Containerestilizado>
  );
};
