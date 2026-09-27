import mongoose, { Schema, Document } from 'mongoose';
import type { IProjeto } from '../../../domain/entities/IProjeto';

export interface ProjetoDocument extends Omit<IProjeto, 'id'>, Document {}

const TarefaSchema: Schema = new Schema({
    titulo: { type: String, required: true },
    concluida: { type: Boolean, default: false },
});

const ProjetoSchema: Schema = new Schema({
    nome: { type: String, required: true },
    descricao: { type: String, required: true },
    dataEntrega: { type: String, required: true },
    tarefas: [TarefaSchema]
}, { 
  timestamps: true 
});

export const ProjetoModel = mongoose.model<ProjetoDocument>('Projeto', ProjetoSchema);