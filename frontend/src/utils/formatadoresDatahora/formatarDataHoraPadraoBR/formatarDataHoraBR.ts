import moment from 'moment';

export const formatarDataHoraPadraoBR = (datahora:string | Date) => {
  return moment.utc(datahora).format('DD/MM/YYYY HH:mm:ss');
}
