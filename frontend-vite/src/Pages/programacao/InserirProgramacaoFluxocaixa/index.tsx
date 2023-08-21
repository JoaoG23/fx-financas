import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { capturarTodosItemsProgramacaoPorUsuariosId } from "./api";
import { useMutation, useQueryClient } from "react-query";
import { toast } from "react-toastify";
import { DeletarModal } from "../../../Components/Modais/DeletarModal";
import { ModalCarregando } from "../../../Components/Modais/ModalCarregando";
import { ModalSucesso } from "../../../Components/Modais/ModalSucesso";
import { navegarAtePaginaDepoisTempo } from "../../../utils/navegarAtePaginaDepoisTempo/navegarAtePaginaDepoisTempo";

export const InserirProgramacaoFluxocaixa: React.FC = () => {
  const queryClient = useQueryClient();
  const navigate = useNavigate();

  const [modalPrincipal, setModalPrincipal] = useState<boolean>(true);

  const { mutate, isLoading, isSuccess } = useMutation(
    async () => await capturarTodosItemsProgramacaoPorUsuariosId(),
    {
      onError: (error: any) => {
        toast.error(`Ops! Houve um error: ${error.response.data}`);
      },
      onSuccess: () => {
        queryClient.invalidateQueries("listar-um-programacao");
        queryClient.invalidateQueries("listar-programacao-por-pagina");
        setModalPrincipal(false);
        navegarAtePaginaDepoisTempo(navigate, -1);
      },
    }
  );

  return (
    <main>
      {isSuccess && <ModalSucesso />}
      {isLoading && <ModalCarregando />}
      {modalPrincipal && (
        <DeletarModal
          confirmar={async () => await mutate()}
          negar={() => navigate(-1)}
          carregamento={isLoading}
        />
      )}
    </main>
  );
};
