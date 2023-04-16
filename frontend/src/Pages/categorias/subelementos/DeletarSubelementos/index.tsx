import React, { useState } from "react";
import { DeletarModal } from "../../../../Components/Modais/DeletarModal";
import { useNavigate, useParams } from "react-router-dom";
import { deletarSublementoPorId } from "./api";
import { useMutation, useQueryClient } from "react-query";
import { navegarAtePaginaDepoisTempo } from "../../../../utils/navegarAtePaginaDepoisTempo/navegarAtePaginaDepoisTempo";
import { toast } from "react-toastify";
import { ModalSucesso } from "../../../../Components/Modais/ModalSucesso";
import { ModalCarregando } from "../../../../Components/Modais/ModalCarregando";

export const DeletarSubelemento: React.FC = () => {
  const queryClient = useQueryClient();
  const navigate = useNavigate();

  const [modalPrincipal, setModalPrincipal] = useState<boolean>(true);

  const { id } = useParams();
  const { mutate, isLoading, isSuccess } = useMutation(
    async () => await deletarSublementoPorId(id!),
    {
      onError: (error: any) => {
        toast.error(`Ops! Houve um error: ${error.response.data}`);
      },
      onSuccess: () => {
        queryClient.invalidateQueries("listar-um-subelemento");
        queryClient.invalidateQueries("listar-subelementos-por-pagina");
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
