import { OperacaoAgendamento } from "../../../../../../../../types/OperacaoAgendamento";

export const agendamentosMocadoTestes :OperacaoAgendamento[]= [
	{
		id: 53,
		codigo_agendamento: "61750202-C7DF-40C0-A9D9-9A2E127CFC19",
		senha: "PR03",
		tipo: "S",
		data_agendamento: "2023-02-13T00:00:00.000Z",
		hora_inicio: "1970-01-01T13:00:00.000Z",
		hora_fim: "1970-01-01T15:00:00.000Z",
		nome_motorista: "",
		cpf_motorista: "",
		placa_veiculo: "",
		clientesIdCliente: "CL03",
		docaIddoca: '',
		tipoveiculoIdveiculo: "VR03",
		transportadoraIdtransportadora: "TR01",
		fornecedoresIdFornecedor: '',
		doca: {
			descricao:""
		},
		fornecedores:{
			razaoSocial:""
		},
		clientes: {
			razaoSocial: "Lucca e Laís Pães e Doces.ltda",
		},
		transportadora: {
			razaoSocial: "Leva Leva Transportes.ltda",
		},
		tipoveiculo: {
			veiculo: "Van",
		},
	}
];
