import { describe, test, expect, afterEach } from "vitest";
import { UsuariosRepository } from "./usuarios.repository";
import { usuarioCriado, usuarioEditado } from "../tests/seeds/usuarios";
import { limparTabelaUsuarios } from "../tests/utils/limparTabelaUsuarios";

describe("usuarios.repository", () => {
  const repository = new UsuariosRepository();

  describe("Metodos", () => {
    describe("save", () => {
      afterEach(async () => {
        await limparTabelaUsuarios();
      });

      describe("Quando for exercultado metodo salvar com os dados do usuario", () => {
        test("Deveria se capaz de persitir dados do novo usuario no banco e retorná-lo na tela", async () => {
          const retorno = await repository.save(usuarioCriado);

          const { id, createdAt, updateAt, ...usuarioSalvo } = retorno;

          expect(usuarioSalvo).toStrictEqual(usuarioCriado);
        });
      });
    });

    describe("update", () => {
      afterEach(async () => {
        await limparTabelaUsuarios();
      });

      describe("Quando criar um usuario", () => {
        test("Deveria ser capaz de editar com (usuarioEditado)", async () => {
          const criado = await repository.save(usuarioCriado);

          const idUsuario = criado.id;

          const editado = await repository.update(idUsuario, usuarioEditado!);

          const { id, createdAt, updateAt, ...restanteDadosUsuarioEditado } =
            editado;

          expect(restanteDadosUsuarioEditado).toStrictEqual(usuarioEditado);
        });
      });
    });
  });
});
