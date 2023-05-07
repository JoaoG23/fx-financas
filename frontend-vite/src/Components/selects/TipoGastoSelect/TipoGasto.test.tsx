import "@testing-library/jest-dom";
import { fireEvent, render } from "@testing-library/react";

import { describe, test, expect } from "vitest";
import { TipoGastoSelect } from ".";
import { QueryClient, QueryClientProvider } from "react-query";

describe("<TipoGastoSelect />", () => {
  const queryClient = new QueryClient();

  test("should to render in the screen", () => {
    const { getByText, getByLabelText } = render(
      <QueryClientProvider client={queryClient}>
        <TipoGastoSelect
          name={"gasto"}
          register={() => {}}
          opcoes={[
            { id: "A01", descricao: "Item 1" },
            { id: "A02", descricao: "Item 2" },
          ]}
        />
      </QueryClientProvider>
    );

    const option = getByText("Selecione um tipos de gasto");
    expect(option).toBeInTheDocument();

    const select = getByLabelText("tipoGasto");
    expect(select).toBeInTheDocument();
  });

  test("Should able select one when selected one option", () => {
    const { getByDisplayValue, getByLabelText } = render(
      <QueryClientProvider client={queryClient}>
        <TipoGastoSelect
          name={"gasto"}
          register={() => {}}
          opcoes={[
            { id: "A01", descricao: "Item 1" },
            { id: "A02", descricao: "Item 2" },
          ]}
        />
      </QueryClientProvider>
    );
    const select = getByLabelText("tipoGasto");
    expect(select).toBeInTheDocument();

    fireEvent.change(select, {
      target: { value: "A01" },
    });

    expect(getByDisplayValue("Item 1")).toBeInTheDocument();
  });

  test("it verifies if the select element is disabled", () => {
    const { getByLabelText } = render(
      <QueryClientProvider client={queryClient}>
        <TipoGastoSelect name={"gasto"} register={() => {}} desativar />
      </QueryClientProvider>
    );
    const select = getByLabelText("tipoGasto");

    expect(select).toBeDisabled();
  });
});
