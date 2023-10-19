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
import { CheckBoxRadio } from "../../../../../Components/checkboxs/CheckBoxRadio";

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
                label="Meio de movimentação"
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
          </main>
        </Form.UmaColuna>
        <Form.ContainerEntradaSaida>
          <strong>Selecione entrada ou saida:</strong>
          <Form.ContainerRadios>
            <CheckBoxRadio
              name="entradaSaida"
              register={register}
              valorPadrao={"entrada"}
            />
            <label>
              Entrada
              <FiArrowUp size={20} color="#1CAF82" />
            </label>
          </Form.ContainerRadios>
          <Form.ContainerRadios>
            <label>
              Saída
              <FiArrowDown size={20} color="#F78187" />
            </label>
            <CheckBoxRadio
              name="entradaSaida"
              register={register}
              valorPadrao={"saida"}
            />
          </Form.ContainerRadios>
          <div>
            {errors?.entradaSaida?.type === "required" && (
              <AlertCampoVazio mensagem="Campo entrada ou saida não selecionado! Por gentileza preencher-o!" />
            )}
          </div>
        </Form.ContainerEntradaSaida>
        <Form.UmaColuna>
          <div>
            <InputDefault
              requirido={false}
              type="text"
              name="descricao"
              register={register}
              label="Digite alguma observação"
            />
          </div>
        </Form.UmaColuna>
        <Form.UmaColuna>
          <SecondaryButton>
            <p>Salvar</p>
            <AiFillPlusCircle size={20} />
          </SecondaryButton>
        </Form.UmaColuna>
      </Form.Campos>
    </Form.Container>
  );
};
