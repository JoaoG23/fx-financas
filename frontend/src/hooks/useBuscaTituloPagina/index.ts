import { useSearchParams } from 'react-router-dom';


export const useBuscaTituloPagina = () => {

  let [nomeSubelemento] = useSearchParams();
  const tituloPagina = nomeSubelemento.get("titulo");
  return { tituloPagina };
}
