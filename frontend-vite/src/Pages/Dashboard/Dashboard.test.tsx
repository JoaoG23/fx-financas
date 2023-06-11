import "@testing-library/jest-dom";
import { render } from "@testing-library/react";

import { describe, test, expect } from "vitest";
import { QueryClient, QueryClientProvider } from "react-query";

import { Dashboard } from ".";

describe("<Dashboard />", () => {
  const queryClient = new QueryClient();

  test("should to render in the screen", () => {
    const { getByText } = render(
      <QueryClientProvider client={queryClient}>
        <Dashboard />
      </QueryClientProvider>
    );

    const totalReceitas = getByText("Total receitas mês");
    expect(totalReceitas).toBeInTheDocument();
  });
  test("should to render in the screen", () => {
    const { getByText } = render(
      <QueryClientProvider client={queryClient}>
        <Dashboard />
      </QueryClientProvider>
    );

    const totalDespesas = getByText("Total despesas mês");
    expect(totalDespesas).toBeInTheDocument();
  });
  test("should to render in the screen", () => {
    const { getByText } = render(
      <QueryClientProvider client={queryClient}>
        <Dashboard />
      </QueryClientProvider>
    );

    const saldoAtual = getByText("Saldo atual");
    expect(saldoAtual).toBeInTheDocument();
  });
});
