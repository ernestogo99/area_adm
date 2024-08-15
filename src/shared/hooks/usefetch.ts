import axios from "axios";

import { useEffect, useState } from "react";

const useFetch = <T>({ url }: { url: string }) => {
  const [dados, setdados] = useState<T | null>(null);
  const [erro, seterro] = useState("");

  useEffect(() => {
    axios(`http://localhost:3001/${url}`)
      .then((dados) => setdados(dados.data))
      .catch((error) => seterro(error));
  }, [url]);

  return { dados, erro };
};

export default useFetch;
