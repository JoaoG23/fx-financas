import "@testing-library/jest-dom";
import { fireEvent, render } from "@testing-library/react";

import { describe, test, expect } from "vitest";
import { ElementoSelect } from ".";
import { QueryClient, QueryClientProvider } from "react-query";

describe("<ElementoSelect />", () => {
  const queryClient = new QueryClient();

  test("should to render in the screen", () => {
    const { getByText, getByLabelText } = render(
      <QueryClientProvider client={queryClient}>
        <ElementoSelect
          name={"nome"}
          register={() => {}}
          opcoes={[
            { id: "A01", descricao: "Item 1" },
            { id: "A02", descricao: "Item 2" },
          ]}
        />
      </QueryClientProvider>
    );

    const option = getByText("Selecione um elemento");
    expect(option).toBeInTheDocument();

    const select = getByLabelText("elementos");
    expect(select).toBeInTheDocument();
  });

  test("Should able select one when selected one option", () => {
    const { getByDisplayValue, getByLabelText } = render(
      <QueryClientProvider client={queryClient}>
        <ElementoSelect
          name={"nome"}
          register={() => {}}
          opcoes={[
            { id: "A01", descricao: "Item 1" },
            { id: "A02", descricao: "Item 2" },
          ]}
        />
      </QueryClientProvider>
    );
    const select = getByLabelText("elementos");
    expect(select).toBeInTheDocument();

    fireEvent.change(select, {
      target: { value: "A02" },
    });

    expect(getByDisplayValue("Item 2")).toBeInTheDocument();
  });
});
