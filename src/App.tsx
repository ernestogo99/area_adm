import "./App.css";
import {
  Avaliacao,
  Botao,
  Cabecalho,
  Container,
  Grafico,
  Rodape,
  Subtitulo,
  Tabela,
  Titulo,
} from "./shared/components";
import useDadosConsulta from "./shared/hooks/usedadosconulta";
import useDadosProfissionais from "./shared/hooks/usedadosprofissionais";

function App() {
  const { dados: consultas, erro: consultaserror } = useDadosConsulta();
  const { dados: profissionais, erro: profissionaiserror } =
    useDadosProfissionais();

  if (consultaserror || profissionaiserror) {
    console.log("ocorreu  um erro na requisição");
  }

  return (
    <div className="App">
      <Cabecalho />
      <Container>
        <Titulo>Área Administrativa</Titulo>
        <Botao>Cadastrar especialista</Botao>
        <Titulo imagem="consulta">Consultas do Dia</Titulo>
        <Tabela consulta={consultas} />
        <Titulo imagem="grafico">Consultas mensais por especialista</Titulo>
        <Subtitulo>Dezembro/22</Subtitulo>
        <Grafico consultas={consultas} profissionais={profissionais} />
        <Titulo imagem="avaliacao">Avaliações de especialistas</Titulo>
        <Avaliacao profissionais={profissionais} />
      </Container>
      <Rodape />
    </div>
  );
}

export default App;
