import { useQuery } from "react-query";
import { buscarTodosSubelementos } from "./api";
import { toast } from "react-toastify";
import { SpinnerCarregamento } from "../../spinners/SpinnerCarregamento";


import * as  Selects  from './styles';

type Props = {
  label?: string;
  name: string;
  register: any;
  desativar?: boolean;
  requirido?: boolean;
  elementosId?:string;
};

export const SublementoSelect: React.FC<Props> = ({
  label,
  name,
  register,
  desativar = false,
  requirido = true,

  elementosId
}) => {



  const { isLoading, data } = useQuery(
    ["subelementos-usuario",elementosId ],
    () =>
      buscarTodosSubelementos({
        elementosId: elementosId!,
      }),
    {
      onError: (error: any) => {
        toast.error(`Houve um error: ${error.response.data}`);
      },
    }
  );

  const subelementos = data?.data[1];

  return (
    <Selects.ContainerInput>
      {isLoading && <SpinnerCarregamento />}

      <strong>{label}</strong>

      <Selects.Container
        {...register(name, { required: requirido })}
        disabled={desativar}
      >
        <option value={""}> Selecione Item</option>
        {subelementos?.map((option: any) => (
          <option key={option?.id} value={option?.id!}>
            {option?.descricao}
          </option>
        ))}
      </Selects.Container>
    </Selects.ContainerInput>
  );
};
