import { Request, Response } from "express";
import { ITodosControllers } from "../../interfaces/ITodosControllers";
import subelementosService from "../subelementos.service/subelementos.service";

interface ISubelementoController extends ITodosControllers {
  listarPorElementosPorPagina(req: Request, res: Response);
}

class SubelementoController implements ISubelementoController {
  async listarPorElementosPorPagina(req: Request, res: Response) {
    try {
      const { numero_pagina, quantidade_items_pagina, elementosId } = req.query;
      const pagina = await subelementosService.listarPorElementosPorPagina(
        numero_pagina,
        quantidade_items_pagina,
        elementosId
      );
      res.status(200).json(pagina);
    } catch (error) {
      res.status(400).json(error.message);
    }
  }
  async listarTodosPorPagina(req: Request, res: Response) {
    try {
      const { numero_pagina, quantidade_items_pagina } = req.query;
      const pagina = await subelementosService.listarTodosPorPagina(
        numero_pagina,
        quantidade_items_pagina
      );
      res.status(200).json(pagina);
    } catch (error) {
      res.status(400).json(error.message);
    }
  }

  async listarTodos(req: Request, res: Response) {
    try {
      const todos = await subelementosService.listarTodos();
      res.status(200).json(todos);
    } catch (error) {
      res.status(400).json(error.message);
    }
  }

  async listaPorId(req: Request, res: Response) {
    try {
      const { id } = req.params;
      const subelemento = await subelementosService.buscarPorId(id);
      res.status(200).json(subelemento);
    } catch (error) {
      res.status(400).json(error.message);
    }
  }

  async deletarPorId(req: Request, res: Response) {
    const { id } = req.params;
    try {
      const subelemento = await subelementosService.deletarUmPorId(id);
      res.status(200).json(subelemento);
    } catch (error) {
      res.status(400).json(error.message);
    }
  }

  async criar(req: Request, res: Response) {
    try {
      const subelemento = await subelementosService.criar(req.body);
      res.status(200).json(subelemento);
    } catch (error) {
      res.status(400).json(error.message);
    }
  }

  async atualizarPorId(req: Request, res: Response) {
    const { id } = req.params;
    try {
      const subelemento = await subelementosService.atualizarUmPorId(
        id,
        req.body
      );
      res.status(200).json(subelemento);
    } catch (error) {
      res.status(400).json(error.message);
    }
  }
}

export default new SubelementoController();
