import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { deletarUsuarioPorId } from "./api";
import { useMutation, useQueryClient } from "react-query";
import { toast } from "react-toastify";
import { DeletarModal } from "../../../Components/Modais/DeletarModal";
import { ModalCarregando } from "../../../Components/Modais/ModalCarregando";
import { ModalSucesso } from "../../../Components/Modais/ModalSucesso";
import { navegarAtePaginaDepoisTempo } from "../../../utils/navegarAtePaginaDepoisTempo/navegarAtePaginaDepoisTempo";
import { limparSessaoUsuario } from "../../../utils/limparSessaoUsuario";

export const DeletarUsuario: React.FC = () => {
  const queryClient = useQueryClient();
  const navigate = useNavigate();

  const [modalPrincipal, setModalPrincipal] = useState<boolean>(true);

  const { id } = useParams();
  const { mutate, isLoading, isSuccess } = useMutation(
    async () => await deletarUsuarioPorId(id!),
    {
      onError: (error: any) => {
        toast.error(`Ops! Houve um error: ${error.response.data}`);
      },
      onSuccess: () => {
        queryClient.invalidateQueries("usuario-logado-por-id");
        setModalPrincipal(false);
        navegarAtePaginaDepoisTempo(navigate, -1);
        limparSessaoUsuario()
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
