import moment from "moment";

export const buscaDatahoraAtual = () => {
  return moment().utc(true).format();
};
