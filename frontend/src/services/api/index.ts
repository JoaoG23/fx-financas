import { useState, useEffect } from "react";
import { AxiosRequestConfig } from "axios";

import { endpoint } from "../endpoint";

export const useFetch = <T = unknown>(
  url: string,
  options: AxiosRequestConfig
) => {
  const [dados, setDados] = useState<T | null>(null);
  const [isCarregando, setIsCarregando] = useState(false);
  const [error, setError] = useState<any | null>(null);

  useEffect(() => {
    setIsCarregando(true);
    endpoint(url, options)
      .then((response) => {
        setDados(response.data);
      })
      .catch((err) => {
        setError(err);
      })
      .finally(() => {
        setIsCarregando(false);
      });
  }, []);

  const refetch = () => {
    setIsCarregando(true);
    endpoint(url, options)
      .then((response) => {
        setDados(response.data);
      })
      .catch((err) => {
        setError(err);
      })
      .finally(() => {
        setIsCarregando(false);
      });
  };

  return { dados, setDados, isCarregando, error, setError, refetch };
};
