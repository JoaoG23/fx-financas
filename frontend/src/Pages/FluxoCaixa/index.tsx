import * as React from "react";
import * as FluxoCaixaStyle from "./styles";

export const FluxoCaixa: React.FC = () => {
  return (
    <FluxoCaixaStyle.Container>
      <header>
        <h3>Fluxo de caixa</h3>
      </header>
      <main>
        <FluxoCaixaStyle.Tabela>
          
          <tr>
            <th>Company</th>
            <th>Contact</th>
            <th>Country</th>
          </tr>
          <tr>
            <td>Alfreds Futterkiste</td>
            <td>Maria Anders</td>
            <td>Germany</td>
          </tr>
          <tr>
            <td>Centro comercial Moctezuma</td>
            <td>Francisco Chang</td>
            <td>Mexico</td>
          </tr>
        </FluxoCaixaStyle.Tabela>
      </main>
    </FluxoCaixaStyle.Container>
  );
};
