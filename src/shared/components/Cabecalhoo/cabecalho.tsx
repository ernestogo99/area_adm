import styled from "styled-components";
import logo from "../../assets/logo.png";
import perfil from "../../assets/perfil.png";

const Cabecalho_estilizado = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 2em 4em;
`;

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  flex-grow: 0.1;
`;

const Linkestilizado = styled.a`
  color: var(--azul-escuro);
  font-weight: 700;
`;

export const Cabecalho = () => {
  return (
    <Cabecalho_estilizado>
      <img src={logo} alt="logo da empresa"></img>
      <Container>
        <img src={perfil} alt="imagem de perfil"></img>
        <Linkestilizado href="#">Sair</Linkestilizado>
      </Container>
    </Cabecalho_estilizado>
  );
};
