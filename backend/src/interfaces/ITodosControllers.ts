export interface ITodosControllers {
  listarTodosPorPaginaUsuariosId(req: Request, res: Response);
  listarTodos(req: Request, res: Response);
  listaPorId(req: Request, res: Response);
  deletarPorId(req: Request, res: Response);
  criar(req: Request, res: Response);
  atualizarPorId(req: Request, res: Response);
}
