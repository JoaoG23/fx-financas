import moment from "moment";

export const formatarDataParaIso = (dataComum: Date | string) => {
	return moment(dataComum).utc(true).format();
};
