import React from "react";
import * as Modal from "./styles";

import carregamentoMoeda from "../../../assets/loading-icon-larger.svg";

import { AnimationLoading } from "../../spinners/SpinnerCarregamento/styles";
type Props = {
  children?: JSX.Element[] | JSX.Element;
};

export const ModalCarregando: React.FC<Props> = ({ children }) => (
  <Modal.BackGround>
    <Modal.Body>
      <AnimationLoading src={carregamentoMoeda} alt="loading" />
      <Modal.Title>Carregando ...</Modal.Title>
    </Modal.Body>
  </Modal.BackGround>
);
