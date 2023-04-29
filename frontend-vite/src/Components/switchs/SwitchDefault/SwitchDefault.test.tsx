import "@testing-library/jest-dom";
import { render } from "@testing-library/react";

import { describe, test, expect } from "vitest";
import { SwitchDefault } from ".";
import { useForm } from "react-hook-form";

describe("<SwitchDefault />", () => {
  test("should to render in the screem", () => {
    const { getByRole } = render(
      <SwitchDefault name={"nome"} register={() => {}} />
    );
    const switchButton = getByRole("switch-default");
    expect(switchButton).toBeInTheDocument();
  });

  test("should able get by text inside of (descricaoDesligado to be equal Saida)", () => {
    const { getByText } = render(
      <SwitchDefault
        name={"descricaoDeTeste"}
        register={() => {}}
        descricaoDesligado="Saida"
      />
    );
    const descricaoDesligado = getByText("Saida");

    expect(descricaoDesligado).toBeInTheDocument();
  });

  test("should able get by text inside of (descricaoLigado equal Entrada)", () => {
    const { getByText } = render(
      <SwitchDefault
        name={"descricaoDeTeste"}
        register={() => {}}
        descricaoLigado="Entrada"
      />
    );
    const descricaoDesligado = getByText("Entrada");
    expect(descricaoDesligado).toBeInTheDocument();
  });
  //     test("should toggle on click", () => {
  //       const { register } = useForm();
  //     const { getByTestId } = render(
  //       <SwitchDefault name={"nome"} register={register} />
  //     );
  //     const switchButton = getByTestId("switch");

  //     expect(switchButton).toHaveAttribute("aria-checked", "false");

  //     fireEvent.click(switchButton);

  //     expect(switchButton).toHaveAttribute("aria-checked", "true");
  //   });
});
