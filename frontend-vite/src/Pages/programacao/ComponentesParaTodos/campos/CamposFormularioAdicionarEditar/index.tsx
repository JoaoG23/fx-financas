import {
  Control,
  FieldErrors,
  FieldValues,
  UseFormRegister,
  UseFormSetValue,
} from "react-hook-form";
import React from "react";
import { AiFillPlusCircle } from "react-icons/ai";
import { FiArrowDown, FiArrowUp } from "react-icons/fi";

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
import { LocaisSelect } from "../../../../../Components/selects/LocaisSelect";
import { TipoDespesaSelect } from "../../../../../Components/selects/TipoDespesaSelect";
import { DinheiroInput } from "../../../../../Components/Inputs/DinheiroInput";
import { GreenCheckBoxRadio } from "../../../../../Components/checkboxs/CheckBoxRadioGreen";
import { RedCheckBoxRadio } from "../../../../../Components/checkboxs/CheckBoxRadioRed";
import { LabelDefault } from "../../../../../Components/FontColor/LabelDefault";
import { SwitchDefault } from "../../../../../Components/switchs/SwitchDefault";

type Props = {
  onSubmit?: React.FormEventHandler | any;
  setValue?: UseFormSetValue<FieldValues>;
  register: UseFormRegister<FieldValues>;
  control: Control<FieldValues, any>;
  errors: FieldErrors<FieldValues>;
};

export const CamposFormulario: React.FC<Props> = ({
  onSubmit,
  register,
  control,
  errors,
  setValue,
}) => {
  const elemento = useElementoStore((state) => state?.elemento!);
  const subelemento = useSubelementoStore((state) => state?.subelemento!);
  const tipos = useTiposStore((state) => state?.tipos!);

  return (
    <Form.Container role="form" onSubmit={onSubmit}>
      <section>
        <div>
          <InputDefault
            requirido={false}
            type="text"
            name="descricao"
            register={register}
            label="Digite alguma observação"
          />
        </div>
      </section>
      <Form.QuatroColunas>
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
            elementosId={elemento}
            control={control}
            name="subelementosId"
            label={"Sublemento"}
          />
        </div>
        <div>
          <TiposSelect
            requirido={false}
            register={register}
            subelementosId={subelemento}
            control={control}
            name="tiposId"
            label={"Tipo"}
          />
        </div>
        <div>
          <SubtiposSelect
            requirido={false}
            register={register}
            tiposId={tipos}
            control={control}
            name="subtiposId"
            label={"Subtipos"}
          />
        </div>
      </Form.QuatroColunas>

      <Form.QuatroColunas>
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
          <DinheiroInput
            setValue={setValue!}
            control={control}
            name="valor"
            placeholder="R$ 0,00"
            register={register}
            label="Digite o valor"
          />
          {errors?.valor?.type === "required" && (
            <AlertCampoVazio mensagem="Campo valor vazio! Por gentileza preencher-o!" />
          )}
        </div>

        <div>
          <TipoDespesaSelect
            requirido={false}
            register={register}
            name="tipos_despesasId"
            control={control}
            label="Meio de movimentação"
          />
        </div>
        <Form.ContainerRadios>
          <LabelDefault>
            <p>Selecione</p>
            <p>entrada ou saida:</p>
          </LabelDefault>
          <Form.ContainerRadios>
            <GreenCheckBoxRadio
              name="entradaSaida"
              register={register}
              defaultValue={"entrada"}
            />
            <LabelDefault>
              Entrada
              <FiArrowUp size={20} color="#1CAF82" />
            </LabelDefault>
          </Form.ContainerRadios>
          <Form.ContainerRadios>
            <LabelDefault>
              Saída
              <FiArrowDown size={20} color="#F78187" />
            </LabelDefault>
            <RedCheckBoxRadio
              name="entradaSaida"
              register={register}
              defaultValue={"saida"}
            />
          </Form.ContainerRadios>
          <div>
            {errors?.entradaSaida?.type === "required" && (
              <AlertCampoVazio mensagem="Campo entrada ou saida não selecionado! Por gentileza preencher-o!" />
            )}
          </div>
        </Form.ContainerRadios>
      </Form.QuatroColunas>
      <Form.UmaColuna>
        <LabelDefault>Ativa inserção em fluxo:</LabelDefault>
        <SwitchDefault requirido={false} register={register} name={"ativo"} />
      </Form.UmaColuna>
      <div>
        <SecondaryButton>
          <p>Salvar</p>
          <AiFillPlusCircle size={20} />
        </SecondaryButton>
      </div>
    </Form.Container>
  );
};
