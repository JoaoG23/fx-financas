import React from "react";
import "react-toastify/dist/ReactToastify.css";

import * as Form from "./styles";

import { useElementoStore } from "../../../../../stores/useElementoStore/useElementoStore";
import { useSubelementoStore } from "../../../../../stores/useSubelementoStore/useSubelementoStore";
import { useTiposStore } from "../../../../../stores/useTiposStore/useTiposStore";

import { InputDefault } from "../../../../../Components/Inputs/InputDefault";
import { SublementoSelect } from "../../../../../Components/selects/SubelementoSelect";
import { ElementoSelect } from "../../../../../Components/selects/ElementoSelect";
import { AlertCampoVazio } from "../../../../../Components/alerts/AlertCampoVazio";
import { TiposSelect } from "../../../../../Components/selects/TiposSelect";
import { SubtiposSelect } from "../../../../../Components/selects/SubtiposSelect";

import { converterNullParaVazio } from "../../../../../utils/conversao/converteNullParaVazio/converteNullParaVazio";

import { LocaisSelect } from "../../../../../Components/selects/LocaisSelect";
import { TipoDespesaSelect } from "../../../../../Components/selects/TipoDespesaSelect";
import { LightButton } from "../../../../../Components/Buttons/LightButton";
import { useNavigate } from "react-router-dom";

type Props = {
  register: any;
  control: any;
  errors: any;
};

export const VisualizarCamposFormulario: React.FC<Props> = ({
  register,
  control,
  errors,
}) => {
  const elemento = useElementoStore((state) => state?.elemento!);
  const subelemento = useSubelementoStore((state) => state?.subelemento!);
  const tipos = useTiposStore((state) => state?.tipos!);

  return (
    <Form.Container role="form">
      <Form.Campos>
        <Form.UmaColuna>
          <main>
            <div>
              <ElementoSelect
                desativar
                register={register}
                control={control}
                name="elementosId"
                label="Elemento"
              />
              {errors?.elementosId?.type === "required" && (
                <AlertCampoVazio mensagem="Campo elemento vazio! Por gentileza preencher-o!" />
              )}
            </div>
            <div>
              <SublementoSelect
                desativar
                register={register}
                elementosId={elemento}
                control={control}
                name="subelementosId"
                label={'Subelemento'}
              />
              {errors?.subelementosId?.type === "required" && (
                <AlertCampoVazio mensagem="Campo subelemento vazio! Por gentileza preencher-o!" />
              )}
            </div>
            <div>
              <TiposSelect
                desativar
                register={register}
                subelementosId={subelemento}
                control={control}
                name="tiposId"
                label={'Tipo'}
              />
              {errors?.tiposId?.type === "required" && (
                <AlertCampoVazio mensagem="Campo tipo vazio! Por gentileza preencher-o!" />
              )}
            </div>
            <div>
              <SubtiposSelect
                desativar
                register={register}
                requirido={false}
                tiposId={tipos}
                control={control}
                name="subtiposId"
                label={'Subtipo'}
              />
              {errors?.subtiposId?.type === "required" && (
                <AlertCampoVazio mensagem="Campo Subtipo vazio! Por gentileza preencher-o!" />
              )}
            </div>
            <div>
              <LocaisSelect
                desativar
                register={register}
                name="locaisId"
                control={control}
                label="Locais"
              />
              {errors?.locaisId?.type === "required" && (
                <AlertCampoVazio mensagem="Campo locais vazio! Por gentileza preencher-o!" />
              )}
            </div>
            <div>
              <TipoDespesaSelect
                desativar
                register={register}
                name="tipos_despesasId"
                control={control}
                label="Tipos Despesa"
              />
              {errors?.tipos_despesasId?.type === "required" && (
                <AlertCampoVazio mensagem="Campo tipo despesa vazio! Por gentileza preencher-o!" />
              )}
            </div>
            <div>
              <InputDefault
                desativar
                name="valor"
                placeholder="Digite o valor do Item"
                register={register}
                label="Valor"
              />
              {errors?.valor?.type === "required" && (
                <AlertCampoVazio mensagem="Campo valor vazio! Por gentileza preencher-o!" />
              )}
            </div>
          </main>
        </Form.UmaColuna>

        <Form.ObservacoesLinha>
          <div>
            <InputDefault
              desativar
              placeholder="Digite alguma descrição do item..."
              type="text"
              name="descricao"
              register={register}
              label="Descrição do Item"
            />
            {errors?.descricao?.type === "required" && (
              <AlertCampoVazio mensagem="Campo elemento vazio! Por gentileza preencher-o!" />
            )}
          </div>
        </Form.ObservacoesLinha>
      </Form.Campos>
    </Form.Container>
  );
};
