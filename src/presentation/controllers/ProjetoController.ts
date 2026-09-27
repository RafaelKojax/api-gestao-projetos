import { Request, Response } from "express";
import { ProjetoRepository } from "../../infra/database/repositories/ProjetoRepository";

const repository = new ProjetoRepository();

export class ProjetoController {
    async criar(req: Request, res: Response) {
        try {
          const projeto = await repository.criar(req.body);
          return res.status(201).json(projeto);
        } catch (error) {
          return res.status(400).json({ erro: 'Erro ao criar projeto', detalhes: error });
        }
    }

    async buscarTodos(req: Request, res: Response) {
        try {
          const projetos = await repository.buscarTodos();
          return res.status(200).json(projetos);
        } catch (error) {
          return res.status(500).json({ erro: 'Erro ao buscar projetos' });
        }
    }

    async buscarPorId(req: Request, res: Response) {
        try {
          const projeto = await repository.buscarPorId(req.params.id as string);
          if (!projeto) return res.status(404).json({ erro: 'Projeto não encontrado' });              return res.status(200).json(projeto);
        } catch (error) {
          return res.status(500).json({ erro: 'Erro ao buscar projeto' });
        }
    }
    async atualizar(req: Request, res: Response) {
        try {
          const projeto = await repository.atualizar(req.params.id as string, req.body);
          if (!projeto) return res.status(404).json({ erro: 'Projeto não encontrado' });
          return res.status(200).json(projeto);
        } catch (error) {
          return res.status(400).json({ erro: 'Erro ao atualizar projeto' });
        }
    }

    async excluir(req: Request, res: Response) {
        try {
          const projeto = await repository.excluir(req.params.id as string);
          if (!projeto) return res.status(404).json({ erro: 'Projeto não encontrado' });
          return res.status(204).send();
        } catch (error) {
          return res.status(500).json({ erro: 'Erro ao excluir projeto' });
        }
    }
}
