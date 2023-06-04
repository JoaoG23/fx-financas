import React from "react";
import "react-toastify/dist/ReactToastify.css";

import * as Form from "./styles";
import { InputDefault } from "../../../../../Components/Inputs/InputDefault";
import { SecondaryButton } from "../../../../../Components/Buttons/SecondaryButton/ButtonDark";
import { SublementoSelect } from "../../../../../Components/selects/SubelementoSelect";
import { ElementoSelect } from "../../../../../Components/selects/ElementoSelect";
import { useElementoStore } from "../../../../../stores/useElementoStore/useElementoStore";
import { AlertCampoVazio } from "../../../../../Components/alerts/AlertCampoVazio";
import { useSubelementoStore } from "../../../../../stores/useSubelementoStore/useSubelementoStore";
import { TiposSelect } from "../../../../../Components/selects/TiposSelect";
import { useTiposStore } from "../../../../../stores/useTiposStore/useTiposStore";
import { SubtiposSelect } from "../../../../../Components/selects/SubtiposSelect";
import { converterNullParaVazio } from "../../../../../utils/conversao/converteNullParaVazio/converteNullParaVazio";
import { TipoGastoSelect } from "../../../../../Components/selects/TipoGastoSelect";
import { LocaisSelect } from "../../../../../Components/selects/LocaisSelect";

type Props = {
  onSubmit?: React.FormEventHandler | any;
  register: any;
  control: any;
  errors: any;
};

export const CamposFormulario: React.FC<Props> = ({
  onSubmit,
  register,
  control,
  errors,
}) => {
  const elemento = useElementoStore((state) => state?.elemento!);
  const subelemento = useSubelementoStore((state) => state?.subelemento!);
  const tipos = useTiposStore((state) => state?.tipos!);

  return (
    <Form.Container role="form" onSubmit={onSubmit}>
      <Form.Campos>
        <Form.UmaColuna>
          <main>
            <div>
              <ElementoSelect
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
                register={register}
                elementosId={elemento?.value!}
                control={control}
                name="subelementosId"
                label={converterNullParaVazio(elemento?.label)}
              />
              {errors?.subelementosId?.type === "required" && (
                <AlertCampoVazio mensagem="Campo subelemento vazio! Por gentileza preencher-o!" />
              )}
            </div>
            <div>
              <TiposSelect
                register={register}
                subelementosId={subelemento?.value!}
                control={control}
                name="tiposId"
                label={converterNullParaVazio(subelemento?.label)}
              />
              {errors?.tiposId?.type === "required" && (
                <AlertCampoVazio mensagem="Campo tipo vazio! Por gentileza preencher-o!" />
              )}
            </div>
            <div>
              <SubtiposSelect
                register={register}
                requirido={false}
                tiposId={tipos?.value!}
                control={control}
                name="subtiposId"
                label={converterNullParaVazio(tipos?.label)}
              />
              {errors?.subtiposId?.type === "required" && (
                <AlertCampoVazio mensagem="Campo Subtipo vazio! Por gentileza preencher-o!" />
              )}
            </div>
            <div>
              <LocaisSelect
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
              <InputDefault
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
      <footer>
        <SecondaryButton>Salvar + </SecondaryButton>
      </footer>
    </Form.Container>
  );
};
