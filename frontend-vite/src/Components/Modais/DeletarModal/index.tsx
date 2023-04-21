import React from "react";
import { QuestionamentoModal } from "../ModalQuestiomento";
import ButtonDefault from "../../Buttons/ButtonDefault/ButtonDark";
import { SecondaryButton } from "../../Buttons/SecondaryButton/ButtonDark";

type Props = {
  confirmar?: () => Promise<any>;
  negar?: () => any;
  carregamento?: boolean;
};

export const DeletarModal: React.FC<Props> = ({
  confirmar,
  negar,
  carregamento = false,
}) => {
  return (
    <QuestionamentoModal>
      <p>Você deseja deletar este elemento</p>
      <div className="d-flex gap-1">
        <ButtonDefault onClick={confirmar}>
            Sim{carregamento && <p>Carregando ...</p> as any}
        </ButtonDefault>
        <SecondaryButton onClick={negar}>Não</SecondaryButton>
      </div>
    </QuestionamentoModal>
  );
};
