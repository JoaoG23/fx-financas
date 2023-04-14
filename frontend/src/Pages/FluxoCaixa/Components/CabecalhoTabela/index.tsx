import React from "react";


export const CabecalhoTabela: React.FC = () => {
  return (
    <thead>
      <tr>
        <th>Id</th>
        <th>Data Insersão</th>
        <th>Hora Insersão</th>
        <th>Elemento</th>
        <th>Subelemento</th>
        <th>Tipo</th>
        <th>Subtipo</th>
        <th>Descrição Gasto</th>
        <th>Valor</th>
        <th>Saldo Atual</th>
        <th>Acoes</th>
      </tr>
    </thead>
  );
};

