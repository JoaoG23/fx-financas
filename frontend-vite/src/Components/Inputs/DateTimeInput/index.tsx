import React from "react";
// import Form from "react-bootstrap/Form";
import ReactDatePicker, { registerLocale } from "react-datepicker";

import {
	Control,
	Controller,
	FieldValues,
	UseFormRegister,
} from "react-hook-form";

// import ptBR from "date-fns/locale/pt-BR
import moment from "moment";
// registerLocale("ptBR", ptBR);

moment.tz.setDefault("America/sao_paulo");

type Props = {
	label?: string;
	name: string;
	placeholder?: string;
	register: UseFormRegister<FieldValues> | any;
	control?: Control<FieldValues, any>;
	tamanhoMaximo?: number;
	valorPadrao?: string;
	desativar?: boolean;
	requirido?: boolean;
};

export const DateTimeInput: React.FC<Props> = ({
	valorPadrao,
	control,
	label,
	name,
	placeholder,
	register,
	tamanhoMaximo,
	desativar = false,
	requirido = true,
}) => {
	return (
		<div >
			<strong>{label}</strong>
			<Controller
				control={control}
				name={name}
				render={({ field: { ref, value, ...fieldProps } }) => {
					return (
						<ReactDatePicker
							{...fieldProps}
							className="form-control"
							placeholderText="Selecione uma data"
							selected={value}
							ref={ref}
							locale="ptBR"
							showTimeSelect
							timeFormat="p"
							// dateFormat="dd-MM-yyyy HH:mm:ss"
							timeIntervals={15}
							dateFormat="Pp"
						/>
					);
				}}
				rules={{ required: requirido }}
			/>
		</div>
	);
};
