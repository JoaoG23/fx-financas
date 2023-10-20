import { toast } from "react-toastify";
import { useQuery } from "react-query";

import { IoBagHandle } from "react-icons/io5";
import { RiMoneyDollarCircleFill } from "react-icons/ri";
import { GiReceiveMoney } from "react-icons/gi";
import { MdOutlineCalendarMonth } from "react-icons/md";

import * as DashboardStyle from "./styles";

import { buscarDadosCabecalho } from "./api";

import { Card } from "../../Components/Card";
import { ModalCarregando } from "../../Components/Modais/ModalCarregando";
import { Graficos } from "./components/Graficos";
import { MesSelect } from "../../Components/selects/MesSelect";
import { converterValorEmMoedaBR } from "../../utils/conversao/converterValorEmMoedaBR/converterValorEmMoedaBR";

export const Dashboard = () => {
  const { data: dataCabecalho, isLoading: isLoadingCabecalho } = useQuery(
    "cabecalho-dashboard",
    buscarDadosCabecalho,
    {
      onError: (error: any) => {
        toast.error(`Ops! Houve um error: ${error.response.data}`);
      },
    }
  );

  const totalReceitasEsteMes = dataCabecalho?.[0].data || 0;
  const totalDespesasEsteMes = dataCabecalho?.[1].data || 0;
  const saldoAtual = dataCabecalho?.[2].data || 0;

  const receitasConvertida = converterValorEmMoedaBR(totalReceitasEsteMes)
  const despesasConvertida = converterValorEmMoedaBR(totalDespesasEsteMes)
  const saldoAtualConvertida = converterValorEmMoedaBR(saldoAtual)

  const tamanhoIcones = 60;
  return (
    <DashboardStyle.Container>
      {isLoadingCabecalho && <ModalCarregando />}
      <DashboardStyle.Cabecalho>
        <Card light>
          <DashboardStyle.Caixa>
            <div>
              <h3>Receitas mês</h3>
              <h2>{receitasConvertida}</h2>
            </div>
            <RiMoneyDollarCircleFill size={tamanhoIcones} color="#FFA26B" />
          </DashboardStyle.Caixa>
        </Card>

        <Card light>
          <DashboardStyle.Caixa>
            <div>
              <h3>Despesas mês</h3>
              <h2>{despesasConvertida} </h2>
            </div>
            <IoBagHandle size={tamanhoIcones} color="#6979F8" />
          </DashboardStyle.Caixa>
        </Card>

        <Card light>
          <DashboardStyle.Caixa>
            <div>
              <h3>Saldo atual</h3>
              <h2>{saldoAtualConvertida} </h2>
            </div>
            <GiReceiveMoney size={tamanhoIcones} color="#0acc8e" />
          </DashboardStyle.Caixa>
        </Card>
        <Card light>
          <DashboardStyle.Caixa>
            <div>
              <strong>Selecione um mês</strong>
              <MesSelect />
            </div>
            <MdOutlineCalendarMonth size={tamanhoIcones} color="#F78187" />
          </DashboardStyle.Caixa>
        </Card>
      </DashboardStyle.Cabecalho>
      <DashboardStyle.Titulo>Despesas</DashboardStyle.Titulo>
      <Graficos />
    </DashboardStyle.Container>
  );
};
