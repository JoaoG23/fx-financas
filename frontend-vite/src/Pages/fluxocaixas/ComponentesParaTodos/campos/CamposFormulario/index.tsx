import React from "react";
import "react-toastify/dist/ReactToastify.css";

import * as Form from "./styles";

import { useElementoStore } from "../../../../../stores/useElementoStore/useElementoStore";
import { useSubelementoStore } from "../../../../../stores/useSubelementoStore/useSubelementoStore";
import { useTiposStore } from "../../../../../stores/useTiposStore/useTiposStore";

import { InputDefault } from "../../../../../Components/Inputs/InputDefault";
import { SecondaryButton } from "../../../../../Components/Buttons/SecondaryButton/ButtonDark";
import { SublementoSelect } from "../../../../../Components/selects/SubelementoSelect";
import { ElementoSelect } from "../../../../../Components/selects/ElementoSelect";

import { AlertCampoVazio } from "../../../../../Components/alerts/AlertCampoVazio";
import { TiposSelect } from "../../../../../Components/selects/TiposSelect";
import { SubtiposSelect } from "../../../../../Components/selects/SubtiposSelect";
import { converterNullParaVazio } from "../../../../../utils/conversao/converteNullParaVazio/converteNullParaVazio";
import { LocaisSelect } from "../../../../../Components/selects/LocaisSelect";
import { TipoDespesaSelect } from "../../../../../Components/selects/TipoDespesaSelect";

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
                requirido={false}
                register={register}
                control={control}
                name="elementosId"
                label="Elemento"
              />
            </div>
            <div>
              <SublementoSelect
                requirido={false}
                register={register}
                elementosId={elemento?.value!}
                control={control}
                name="subelementosId"
                label={converterNullParaVazio(elemento?.label)}
              />
            </div>
            <div>
              <TiposSelect
                requirido={false}
                register={register}
                subelementosId={subelemento?.value!}
                control={control}
                name="tiposId"
                label={converterNullParaVazio(subelemento?.label)}
              />
            </div>
            <div>
              <SubtiposSelect
                requirido={false}
                register={register}
                tiposId={tipos?.value!}
                control={control}
                name="subtiposId"
                label={converterNullParaVazio(tipos?.label)}
              />
            </div>
            <div>
              <LocaisSelect
                requirido={false}
                register={register}
                name="locaisId"
                control={control}
                label="Locais"
              />
            </div>
            <div>
              <TipoDespesaSelect
                requirido={false}
                register={register}
                name="tipos_despesasId"
                control={control}
                label="Tipos Despesa"
              />
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
          </div>
        </Form.ObservacoesLinha>
      </Form.Campos>
      <footer>
        <SecondaryButton>Salvar + </SecondaryButton>
      </footer>
    </Form.Container>
  );
};
