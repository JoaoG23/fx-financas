import moment from "moment-timezone";

export const formataHoraPadraoBR = ( data: string ) => {
    return moment(data).utc(true).format('HH:mm:ss');
}