import facebook from "../../assets/facebook.png";
import instagram from "../../assets/instagram.png";
import wpp from "../../assets/whatsapp.png";
import google from "../../assets/google.png";
import styled from "styled-components";

interface IImage {
  src: string;
  alt: string;
}

const Rodapeestilizado = styled.footer`
  height: 100%;
  color: white;
  padding: 1em;
  background-color: var(--azul-escuro);
  text-align: center;
`;

const Listaestilizada = styled.ul`
  display: flex;
  justify-content: space-around;
  width: 10%;
  margin: 1em auto;
`;

const Itemestilizado = styled.li`
  list-style-type: none;
`;

export const Rodape = () => {
  const lista_img: IImage[] = [
    { src: facebook, alt: "Facebook" },
    { src: instagram, alt: "Instagram" },
    { src: wpp, alt: "whatsapp" },
    { src: google, alt: "google" },
  ];
  return (
    <Rodapeestilizado>
      <Listaestilizada>
        {lista_img.map((img) => (
          <Itemestilizado key={img.src}>
            <a href="#">
              <img src={img.src} alt={img.alt}></img>
            </a>
          </Itemestilizado>
        ))}
      </Listaestilizada>
      <p>Desenvolvido por ernestogo</p>
    </Rodapeestilizado>
  );
};
