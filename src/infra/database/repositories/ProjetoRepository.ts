import { ProjetoModel, ProjetoDocument } from "../mogoose/ProjetoSchema";
import type { IProjeto } from "../../../domain/entities/IProjeto";

export class ProjetoRepository {
    async criar(dadosProjeto: IProjeto): Promise<ProjetoDocument> {
        const novoProjeto = new ProjetoModel(dadosProjeto);
        return await novoProjeto.save();
    }

    async buscarTodos(): Promise<ProjetoDocument[]> {
        return await ProjetoModel.find();
    }

    async buscarPorId(id: string): Promise<ProjetoDocument | null> {
        return await ProjetoModel.findById(id);
    }
    
    async atualizar(id: string, dadosAtualizados: Partial<IProjeto>): Promise<ProjetoDocument | null> {
        return await ProjetoModel.findByIdAndUpdate(
            id, 
            dadosAtualizados, 
            { new: true }
        );
    }

    async excluir(id: string): Promise<ProjetoDocument | null> {
        return await ProjetoModel.findByIdAndDelete(id);
    }
}