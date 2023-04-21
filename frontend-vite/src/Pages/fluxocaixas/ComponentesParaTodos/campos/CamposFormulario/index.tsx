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
import { LocaisSelect } from "../../../../../Components/selects/LocaisSelect";
import { converterNullParaVazio } from "../../../../../utils/conversao/converteNullParaVazio/converteNullParaVazio";
import { TextAreaDefault } from "../../../../../Components/Inputs/TextAreaDefault";

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
                tiposId={tipos?.value!}
                control={control}
                name="tiposId"
                label={converterNullParaVazio(tipos?.label)}
              />
              {errors?.tiposId?.type === "required" && (
                <AlertCampoVazio mensagem="Campo tipos vazio! Por gentileza preencher-o!" />
              )}
            </div>
            <div>
              <LocaisSelect
                name="locaisId"
                control={control}
                label="Credito ou Debito"
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
            <TextAreaDefault
              placeholder="Digite alguma descrição referente ao item salvado..."
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
