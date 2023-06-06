import "@testing-library/jest-dom";
import { render } from "@testing-library/react";

import { describe, test, expect } from "vitest";
import { QueryClient, QueryClientProvider } from "react-query";

import { VisualizarItem } from ".";

describe("<VisualizarItem />", () => {
  const queryClient = new QueryClient();

  test("should to render in the screen", () => {
    const { getByText } = render(
      <QueryClientProvider client={queryClient}>
        <VisualizarItem />
      </QueryClientProvider>
    );

    const title = getByText("Visualizar Item");
    expect(title).toBeInTheDocument();
  });
});
