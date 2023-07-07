import { toast } from "react-toastify";
import { useQuery } from "react-query";

import { IoBagHandle } from "react-icons/io5";
import { RiMoneyDollarCircleFill } from "react-icons/ri";
import { GiReceiveMoney } from "react-icons/gi";

import * as DashboardStyle from "./styles";

import { buscarDadosCabecalho } from "./api";

import { Card } from "../../Components/Card";
import { ModalCarregando } from "../../Components/Modais/ModalCarregando";
import { Graficos } from "./components/Graficos";

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

  const receitasConvertida = parseFloat(totalReceitasEsteMes).toFixed(2)
  const despesasConvertida = parseFloat(totalDespesasEsteMes).toFixed(2);
  const saldoAtualConvertida = parseFloat(saldoAtual).toFixed(2) ;

  return (
    <DashboardStyle.Container>
      {isLoadingCabecalho && <ModalCarregando />}
      <DashboardStyle.Cabecalho>
        <Card>
          <DashboardStyle.Caixa>
            <div>
              <h3>Total receitas mês</h3>
              <h2>{receitasConvertida}</h2>
            </div>
            <RiMoneyDollarCircleFill size={40} color="#FFA26B" />
          </DashboardStyle.Caixa>
        </Card>

        <Card>
          <DashboardStyle.Caixa>
            <div>
              <h3>Total despesas mês</h3>
              <h2>{despesasConvertida}</h2>
            </div>
            <IoBagHandle size={40} color="#6979F8" />
          </DashboardStyle.Caixa>
        </Card>

        <Card>
          <DashboardStyle.Caixa>
            <div>
              <h3>Saldo atual</h3>
              <h2>{saldoAtualConvertida}</h2>
            </div>
            <GiReceiveMoney size={40} color="#1CAF82" />
          </DashboardStyle.Caixa>
        </Card>
      </DashboardStyle.Cabecalho>
      <Graficos />
    </DashboardStyle.Container>
  );
};
