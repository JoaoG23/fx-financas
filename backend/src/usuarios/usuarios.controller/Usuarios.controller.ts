import { Request, Response } from "express";
import usuarioService from "../usuarios.services/UsuariosServices";

class UsuarioController {
  async listarTodos(req: Request, res: Response) {
    try {
      const todos = await usuarioService.listarTodos();
      res.status(200).json(todos);
    } catch (error) {
      res.status(400).json(error.message);
    }
  }

  async listaPorId(req: Request, res: Response) {
    try {
      const { id } = req.params;
      const usuario = await usuarioService.listaPorId(id);
      res.status(200).json(usuario);
    } catch (error) {
      res.status(400).json(error.message);
    }
  }

  async deletarPorId(req: Request, res: Response) {
    const { id } = req.params;
    try {
      const usuario = await usuarioService.deletarPorId(id);
      res.status(200).json(usuario);
    } catch (error) {
      res.status(400).json(error.message);
    }
  }

  async buscarImagemPerfilPorId(req: Request, res: Response) {
    const { id } = req.params;
    try {
      res.sendFile(`uploads/usuarios/${id}`, { root: "." });
    } catch (error) {
      res.status(400).json(error.message);
    }
  }

  async uploadImagemPerfilPorId(req: Request, res: Response) {
    try {
      const { id } = req.params;
      const fileName = req.file?.filename;

      const imagemUsuario = {
        caminho_imagem: fileName,
      };
      await usuarioService.atualizarImageUsuarioPorId(id, imagemUsuario);
      res.json(`Imagem de perfil salva com sucesso com ${fileName}`);
    } catch (error) {
      res.status(400).json(error.message);
    }
  }

  async atualizarPorId(req: Request, res: Response) {
    const { id } = req.params;
    try {
      const usuario = await usuarioService.atualizarPorId(id, req.body);
      res.status(200).json(usuario);
    } catch (error) {
      res.status(400).json(error.message);
    }
  }
}

export default new UsuarioController();
