import "@testing-library/jest-dom";
import { fireEvent, render } from "@testing-library/react";

import { describe, test, expect } from "vitest";
import { CamposFormulario } from ".";
import { useForm } from "react-hook-form";
import { ItemFluxoCaixa } from "../../../../../types/ItemFluxoCaixa";
import { QueryClient, QueryClientProvider } from "react-query";

describe("<CamposFormularioAdicionarEditar />", () => {
  const queryClient = new QueryClient();

  test("should when happen event of submit check if create one object with all properties", () => {
    const Formulario = () => {
      const {
        register,
        handleSubmit,
        control,
        formState: { errors },
      } = useForm({});

      return (
        <CamposFormulario
          onSubmit={handleSubmit((programacao: ItemFluxoCaixa) => {
            expect(programacao).toHaveProperty("descricao");
            expect(programacao).toHaveProperty("elementosId");
            expect(programacao).toHaveProperty("subelementosId");
            expect(programacao).toHaveProperty("tiposId");
            expect(programacao).toHaveProperty("subtiposId");
            expect(programacao).toHaveProperty("locaisId");
            expect(programacao).toHaveProperty("valor");
            expect(programacao).toHaveProperty("tipos_despesasId");
            expect(programacao).toHaveProperty("entradaSaida");
            expect(programacao).toHaveProperty("ativo");
          })}
          register={register}
          control={control}
          errors={errors}
        />
      );
    };

    const { getByRole } = render(
      <QueryClientProvider client={queryClient}>
        <Formulario />
      </QueryClientProvider>
    );

    const switchButton = getByRole("form");
    fireEvent.submit(switchButton);
  });
});
