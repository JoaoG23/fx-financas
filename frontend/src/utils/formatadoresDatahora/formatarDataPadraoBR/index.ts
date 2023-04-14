import moment from "moment-timezone";
export const formataDataPadraoBR = ( data: string ) => {
    return moment.utc(data).format('L');
}