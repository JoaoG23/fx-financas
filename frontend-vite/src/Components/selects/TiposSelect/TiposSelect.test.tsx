import "@testing-library/jest-dom";
import { fireEvent, render } from "@testing-library/react";

import { describe, test, expect } from "vitest";
import { TiposSelect } from ".";
import { QueryClient, QueryClientProvider } from "react-query";

describe("<TiposSelect />", () => {
  const queryClient = new QueryClient();

  test("should to render in the screen", () => {
    const { getByText, getByLabelText } = render(
      <QueryClientProvider client={queryClient}>
        <TiposSelect
          name={"nome"}
          register={() => {}}
          opcoes={[
            { id: "A01", descricao: "Item 1" },
            { id: "A02", descricao: "Item 2" },
          ]}
        />
      </QueryClientProvider>
    );

    const option = getByText("Selecione um tipo");
    expect(option).toBeInTheDocument();

    const select = getByLabelText("tipos");
    expect(select).toBeInTheDocument();
  });

  test("Should able to select one option", () => {
    const { getByDisplayValue, getByLabelText } = render(
      <QueryClientProvider client={queryClient}>
        <TiposSelect
          name={"nome"}
          register={() => {}}
          opcoes={[
            { id: "A01", descricao: "Item 1 Selecionado" },
            { id: "A02", descricao: "Item 2 Selecionado" },
          ]}
        />
      </QueryClientProvider>
    );

    const select = getByLabelText("tipos");
    expect(select).toBeInTheDocument();

    fireEvent.change(select, {
      target: { value: "A02" },
    });

    expect(getByDisplayValue("Item 2 Selecionado")).toBeInTheDocument();
  });
});
