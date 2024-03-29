import { ChangeEvent, useEffect } from "react";
import * as Selects from "./styles";
import { useMesStore } from "../../../stores/useMesStore/useMesStore";

type Props = {
  label?: string;
  setValue?: any;
};

export const MesSelect: React.FC<Props> = ({ label }) => {
  const selecionarMes = useMesStore((state) => state.adicionarMes);
  const mes = useMesStore((state) => state?.mes!);

  const meses = [
    { value: 1, nome: "Janeiro" },
    { value: 2, nome: "Fevereiro" },
    { value: 3, nome: "Março" },
    { value: 4, nome: "Abril" },
    { value: 5, nome: "Maio" },
    { value: 6, nome: "Junho" },
    { value: 7, nome: "Julho" },
    { value: 8, nome: "Agosto" },
    { value: 9, nome: "Setembro" },
    { value: 10, nome: "Outubro" },
    { value: 11, nome: "Novembro" },
    { value: 12, nome: "Dezembro" },
  ];

  const handleSelectChange = (event: ChangeEvent<HTMLSelectElement>) => {
    selecionarMes(Number(event.target.value));
  };

  return (
    <Selects.ContainerInput>
      <label>{label}</label>
      <Selects.Container
        defaultValue={mes as any}
        onChange={(e) => {
          handleSelectChange(e);
        }}
      >
        {meses?.map((option) => (
          <option key={option?.value} value={option?.value}>
            {option?.nome}
          </option>
        ))}
      </Selects.Container>
    </Selects.ContainerInput>
  );
};
